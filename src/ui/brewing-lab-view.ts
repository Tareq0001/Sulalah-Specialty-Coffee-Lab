import { BREWING_METHODS, BrewingMethod } from '../data/brewing-recipes';
import { calculateBrewPlan, CalculatedBrewPlan, RoastLevel } from '../engine/brewing-calculator';
import { baristaAudio } from './audio';
import { getLanguage, t } from './i18n';

class BrewingLabComponent {
  private selectedMethodId: string = 'v60';
  private doseGrams: number = 18;
  private selectedRatio: number = 15;
  private selectedRoast: RoastLevel = 'light';

  // Timer State
  private isTimerRunning: boolean = false;
  private timerInterval: number | null = null;
  private elapsedSeconds: number = 0;
  private currentStageIndex: number = 0;

  constructor() {
    // init defaults for selected method
    const m = this.getCurrentMethod();
    this.doseGrams = m.defaultDose;
    this.selectedRatio = m.defaultRatio;
  }

  public setBeanQuickBrew(methodId: string, dose: number, roast: RoastLevel): void {
    if (BREWING_METHODS.some(m => m.id === methodId)) {
      this.selectedMethodId = methodId;
    }
    const m = this.getCurrentMethod();
    this.doseGrams = Math.min(m.doseRange[1], Math.max(m.doseRange[0], dose));
    this.selectedRatio = m.defaultRatio;
    this.selectedRoast = roast;
    this.resetTimer();
    this.reRender();
  }

  private getCurrentMethod(): BrewingMethod {
    return BREWING_METHODS.find(m => m.id === this.selectedMethodId) || BREWING_METHODS[0];
  }

  private getPlan(): CalculatedBrewPlan {
    const m = this.getCurrentMethod();
    return calculateBrewPlan(m, this.doseGrams, this.selectedRatio, this.selectedRoast);
  }

