export type Language = 'ar' | 'en';

type TranslationKey =
  | 'brandName'
  | 'brandTagline'
  | 'navLab'
  | 'navRadar'
  | 'navAtlas'
  | 'navWater'
  | 'navBoutique'
  | 'toggleTheme'
  | 'toggleLang'
  | 'cart'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroCtaLab'
  | 'heroCtaBoutique'
  | 'methodSelector'
  | 'doseWaterRatio'
  | 'coffeeDose'
  | 'waterRatio'
  | 'waterYield'
  | 'roastLevel'
  | 'recommendedTemp'
  | 'grinderMatrix'
  | 'brewSchedule'
  | 'startTimer'
  | 'pauseTimer'
  | 'resetTimer'
  | 'completed'
  | 'sensoryWheelTitle'
  | 'sensoryWheelSubtitle'
  | 'matchedBeans'
  | 'atlasTitle'
  | 'atlasSubtitle'
  | 'filterAll'
  | 'filterSaudi'
  | 'filterWashed'
  | 'filterNatural'
  | 'filterAnaerobic'
  | 'waterTitle'
  | 'waterSubtitle'
  | 'waterTDS'
  | 'waterGH'
  | 'waterKH'
  | 'waterPH'
  | 'waterStatus'
  | 'boutiqueTitle'
  | 'boutiqueSubtitle'
  | 'addToCart'
  | 'selectGrind'
  | 'cartEmpty'
  | 'cartTotal'
  | 'subtotal'
  | 'vat'
  | 'discount'
  | 'couponCode'
  | 'applyCoupon'
  | 'checkout'
  | 'soundOn'
  | 'soundOff'
  | 'printReceipt'
  | 'close'
  | 'sar'
  | 'grams'
  | 'seconds'
  | 'altitudeMeter'
  | 'viewInLab'
  | 'exploreSensory';

