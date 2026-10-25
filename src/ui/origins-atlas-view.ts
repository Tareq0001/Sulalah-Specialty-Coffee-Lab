import { COFFEE_BEANS, BeanCrop } from '../data/beans';
import { BOUTIQUE_PRODUCTS } from '../data/products';
import { getLanguage, t } from './i18n';

class OriginsAtlasComponent {
  private activeFilter: 'all' | 'saudi' | 'washed' | 'natural' | 'anaerobic' = 'all';

  public render(): string {
    const lang = getLanguage();
    const isAr = lang === 'ar';

    const filtered = COFFEE_BEANS.filter(b => {
      if (this.activeFilter === 'saudi') return b.isSaudi;
      if (this.activeFilter === 'washed') return b.processingType === 'washed';
      if (this.activeFilter === 'natural') return b.processingType === 'natural';
      if (this.activeFilter === 'anaerobic') return b.processingType === 'anaerobic';
      return true;
    });

    return `
      <section id="origins-atlas" class="origins-atlas-section">
        <div class="section-header">
          <div class="header-pre">${isAr ? 'رحلة الجغرافيا والتضاريس' : 'Terroir & Provenance'}</div>
          <h2 class="section-title">${t('atlasTitle')}</h2>
          <p class="section-desc">${t('atlasSubtitle')}</p>
        </div>

        <!-- Filter Tabs -->
        <div class="atlas-filters-bar">
          <button type="button" class="filter-btn ${this.activeFilter === 'all' ? 'active' : ''}" data-atlas-filter="all">
            ${t('filterAll')}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter === 'saudi' ? 'active' : ''}" data-atlas-filter="saudi">
            <span class="flag-icon">🇸🇦</span>
            ${t('filterSaudi')}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter === 'washed' ? 'active' : ''}" data-atlas-filter="washed">
            ${t('filterWashed')}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter === 'natural' ? 'active' : ''}" data-atlas-filter="natural">
            ${t('filterNatural')}
          </button>
          <button type="button" class="filter-btn ${this.activeFilter === 'anaerobic' ? 'active' : ''}" data-atlas-filter="anaerobic">
            ${t('filterAnaerobic')}
          </button>
        </div>

        <!-- Crops Cards Grid -->
        <div class="atlas-cards-grid">
          ${filtered.map(crop => {
            const prod = BOUTIQUE_PRODUCTS.find(p => p.beanId === crop.id);
            return `
              <article class="crop-atlas-card ${crop.isSaudi ? 'saudi-highlight' : ''}">
                <div class="crop-card-top">
                  <div class="top-badges-row">
                    ${crop.isSaudi ? `
                      <span class="badge-heritage">
                        <span class="star-icon">★</span>
                        ${isAr ? 'تراث وطني أصيل' : 'Saudi Heirloom'}
                      </span>
                    ` : `
                      <span class="badge-origin">${isAr ? crop.originAr : crop.originEn}</span>
                    `}
                    ${crop.badgeAr ? `
                      <span class="badge-accent">${isAr ? crop.badgeAr : crop.badgeEn}</span>
                    ` : ''}
                  </div>
                  <span class="altitude-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="alt-icon"><path d="M2 20h20L12 4z"/></svg>
                    ${crop.altitude}m
                  </span>
                </div>

                <div class="crop-header-block">
                  <span class="crop-region-label">${isAr ? crop.regionAr : crop.regionEn}</span>
                  <h3 class="crop-name">${isAr ? crop.nameAr : crop.nameEn}</h3>
                  <div class="crop-farm">${isAr ? crop.farmAr : crop.farmEn}</div>
                </div>

                <p class="crop-summary">${isAr ? crop.descriptionAr : crop.descriptionEn}</p>

                <!-- Sensory Notes Chips -->
                <div class="tasting-tags-wrap">
                  ${(isAr ? crop.tastingNotesAr : crop.tastingNotesEn).map(t => `
                    <span class="atlas-note-tag">${t}</span>
                  `).join('')}
                </div>

                <!-- Technical Specs Row -->
                <div class="crop-specs-strip">
                  <div class="spec-node">
                    <span class="spec-k">${isAr ? 'المعالجة' : 'Process'}</span>
                    <span class="spec-v">${isAr ? crop.processingAr : crop.processingEn}</span>
                  </div>
                  <div class="spec-node">
                    <span class="spec-k">${isAr ? 'السلالة' : 'Varietal'}</span>
                    <span class="spec-v">${isAr ? crop.varietalAr : crop.varietalEn}</span>
                  </div>
                  <div class="spec-node">
                    <span class="spec-k">${isAr ? 'التحميص' : 'Roast'}</span>
                    <span class="spec-v">${isAr ? crop.roastLevelAr : crop.roastLevelEn}</span>
                  </div>
                </div>

                <!-- Footer Action Buttons -->
                <div class="crop-card-actions">
                  <button type="button" class="btn btn-outline btn-sm" data-atlas-brew="${crop.id}">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/></svg>
                    ${t('viewInLab')}
                  </button>
                  <button type="button" class="btn btn-outline btn-sm" data-atlas-radar="${crop.id}">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                    ${t('exploreSensory')}
                  </button>
                  ${prod ? `
                    <button type="button" class="btn btn-primary btn-sm" data-atlas-buy="${prod.id}">
                      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                      ${crop.price} ${t('sar')}
                    </button>
                  ` : ''}
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  public bindEvents(
    container: HTMLElement, 
    onSelectForBrew: (bean: BeanCrop) => void,
    onSelectForRadar: (beanId: string) => void,
    onOpenProduct: (productId: string) => void
  ): void {
    // Filter clicks
    container.querySelectorAll('[data-atlas-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const f = (e.currentTarget as HTMLElement).getAttribute('data-atlas-filter') as 'all' | 'saudi' | 'washed' | 'natural' | 'anaerobic';
        if (f) {
          this.activeFilter = f;
          this.reRender(container, onSelectForBrew, onSelectForRadar, onOpenProduct);
        }
      });
    });

    // Calibrate in Lab
    container.querySelectorAll('[data-atlas-brew]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-atlas-brew');
        const bean = COFFEE_BEANS.find(b => b.id === id);
        if (bean) {
          onSelectForBrew(bean);
          const lab = document.querySelector('#brewing-lab');
          if (lab) lab.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Explore Sensory in Radar
    container.querySelectorAll('[data-atlas-radar]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-atlas-radar');
        if (id) {
          onSelectForRadar(id);
          const radar = document.querySelector('#flavor-radar');
          if (radar) radar.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Buy / View Product
    container.querySelectorAll('[data-atlas-buy]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pid = (e.currentTarget as HTMLElement).getAttribute('data-atlas-buy');
        if (pid) {
          onOpenProduct(pid);
        }
      });
    });
  }

  private reRender(
    _container: HTMLElement, 
    onSelectForBrew: (bean: BeanCrop) => void,
    onSelectForRadar: (beanId: string) => void,
    onOpenProduct: (productId: string) => void
  ): void {
    const el = document.querySelector('#origins-atlas-container');
    if (el) {
      el.innerHTML = this.render();
      this.bindEvents(el as HTMLElement, onSelectForBrew, onSelectForRadar, onOpenProduct);
    }
  }
}

export const originsAtlas = new OriginsAtlasComponent();
