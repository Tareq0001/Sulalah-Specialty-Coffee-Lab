export interface FlavorCategory {
  id: 'floral' | 'fruity' | 'sweet' | 'nutty' | 'spiced';
  nameAr: string;
  nameEn: string;
  color: string;
  lightColor: string;
  subdescriptorsAr: string[];
  subdescriptorsEn: string[];
  descriptionAr: string;
  descriptionEn: string;
  associatedOrigins: string[];
}

export const FLAVOR_CATEGORIES: FlavorCategory[] = [
  {
    id: 'floral',
    nameAr: 'زهري وعطري (Floral)',
    nameEn: 'Floral & Delicate',
    color: '#d97706',
    lightColor: 'rgba(217, 119, 6, 0.12)',
    subdescriptorsAr: ['ياسمين ندي', 'زهر البرتقال', 'ورد بلدي', 'أزهار البنفسج', 'شاي البرغموت'],
    subdescriptorsEn: ['Fresh Jasmine', 'Orange Blossom', 'Garden Rose', 'Sweet Violet', 'Bergamot Tea'],
    descriptionAr: 'نوتات عطرية راقية ناتجة عن مركبات اللينالول والغيرانيول، تميز محاصيل المرتفعات العالية كالبُن الخولاني الإرث والغيشا الكولومبية.',
    descriptionEn: 'Exquisite aromatic compounds (linalool & geraniol) characteristic of high elevation terroirs like Khawlani and Geisha lots.',
    associatedOrigins: ['saudi-khawlani', 'colombia-geisha-finca', 'ethiopia-yirgacheffe']
  },
  {
    id: 'fruity',
    nameAr: 'فاكهي وحمضي زاهٍ (Fruity)',
    nameEn: 'Fruity & Vibrant',
    color: '#c26d4a',
    lightColor: 'rgba(194, 109, 74, 0.12)',
    subdescriptorsAr: ['توت أسود وكشمش', 'دراق أبيض', 'مانجو استوائي', 'جريب فروت وردي', 'تين مجفف'],
    subdescriptorsEn: ['Blackcurrant', 'White Peach', 'Lush Mango', 'Pink Grapefruit', 'Sun-Dried Fig'],
    descriptionAr: 'حموضة حيوية نظيفة (حمض الماليك وحمض الستريك) تمنح الكوب إحساس العصير المنعش والفاكهة الاستوائية الناضجة.',
    descriptionEn: 'Sparkling organic malic and citric acidity imparting juicy stone fruit and crisp berry clarity to the palate.',
    associatedOrigins: ['ethiopia-yirgacheffe', 'kenya-nyeri-sl28', 'colombia-geisha-finca']
  },
  {
    id: 'sweet',
    nameAr: 'حلاوة وكراميل (Sweet & Caramel)',
    nameEn: 'Sweet & Caramel',
    color: '#b45309',
    lightColor: 'rgba(180, 83, 9, 0.12)',
    subdescriptorsAr: ['كراميل الدبس', 'عسل السدر', 'سكر بني خام', 'حلاوة الفانيليا', 'سكر القصب'],
    subdescriptorsEn: ['Date Caramel', 'Sidr Honey', 'Brown Muscovado', 'Madagascar Vanilla', 'Cane Sugar'],
    descriptionAr: 'تكرمل سكريات السكروز الطبيعية أثناء النضج والتحميص الحرفي؛ تمنح فنجان القهوة حلاوة ممتدة ومستساغة دون أي مرارة.',
    descriptionEn: 'Natural sucrose caramelisation that provides lingering sweetness and round tactile softness across every sip.',
    associatedOrigins: ['saudi-asiri', 'saudi-khawlani', 'panama-boquete-pacamara']
  },
  {
    id: 'nutty',
    nameAr: 'مكسرات وكاكاو (Nutty & Cocoa)',
    nameEn: 'Nutty & Cocoa',
    color: '#78350f',
    lightColor: 'rgba(120, 53, 15, 0.12)',
    subdescriptorsAr: ['لوز محمص', 'شوكولاتة الحليب', 'بندق محلى', 'كاكاو خام نقي', 'حلاوة جوز الهند'],
    subdescriptorsEn: ['Roasted Almond', 'Milk Chocolate', 'Praline Hazelnut', 'Raw Cocoa Nibs', 'Toasted Coconut'],
    descriptionAr: 'مركبات البيرازين الناتجة عن تفاعلات مايلارد المتزنة؛ قوام مخملي دافئ ونكهات كلاسيكية محببة ومريحة في كل الأوقات.',
    descriptionEn: 'Warm pyrazine-driven nuances from balanced Maillard reactions, producing a comforting nutty and milk chocolate finish.',
    associatedOrigins: ['panama-boquete-pacamara', 'saudi-asiri']
  },
  {
    id: 'spiced',
    nameAr: 'توابل وأصالة (Spiced & Heritage)',
    nameEn: 'Spiced & Heritage',
    color: '#5b6e60',
    lightColor: 'rgba(91, 110, 96, 0.12)',
    subdescriptorsAr: ['هيل أخضر بلدي', 'قرفة سيلانية', 'قرنفل دافئ', 'شوكولاتة داكنة 85%', 'عسل معتق'],
    subdescriptorsEn: ['Green Cardamom', 'Ceylon Cinnamon', 'Warm Clove', '85% Bittersweet Cacao', 'Aged Wild Honey'],
    descriptionAr: 'عبق الشرق وتاريخ القهوة الجزيرية؛ نكهات ترابية بهارية أصيلة مع الشوكولاتة الداكنة الكثيفة كالمحاصيل اليمنية الجبلية.',
    descriptionEn: 'The mythical soul of ancient Arabian coffee terroirs; exotic cardamom, cinnamon spice, and dense bittersweet cocoa.',
    associatedOrigins: ['yemen-harazi', 'saudi-asiri']
  }
];

