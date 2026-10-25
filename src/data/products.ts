export interface ProductItem {
  id: string;
  type: 'beans' | 'sample_box' | 'gear';
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  price: number; // base price SAR
  imageSvg: string;
  descriptionAr: string;
  descriptionEn: string;
  badgeAr?: string;
  badgeEn?: string;
  inStock: boolean;
  beanId?: string; // links to bean crop if bean
  grindOptionsAvailable: boolean;
}

export const GRIND_OPTIONS = [
  { id: 'whole-bean', nameAr: 'حبوب كاملة (Whole Bean)', nameEn: 'Whole Bean' },
  { id: 'v60', nameAr: 'طحنة ترشيح V60 (متوسطة النعومة)', nameEn: 'V60 Pour-Over' },
  { id: 'espresso', nameAr: 'طحنة إسبريسو احترافية (ناعمة جداً)', nameEn: 'Espresso (Fine)' },
  { id: 'chemex', nameAr: 'طحنة كمكس (متوسطة الخشونة)', nameEn: 'Chemex (Med-Coarse)' },
  { id: 'aeropress', nameAr: 'طحنة إيروبرس (متوسطة ناعمة)', nameEn: 'AeroPress' },
  { id: 'frenchpress', nameAr: 'طحنة مكبس فرنسي (خشنة)', nameEn: 'French Press' },
  { id: 'coldbrew', nameAr: 'طحنة ترشيح بارد (خشنة جداً)', nameEn: 'Cold Brew' }
];

