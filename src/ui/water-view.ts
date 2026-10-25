import { 
  WaterProfile, 
  evaluateWaterProfile, 
  WATER_PRESETS, 
  WaterEvaluationResult 
} from '../engine/water-calculator';
import { getLanguage, t } from './i18n';

class WaterViewComponent {
  private currentProfile: WaterProfile = {
    tds: 150,
    gh: 68,
    kh: 40,
    ph: 7.0
  };

  public render(): string {
    const lang = getLanguage();
    const isAr = lang === 'ar';
    const evalResult: WaterEvaluationResult = evaluateWaterProfile(this.currentProfile);

    return `
      <section id="water-chemistry" class="water-chem-section">
        <div class="section-header">
          <div class="header-pre">${isAr ? 'علوم المذيبات والمعادن' : 'Extraction Solvent Chemistry'}</div>
          <h2 class="section-title">${t('waterTitle')}</h2>
          <p class="section-desc">${t('waterSubtitle')}</p>
        </div>

        <!-- Presets Row -->
        <div class="water-presets-bar">
          <span class="preset-label">${isAr ? 'نماذج مياه شائعة:' : 'Quick Benchmark Profiles:'}</span>
          ${Object.entries(WATER_PRESETS).map(([key, item]) => {
            const isMatch = this.currentProfile.tds === item.profile.tds && this.currentProfile.gh === item.profile.gh;
            return `
              <button type="button" class="water-preset-btn ${isMatch ? 'active' : ''}" data-water-preset="${key}">
                ${isAr ? item.nameAr : item.nameEn}
              </button>
            `;
          }).join('')}
        </div>

        <div class="water-layout-grid">
          <!-- Parameter Sliders Card -->
          <div class="water-controls-card">
            <h3 class="card-title">${isAr ? 'معايرة أيونات الماء الحالية' : 'Water Mineral Ion Controls'}</h3>

            <!-- TDS Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="tds-slider">${t('waterTDS')}</label>
                <div class="val-pill">${this.currentProfile.tds} ppm</div>
              </div>
              <input type="range" id="tds-slider" min="0" max="450" step="1" value="${this.currentProfile.tds}" class="water-range" />
              <div class="scale-benchmark">
                <span>0</span>
                <span class="target-marker">${isAr ? 'هدف SCA: 150' : 'SCA: 150'}</span>
                <span>450</span>
              </div>
            </div>

            <!-- GH Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="gh-slider">${t('waterGH')}</label>
                <div class="val-pill">${this.currentProfile.gh} ppm</div>
              </div>
              <input type="range" id="gh-slider" min="0" max="250" step="1" value="${this.currentProfile.gh}" class="water-range" />
              <div class="scale-benchmark">
                <span>0</span>
                <span class="target-marker">${isAr ? 'هدف SCA: 68' : 'SCA: 68'}</span>
                <span>250</span>
              </div>
            </div>

            <!-- KH Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="kh-slider">${t('waterKH')}</label>
                <div class="val-pill">${this.currentProfile.kh} ppm</div>
              </div>
              <input type="range" id="kh-slider" min="0" max="150" step="1" value="${this.currentProfile.kh}" class="water-range" />
              <div class="scale-benchmark">
                <span>0</span>
                <span class="target-marker">${isAr ? 'هدف SCA: 40' : 'SCA: 40'}</span>
                <span>150</span>
              </div>
            </div>

            <!-- pH Slider -->
            <div class="water-slider-group">
              <div class="label-row">
                <label for="ph-slider">${t('waterPH')}</label>
                <div class="val-pill">${this.currentProfile.ph}</div>
              </div>
              <input type="range" id="ph-slider" min="5.5" max="8.5" step="0.1" value="${this.currentProfile.ph}" class="water-range" />
              <div class="scale-benchmark">
                <span>5.5</span>
                <span class="target-marker">${isAr ? 'متعادل: 7.0' : 'Neutral: 7.0'}</span>
                <span>8.5</span>
              </div>
            </div>
          </div>

          <!-- Diagnostic Results Card -->
          <div class="water-results-card">
            <div class="score-display-block">
              <div class="score-circle-wrap">
                <svg viewBox="0 0 120 120" class="score-svg-circle">
                  <circle cx="60" cy="60" r="50" stroke="rgba(194, 109, 74, 0.15)" stroke-width="10" fill="none" />
                  <circle cx="60" cy="60" r="50" 
                    stroke="${evalResult.score >= 80 ? '#10b981' : (evalResult.score >= 50 ? '#f59e0b' : '#ef4444')}" 
                    stroke-width="10" 
                    stroke-dasharray="314.15" 
                    stroke-dashoffset="${314.15 - (314.15 * evalResult.score) / 100}" 
                    stroke-linecap="round" 
                    fill="none" 
                    transform="rotate(-90 60 60)" />
                </svg>
                <div class="score-center-text">
                  <span class="score-num">${evalResult.score}</span>
                  <span class="score-denom">/ 100</span>
                </div>
              </div>

              <div class="score-verdict">
                <span class="verdict-label">${t('waterStatus')}</span>
                <h4 class="verdict-title ${evalResult.badgeClass}">
                  ${isAr ? evalResult.statusAr : evalResult.statusEn}
                </h4>
                <p class="verdict-desc">${isAr ? evalResult.explanationAr : evalResult.explanationEn}</p>
              </div>
            </div>

            <!-- Mineral Composition Breakdown -->
            <div class="mineral-breakdown-box">
              <h5 class="box-sub">${isAr ? 'توزيع الأيونات التقديري' : 'Estimated Ion Distribution'}</h5>
              <div class="mineral-bars-list">
                <div class="m-bar-row">
                  <span class="m-name">${isAr ? 'أيونات الكالسيوم (Ca2+) - القوام' : 'Calcium (Ca2+) - Body'}</span>
                  <div class="m-track">
                    <div class="m-fill" style="width: ${Math.min(100, (evalResult.calciumPct / 100) * 100)}%; background-color: #d97706;"></div>
                  </div>
                  <span class="m-val">${evalResult.calciumPct} ppm</span>
                </div>
                <div class="m-bar-row">
                  <span class="m-name">${isAr ? 'أيونات المغنيسيوم (Mg2+) - الحموضة' : 'Magnesium (Mg2+) - Acidity'}</span>
                  <div class="m-track">
                    <div class="m-fill" style="width: ${Math.min(100, (evalResult.magnesiumPct / 100) * 100)}%; background-color: #c26d4a;"></div>
                  </div>
                  <span class="m-val">${evalResult.magnesiumPct} ppm</span>
                </div>
                <div class="m-bar-row">
                  <span class="m-name">${isAr ? 'نسبة الدرء القلوي (KH / GH)' : 'Buffer Ratio (KH/GH)'}</span>
                  <div class="m-track">
                    <div class="m-fill" style="width: ${Math.min(100, evalResult.bufferRatio * 100)}%; background-color: #5b6e60;"></div>
                  </div>
                  <span class="m-val">${evalResult.bufferRatio}</span>
                </div>
              </div>
            </div>

            <!-- Barista Lab Recommendations -->
            <div class="recommendations-box">
              <h5 class="rec-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rec-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                ${isAr ? 'توصيات خبير كيمياء القهوة' : 'Master Chemist Recommendations'}
              </h5>
              <ul class="rec-list">
                ${(isAr ? evalResult.recommendationsAr : evalResult.recommendationsEn).map(rec => `
                  <li>${rec}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  public bindEvents(container: HTMLElement): void {
    const tdsSlider = container.querySelector('#tds-slider') as HTMLInputElement;
    const ghSlider = container.querySelector('#gh-slider') as HTMLInputElement;
    const khSlider = container.querySelector('#kh-slider') as HTMLInputElement;
    const phSlider = container.querySelector('#ph-slider') as HTMLInputElement;

    const onInput = () => {
      this.currentProfile = {
        tds: parseFloat(tdsSlider.value),
        gh: parseFloat(ghSlider.value),
        kh: parseFloat(khSlider.value),
        ph: parseFloat(phSlider.value)
      };
      this.reRender();
    };

    if (tdsSlider) tdsSlider.addEventListener('input', onInput);
    if (ghSlider) ghSlider.addEventListener('input', onInput);
    if (khSlider) khSlider.addEventListener('input', onInput);
    if (phSlider) phSlider.addEventListener('input', onInput);

    // Preset buttons
    container.querySelectorAll('[data-water-preset]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = (e.currentTarget as HTMLElement).getAttribute('data-water-preset');
        if (key && WATER_PRESETS[key]) {
          this.currentProfile = { ...WATER_PRESETS[key].profile };
          this.reRender();
        }
      });
    });
  }

  private reRender(): void {
    const el = document.querySelector('#water-chem-container');
    if (el) {
      el.innerHTML = this.render();
      this.bindEvents(el as HTMLElement);
    }
  }
}

export const waterView = new WaterViewComponent();
