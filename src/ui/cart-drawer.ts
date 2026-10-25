import { cart, CartItem, CartTotals } from '../engine/cart-state';
import { getLanguage, t } from './i18n';

class CartDrawerComponent {
  private isOpen: boolean = false;
  private receiptModalData: {
    orderNumber: string;
    dateStr: string;
    items: CartItem[];
    totals: CartTotals;
  } | null = null;

  constructor() {
    cart.subscribe(() => {
      this.updateBadge();
      if (this.isOpen) {
        this.renderDrawer();
      }
    });
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this.renderDrawer();
  }

  public open(): void {
    this.isOpen = true;
    this.renderDrawer();
  }

  public close(): void {
    this.isOpen = false;
    this.renderDrawer();
  }

  public updateBadge(): void {
    const badge = document.querySelector('#cart-count-badge');
    if (badge) {
      const totals = cart.getTotals();
      badge.textContent = String(totals.itemCount);
      badge.className = totals.itemCount > 0 ? 'cart-badge active' : 'cart-badge';
    }
  }

  public renderDrawer(): void {
    const container = document.querySelector('#cart-drawer-container');
    if (!container) return;

    if (!this.isOpen) {
      container.innerHTML = '';
      return;
    }

    const items = cart.getItems();
    const totals = cart.getTotals();
    const coupon = cart.getCoupon();
    const lang = getLanguage();
    const isAr = lang === 'ar';

    container.innerHTML = `
      <div class="drawer-backdrop" id="drawer-backdrop">
        <aside class="cart-slide-drawer">
          <div class="drawer-header">
            <div class="drawer-title-row">
              <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <h3>${t('cart')}</h3>
              <span class="items-count-pill">${totals.itemCount}</span>
            </div>
            <button type="button" class="drawer-close-btn" id="close-drawer-btn" aria-label="${t('close')}">✕</button>
          </div>

          <div class="drawer-body">
            ${items.length === 0 ? `
              <div class="empty-cart-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="empty-icon"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
                <p class="empty-text">${t('cartEmpty')}</p>
                <a href="#boutique" class="btn btn-outline btn-sm" id="empty-shop-now">
                  ${isAr ? 'تصفح محاصيل البوتيك' : 'Browse Boutique'}
                </a>
              </div>
            ` : `
              <div class="cart-items-list">
                ${items.map(item => `
                  <div class="cart-item-row">
                    <div class="item-img-box">${item.product.imageSvg}</div>
                    <div class="item-info">
                      <div class="item-title">${isAr ? item.product.nameAr : item.product.nameEn}</div>
                      ${item.product.grindOptionsAvailable ? `
                        <div class="item-grind-tag">${isAr ? item.grindNameAr : item.grindNameEn}</div>
                      ` : ''}
                      <div class="item-price-unit">${item.unitPrice} ${t('sar')}</div>
                    </div>
                    <div class="item-quantity-ctrl">
                      <button type="button" class="qty-btn" data-qty-delta="-1" data-cart-id="${item.id}">-</button>
                      <span class="qty-number">${item.quantity}</span>
                      <button type="button" class="qty-btn" data-qty-delta="1" data-cart-id="${item.id}">+</button>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Coupon Code Input -->
              <div class="drawer-coupon-box">
                <label class="coupon-lbl">${t('couponCode')}</label>
                <div class="coupon-input-row">
                  <input type="text" id="coupon-input" placeholder="e.g. SULALAH10" value="${coupon ? coupon.code : ''}" class="coupon-field" />
                  <button type="button" id="apply-coupon-btn" class="btn btn-sm btn-outline">
                    ${coupon ? (isAr ? 'إزالة' : 'Remove') : t('applyCoupon')}
                  </button>
                </div>
                ${coupon ? `
                  <div class="coupon-applied-msg">
                    <span class="check-icon">✓</span>
                    <span>${isAr ? coupon.descriptionAr : coupon.descriptionEn}</span>
                  </div>
                ` : `
                  <div class="coupon-hint-text">${isAr ? 'جرّب: SULALAH10 لخصم 10% أو KHAWLANI' : 'Try: SULALAH10 or KHAWLANI'}</div>
                `}
              </div>

              <!-- Totals Breakdown -->
              <div class="cart-summary-box">
                <div class="summary-line">
                  <span>${t('subtotal')}</span>
                  <span>${totals.subtotal} ${t('sar')}</span>
                </div>
                ${totals.discountAmount > 0 ? `
                  <div class="summary-line text-amber">
                    <span>${t('discount')}</span>
                    <span>-${totals.discountAmount} ${t('sar')}</span>
                  </div>
                ` : ''}
                <div class="summary-line">
                  <span>${isAr ? 'الشحن والتوصيل' : 'Shipping'}</span>
                  <span>${totals.shipping === 0 ? (isAr ? 'مجاني للطلبات فوق 200' : 'Free') : `${totals.shipping} ${t('sar')}`}</span>
                </div>
                <div class="summary-line text-muted">
                  <span>${t('vat')}</span>
                  <span>${totals.vatAmount} ${t('sar')}</span>
                </div>
                <div class="summary-total-line">
                  <span>${t('cartTotal')}</span>
                  <span class="grand-total-val">${totals.grandTotal} ${t('sar')}</span>
                </div>
              </div>
            `}
          </div>

          ${items.length > 0 ? `
            <div class="drawer-footer">
              <button type="button" id="checkout-btn" class="btn btn-primary btn-large btn-block">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                ${t('checkout')}
              </button>
            </div>
          ` : ''}
        </aside>
      </div>
    `;

    this.bindDrawerEvents(container as HTMLElement);
  }

  private bindDrawerEvents(container: HTMLElement): void {
    const backdrop = container.querySelector('#drawer-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.close();
        }
      });
    }

    const closeBtn = container.querySelector('#close-drawer-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.close();
      });
    }

    const emptyShopNow = container.querySelector('#empty-shop-now');
    if (emptyShopNow) {
      emptyShopNow.addEventListener('click', () => {
        this.close();
      });
    }

    // Quantity buttons
    container.querySelectorAll('[data-qty-delta]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-cart-id');
        const delta = parseInt((e.currentTarget as HTMLElement).getAttribute('data-qty-delta') || '0', 10);
        if (id && delta) {
          cart.updateQuantity(id, delta);
        }
      });
    });

    // Coupon button
    const couponBtn = container.querySelector('#apply-coupon-btn');
    const couponInput = container.querySelector('#coupon-input') as HTMLInputElement;
    if (couponBtn && couponInput) {
      couponBtn.addEventListener('click', () => {
        if (cart.getCoupon()) {
          cart.removeCoupon();
          this.renderDrawer();
        } else {
          const res = cart.applyCoupon(couponInput.value);
          alert(getLanguage() === 'ar' ? res.messageAr : res.messageEn);
          this.renderDrawer();
        }
      });
    }

    // Checkout button
    const checkoutBtn = container.querySelector('#checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        this.triggerCheckout();
      });
    }
  }

  private triggerCheckout(): void {
    const items = cart.getItems();
    const totals = cart.getTotals();
    const orderNum = 'SLH-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString(getLanguage() === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    this.receiptModalData = {
      orderNumber: orderNum,
      dateStr,
      items,
      totals
    };

    this.close();
    this.renderReceiptModal();
  }

  private renderReceiptModal(): void {
    const container = document.querySelector('#receipt-modal-container');
    if (!container || !this.receiptModalData) return;

    const data = this.receiptModalData;
    const lang = getLanguage();
    const isAr = lang === 'ar';

    container.innerHTML = `
      <div class="modal-backdrop">
        <div class="receipt-dialog" id="printable-receipt">
          <button type="button" class="modal-close-btn" id="close-receipt-btn" aria-label="${t('close')}">✕</button>

          <div class="receipt-brand-header">
            <div class="receipt-logo">سُـلالة | Sulalah</div>
            <div class="receipt-sub">${isAr ? 'استوديو ومحمصة القهوة المختصة - أبها والرياض' : 'Specialty Coffee Studio & Micro-Roastery'}</div>
            <div class="receipt-tax-no">${isAr ? 'الرقم الضريبي:' : 'VAT ID:'} 31094827100003</div>
          </div>

          <div class="receipt-meta-box">
            <div class="meta-line">
              <span>${isAr ? 'رقم الفاتورة:' : 'Invoice No:'}</span>
              <strong>${data.orderNumber}</strong>
            </div>
            <div class="meta-line">
              <span>${isAr ? 'التاريخ والوقت:' : 'Date & Time:'}</span>
              <span>${data.dateStr}</span>
            </div>
          </div>

          <!-- Items Table -->
          <table class="receipt-table">
            <thead>
              <tr>
                <th>${isAr ? 'الصنف / درجة الطحن' : 'Item / Grind'}</th>
                <th>${isAr ? 'الكمية' : 'Qty'}</th>
                <th>${isAr ? 'السعر' : 'Price'}</th>
              </tr>
            </thead>
            <tbody>
              ${data.items.map(it => `
                <tr>
                  <td>
                    <div class="r-item-name">${isAr ? it.product.nameAr : it.product.nameEn}</div>
                    ${it.product.grindOptionsAvailable ? `
                      <div class="r-item-grind">${isAr ? it.grindNameAr : it.grindNameEn}</div>
                    ` : ''}
                  </td>
                  <td>${it.quantity}</td>
                  <td>${it.unitPrice * it.quantity} ${t('sar')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <!-- Financial Breakdown -->
          <div class="receipt-totals-list">
            <div class="r-total-line">
              <span>${t('subtotal')}</span>
              <span>${data.totals.subtotal} ${t('sar')}</span>
            </div>
            ${data.totals.discountAmount > 0 ? `
              <div class="r-total-line text-amber">
                <span>${t('discount')}</span>
                <span>-${data.totals.discountAmount} ${t('sar')}</span>
              </div>
            ` : ''}
            <div class="r-total-line">
              <span>${isAr ? 'رسوم الشحن' : 'Shipping'}</span>
              <span>${data.totals.shipping === 0 ? (isAr ? 'مجاني' : 'Free') : `${data.totals.shipping} ${t('sar')}`}</span>
            </div>
            <div class="r-total-line">
              <span>${t('vat')}</span>
              <span>${data.totals.vatAmount} ${t('sar')}</span>
            </div>
            <div class="r-grand-total">
              <span>${t('cartTotal')}</span>
              <span>${data.totals.grandTotal} ${t('sar')}</span>
            </div>
          </div>

          <!-- Barista Quality Stamp & Simulated QR -->
          <div class="receipt-stamp-block">
            <div class="simulated-qr">
              <svg viewBox="0 0 100 100" class="qr-svg">
                <rect width="100" height="100" fill="#ffffff" />
                <rect x="10" y="10" width="25" height="25" fill="#1c140e" />
                <rect x="15" y="15" width="15" height="15" fill="#ffffff" />
                <rect x="65" y="10" width="25" height="25" fill="#1c140e" />
                <rect x="70" y="15" width="15" height="15" fill="#ffffff" />
                <rect x="10" y="65" width="25" height="25" fill="#1c140e" />
                <rect x="15" y="70" width="15" height="15" fill="#ffffff" />
                <rect x="45" y="20" width="10" height="10" fill="#1c140e" />
                <rect x="40" y="45" width="20" height="20" fill="#1c140e" />
                <rect x="70" y="55" width="15" height="15" fill="#1c140e" />
                <rect x="25" y="45" width="10" height="10" fill="#1c140e" />
                <rect x="55" y="75" width="15" height="15" fill="#1c140e" />
              </svg>
              <span>${isAr ? 'رمز التحقق الضريبي المعتمد' : 'ZATCA Tax Verification QR'}</span>
            </div>
            <div class="barista-blessing">
              <p>${isAr ? 'تم التحميص والتجهيز وفق أرقى معايير SCA. استمتع بتجربة تحضير استثنائية!' : 'Micro-roasted to perfection. Enjoy an elevated sensory ritual.'}</p>
            </div>
          </div>

          <!-- Actions -->
          <div class="receipt-actions-row">
            <button type="button" class="btn btn-primary" id="print-receipt-btn">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              ${t('printReceipt')}
            </button>
            <button type="button" class="btn btn-outline" id="finish-receipt-btn">
              ${isAr ? 'إتمام ومسح السلة' : 'Finish & Clear Bag'}
            </button>
          </div>
        </div>
      </div>
    `;

    // Bind Receipt Events
    const closeBtn = container.querySelector('#close-receipt-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => { container.innerHTML = ''; });

    const printBtn = container.querySelector('#print-receipt-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const finishBtn = container.querySelector('#finish-receipt-btn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        cart.clearCart();
        container.innerHTML = '';
      });
    }
  }
}

export const cartDrawer = new CartDrawerComponent();