export const BOUTIQUE_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-khawlani',
    type: 'beans',
    nameAr: 'محصول خولاني جازان الفاخر (250 جم)',
    nameEn: 'Khawlani Reserve 250g',
    categoryAr: 'محاصيل البُن التراثي',
    categoryEn: 'Heritage Coffee Lot',
    price: 95,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M12 9a3 3 0 0 0-3 3c0 2 3 5 3 5s3-3 3-5a3 3 0 0 0-3-3z"/></svg>`,
    descriptionAr: 'محصول ياسمين وتين وعسل سدر من قمم فيفاء والداير في جازان، محمص حرفياً في محمصة سُلالة.',
    descriptionEn: 'Fragrant jasmine, dried fig and Sidr honey from high peaks of Jazan, micro-roasted with care.',
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Best Seller',
    inStock: true,
    beanId: 'saudi-khawlani',
    grindOptionsAvailable: true
  },
  {
    id: 'prod-asiri',
    type: 'beans',
    nameAr: 'محصول عسيري المرتفعات النبيلة (250 جم)',
    nameEn: 'Asiri Highlands Gold 250g',
    categoryAr: 'محاصيل البُن التراثي',
    categoryEn: 'Heritage Coffee Lot',
    price: 88,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="9" x2="12" y2="15"/></svg>`,
    descriptionAr: 'معالجة عسلية برائحة كراميل الدبس والمشمش المجفف ولمسة الكاكاو الفاخر.',
    descriptionEn: 'Honey processed high altitude cup bursting with date caramel, dried apricot and cocoa.',
    badgeAr: 'إصدار موسمي',
    badgeEn: 'Seasonal Lot',
    inStock: true,
    beanId: 'saudi-asiri',
    grindOptionsAvailable: true
  },
  {
    id: 'prod-geisha',
    type: 'beans',
    nameAr: 'محصول كولومبيا غيشا فينكا الفاخرة (250 جم)',
    nameEn: 'Colombia Geisha Finca Paraiso 250g',
    categoryAr: 'محاصيل البطولات الدولية',
    categoryEn: 'Competition Lot',
    price: 130,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M12 8l2 3 3 1-2.5 2.5.5 3.5-3-1.8-3 1.8.5-3.5L7 12l3-1z"/></svg>`,
    descriptionAr: 'صدمة حرارية تخمير لاهوائي مزدوج، إيحاءات زهر البرتقال والمانجو وقوام حريري مذهل.',
    descriptionEn: 'Thermal shock double anaerobic process. Notes of orange blossom, tropical mango, and silk.',
    badgeAr: 'تقييم 91+ SCA',
    badgeEn: 'SCA 91+ Cup',
    inStock: true,
    beanId: 'colombia-geisha-finca',
    grindOptionsAvailable: true
  },
  {
    id: 'prod-yemen',
    type: 'beans',
    nameAr: 'محصول اليمن حرازي العقيق الأسود (250 جم)',
    nameEn: 'Yemen Harazi Black Agate 250g',
    categoryAr: 'محاصيل البُن التراثي',
    categoryEn: 'Heritage Coffee Lot',
    price: 110,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M9 10h6v6H9z"/></svg>`,
    descriptionAr: 'من مدرجات حراز الأسطورية على ارتفاع 2250 متر؛ شوكولاتة داكنة وهيل وتين مجفف.',
    descriptionEn: 'Historic stone terraces at 2250m. Pure dark chocolate, wild cardamom and dried fig.',
    inStock: true,
    beanId: 'yemen-harazi',
    grindOptionsAvailable: true
  },
  {
    id: 'prod-flight-box',
    type: 'sample_box',
    nameAr: 'صندوق تذوق سُلالة الرباعي الفاخر (4 × 100 جم)',
    nameEn: 'Sulalah Discovery Tasting Flight (4 x 100g)',
    categoryAr: 'مجموعات التذوق',
    categoryEn: 'Tasting Collections',
    price: 155,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="3" y1="12" x2="21" y2="12"/></svg>`,
    descriptionAr: 'رحلة حسية كاملة تضم 4 عبوات تجريبية: خولاني جازان، عسيري، غيشا كولومبيا، ويرغاتشيف إثيوبيا مع دليل التذوق والحصاد.',
    descriptionEn: 'The ultimate sensory discovery flight: Khawlani, Asiri, Geisha, and Yirgacheffe with custom tasting guide.',
    badgeAr: 'هدية الباريستا المثالية',
    badgeEn: 'Barista Gift Choice',
    inStock: true,
    grindOptionsAvailable: true
  },
  {
    id: 'prod-gear-scale',
    type: 'gear',
    nameAr: 'ميزان سُلالة الذكي فائق الدقة (0.1 جم + مؤقت تلقائي)',
    nameEn: 'Sulalah Precision Smart Barista Scale',
    categoryAr: 'معدات الباريستا الاحترافية',
    categoryEn: 'Barista Precision Gear',
    price: 185,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="12" r="5"/><line x1="12" y1="9" x2="12" y2="12"/></svg>`,
    descriptionAr: 'استجابة فائقة السرعة بدون أي تأخير، مؤقت صب تلقائي، شحن تايب سي، وسطح مضاد لرذاذ الماء والحرارة.',
    descriptionEn: 'Ultra-fast 0.1g resolution, auto-flow timer, USB-C recharge, water and heat resistant silicon pad.',
    badgeAr: 'معدات مختبر',
    badgeEn: 'Lab Equipment',
    inStock: true,
    grindOptionsAvailable: false
  },
  {
    id: 'prod-gear-kettle',
    type: 'gear',
    nameAr: 'إبريق الترشيح الإلكتروني عنق الإوزة (تحكم رقمي بالحرارة)',
    nameEn: 'Precision Gooseneck Variable Temp Kettle',
    categoryAr: 'معدات الباريستا الاحترافية',
    categoryEn: 'Barista Precision Gear',
    price: 260,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-2 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 8z"/><path d="M5 8a4 4 0 0 1-4-4V3h5"/><path d="M19 11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4"/></svg>`,
    descriptionAr: 'عنق إوزة مائل بتدفق عمودي 90 درجة، تثبيت للحرارة حتى 60 دقيقة بدقة نصف درجة، سعة 900 مل.',
    descriptionEn: 'Precision 90-degree laminar gooseneck spout, +/-0.5°C digital PID stability, 900ml capacity.',
    inStock: true,
    grindOptionsAvailable: false
  },
  {
    id: 'prod-gear-wdt',
    type: 'gear',
    nameAr: 'طقم استخلاص الإسبريسو (أداة WDT إبرية + مكبس نابض)',
    nameEn: 'Espresso Extraction Tuning Kit (WDT + Tamper)',
    categoryAr: 'معدات الباريستا الاحترافية',
    categoryEn: 'Barista Precision Gear',
    price: 120,
    imageSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="7" r="4"/><path d="M8 11v8a4 4 0 0 0 8 0v-8"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
    descriptionAr: 'إبر ستانلس ستيل فائقة النحافة 0.35 مم لتفتيت التكتلات مع مكبس ميكانيكي بقوة كبس ثابتة 30 رطلاً لمنع القنوات المائية.',
    descriptionEn: '0.35mm ultra-fine needles for clump declumping paired with a calibrated 30lb spring tamper.',
    inStock: true,
    grindOptionsAvailable: false
  }
];
