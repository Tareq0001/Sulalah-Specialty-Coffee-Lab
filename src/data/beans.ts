export interface BeanCrop {
  id: string;
  nameAr: string;
  nameEn: string;
  originAr: string;
  originEn: string;
  regionAr: string;
  regionEn: string;
  farmAr: string;
  farmEn: string;
  altitude: number; // in meters
  processingAr: string;
  processingEn: string;
  processingType: 'natural' | 'washed' | 'anaerobic' | 'honey';
  varietalAr: string;
  varietalEn: string;
  roastLevel: 'light' | 'medium-light' | 'medium' | 'omni';
  roastLevelAr: string;
  roastLevelEn: string;
  price: number; // SAR per 250g
  isSaudi: boolean;
  featured: boolean;
  descriptionAr: string;
  descriptionEn: string;
  tastingNotesAr: string[];
  tastingNotesEn: string[];
  primaryFlavorGroup: 'floral' | 'fruity' | 'sweet' | 'nutty' | 'spiced';
  sensoryScores: {
    acidity: number; // 1 - 5
    sweetness: number;
    body: number;
    aroma: number;
    aftertaste: number;
  };
  recommendedMethods: string[]; // ['v60', 'chemex', 'aeropress', 'espresso']
  badgeAr?: string;
  badgeEn?: string;
}