  public render(): string {
    const lang = getLanguage();
    const isAr = lang === 'ar';
    const method = this.getCurrentMethod();
    const plan = this.getPlan();

    const currentStage = plan.stages[this.currentStageIndex] || plan.stages[0];
    const totalDuration = method.targetTimeSec;
    const progressPct = Math.min(100, Math.round((this.elapsedSeconds / totalDuration) * 100));

    // Liquid fill calculation for animated carafe (0% to 80% max liquid height)
    const liquidFillPct = Math.min(85, Math.max(5, (this.elapsedSeconds / totalDuration) * 85));

    return `
      <section id="brewing-lab" class="lab-section">
        <div class="section-header">
          <div class="header-pre">${isAr ? 'المعمل الحرفي التفاعلي' : 'Artisan Interactive Lab'}</div>
          <h2 class="section-title">${t('navLab')}</h2>
          <p class="section-desc">
            ${isAr 
              ? 'معايرة دقيقة لجرام البُن ونسبة الاستخلاص، مع مؤقت تدفق حي وجدول صبات ومحاكاة فورية لتنقيط القهوة.' 
              : 'Precision dose & ratio calibration with real-time pulse pour schedule and animated carafe extraction.'}
          </p>
        </div>

        <!-- Method Navigation Bar -->
        <div class="method-tabs-grid" role="tablist">
          ${BREWING_METHODS.map(m => {
            const active = m.id === this.selectedMethodId ? 'active' : '';
            return `
              <button type="button" class="method-tab-btn ${active}" data-method-id="${m.id}">
                <span class="tab-icon">${m.iconSvg}</span>
                <span class="tab-name">${isAr ? m.nameAr : m.nameEn}</span>
                <span class="tab-category">${m.category}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div class="lab-layout-grid">
          <!-- Control Panel Column -->
          <div class="lab-controls-card">
            <div class="card-inner-header">
              <h3 class="card-title">${t('doseWaterRatio')}</h3>
              <span class="badge badge-accent">${isAr ? method.nameAr : method.nameEn}</span>
            </div>

            <!-- Coffee Dose Input & Slider -->
            <div class="input-control-group">
              <div class="label-row">
                <label for="dose-range">${t('coffeeDose')}</label>
                <div class="value-display">
                  <span id="dose-val-display" class="highlight-number">${this.doseGrams}</span>
                  <span class="unit-text">${t('grams')}</span>
                </div>
              </div>
              <input type="range" id="dose-range" 
                min="${method.doseRange[0]}" 
                max="${method.doseRange[1]}" 
                step="0.5" 
                value="${this.doseGrams}" 
                class="lab-range-slider" />
              <div class="range-presets-row">
                ${[15, 18, 20, 24, 30].filter(d => d >= method.doseRange[0] && d <= method.doseRange[1]).map(d => `
                  <button type="button" class="preset-pill ${this.doseGrams === d ? 'active' : ''}" data-set-dose="${d}">${d}g</button>
                `).join('')}
              </div>
            </div>

            <!-- Extraction Ratio -->
            <div class="input-control-group">
              <div class="label-row">
                <label for="ratio-range">${t('waterRatio')}</label>
                <div class="value-display">
                  <span class="highlight-number">1:${this.selectedRatio}</span>
                </div>
              </div>
              <input type="range" id="ratio-range" 
                min="${method.ratioRange[0]}" 
                max="${method.ratioRange[1]}" 
                step="0.5" 
                value="${this.selectedRatio}" 
                class="lab-range-slider" />
              <div class="range-presets-row">
                ${method.ratioOptions.map(r => `
                  <button type="button" class="preset-pill ${this.selectedRatio === r ? 'active' : ''}" data-set-ratio="${r}">1:${r}</button>
                `).join('')}
              </div>
            </div>

            <!-- Roast Profile Selector -->
            <div class="input-control-group">
              <div class="label-row">
                <label>${t('roastLevel')}</label>
                <span class="temp-badge">${plan.recommendedTempC}°C</span>
              </div>
              <div class="roast-pill-group">
                ${([
                  { id: 'light', ar: 'خفيف (Light)', en: 'Light', color: '#c26d4a' },
                  { id: 'medium-light', ar: 'متوسط خفيف', en: 'Med-Light', color: '#a0522d' },
                  { id: 'medium', ar: 'متوسط (Medium)', en: 'Medium', color: '#6f3b1e' },
                  { id: 'dark', ar: 'داكن (Dark)', en: 'Dark', color: '#381e0f' }
                ] as const).map(r => `
                  <button type="button" class="roast-select-btn ${this.selectedRoast === r.id ? 'active' : ''}" data-roast="${r.id}">
                    <span class="roast-dot" style="background-color: ${r.color}"></span>
                    <span>${isAr ? r.ar : r.en}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Calculated Summary Cards -->
            <div class="calc-metrics-row">
              <div class="calc-metric-box">
                <span class="calc-label">${t('waterYield')}</span>
                <span class="calc-val">${plan.totalWaterGrams} <small>${t('grams')}</small></span>
              </div>
              <div class="calc-metric-box">
                <span class="calc-label">${isAr ? 'عدد الأكواب التقديري' : 'Approx Cups'}</span>
                <span class="calc-val">${plan.cupCount} <small>${isAr ? 'كوب' : 'cups'}</small></span>
              </div>
              <div class="calc-metric-box">
                <span class="calc-label">${isAr ? 'معدل الاستخلاص (EY)' : 'Target Yield'}</span>
                <span class="calc-val text-amber">${plan.estimatedExtractionYieldPct}%</span>
              </div>
            </div>

            <!-- Grinder Settings Guide -->
            <div class="grinders-guide-box">
              <div class="grinders-header">
                <svg class="box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <span>${t('grinderMatrix')} (${plan.grindMicronRange[0]} - ${plan.grindMicronRange[1]} µm)</span>
              </div>
              <p class="grind-desc">${isAr ? method.grindDescriptionAr : method.grindDescriptionEn}</p>
              <div class="grinder-items-grid">
                ${Object.entries(plan.grinderSettings).map(([brand, setting]) => `
                  <div class="grinder-item">
                    <span class="grinder-brand">${brand}</span>
                    <span class="grinder-val">${setting}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Interactive Barista Timer & Animated Carafe Column -->
          <div class="lab-timer-card">
            <div class="timer-top-bar">
              <div class="timer-stage-title">
                <span class="stage-tag">${isAr ? 'المرحلة الحالية' : 'Current Stage'}</span>
                <h4 id="active-stage-name">${isAr ? currentStage.nameAr : currentStage.nameEn}</h4>
              </div>
              <button type="button" id="audio-toggle-btn" class="icon-toggle-btn" title="${t('soundOn')}">
                <svg id="audio-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  ${baristaAudio.getIsMuted() 
                    ? '<line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>'
                    : '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'
                  }
                </svg>
              </button>
            </div>

            <!-- Animated SVG Coffee Carafe & Dripper Simulation -->
            <div class="carafe-stage-wrapper">
              <svg class="brewing-svg-canvas" viewBox="0 0 320 380" aria-label="Animated Carafe">
                <defs>
                  <!-- Gradient for rich specialty coffee liquid -->
                  <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#8a4422" stop-opacity="0.95" />
                    <stop offset="60%" stop-color="#4d2210" stop-opacity="0.98" />
                    <stop offset="100%" stop-color="#210f07" stop-opacity="1.0" />
                  </linearGradient>
                  <!-- Filter paper texture -->
                  <linearGradient id="filterPaperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#fdfbf7" />
                    <stop offset="50%" stop-color="#f5ede3" />
                    <stop offset="100%" stop-color="#e8dccf" />
                  </linearGradient>
                  <!-- Crema surface reflection -->
                  <linearGradient id="cremaReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#d97706" stop-opacity="0.4" />
                    <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.8" />
                    <stop offset="100%" stop-color="#d97706" stop-opacity="0.4" />
                  </linearGradient>
                  <clipPath id="carafeClip">
                    <path d="M 105 170 L 80 325 Q 80 345 105 345 L 215 345 Q 240 345 240 325 L 215 170 Z" />
                  </clipPath>
                </defs>

                <!-- Water Kettle Stream Line (Animated during timer) -->
                <path id="water-stream-path" class="water-stream ${this.isTimerRunning ? 'active' : ''}" 
                  d="M 160 30 Q 160 55 160 90" stroke="rgba(186, 230, 253, 0.85)" stroke-width="3" stroke-linecap="round" fill="none" />

                <!-- Dripper Cone (V60 / Chemex / Filter) -->
                <path d="M 90 85 L 230 85 L 180 160 L 140 160 Z" fill="url(#filterPaperGrad)" stroke="#c26d4a" stroke-width="2.5" />
                <!-- Coffee grounds inside cone -->
                <path d="M 105 100 Q 160 115 215 100 L 175 155 L 145 155 Z" fill="#3b2012" opacity="0.9" />

                <!-- Dripping droplets from bottom of cone -->
                <g id="dripping-group" class="drips-animation ${this.isTimerRunning ? 'dripping' : ''}">
                  <circle cx="160" cy="170" r="3.5" fill="#4d2210" class="drip-drop drip-1" />
                  <circle cx="160" cy="195" r="3" fill="#4d2210" class="drip-drop drip-2" />
                  <circle cx="160" cy="225" r="2.5" fill="#4d2210" class="drip-drop drip-3" />
                </g>

                <!-- Glass Carafe Decanter Body -->
                <!-- Spout and Handle -->
                <path d="M 105 170 Q 75 165 72 178 Q 78 190 98 185" fill="none" stroke="rgba(194, 109, 74, 0.45)" stroke-width="3" stroke-linecap="round" />
                <path d="M 225 200 Q 268 230 255 285 Q 248 310 220 315" fill="none" stroke="rgba(194, 109, 74, 0.55)" stroke-width="4" stroke-linecap="round" />

                <!-- Decanter Glass outline -->
                <path d="M 105 170 L 80 325 Q 80 345 105 345 L 215 345 Q 240 345 240 325 L 215 170 Z" 
                  fill="rgba(255, 255, 255, 0.08)" stroke="rgba(194, 109, 74, 0.6)" stroke-width="3" />

                <!-- Dynamic Liquid Body inside Carafe -->
                <g clip-path="url(#carafeClip)">
                  <!-- Liquid Rectangle with dynamic height -->
                  <rect id="carafe-liquid-rect" x="60" 
                    y="${345 - (liquidFillPct * 2)}" 
                    width="200" 
                    height="${liquidFillPct * 2.2}" 
                    fill="url(#coffeeGradient)" />
                  <!-- Crema surface line -->
                  <ellipse id="crema-surface" cx="160" 
                    cy="${345 - (liquidFillPct * 2)}" 
                    rx="62" ry="7" 
                    fill="url(#cremaReflect)" />
                </g>

                <!-- Glass Measurement Markings on Carafe Wall -->
                <line x1="88" y1="285" x2="98" y2="285" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />
                <text x="103" y="288" fill="rgba(255,255,255,0.6)" font-size="9" font-family="Inter, sans-serif">150 ml</text>
                
                <line x1="84" y1="245" x2="94" y2="245" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />
                <text x="100" y="248" fill="rgba(255,255,255,0.6)" font-size="9" font-family="Inter, sans-serif">300 ml</text>

                <line x1="82" y1="205" x2="92" y2="205" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />
                <text x="98" y="208" fill="rgba(255,255,255,0.6)" font-size="9" font-family="Inter, sans-serif">450 ml</text>
              </svg>

              <!-- Central Digital Time Display -->
              <div class="digital-timer-display">
                <div class="time-main" id="timer-text">${this.formatTime(this.elapsedSeconds)}</div>
                <div class="time-target">${isAr ? 'المدة المستهدفة:' : 'Target Time:'} ${this.formatTime(totalDuration)}</div>
              </div>
            </div>

            <!-- Stage Progress Bar -->
            <div class="timer-progress-track">
              <div id="timer-progress-fill" class="timer-progress-fill" style="width: ${progressPct}%"></div>
            </div>

            <!-- Live Stage Technique Guidance -->
            <div class="stage-instructions-box">
              <div class="target-water-row">
                <span class="lbl">${isAr ? 'الماء المطلوب لهذه المرحلة:' : 'Target Stage Water:'}</span>
                <span id="stage-water-target" class="val-pill">${currentStage.stageWaterGrams}g (${isAr ? 'الإجمالي' : 'Total'}: ${currentStage.cumulativeWaterGrams}g)</span>
              </div>
              <p id="stage-description" class="stage-desc-text">${isAr ? currentStage.descriptionAr : currentStage.descriptionEn}</p>
              <div class="tip-row">
                <svg class="tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span id="stage-tip" class="stage-tip-text">${isAr ? currentStage.techniqueTipAr : currentStage.techniqueTipEn}</span>
              </div>
            </div>

            <!-- Timer Action Buttons -->
            <div class="timer-actions-row">
              <button type="button" id="timer-start-btn" class="btn btn-primary btn-large">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  ${this.isTimerRunning 
                    ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>' 
                    : '<polygon points="5 3 19 12 5 21 5 3"/>'
                  }
                </svg>
                <span id="start-btn-label">${this.isTimerRunning ? t('pauseTimer') : t('startTimer')}</span>
              </button>
              <button type="button" id="timer-reset-btn" class="btn btn-outline" title="${t('resetTimer')}">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                <span>${t('resetTimer')}</span>
              </button>
            </div>

            <!-- Detailed Pulse Schedule Timeline -->
            <div class="timeline-stages-list">
              <h5 class="timeline-heading">${t('brewSchedule')}</h5>
              <div class="stages-scroll-row">
                ${plan.stages.map((st, idx) => {
                  const isCurrent = idx === this.currentStageIndex;
                  const isPast = this.elapsedSeconds >= st.endSec;
                  return `
                    <div class="stage-step-card ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''}">
                      <div class="step-num">${idx + 1}</div>
                      <div class="step-meta">
                        <span class="step-title">${isAr ? st.nameAr : st.nameEn}</span>
                        <span class="step-time">${this.formatTime(st.startSec)} - ${this.formatTime(st.endSec)}</span>
                      </div>
                      <div class="step-water">${st.cumulativeWaterGrams}g</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Barista Master Notes -->
            <div class="barista-notes-callout">
              <span class="callout-badge">${isAr ? 'توجيه الخبير' : 'Barista Note'}</span>
              <p>${isAr ? method.baristaNotesAr : method.baristaNotesEn}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private formatTime(sec: number): string {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  public bindEvents(container: HTMLElement): void {
    // Method switcher
    container.querySelectorAll('.method-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-method-id');
        if (id && id !== this.selectedMethodId) {
          this.selectedMethodId = id;
          const m = this.getCurrentMethod();
          this.doseGrams = m.defaultDose;
          this.selectedRatio = m.defaultRatio;
          this.resetTimer();
          this.reRender();
        }
      });
    });

    // Dose Slider
    const doseRange = container.querySelector('#dose-range') as HTMLInputElement;
    if (doseRange) {
      doseRange.addEventListener('input', (e) => {
        this.doseGrams = parseFloat((e.target as HTMLInputElement).value);
        this.updatePlanState();
      });
    }

    // Dose preset pills
    container.querySelectorAll('[data-set-dose]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const d = parseFloat((e.currentTarget as HTMLElement).getAttribute('data-set-dose') || '18');
        this.doseGrams = d;
        this.updatePlanState();
      });
    });

    // Ratio Slider
    const ratioRange = container.querySelector('#ratio-range') as HTMLInputElement;
    if (ratioRange) {
      ratioRange.addEventListener('input', (e) => {
        this.selectedRatio = parseFloat((e.target as HTMLInputElement).value);
        this.updatePlanState();
      });
    }

    // Ratio preset pills
    container.querySelectorAll('[data-set-ratio]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const r = parseFloat((e.currentTarget as HTMLElement).getAttribute('data-set-ratio') || '15');
        this.selectedRatio = r;
        this.updatePlanState();
      });
    });

    // Roast level picker
    container.querySelectorAll('[data-roast]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const r = (e.currentTarget as HTMLElement).getAttribute('data-roast') as RoastLevel;
        if (r) {
          this.selectedRoast = r;
          this.updatePlanState();
        }
      });
    });

    // Timer Start / Pause
    const startBtn = container.querySelector('#timer-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        this.toggleTimer();
      });
    }

    // Timer Reset
    const resetBtn = container.querySelector('#timer-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.resetTimer();
        this.reRender();
      });
    }

    // Audio Mute Toggle
    const audioBtn = container.querySelector('#audio-toggle-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        baristaAudio.toggleMute();
        this.reRender();
      });
    }
  }

  private toggleTimer(): void {
    if (this.isTimerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
    this.updateTimerControlsUI();
  }

  private startTimer(): void {
    this.isTimerRunning = true;
    baristaAudio.startPouringStream();

    if (this.elapsedSeconds === 0) {
      baristaAudio.playStageChime();
    }

    this.timerInterval = window.setInterval(() => {
      this.elapsedSeconds++;
      this.onTimerTick();
    }, 1000);
  }

  private pauseTimer(): void {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    baristaAudio.stopPouringStream();
  }

  private resetTimer(): void {
    this.pauseTimer();
    this.elapsedSeconds = 0;
    this.currentStageIndex = 0;
  }

  private onTimerTick(): void {
    const method = this.getCurrentMethod();
    const plan = this.getPlan();
    const totalDuration = method.targetTimeSec;

    // Check stage transitions
    let nextStageIdx = 0;
    for (let i = 0; i < plan.stages.length; i++) {
      if (this.elapsedSeconds >= plan.stages[i].startSec && this.elapsedSeconds < plan.stages[i].endSec) {
        nextStageIdx = i;
        break;
      }
      if (i === plan.stages.length - 1 && this.elapsedSeconds >= plan.stages[i].startSec) {
        nextStageIdx = i;
      }
    }

    // If stage changed, play procedural chime
    if (nextStageIdx !== this.currentStageIndex) {
      this.currentStageIndex = nextStageIdx;
      baristaAudio.playStageChime();
    } else {
      // Gentle occasional drip click
      if (this.elapsedSeconds % 3 === 0) {
        baristaAudio.playDrip();
      }
    }

    // Check completion
    if (this.elapsedSeconds >= totalDuration) {
      this.pauseTimer();
      baristaAudio.playBrewCompleteChord();
      this.updateTimerControlsUI();
    }

    this.updateTimerLiveUI();
  }

  private updateTimerLiveUI(): void {
    const timerText = document.querySelector('#timer-text');
    if (timerText) {
      timerText.textContent = this.formatTime(this.elapsedSeconds);
    }

    const method = this.getCurrentMethod();
    const plan = this.getPlan();
    const totalDuration = method.targetTimeSec;
    const progressPct = Math.min(100, Math.round((this.elapsedSeconds / totalDuration) * 100));

    const progressFill = document.querySelector('#timer-progress-fill') as HTMLElement;
    if (progressFill) {
      progressFill.style.width = `${progressPct}%`;
    }

    // Update animated SVG carafe fill
    const liquidFillPct = Math.min(85, Math.max(5, (this.elapsedSeconds / totalDuration) * 85));
    const carafeLiquid = document.querySelector('#carafe-liquid-rect') as SVGRectElement;
    const cremaSurface = document.querySelector('#crema-surface') as SVGEllipseElement;

    if (carafeLiquid && cremaSurface) {
      const newY = 345 - (liquidFillPct * 2);
      const newH = liquidFillPct * 2.2;
      carafeLiquid.setAttribute('y', String(newY));
      carafeLiquid.setAttribute('height', String(newH));
      cremaSurface.setAttribute('cy', String(newY));
    }

    // Update active stage indicators
    const currentStage = plan.stages[this.currentStageIndex] || plan.stages[0];
    const isAr = getLanguage() === 'ar';

    const stageNameEl = document.querySelector('#active-stage-name');
    if (stageNameEl) stageNameEl.textContent = isAr ? currentStage.nameAr : currentStage.nameEn;

    const stageWaterTargetEl = document.querySelector('#stage-water-target');
    if (stageWaterTargetEl) {
      stageWaterTargetEl.textContent = `${currentStage.stageWaterGrams}g (${isAr ? 'الإجمالي' : 'Total'}: ${currentStage.cumulativeWaterGrams}g)`;
    }

    const stageDescEl = document.querySelector('#stage-description');
    if (stageDescEl) stageDescEl.textContent = isAr ? currentStage.descriptionAr : currentStage.descriptionEn;

    const stageTipEl = document.querySelector('#stage-tip');
    if (stageTipEl) stageTipEl.textContent = isAr ? currentStage.techniqueTipAr : currentStage.techniqueTipEn;

    // Water stream animation
    const waterStream = document.querySelector('#water-stream-path');
    if (waterStream) {
      if (this.isTimerRunning) waterStream.classList.add('active');
      else waterStream.classList.remove('active');
    }

    const dripsGroup = document.querySelector('#dripping-group');
    if (dripsGroup) {
      if (this.isTimerRunning) dripsGroup.classList.add('dripping');
      else dripsGroup.classList.remove('dripping');
    }
  }

  private updateTimerControlsUI(): void {
    const startBtnLabel = document.querySelector('#start-btn-label');
    if (startBtnLabel) {
      startBtnLabel.textContent = this.isTimerRunning ? t('pauseTimer') : t('startTimer');
    }
    const waterStream = document.querySelector('#water-stream-path');
    if (waterStream) {
      if (this.isTimerRunning) waterStream.classList.add('active');
      else waterStream.classList.remove('active');
    }
    const dripsGroup = document.querySelector('#dripping-group');
    if (dripsGroup) {
      if (this.isTimerRunning) dripsGroup.classList.add('dripping');
      else dripsGroup.classList.remove('dripping');
    }
  }

  private updatePlanState(): void {
    this.reRender();
  }

  private reRender(): void {
    const el = document.querySelector('#brewing-lab-container');
    if (el) {
      el.innerHTML = this.render();
      this.bindEvents(el as HTMLElement);
    }
  }
}

export const brewingLab = new BrewingLabComponent();