export const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  ar: {
    brandName: 'سُـلالة | Sulalah',
    brandTagline: 'استوديو ومختبر القهوة المختصة وتجربة الباريستا التفاعلية',
    navLab: 'مختبر التحضير',
    navRadar: 'رادار النكهات SCA',
    navAtlas: 'أطلس المحاصيل',
    navWater: 'كيمياء الماء',
    navBoutique: 'بوتيك المحمصة',
    toggleTheme: 'تغيير السمة',
    toggleLang: 'English',
    cart: 'السلة',
    heroTitle: 'فنون الاستخلاص وعبق السلالات العريقة',
    heroSubtitle: 'تجربة تفاعلية تستلهم أرقى معايير القهوة المختصة العالمية (SCA) وتجمع بين أصالة البُن الخولاني والعسيري وأحدث علوم الاستخلاص الحرفي.',
    heroCtaLab: 'دخول مختبر الباريستا',
    heroCtaBoutique: 'تصفح محاصيل البوتيك',
    methodSelector: 'اختر طريقة التحضير الاحترافية',
    doseWaterRatio: 'معايير الجرعة والنسبة الذهبية',
    coffeeDose: 'كمية البُن (جم)',
    waterRatio: 'نسبة الاستخلاص (Ratio)',
    waterYield: 'كمية الماء المستهدفة',
    roastLevel: 'درجة التحميص',
    recommendedTemp: 'الحرارة الموصى بها',
    grinderMatrix: 'دليل معايرة المطاحن العالمية',
    brewSchedule: 'جدول الصب النبضي والمؤقت التفاعلي',
    startTimer: 'بدء الاستخلاص',
    pauseTimer: 'إيقاف مؤقت',
    resetTimer: 'إعادة ضبط',
    completed: 'اكتمل التحضير بنجاح! رشفة ماتعة',
    sensoryWheelTitle: 'عجلة التذوق ورادار النكهات التفاعلي (SCA Wheel)',
    sensoryWheelSubtitle: 'تحليل بياني خماسي الأبعاد يربط بين المحاصيل وسلالاتها ونوتاتها الحسية النادرة.',
    matchedBeans: 'محاصيل تطابق هذا النمط الحسي:',
    atlasTitle: 'أطلس محاصيل البُن السعودي والعالمي',
    atlasSubtitle: 'رحلة جغرافية بين مدرجات فيفاء العتيقة، قمم عسير، ومزارع القهوة الاستثنائية حول العالم.',
    filterAll: 'كافة المحاصيل',
    filterSaudi: 'سلالات سعودية أصيلة',
    filterWashed: 'مغسولة (Washed)',
    filterNatural: 'مجففة (Natural)',
    filterAnaerobic: 'تخمير لاهوائي (Anaerobic)',
    waterTitle: 'حاسبة كيمياء ماء التحضير ومعايير SCA',
    waterSubtitle: 'الماء يمثل 98.5% من كوب القهوة؛ عاير الأملاح والكالسيوم والبيكربونات لاستخلاص مثالي.',
    waterTDS: 'مجموع الأملاح الذائبة (TDS - ppm)',
    waterGH: 'عسر الماء الكلي (General Hardness - Ca/Mg)',
    waterKH: 'القلوية ودرء الأحماض (Alkalinity - KH)',
    waterPH: 'الرقم الهيدروجيني (pH)',
    waterStatus: 'تقييم كفاءة الاستخلاص:',
    boutiqueTitle: 'بوتيك سُلالة للمحاصيل الفاخرة وأدوات الباريستا',
    boutiqueSubtitle: 'محاصيل نادرة منتقاة بالحب ومحمصة بحرفية، مع إمكانية تحديد درجة الطحن حسب أداتك المفضلة.',
    addToCart: 'إضافة إلى السلة',
    selectGrind: 'تحديد درجة الطحن:',
    cartEmpty: 'سلة المقتنيات فارغة حالياً',
    cartTotal: 'إجمالي الحساب',
    subtotal: 'المجموع الفرعي',
    vat: 'ضريبة القيمة المضافة (15%)',
    discount: 'الخصم المطبق',
    couponCode: 'رمز القسيمة / الخصم',
    applyCoupon: 'تطبيق الرمز',
    checkout: 'إتمام الطلب وطباعة الفاتورة الفاخرة',
    soundOn: 'تشغيل المؤثرات الصوتية',
    soundOff: 'كتم الصوت',
    printReceipt: 'طباعة الفاتورة الضريبية',
    close: 'إغلاق',
    sar: 'ر.س',
    grams: 'جم',
    seconds: 'ثانية',
    altitudeMeter: 'متر فوق سطح البحر',
    viewInLab: 'معايرة في المختبر',
    exploreSensory: 'استعراض في رادار النكهات'
  },
  en: {
    brandName: 'سُـلالة | Sulalah',
    brandTagline: 'Specialty Coffee Studio & Interactive Barista Brewing Lab',
    navLab: 'Brewing Lab',
    navRadar: 'SCA Flavor Radar',
    navAtlas: 'Origins Atlas',
    navWater: 'Water Chemistry',
    navBoutique: 'Boutique Store',
    toggleTheme: 'Switch Theme',
    toggleLang: 'العربية',
    cart: 'Bag Cart',
    heroTitle: 'The Art of Extraction & Revered Terroirs',
    heroSubtitle: 'An interactive sanctuary harmonizing international SCA standards, ancient Saudi Khawlani terroirs, and the precision science of artisan barista craft.',
    heroCtaLab: 'Enter Barista Lab',
    heroCtaBoutique: 'Explore Boutique Beans',
    methodSelector: 'Select Professional Brewing Method',
    doseWaterRatio: 'Golden Dose & Brew Ratio Parameters',
    coffeeDose: 'Coffee Dose (g)',
    waterRatio: 'Extraction Ratio',
    waterYield: 'Target Water Yield',
    roastLevel: 'Roast Profile',
    recommendedTemp: 'Recommended Water Temp',
    grinderMatrix: 'Global Grinder Calibration Matrix',
    brewSchedule: 'Pulse Pour Schedule & Real-Time Timer',
    startTimer: 'Start Extraction',
    pauseTimer: 'Pause',
    resetTimer: 'Reset',
    completed: 'Extraction complete! Enjoy your artisan cup',
    sensoryWheelTitle: 'Interactive SCA Sensory Wheel & Radar',
    sensoryWheelSubtitle: 'A 5-dimensional sensory spider graph mapping distinct terroir notes to heirloom origins.',
    matchedBeans: 'Crops matching this flavor spectrum:',
    atlasTitle: 'Saudi Terroir & World Origins Atlas',
    atlasSubtitle: 'A cartographic journey from ancient mist-shrouded terraces of Jazan to iconic world micro-lots.',
    filterAll: 'All Micro-Lots',
    filterSaudi: 'Saudi Terroirs',
    filterWashed: 'Washed',
    filterNatural: 'Natural',
    filterAnaerobic: 'Anaerobic',
    waterTitle: 'Brew Water Chemistry & SCA Mineral Calculator',
    waterSubtitle: 'Water comprises 98.5% of your cup. Fine-tune TDS, GH, and KH for peak extraction yield (18%-22%).',
    waterTDS: 'Total Dissolved Solids (TDS - ppm)',
    waterGH: 'General Hardness (GH - Ca/Mg)',
    waterKH: 'Alkalinity & Buffer (KH - CaCO3)',
    waterPH: 'Acidity Index (pH)',
    waterStatus: 'Extraction Diagnostic:',
    boutiqueTitle: 'Sulalah Roastery Boutique & Barista Equipment',
    boutiqueSubtitle: 'Exceptional micro-lots and precision barista tools, customized with your preferred grind size.',
    addToCart: 'Add to Bag',
    selectGrind: 'Select Grind Customization:',
    cartEmpty: 'Your boutique bag is currently empty',
    cartTotal: 'Grand Total',
    subtotal: 'Subtotal',
    vat: 'VAT (15%)',
    discount: 'Discount',
    couponCode: 'Promo Voucher Code',
    applyCoupon: 'Apply',
    checkout: 'Checkout & Generate Boutique Invoice',
    soundOn: 'Procedural Audio On',
    soundOff: 'Mute Audio',
    printReceipt: 'Print Tax Invoice',
    close: 'Close',
    sar: 'SAR',
    grams: 'g',
    seconds: 'sec',
    altitudeMeter: 'meters MASL',
    viewInLab: 'Calibrate in Lab',
    exploreSensory: 'View Sensory Radar'
  }
};

let currentLanguage: Language = 'ar';
const listeners: Array<(lang: Language) => void> = [];

export function getLanguage(): Language {
  return currentLanguage;
}

export function setLanguage(lang: Language): void {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  listeners.forEach(fn => fn(lang));
}

export function toggleLanguage(): Language {
  const next: Language = currentLanguage === 'ar' ? 'en' : 'ar';
  setLanguage(next);
  return next;
}

export function onLanguageChange(fn: (lang: Language) => void): () => void {
  listeners.push(fn);
  return () => {
    const idx = listeners.indexOf(fn);
    if (idx > -1) listeners.splice(idx, 1);
  };
}

export function t(key: TranslationKey): string {
  return TRANSLATIONS[currentLanguage][key] || key;
}
