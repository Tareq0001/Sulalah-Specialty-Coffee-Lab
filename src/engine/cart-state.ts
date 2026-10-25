import { ProductItem } from '../data/products';

export interface CartItem {
  id: string; // unique cart item id (product.id + grind)
  productId: string;
  product: ProductItem;
  grindId: string;
  grindNameAr: string;
  grindNameEn: string;
  quantity: number;
  unitPrice: number;
}

export interface AppliedCoupon {
  code: string;
  discountPct: number;
  minSpend?: number;
  descriptionAr: string;
  descriptionEn: string;
}

export interface CartTotals {
  subtotal: number;
  discountAmount: number;
  vatAmount: number; // 15% Saudi VAT (included or extracted)
  shipping: number;
  grandTotal: number;
  itemCount: number;
}

export const VALID_COUPONS: Record<string, AppliedCoupon> = {
  SULALAH10: {
    code: 'SULALAH10',
    discountPct: 10,
    descriptionAr: 'خصم ترحيبي 10% لرواد سُلالة',
    descriptionEn: '10% Welcome Studio Discount'
  },
  BARISTA20: {
    code: 'BARISTA20',
    discountPct: 20,
    minSpend: 200,
    descriptionAr: 'خصم الباريستا 20% للطلبات فوق 200 ر.س',
    descriptionEn: '20% Barista Discount on orders 200+ SAR'
  },
  KHAWLANI: {
    code: 'KHAWLANI',
    discountPct: 15,
    descriptionAr: 'خصم خاص 15% احتفاءً بالبُن الخولاني',
    descriptionEn: '15% Khawlani Heritage Honor'
  }
};

class CartManager {
  private items: CartItem[] = [];
  private coupon: AppliedCoupon | null = null;
  private listeners: Array<() => void> = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('sulalah_cart_items');
      if (stored) {
        this.items = JSON.parse(stored);
      }
      const storedCoupon = localStorage.getItem('sulalah_cart_coupon');
      if (storedCoupon && VALID_COUPONS[storedCoupon]) {
        this.coupon = VALID_COUPONS[storedCoupon];
      }
    } catch {
      this.items = [];
      this.coupon = null;
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem('sulalah_cart_items', JSON.stringify(this.items));
      if (this.coupon) {
        localStorage.setItem('sulalah_cart_coupon', this.coupon.code);
      } else {
        localStorage.removeItem('sulalah_cart_coupon');
      }
    } catch {
      // storage unavailable
    }
    this.notify();
  }

  public subscribe(fn: () => void): () => void {
    this.listeners.push(fn);
    return () => {
      const idx = this.listeners.indexOf(fn);
      if (idx > -1) this.listeners.splice(idx, 1);
    };
  }

  private notify(): void {
    this.listeners.forEach(fn => fn());
  }

  public getItems(): CartItem[] {
    return [...this.items];
  }

  public getCoupon(): AppliedCoupon | null {
    return this.coupon;
  }

  public addItem(product: ProductItem, grindId: string, grindNameAr: string, grindNameEn: string, quantity: number = 1): void {
    const cartItemId = `${product.id}_${grindId}`;
    const existing = this.items.find(i => i.id === cartItemId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: cartItemId,
        productId: product.id,
        product,
        grindId,
        grindNameAr,
        grindNameEn,
        quantity,
        unitPrice: product.price
      });
    }

    this.saveToStorage();
  }

  public updateQuantity(cartItemId: string, delta: number): void {
    const item = this.items.find(i => i.id === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(cartItemId);
      return;
    }
    this.saveToStorage();
  }

  public removeItem(cartItemId: string): void {
    this.items = this.items.filter(i => i.id !== cartItemId);
    this.saveToStorage();
  }

  public clearCart(): void {
    this.items = [];
    this.coupon = null;
    this.saveToStorage();
  }

  public applyCoupon(code: string): { success: boolean; messageAr: string; messageEn: string } {
    const clean = code.trim().toUpperCase();
    const found = VALID_COUPONS[clean];

    if (!found) {
      return {
        success: false,
        messageAr: 'رمز القسيمة غير صالح، جرب SULALAH10 أو KHAWLANI',
        messageEn: 'Invalid coupon code. Try SULALAH10 or KHAWLANI'
      };
    }

    const subtotal = this.getItems().reduce((acc, it) => acc + (it.unitPrice * it.quantity), 0);
    if (found.minSpend && subtotal < found.minSpend) {
      return {
        success: false,
        messageAr: `يتطلب هذا الكود طلباً بقيمة ${found.minSpend} ر.س على الأقل`,
        messageEn: `Requires minimum order of ${found.minSpend} SAR`
      };
    }

    this.coupon = found;
    this.saveToStorage();
    return {
      success: true,
      messageAr: `تم تفعيل ${found.descriptionAr}`,
      messageEn: `Applied: ${found.descriptionEn}`
    };
  }

  public removeCoupon(): void {
    this.coupon = null;
    this.saveToStorage();
  }

  public getTotals(): CartTotals {
    const subtotal = this.items.reduce((acc, it) => acc + (it.unitPrice * it.quantity), 0);
    let discountAmount = 0;

    if (this.coupon) {
      if (!this.coupon.minSpend || subtotal >= this.coupon.minSpend) {
        discountAmount = Math.round((subtotal * (this.coupon.discountPct / 100)) * 100) / 100;
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    // 15% VAT included breakdown
    const vatAmount = Math.round((discountedSubtotal * 0.15) * 100) / 100;
    const shipping = discountedSubtotal > 200 || discountedSubtotal === 0 ? 0 : 25;
    const grandTotal = Math.round((discountedSubtotal + shipping) * 100) / 100;
    const itemCount = this.items.reduce((acc, it) => acc + it.quantity, 0);

    return {
      subtotal,
      discountAmount,
      vatAmount,
      shipping,
      grandTotal,
      itemCount
    };
  }
}

export const cart = new CartManager();
