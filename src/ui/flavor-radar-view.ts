import { COFFEE_BEANS, BeanCrop } from '../data/beans';
import { FLAVOR_CATEGORIES, SENSORY_AXES } from '../data/flavor-wheel';
import { getLanguage, t } from './i18n';

class FlavorRadarComponent {
  private selectedBeanId: string = 'saudi-khawlani';
  private activeCategoryFilter: string | null = null;

  public setBean(beanId: string): void {
    if (COFFEE_BEANS.some(b => b.id === beanId)) {
      this.selectedBeanId = beanId;
      this.reRender();
    }
  }

  private getSelectedBean(): BeanCrop {
    return COFFEE_BEANS.find(b => b.id === this.selectedBeanId) || COFFEE_BEANS[0];
  }

  public render(): string {
    const lang = getLanguage();
    const isAr = lang === 'ar';
    const bean = this.getSelectedBean();

    // Filter beans if a flavor category is clicked
    const filteredBeans = this.activeCategoryFilter
      ? COFFEE_BEANS.filter(b => b.primaryFlavorGroup === this.activeCategoryFilter)
      : COFFEE_BEANS;

    const activeCat = FLAVOR_CATEGORIES.find(c => c.id === this.activeCategoryFilter);

    return `
      <section id="flavor-radar" class="flavor-radar-section">
        <div class="section-header">
          <div class="header-pre">${isAr ? 'التحليل الحسي والتقييم العالمي' : 'SCA Sensory Analytics'}</div>
          <h2 class="section-title">${t('sensoryWheelTitle')}</h2>
          <p class="section-desc">${t('sensoryWheelSubtitle')}</p>
        </div>

        <!-- Flavor Clusters Filter Pills -->
        <div class="flavor-clusters-row">
          <button type="button" class="cluster-pill ${!this.activeCategoryFilter ? 'active' : ''}" data-cat="all">
            <span>${isAr ? 'كافة المجموعات' : 'All Clusters'}</span>
          </button>
          ${FLAVOR_CATEGORIES.map(c => `
            <button type="button" class="cluster-pill ${this.activeCategoryFilter === c.id ? 'active' : ''}" data-cat="${c.id}" style="--cat-accent: ${c.color}">
              <span class="cluster-dot" style="background-color: ${c.color}"></span>
              <span>${isAr ? c.nameAr : c.nameEn}</span>
            </button>
          `).join('')}
        </div>

        ${activeCat ? `
          <div class="cat-callout-banner" style="border-right-color: ${activeCat.color}; border-left-color: ${activeCat.color};">
            <h4 style="color: ${activeCat.color}">${isAr ? activeCat.nameAr : activeCat.nameEn}</h4>
            <p>${isAr ? activeCat.descriptionAr : activeCat.descriptionEn}</p>
            <div class="subdescriptors-tags">
              ${(isAr ? activeCat.subdescriptorsAr : activeCat.subdescriptorsEn).map(d => `
                <span class="subtag">${d}</span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="radar-content-grid">
          <!-- Canvas Spider Radar -->
          <div class="radar-canvas-card">
            <div class="radar-card-top">
              <div class="crop-select-row">
                <label for="radar-crop-select">${isAr ? 'المحصول المعروض بالرادار:' : 'Visualized Crop:'}</label>
                <select id="radar-crop-select" class="luxury-select">
                  ${COFFEE_BEANS.map(b => `
                    <option value="${b.id}" ${b.id === this.selectedBeanId ? 'selected' : ''}>
                      ${isAr ? b.nameAr : b.nameEn} (${b.altitude}m)
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>

            <div class="canvas-container">
              <canvas id="scaRadarCanvas" width="500" height="420" class="radar-canvas" aria-label="SCA Radar Chart"></canvas>
            </div>

            <!-- Sensory Axis Metric Values -->
            <div class="axes-badges-row">
              ${SENSORY_AXES.map(ax => {
                const score = bean.sensoryScores[ax.key];
                return `
                  <div class="axis-badge">
                    <span class="axis-badge-title">${isAr ? ax.nameAr : ax.nameEn}</span>
                    <span class="axis-badge-val">${score} / 5</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Bean Sensory Profile Details -->
          <div class="bean-sensory-card">
            <div class="bean-meta-header">
              <div class="meta-tag-pill">${isAr ? bean.regionAr : bean.regionEn}</div>
              <h3 class="bean-title">${isAr ? bean.nameAr : bean.nameEn}</h3>
              <div class="farm-line">${isAr ? bean.farmAr : bean.farmEn}</div>
            </div>

            <p class="bean-desc-text">${isAr ? bean.descriptionAr : bean.descriptionEn}</p>

            <div class="tasting-notes-box">
              <div class="box-heading">${isAr ? 'الإيحاءات الحسية البارزة' : 'Prominent Cup Notes'}</div>
              <div class="notes-pills-row">
                ${(isAr ? bean.tastingNotesAr : bean.tastingNotesEn).map(note => `
                  <span class="cup-note-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="pill-icon"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    ${note}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="bean-specs-grid">
              <div class="spec-cell">
                <span class="spec-label">${isAr ? 'الارتفاع' : 'Elevation'}</span>
                <span class="spec-value">${bean.altitude} ${t('altitudeMeter')}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">${isAr ? 'المعالجة' : 'Processing'}</span>
                <span class="spec-value">${isAr ? bean.processingAr : bean.processingEn}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">${isAr ? 'السلالة' : 'Varietal'}</span>
                <span class="spec-value">${isAr ? bean.varietalAr : bean.varietalEn}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">${isAr ? 'طرق التحضير الموصى بها' : 'Brewing Match'}</span>
                <span class="spec-value text-amber">${bean.recommendedMethods.map(m => m.toUpperCase()).join(' • ')}</span>
              </div>
            </div>

            <!-- Quick Action Buttons -->
            <div class="bean-actions-row">
              <button type="button" class="btn btn-primary" data-radar-brew="${bean.id}">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/></svg>
                ${t('viewInLab')}
              </button>
              <a href="#origins-atlas" class="btn btn-outline">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                ${isAr ? 'استعراض في الأطلس' : 'View in Atlas'}
              </a>
            </div>
          </div>
        </div>

        <!-- Matched Crops Carousel / Grid -->
        <div class="matched-crops-block">
          <h4 class="matched-crops-title">
            ${this.activeCategoryFilter 
              ? (isAr ? `محاصيل تنتمي إلى تصنيف: ${activeCat ? activeCat.nameAr : ''}` : `Crops in ${activeCat ? activeCat.nameEn : ''} Cluster`)
              : (isAr ? 'استكشف كافة السلالات عبر الرادار' : 'Explore All Heirlooms on the Radar')
            }
          </h4>
          <div class="matched-beans-scroll">
            ${filteredBeans.map(b => `
              <div class="matched-bean-chip ${b.id === this.selectedBeanId ? 'active' : ''}" data-select-bean="${b.id}">
                <div class="chip-flag">${b.isSaudi ? '🇸🇦' : '🌍'}</div>
                <div class="chip-info">
                  <div class="chip-name">${isAr ? b.nameAr : b.nameEn}</div>
                  <div class="chip-notes">${(isAr ? b.tastingNotesAr : b.tastingNotesEn).slice(0, 2).join(' • ')}</div>
                </div>
                <div class="chip-score">${Math.round(((b.sensoryScores.acidity + b.sensoryScores.sweetness + b.sensoryScores.aroma + b.sensoryScores.body + b.sensoryScores.aftertaste) / 5) * 10) / 10}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  public bindEvents(container: HTMLElement, onSelectForBrewing?: (bean: BeanCrop) => void): void {
    // Crop Select dropdown
    const select = container.querySelector('#radar-crop-select') as HTMLSelectElement;
    if (select) {
      select.addEventListener('change', (e) => {
        this.selectedBeanId = (e.target as HTMLSelectElement).value;
        this.reRender();
      });
    }

    // Cluster filter pills
    container.querySelectorAll('.cluster-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = (e.currentTarget as HTMLElement).getAttribute('data-cat');
        if (cat === 'all') {
          this.activeCategoryFilter = null;
        } else {
          this.activeCategoryFilter = cat;
          // select first matching bean if current doesn't match
          const matches = COFFEE_BEANS.filter(b => b.primaryFlavorGroup === cat);
          if (matches.length > 0 && !matches.some(m => m.id === this.selectedBeanId)) {
            this.selectedBeanId = matches[0].id;
          }
        }
        this.reRender();
      });
    });

    // Chip select bean
    container.querySelectorAll('[data-select-bean]').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-select-bean');
        if (id) {
          this.selectedBeanId = id;
          this.reRender();
        }
      });
    });

    // Quick Brew in Lab button
    container.querySelectorAll('[data-radar-brew]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-radar-brew');
        const b = COFFEE_BEANS.find(item => item.id === id);
        if (b && onSelectForBrewing) {
          onSelectForBrewing(b);
          // smooth scroll to lab
          const lab = document.querySelector('#brewing-lab');
          if (lab) lab.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Draw Radar Chart on Canvas
    this.drawRadarChart();
  }

  private drawRadarChart(): void {
    const canvas = document.querySelector('#scaRadarCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI crisp displays
    const dpr = window.devicePixelRatio || 1;
    const width = 500;
    const height = 420;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const centerX = width / 2;
    const centerY = height / 2 + 10;
    const radius = 135;
    const bean = this.getSelectedBean();
    const isAr = getLanguage() === 'ar';

    ctx.clearRect(0, 0, width, height);

    // Draw concentric polygon rings (levels 1 to 5)
    const levels = 5;
    const axesCount = SENSORY_AXES.length;
    const angleStep = (Math.PI * 2) / axesCount;

    for (let l = 1; l <= levels; l++) {
      const r = (radius / levels) * l;
      ctx.beginPath();
      for (let i = 0; i < axesCount; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = l === levels ? 'rgba(194, 109, 74, 0.35)' : 'rgba(194, 109, 74, 0.15)';
      ctx.lineWidth = l === levels ? 1.5 : 1;
      ctx.stroke();

      // Number scale label on first axis
      ctx.fillStyle = 'rgba(194, 109, 74, 0.55)';
      ctx.font = '10px Inter, sans-serif';
      ctx.fillText(String(l), centerX + 4, centerY - r + 3);
    }

    // Draw radial axis spokes
    for (let i = 0; i < axesCount; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(194, 109, 74, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw axis labels
      const axis = SENSORY_AXES[i];
      const labelDistance = radius + 28;
      const lx = centerX + Math.cos(angle) * labelDistance;
      const ly = centerY + Math.sin(angle) * labelDistance;

      ctx.fillStyle = '#1c140e';
      const isDark = document.body.classList.contains('theme-dark');
      ctx.fillStyle = isDark ? '#f3eee8' : '#1c140e';
      ctx.font = 'bold 12px Cairo, Tajawal, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isAr ? axis.nameAr : axis.nameEn, lx, ly);
    }

    // Draw Bean Data Polygon with rich gradient fill
    ctx.beginPath();
    const scores = [
      bean.sensoryScores.acidity,
      bean.sensoryScores.sweetness,
      bean.sensoryScores.body,
      bean.sensoryScores.aroma,
      bean.sensoryScores.aftertaste
    ];

    for (let i = 0; i < axesCount; i++) {
      const score = scores[i];
      const r = (radius / 5) * score;
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Fill with Amber / Terracotta gradient
    const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius);
    grad.addColorStop(0, 'rgba(217, 119, 6, 0.45)');
    grad.addColorStop(1, 'rgba(194, 109, 74, 0.2)');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = '#c26d4a';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw vertex dots with score circles
    for (let i = 0; i < axesCount; i++) {
      const score = scores[i];
      const r = (radius / 5) * score;
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#d97706';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  private reRender(): void {
    const el = document.querySelector('#flavor-radar-container');
    if (el) {
      el.innerHTML = this.render();
      this.bindEvents(el as HTMLElement);
    }
  }
}

export const flavorRadar = new FlavorRadarComponent();
