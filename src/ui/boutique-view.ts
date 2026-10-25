import { BOUTIQUE_PRODUCTS, GRIND_OPTIONS, ProductItem } from '../data/products';
import { cart } from '../engine/cart-state';
import { getLanguage, t } from './i18n';

class BoutiqueViewComponent {
  private selectedProductModal: ProductItem | null = null;
  private selectedGrindId: string = 'whole-bean';

  public openProductModal(productId: string): void {
    const p = BOUTIQUE_PRODUCTS.find(item => item.id === productId);
    if (p) {
      this.selectedProductModal = p;
      this.selectedGrindId = p.grindOptionsAvailable ? 'v60' : 'whole-bean';
      this.renderModal();
    }
  }

  public render(): string {
    const lang = getLanguage();
    const isAr = lang === 'ar';

    return `
      <section id="boutique" class="boutique-section">
        <div class="section-header">
          <div class="header-pre">${isAr ? 'المحمصة الحرفية والمقتنيات' : 'Curated Roastery & Gear'}</div>
          <h2 class="section-title">${t('boutiqueTitle')}</h2>
          <p class="section-desc">${t('boutiqueSubtitle')}</p>
        </div>

        <div class="boutique-products-grid">
          ${BOUTIQUE_PRODUCTS.map(prod => `
            <article class="boutique-card">
              <div class="card-media">
                <div class="product-svg-icon">${prod.imageSvg}</div>
                ${prod.badgeAr ? `
                  <span class="product-badge">${isAr ? prod.badgeAr : prod.badgeEn}</span>
                ` : ''}
              </div>

              <div class="card-details">
                <span class="product-category">${isAr ? prod.categoryAr : prod.categoryEn}</span>
                <h3 class="product-name">${isAr ? prod.nameAr : prod.nameEn}</h3>
                <p class="product-description">${isAr ? prod.descriptionAr : prod.descriptionEn}</p>

                <div class="price-action-row">
                  <div class="product-price">
                    <span class="amount">${prod.price}</span>
                    <span class="currency">${t('sar')}</span>
                  </div>

                  <button type="button" class="btn btn-primary btn-sm" data-open-product="${prod.id}">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    ${isAr ? 'تخصيص وإضافة' : 'Customize & Add'}
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Product Customization Modal Container -->
        <div id="product-modal-container"></div>
      </section>
    `;
  }

  private renderModal(): void {
    const container = document.querySelector('#product-modal-container');
    if (!container || !this.selectedProductModal) return;

    const prod = this.selectedProductModal;
    const lang = getLanguage();
    const isAr = lang === 'ar';

    container.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-dialog">
          <button type="button" class="modal-close-btn" id="close-prod-modal" aria-label="${t('close')}">✕</button>

          <div class="modal-header-block">
            <span class="modal-cat">${isAr ? prod.categoryAr : prod.categoryEn}</span>
            <h3 class="modal-title">${isAr ? prod.nameAr : prod.nameEn}</h3>
          </div>

          <p class="modal-desc">${isAr ? prod.descriptionAr : prod.descriptionEn}</p>

          ${prod.grindOptionsAvailable ? `
            <div class="modal-form-group">
              <label class="form-label">${t('selectGrind')}</label>
              <div class="grind-options-grid">
                ${GRIND_OPTIONS.map(g => `
                  <label class="grind-radio-card ${this.selectedGrindId === g.id ? 'active' : ''}">
                    <input type="radio" name="grind-choice" value="${g.id}" ${this.selectedGrindId === g.id ? 'checked' : ''} class="sr-only" />
                    <span class="radio-indicator"></span>
                    <span class="grind-name">${isAr ? g.nameAr : g.nameEn}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="modal-footer-row">
            <div class="modal-price">
              <span class="num">${prod.price}</span>
              <span class="cur">${t('sar')}</span>
            </div>

            <button type="button" class="btn btn-primary" id="confirm-add-cart">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              ${t('addToCart')}
            </button>
          </div>
        </div>
      </div>
    `;

    // Bind modal events
    const closeBtn = container.querySelector('#close-prod-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeModal();
      });
    }

    container.querySelectorAll('input[name="grind-choice"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.selectedGrindId = (e.target as HTMLInputElement).value;
        this.renderModal();
      });
    });

    const addBtn = container.querySelector('#confirm-add-cart');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const grindOpt = GRIND_OPTIONS.find(g => g.id === this.selectedGrindId) || GRIND_OPTIONS[0];
        cart.addItem(
          prod,
          this.selectedGrindId,
          grindOpt.nameAr,
          grindOpt.nameEn,
          1
        );
        this.closeModal();
        this.showToast(isAr ? `تمت إضافة "${prod.nameAr}" إلى السلة` : `Added "${prod.nameEn}" to bag`);
      });
    }
  }

  private closeModal(): void {
    this.selectedProductModal = null;
    const container = document.querySelector('#product-modal-container');
    if (container) container.innerHTML = '';
  }

  private showToast(msg: string): void {
    const toast = document.createElement('div');
    toast.className = 'studio-toast';
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${msg}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  public bindEvents(container: HTMLElement): void {
    container.querySelectorAll('[data-open-product]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-open-product');
        if (id) {
          this.openProductModal(id);
        }
      });
    });
  }
}

export const boutiqueView = new BoutiqueViewComponent();