export const COFFEE_BEANS: BeanCrop[] = [
  {
    id: 'saudi-khawlani',
    nameAr: 'خولاني جازان الفاخر',
    nameEn: 'Saudi Khawlani Special Reserve',
    originAr: 'المملكة العربية السعودية',
    originEn: 'Saudi Arabia',
    regionAr: 'جبال فيفاء والداير - جازان',
    regionEn: 'Fifa & Al Dair Mountains, Jazan',
    farmAr: 'مزارع السلالة الخولانية العريقة (تراث اليونسكو)',
    farmEn: 'Khawlani Heritage Farms (UNESCO Listed)',
    altitude: 1850,
    processingAr: 'تجفيف لاهوائي بطيء (Anaerobic Natural)',
    processingEn: 'Slow Anaerobic Natural',
    processingType: 'anaerobic',
    varietalAr: 'خولاني أصيل (Coffea Arabica Khawlani)',
    varietalEn: 'Ancient Heirloom Khawlani',
    roastLevel: 'light',
    roastLevelAr: 'تحميص خفيف فلتر (Light Filter)',
    roastLevelEn: 'Light Filter Roast',
    price: 95,
    isSaudi: true,
    featured: true,
    badgeAr: 'محصول وطني مميز',
    badgeEn: 'National Heritage',
    descriptionAr: 'من أعالي مدرجات جازان الخضراء، تجربة استثنائية تجسد أصالة البُن الخولاني العريق بمعالجة لاهوائية مبتكرة تبرز أريج الياسمين وحلاوة التين وعسل السدر الطبيعي.',
    descriptionEn: 'Harvested from high-altitude misty terraces of Jazan. An exceptional ancestral cup with an innovative anaerobic processing that highlights fragrant jasmine, dried fig, and wild Sidr honey.',
    tastingNotesAr: ['أزهار الياسمين', 'تين مجفف', 'عسل السدر', 'حلاوة مشمش'],
    tastingNotesEn: ['Jasmine Floral', 'Dried Fig', 'Sidr Honey', 'Sweet Apricot'],
    primaryFlavorGroup: 'floral',
    sensoryScores: {
      acidity: 4.2,
      sweetness: 4.9,
      body: 4.0,
      aroma: 5.0,
      aftertaste: 4.8
    },
    recommendedMethods: ['v60', 'chemex', 'aeropress']
  },
  {
    id: 'saudi-asiri',
    nameAr: 'عسيري المرتفعات النبيلة',
    nameEn: 'Asiri Highlands Gold',
    originAr: 'المملكة العربية السعودية',
    originEn: 'Saudi Arabia',
    regionAr: 'مرتفعات رجال ألمع وعسير',
    regionEn: 'Rijal Almaa & Asir Peaks',
    farmAr: 'مدرجات وادي حسوة التراثية',
    farmEn: 'Hiswah Valley Terraces',
    altitude: 1950,
    processingAr: 'عسلي أصفر (Yellow Honey)',
    processingEn: 'Yellow Honey Process',
    processingType: 'honey',
    varietalAr: 'أرابيكا جبلية عسيرية',
    varietalEn: 'Asiri Mountain Arabica',
    roastLevel: 'medium-light',
    roastLevelAr: 'تحميص متوسط-خفيف',
    roastLevelEn: 'Medium-Light Roast',
    price: 88,
    isSaudi: true,
    featured: true,
    badgeAr: 'إصدار محدود',
    badgeEn: 'Limited Reserve',
    descriptionAr: 'محصول فاخر من قمم عسير الشاهقة، قوام ممتلئ غني بكراميل الدبس والمشمش المجفف مع خاتمة كاكاو ناعمة تناسب أدوات الترشيح والإسبريسو الفاخر.',
    descriptionEn: 'Highland harvest from misty Asir peaks. Offers a velvety mouthfeel laced with rich date-caramel, dried apricot, and a prolonged smooth cocoa finish.',
    tastingNotesAr: ['كراميل الدبس', 'مشمش مجفف', 'لوز محمص', 'كاكاو خام'],
    tastingNotesEn: ['Date Caramel', 'Dried Apricot', 'Roasted Almond', 'Raw Cocoa'],
    primaryFlavorGroup: 'sweet',
    sensoryScores: {
      acidity: 3.7,
      sweetness: 4.7,
      body: 4.4,
      aroma: 4.5,
      aftertaste: 4.6
    },
    recommendedMethods: ['v60', 'espresso', 'frenchpress']
  },
  {
    id: 'ethiopia-yirgacheffe',
    nameAr: 'إثيوبيا يرغاتشيف شيلشيليه',
    nameEn: 'Ethiopia Yirgacheffe Chelchele',
    originAr: 'إثيوبيا',
    originEn: 'Ethiopia',
    regionAr: 'غيديو - يرغاتشيف (Gedeo)',
    regionEn: 'Gedeo Zone, Yirgacheffe',
    farmAr: 'محطة معالجة شيلشيليه الحرفية',
    farmEn: 'Chelchele Artisan Washing Station',
    altitude: 2100,
    processingAr: 'مغسولة كلاسيكية (Fully Washed)',
    processingEn: 'Fully Washed',
    processingType: 'washed',
    varietalAr: 'سلالات إرث كوروومي (Kurume / Heirloom)',
    varietalEn: 'Kurume Heirloom',
    roastLevel: 'light',
    roastLevelAr: 'تحميص خفيف أومني (Light)',
    roastLevelEn: 'Light Nordic Style',
    price: 74,
    isSaudi: false,
    featured: true,
    descriptionAr: 'أيقونة القهوة الإثيوبية المغسولة بأنقى مياه المرتفعات؛ انطباع شاي الإيرل غراي مع حمضيات البرغموت الزاهية والدراق الأبيض العطري.',
    descriptionEn: 'The benchmark of delicate washed Ethiopian coffees. Earl grey tea notes infused with sparkling bergamot, white peach, and jasmine florals.',
    tastingNotesAr: ['برغموت زاهٍ', 'دراق أبيض', 'شاي أسود معطر', 'عسل خفيف'],
    tastingNotesEn: ['Sparkling Bergamot', 'White Peach', 'Black Floral Tea', 'Light Honey'],
    primaryFlavorGroup: 'fruity',
    sensoryScores: {
      acidity: 4.9,
      sweetness: 4.2,
      body: 3.3,
      aroma: 4.9,
      aftertaste: 4.5
    },
    recommendedMethods: ['v60', 'chemex', 'aeropress']
  },
  {
    id: 'colombia-geisha-finca',
    nameAr: 'كولومبيا غيشا فينكا الفاخرة',
    nameEn: 'Colombia Geisha Finca Paraiso',
    originAr: 'كولومبيا',
    originEn: 'Colombia',
    regionAr: 'كاوكا - بييندامو (Cauca)',
    regionEn: 'Cauca, Piendamó',
    farmAr: 'مزرعة الفردوس - إكوانيا ريفيرا',
    farmEn: 'Finca El Paraiso',
    altitude: 1980,
    processingAr: 'تخمير لاهوائي مزدوج مع صدمة حرارية',
    processingEn: 'Double Anaerobic Thermal Shock',
    processingType: 'anaerobic',
    varietalAr: 'غيشا نقية 100% (Green Tip Geisha)',
    varietalEn: '100% Green Tip Geisha',
    roastLevel: 'light',
    roastLevelAr: 'تحميص خفيف تنافسي (Competition Light)',
    roastLevelEn: 'Competition Light Roast',
    price: 130,
    isSaudi: false,
    featured: true,
    badgeAr: 'محصول بطولات',
    badgeEn: 'Championship Lot',
    descriptionAr: 'تحفة بستانية حائزة على جوائز دولية بمعالجة الصدمة الحرارية المعقدة. تعبير نقي عن زهر البرتقال، المانجو الاستوائي، وقوام حريري يأسرك.',
    descriptionEn: 'An international award winner featuring precision thermal shock processing. Unveils notes of orange blossom, lush tropical mango, and a silky tea-like structure.',
    tastingNotesAr: ['زهر البرتقال', 'مانجو استوائي', 'مشمش أحمر', 'ملمس حريري'],
    tastingNotesEn: ['Orange Blossom', 'Tropical Mango', 'Red Peach', 'Silky Body'],
    primaryFlavorGroup: 'floral',
    sensoryScores: {
      acidity: 4.8,
      sweetness: 4.8,
      body: 3.6,
      aroma: 5.0,
      aftertaste: 4.9
    },
    recommendedMethods: ['v60', 'chemex']
  },
  {
    id: 'yemen-harazi',
    nameAr: 'اليمن حرازي العقيق الأسود',
    nameEn: 'Yemen Harazi Black Agate',
    originAr: 'اليمن السعيد',
    originEn: 'Yemen',
    regionAr: 'جبال حراز الشاهقة - صنعاء',
    regionEn: 'Haraz High Mountains, Sana\'a',
    farmAr: 'مدرجات آل حراز القديمة',
    farmEn: 'Ancient Harazi Terraces',
    altitude: 2250,
    processingAr: 'مجففة طبيعياً على الأسِرّة المرفوعة',
    processingEn: 'Natural Sun-Dried on Raised Beds',
    processingType: 'natural',
    varietalAr: 'عديني وجعدي تراثي (Udaini & Jaadi)',
    varietalEn: 'Udaini & Jaadi Heirloom',
    roastLevel: 'medium',
    roastLevelAr: 'تحميص متوسط متوازن',
    roastLevelEn: 'Balanced Medium Roast',
    price: 110,
    isSaudi: false,
    featured: true,
    badgeAr: 'تراث أسطوري',
    badgeEn: 'Mythical Heritage',
    descriptionAr: 'من مهد القهوة التاريخي في جبال حراز المعلقة بين السحاب. قوام مخملي مكثف مع نكهات الشوكولاتة الداكنة المعتقة، حب الهيل، والتين المجفف.',
    descriptionEn: 'From ancient cliff-hanging stone terraces at 2250 meters. Features a decadent velvet body layered with bittersweet dark chocolate, green cardamom, and rich fig.',
    tastingNotesAr: ['شوكولاتة داكنة 85%', 'هيل أخضر', 'تين مجفف', 'سكر بني'],
    tastingNotesEn: ['85% Dark Chocolate', 'Green Cardamom', 'Dried Figs', 'Brown Muscovado'],
    primaryFlavorGroup: 'spiced',
    sensoryScores: {
      acidity: 3.4,
      sweetness: 4.4,
      body: 4.9,
      aroma: 4.7,
      aftertaste: 4.8
    },
    recommendedMethods: ['espresso', 'v60', 'frenchpress']
  },
  {
    id: 'panama-boquete-pacamara',
    nameAr: 'بنما بوكيتي باكامارا',
    nameEn: 'Panama Boquete Pacamara',
    originAr: 'بنما',
    originEn: 'Panama',
    regionAr: 'وادي بوكيتي - بركان بارو',
    regionEn: 'Boquete Valley, Volcán Barú',
    farmAr: 'مزرعة السحاب البركانية',
    farmEn: 'Hacienda La Nube',
    altitude: 1750,
    processingAr: 'مجففة لاهوائية بطيئة (Slow Natural)',
    processingEn: 'Slow Natural Anaerobic',
    processingType: 'natural',
    varietalAr: 'باكامارا عملاقة (Giant Pacamara)',
    varietalEn: 'Giant Pacamara',
    roastLevel: 'medium-light',
    roastLevelAr: 'تحميص متوسط-خفيف',
    roastLevelEn: 'Medium-Light Roast',
    price: 98,
    isSaudi: false,
    featured: false,
    descriptionAr: 'حبات باكامارا عملاقة من تربة بركان بارو الخصبة. حلاوة مكثفة تحاكي التفاح الأحمر المكرمل والقرفة مع قوام كريمي أنيق.',
    descriptionEn: 'Giant Pacamara beans grown in rich volcanic soils. Intense sweetness of caramelised red apple, sweet cinnamon stick, and a creamy rounded finish.',
    tastingNotesAr: ['تفاح أحمر مكرمل', 'قرفة دافئة', 'فانيليا طبيعية', 'قوام كريمي'],
    tastingNotesEn: ['Caramel Red Apple', 'Warm Cinnamon', 'Natural Vanilla', 'Creamy Body'],
    primaryFlavorGroup: 'nutty',
    sensoryScores: {
      acidity: 4.1,
      sweetness: 4.6,
      body: 4.3,
      aroma: 4.4,
      aftertaste: 4.4
    },
    recommendedMethods: ['aeropress', 'v60', 'espresso']
  },
  {
    id: 'kenya-nyeri-sl28',
    nameAr: 'كينيا نيري قمم الرواندو',
    nameEn: 'Kenya Nyeri SL28 Reserve',
    originAr: 'كينيا',
    originEn: 'Kenya',
    regionAr: 'منحدرات جبل كينيا - نيري (Nyeri)',
    regionEn: 'Mount Kenya Slopes, Nyeri',
    farmAr: 'تعاونية الرواندو الفلاحية',
    farmEn: 'Rwandu Farmers Cooperative',
    altitude: 1880,
    processingAr: 'غسيل كيني كلاسيكي مزدوج (Double Washed)',
    processingEn: 'Traditional Double Washed (72h)',
    processingType: 'washed',
    varietalAr: 'سلالة SL28 و SL34 الأصيلة',
    varietalEn: 'SL28 & SL34 Varietals',
    roastLevel: 'light',
    roastLevelAr: 'تحميص خفيف ناصع',
    roastLevelEn: 'Crisp Light Roast',
    price: 82,
    isSaudi: false,
    featured: false,
    descriptionAr: 'حموضة فسفورية مميزة وانفجار نكهات التوت الأسود الكشمش والجريب فروت الوردي مع حلاوة السكر البني اللذيذ.',
    descriptionEn: 'Electric phosphoric acidity showcasing classic blackcurrant, pink grapefruit, and crisp sweet red berries balanced by raw brown sugar.',
    tastingNotesAr: ['توت أسود (كشمش)', 'جريب فروت وردي', 'سكر قصب خام', 'حمضيات متلألئة'],
    tastingNotesEn: ['Blackcurrant', 'Pink Grapefruit', 'Raw Cane Sugar', 'Sparkling Citrus'],
    primaryFlavorGroup: 'fruity',
    sensoryScores: {
      acidity: 5.0,
      sweetness: 4.1,
      body: 3.8,
      aroma: 4.7,
      aftertaste: 4.6
    },
    recommendedMethods: ['v60', 'chemex', 'coldbrew']
  }
];
