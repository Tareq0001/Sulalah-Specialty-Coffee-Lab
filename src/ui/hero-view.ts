import { getLanguage, t } from './i18n';

export function renderHero(): string {
  const lang = getLanguage();
  const isAr = lang === 'ar';

  return `
    <header class="studio-hero">
      <div class="hero-backdrop-grain"></div>
      <div class="hero-content">
        <div class="hero-badge-pill">
          <span class="pulse-amber-dot"></span>
          <span>${isAr ? 'مختبر الباريستا التفاعلي • معايير SCA الدولية' : 'Interactive Barista Lab • SCA Gold Standards'}</span>
        </div>

        <h1 class="hero-title">${t('heroTitle')}</h1>
        <p class="hero-lead">${t('heroSubtitle')}</p>

        <div class="hero-cta-group">
          <a href="#brewing-lab" class="btn btn-primary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/></svg>
            ${t('heroCtaLab')}
          </a>
          <a href="#origins-atlas" class="btn btn-outline">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            ${isAr ? 'أطلس المحاصيل السعودية' : 'Saudi Terroirs'}
          </a>
          <a href="#boutique" class="btn btn-secondary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ${t('heroCtaBoutique')}
          </a>
        </div>

        <!-- Ambient Studio Indicators -->
        <div class="hero-metrics-strip">
          <div class="metric-item">
            <span class="metric-val">1:15 - 1:16</span>
            <span class="metric-lbl">${isAr ? 'النسبة الذهبية للترشيح' : 'Golden Brew Ratio'}</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-val">18% - 22%</span>
            <span class="metric-lbl">${isAr ? 'معدل الاستخلاص المستهدف (EY)' : 'Optimal Extraction Yield'}</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-val">1850م+</span>
            <span class="metric-lbl">${isAr ? 'ارتفاع مدرجات خولان وعسير' : 'Khawlan Terraces Elevation'}</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-val">150 ppm</span>
            <span class="metric-lbl">${isAr ? 'أملاح ماء التحضير (SCA TDS)' : 'Target Water TDS'}</span>
          </div>
        </div>
      </div>
    </header>
  `;
}