export interface SensoryAxis {
  key: 'acidity' | 'sweetness' | 'body' | 'aroma' | 'aftertaste';
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const SENSORY_AXES: SensoryAxis[] = [
  {
    key: 'acidity',
    nameAr: 'الحموضة والفاكهية',
    nameEn: 'Acidity & Brightness',
    descriptionAr: 'حيوية الكوب وانتعاشه الفاكهي النظيف المشابه للتفاح والحمضيات النبيلة.',
    descriptionEn: 'The sparkling, refreshing fruit-like quality that enlivens the cup.'
  },
  {
    key: 'sweetness',
    nameAr: 'الحلاوة الطبيعية',
    nameEn: 'Natural Sweetness',
    descriptionAr: 'تركيز السكريات المكرملة وعسل السدر التي توازن الحموضة وتمنح رضى تاماً.',
    descriptionEn: 'The perception of sweet caramel, honey and fruit sucrose on the tongue.'
  },
  {
    key: 'body',
    nameAr: 'القوام والامتلاء',
    nameEn: 'Body & Mouthfeel',
    descriptionAr: 'ملمس القهوة على اللسان وثقلها اللمسي، من الحريري الخفيف حتى الكثيف المخملي.',
    descriptionEn: 'The tactile weight and viscosity of the beverage on the palate.'
  },
  {
    key: 'aroma',
    nameAr: 'العطرية والفوحان',
    nameEn: 'Aroma & Fragrance',
    descriptionAr: 'المركبات الطيارة الفائقة التي تملأ الأجواء عند الطحن والترطيب، كالياسمين والزهور.',
    descriptionEn: 'Volatile aromatics sensed by the olfactory bulb during brewing and sipping.'
  },
  {
    key: 'aftertaste',
    nameAr: 'الخاتمة وثبات النكهة',
    nameEn: 'Finish & Aftertaste',
    descriptionAr: 'طول وجمال انطباع النكهة المتبقية في الفم بعد بلع الرشفة وثباتها العطري.',
    descriptionEn: 'The length, pleasantness and resonant echo lingering after the sip is swallowed.'
  }
];
