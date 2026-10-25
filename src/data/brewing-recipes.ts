export interface PulseStep {
  id: string;
  nameAr: string;
  nameEn: string;
  startSec: number;
  endSec: number;
  waterPctOfTotal: number; // percentage of total water target, e.g. 0.20 for bloom
  cumulativePct: number;
  descriptionAr: string;
  descriptionEn: string;
  techniqueTipAr: string;
  techniqueTipEn: string;
}

export interface GrinderRecommendation {
  brand: string;
  model: string;
  clicksOrDial: string;
  microns: number;
}

export interface BrewingMethod {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'pourover' | 'immersion' | 'pressure' | 'cold';
  taglineAr: string;
  taglineEn: string;
  iconSvg: string;
  defaultDose: number; // grams
  doseRange: [number, number];
  defaultRatio: number; // e.g. 16 means 1:16
  ratioRange: [number, number];
  ratioOptions: number[];
  targetTimeSec: number;
  grindMicrons: [number, number];
  grindDescriptionAr: string;
  grindDescriptionEn: string;
  grinders: Record<string, string>; // e.g. 'c40': '23-26 clicks'
  tempByRoast: {
    light: number;       // e.g. 94°C
    'medium-light': number; // 92°C
    medium: number;      // 90°C
    dark: number;        // 88°C
  };
  steps: PulseStep[];
  baristaNotesAr: string;
  baristaNotesEn: string;
}

export const BREWING_METHODS: BrewingMethod[] = [
  {
    id: 'v60',
    nameAr: 'قمع الترشيح V60',
    nameEn: 'Hario V60 Pour-Over',
    category: 'pourover',
    taglineAr: 'صفاء فائق وإبراز دقيق للإيحاءات الزهرية والفاكهية',
    taglineEn: 'Pristine clarity highlighting delicate florals & bright acids',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16l-5 9v5l-3 2v-7L4 4z"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="8" y1="2" x2="8" y2="4"/><line x1="16" y1="2" x2="16" y2="4"/></svg>`,
    defaultDose: 18,
    doseRange: [12, 30],
    defaultRatio: 15,
    ratioRange: [14, 18],
    ratioOptions: [14, 15, 16, 17],
    targetTimeSec: 165, // 2:45
    grindMicrons: [650, 780],
    grindDescriptionAr: 'متوسطة النعومة (رمل شاطئي خفيف)',
    grindDescriptionEn: 'Medium-Fine (Fine sea sand)',
    grinders: {
      'Comandante C40': '23 - 26 نقرة (Clicks)',
      'Timemore C3': '14 - 16 نقرة (Clicks)',
      'Fellow Ode Gen 2': '4.1 - 5.0 Dial',
      'DF64 Gen 2': '45 - 55 مؤشر',
      'Baratza Encore': '13 - 15 رقم'
    },
    tempByRoast: {
      light: 94,
      'medium-light': 92,
      medium: 90,
      dark: 88
    },
    steps: [
      {
        id: 'v60-bloom',
        nameAr: 'الترطيب الأولي (Bloom)',
        nameEn: 'Bloom & Degassing',
        startSec: 0,
        endSec: 45,
        waterPctOfTotal: 0.20,
        cumulativePct: 0.20,
        descriptionAr: 'صب دائري هادئ من المركز للخارج لترطيب كامل القهوة وطرد غاز CO2.',
        descriptionEn: 'Gentle spiral pour from center outward to saturate bed and release CO2.',
        techniqueTipAr: 'حرك القمع بحركة دائرية خفيفة (Swirl) لضمان تبلل كافة جزيئات القهوة بالتساوي.',
        techniqueTipEn: 'Perform a gentle swirl of the dripper to ensure zero dry pockets.'
      },
      {
        id: 'v60-pour1',
        nameAr: 'الصبة الأولى - بناء القوام',
        nameEn: 'First Pulse - Body & Acidity',
        startSec: 45,
        endSec: 75,
        waterPctOfTotal: 0.35,
        cumulativePct: 0.55,
        descriptionAr: 'صب عمودي منتظم بتدفق ثابت (4-5 مل/ثانية) بحلقات دائرية متحدة المركز.',
        descriptionEn: 'Steady vertical stream in concentric rings without touching filter paper.',
        techniqueTipAr: 'حافظ على ارتفاع الإبريق منخفضاً لتفادي تكسير قاع القهوة وتكوين قنوات مائية.',
        techniqueTipEn: 'Keep kettle spout 2-3 inches above bed to prevent turbulent channeling.'
      },
      {
        id: 'v60-pour2',
        nameAr: 'الصبة الثانية - التوازن والوضوح',
        nameEn: 'Second Pulse - Balance',
        startSec: 75,
        endSec: 105,
        waterPctOfTotal: 0.25,
        cumulativePct: 0.80,
        descriptionAr: 'صب ناعم في المنتصف للحفاظ على مستوى الماء ودرجة الحرارة المثالية.',
        descriptionEn: 'Smooth center pour maintaining steady thermal mass and gentle extraction.',
        techniqueTipAr: 'ركز في الثلث الأوسط من السطح للمحافظة على معدل استخلاص متزن.',
        techniqueTipEn: 'Focus on center third of the bed to maintain balanced flow rate.'
      },
      {
        id: 'v60-finish',
        nameAr: 'الصبة الختامية والنزول الأخير',
        nameEn: 'Final Pour & Drawdown',
        startSec: 105,
        endSec: 165,
        waterPctOfTotal: 0.20,
        cumulativePct: 1.0,
        descriptionAr: 'إكمال إجمالي وزن الماء بحركة دائرية خفيفة وترك القهوة تترشح حتى يستقر السطح المستوي.',
        descriptionEn: 'Complete target water weight, single swirl, and allow drawdown to finish flat.',
        techniqueTipAr: 'هزة دائرية أخيرة (Rao Swirl) تعطي قاعاً مسطحاً كالمرآة واستخلاصاً شاملاً.',
        techniqueTipEn: 'A light finishing swirl settles a flat bed ensuring even extraction.'
      }
    ],
    baristaNotesAr: 'قمع V60 يبرز نقاء المحصول وحمضيته العطرية. التزم بمعدل تدفق متزن 4-5 مل/ثانية واستخدم فلاتر أصلية مغسولة بماء مغلي قبل التحضير.',
    baristaNotesEn: 'V60 demands precision flow rate (4-5 ml/s). Always rinse filter thoroughly with near-boiling water to eliminate paper taste.'
  },
  {
    id: 'chemex',
    nameAr: 'كمكس ثلاثي الفلترة (Chemex)',
    nameEn: 'Chemex Classic 6-Cup',
    category: 'pourover',
    taglineAr: 'نقاء بلوري، ملمس كالحرير، وخلو تام من الرواسب والزيوت الثقيلة',
    taglineEn: 'Crystalline cup purity with rich sweetness and zero sediment',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l-4 8 4 10H6l4-10-4-8z"/><line x1="8" y1="12" x2="16" y2="12"/><path d="M12 3v2"/></svg>`,
    defaultDose: 30,
    doseRange: [20, 50],
    defaultRatio: 16,
    ratioRange: [15, 17],
    ratioOptions: [15, 16, 17],
    targetTimeSec: 240, // 4:00
    grindMicrons: [800, 950],
    grindDescriptionAr: 'متوسطة الخشونة (ملح كوشير خشن)',
    grindDescriptionEn: 'Medium-Coarse (Coarse kosher salt)',
    grinders: {
      'Comandante C40': '28 - 32 نقرة (Clicks)',
      'Timemore C3': '18 - 21 نقرة (Clicks)',
      'Fellow Ode Gen 2': '6.1 - 7.0 Dial',
      'DF64 Gen 2': '65 - 75 مؤشر',
      'Baratza Encore': '18 - 21 رقم'
    },
    tempByRoast: {
      light: 95,
      'medium-light': 93,
      medium: 91,
      dark: 89
    },
    steps: [
      {
        id: 'chemex-bloom',
        nameAr: 'ترطيب عميق (Bloom)',
        nameEn: 'Extended Bloom',
        startSec: 0,
        endSec: 50,
        waterPctOfTotal: 0.18,
        cumulativePct: 0.18,
        descriptionAr: 'صب كمية وفيرة من الماء لترطيب القهوة وتفتيح ألياف الفلتر الورقي السميك.',
        descriptionEn: 'Pour generous bloom to saturate deep bed through thick bond filter.',
        techniqueTipAr: 'تأكد من وضع الجانب الثلاثي الطبقات من الفلتر في اتجاه ميزاب الصب لمنع انحباس الهواء.',
        techniqueTipEn: 'Position 3-layer fold towards the spout to prevent air lock seal.'
      },
      {
        id: 'chemex-pour1',
        nameAr: 'الصبة الأولى - تيار حلزوني هادئ',
        nameEn: 'First Main Pour',
        startSec: 50,
        endSec: 110,
        waterPctOfTotal: 0.37,
        cumulativePct: 0.55,
        descriptionAr: 'صب حلزوني واسع يتجنب ملامسة حواف الفلتر بمقدار 1 سم.',
        descriptionEn: 'Broad spiral pour keeping 1cm away from paper wall.',
        techniqueTipAr: 'حافظ على تيار عمودي مستمر يقلل من فقاعات الهواء العشوائية.',
        techniqueTipEn: 'Maintain smooth column of water to prevent agitation of fines.'
      },
      {
        id: 'chemex-pour2',
        nameAr: 'الصبة الثانية - استخلاص الحلاوة',
        nameEn: 'Second Main Pour',
        startSec: 110,
        endSec: 170,
        waterPctOfTotal: 0.27,
        cumulativePct: 0.82,
        descriptionAr: 'رفع منسوب المياه لتعزيز الضغط الهيدروستاتيكي فوق طبقة البُن.',
        descriptionEn: 'Elevate water level gently to maintain constant hydrostatic head.',
        techniqueTipAr: 'صب بحركة إهليلجية لطيفة لتحفيز استخلاص السكريات المتأخرة.',
        techniqueTipEn: 'Pour gently in ellipses to extract lingering natural sugars.'
      },
      {
        id: 'chemex-drawdown',
        nameAr: 'الصبة الأخيرة والترشيح البلوري',
        nameEn: 'Final Pour & Clarification',
        startSec: 170,
        endSec: 240,
        waterPctOfTotal: 0.18,
        cumulativePct: 1.0,
        descriptionAr: 'إكمال الوزن الكلي، والسماح للترشيح بالنزول البطيء عبر الفلتر السميك.',
        descriptionEn: 'Finish water target, observe sparkling transparent coffee stream.',
        techniqueTipAr: 'ارفع الفلتر مباشرة عند انتهاء الترشيح لتجنب نزول المرارة الأخيرة.',
        techniqueTipEn: 'Discard filter as soon as flow turns to separate drips.'
      }
    ],
    baristaNotesAr: 'فلتر كمكس أثخن بنسبة 30% من الفلاتر العادية؛ يحبس الزيوت والشوائب ليعطيك كوباً بلورياً براقاً بحلاوة نقية تشبه الشاي الفاخر.',
    baristaNotesEn: 'Chemex specialty bonded filters remove all bitter sediment and oils, producing a remarkably clean, sweet, and articulate cup.'
  },
  {
    id: 'aeropress',
    nameAr: 'إيروبرس - الطريقة المقلوبة (Inverted)',
    nameEn: 'AeroPress Inverted Method',
    category: 'immersion',
    taglineAr: 'مرونة مطلقة، تحكم كامل بالاستخلاص، وقوام حريري غني بالسكريات',
    taglineEn: 'Unrivaled versatility, total immersion control & juicy sweetness',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="4" width="10" height="12" rx="1"/><line x1="9" y1="2" x2="15" y2="2"/><line x1="12" y1="2" x2="12" y2="4"/><path d="M5 16h14v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2z"/><line x1="12" y1="16" x2="12" y2="20"/></svg>`,
    defaultDose: 16,
    doseRange: [13, 22],
    defaultRatio: 14,
    ratioRange: [12, 16],
    ratioOptions: [12, 13, 14, 15],
    targetTimeSec: 120, // 2:00
    grindMicrons: [550, 700],
    grindDescriptionAr: 'ناعمة-متوسطة (أخشن قليلاً من الإسبريسو)',
    grindDescriptionEn: 'Medium-Fine (Slightly coarser than espresso)',
    grinders: {
      'Comandante C40': '18 - 22 نقرة (Clicks)',
      'Timemore C3': '12 - 14 نقرة (Clicks)',
      'Fellow Ode Gen 2': '3.0 - 4.0 Dial',
      'DF64 Gen 2': '35 - 45 مؤشر',
      'Baratza Encore': '11 - 13 رقم'
    },
    tempByRoast: {
      light: 92,
      'medium-light': 90,
      medium: 88,
      dark: 85
    },
    steps: [
      {
        id: 'aero-pour',
        nameAr: 'الصب الكامل والتقليب (Infusion)',
        nameEn: 'Full Pour & Stir',
        startSec: 0,
        endSec: 30,
        waterPctOfTotal: 1.0,
        cumulativePct: 1.0,
        descriptionAr: 'صب سريع لكامل كمية الماء، ثم تقليب البُن بملعقة مسطحة 4 مرات برفق.',
        descriptionEn: 'Rapid pour of total water, followed by 4 gentle back-and-forth paddle stirs.',
        techniqueTipAr: 'الطريقة المقلوبة تمنع تسرب أي قطرة غير مستخلصة إلى الكوب.',
        techniqueTipEn: 'Inverted orientation guarantees 100% controlled immersion time.'
      },
      {
        id: 'aero-steep',
        nameAr: 'النقع الهادئ (Steep & Lock)',
        nameEn: 'Immersion & Cap Lock',
        startSec: 30,
        endSec: 85,
        waterPctOfTotal: 0.0,
        cumulativePct: 1.0,
        descriptionAr: 'ترك القهوة تنقع، وتركيب غطاء الفلتر المغسول بإحكام مع تفريغ الهواء الزائد.',
        descriptionEn: 'Rest coffee bed. Fasten pre-rinsed cap securely and purge remaining air.',
        techniqueTipAr: 'الفترة الزمنية هنا تبرز الحلاوة الطبيعية وتذيب المركبات العطرية الرقيقة.',
        techniqueTipEn: 'This resting window develops luscious sweetness without astringency.'
      },
      {
        id: 'aero-flip-press',
        nameAr: 'القلب والكبس الهوائي (Flip & Press)',
        nameEn: 'Flip & Gentle Press',
        startSec: 85,
        endSec: 120,
        waterPctOfTotal: 0.0,
        cumulativePct: 1.0,
        descriptionAr: 'قلب الأداة بثبات فوق السيرفر، والكبس بوزن الذراع ببطء لمدة 30-35 ثانية.',
        descriptionEn: 'Carefully flip onto decanter. Press steadily using arm weight over 30-35s.',
        techniqueTipAr: 'توقف فور سماع صوت الفحيح الهوائي (Hiss) لمنع استخلاص المرارة.',
        techniqueTipEn: 'Halt the plunge as soon as you hear the first hiss of escaping air.'
      }
    ],
    baristaNotesAr: 'طريقة تجمع بين عمق غمر القهوة (Immersion) والضغط الهوائي اللطيف. مثالية لاستخلاص إيحاءات السكر والكراميل العصيرية.',
    baristaNotesEn: 'Combines the best of full immersion body and gentle air pressure clarification. Produces a remarkably syrupy, sweet brew.'
  },
  {
    id: 'frenchpress',
    nameAr: 'المكبس الفرنسي (French Press)',
    nameEn: 'French Press Classic Immersion',
    category: 'immersion',
    taglineAr: 'قوام كلاسيكي ممتلئ، إحساس مخملي بالزيوت الطبيعية، وحلاوة عميقة',
    taglineEn: 'Full-bodied richness retaining velvety natural oils & dark cocoa notes',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="16" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="12" y1="2" x2="12" y2="4"/><circle cx="12" cy="14" r="1.5"/></svg>`,
    defaultDose: 25,
    doseRange: [18, 50],
    defaultRatio: 15,
    ratioRange: [14, 16],
    ratioOptions: [14, 15, 16],
    targetTimeSec: 300, // 5:00 Hoffman method
    grindMicrons: [950, 1150],
    grindDescriptionAr: 'خشنة متجانسة (حبات الملح الصخري)',
    grindDescriptionEn: 'Coarse & Uniform (Coarse rock salt)',
    grinders: {
      'Comandante C40': '32 - 36 نقرة (Clicks)',
      'Timemore C3': '22 - 25 نقرة (Clicks)',
      'Fellow Ode Gen 2': '8.0 - 9.0 Dial',
      'DF64 Gen 2': '75 - 85 مؤشر',
      'Baratza Encore': '26 - 30 رقم'
    },
    tempByRoast: {
      light: 95,
      'medium-light': 93,
      medium: 91,
      dark: 88
    },
    steps: [
      {
        id: 'fp-pour',
        nameAr: 'صب سريع وكامل (Total Immersion)',
        nameEn: 'Total Immersion Pour',
        startSec: 0,
        endSec: 30,
        waterPctOfTotal: 1.0,
        cumulativePct: 1.0,
        descriptionAr: 'صب قوي وشامل لكامل كمية الماء لضمان غمر حبيبات القهوة وتكوين القشرة.',
        descriptionEn: 'Vigorous pour of total water ensuring all grounds rise into a floating crust.',
        techniqueTipAr: 'لا تقلب الآن؛ دع القشرة العائمة تحتفظ بدرجة الحرارة وثاني أكسيد الكربون.',
        techniqueTipEn: 'Do not stir yet; let crust form naturally to insulate the brew.'
      },
      {
        id: 'fp-steep4m',
        nameAr: 'النقع العميق (4 دقائق)',
        nameEn: '4-Minute Resting Steep',
        startSec: 30,
        endSec: 240,
        waterPctOfTotal: 0.0,
        cumulativePct: 1.0,
        descriptionAr: 'انتظار صامت يتيح للماء الساخن استخلاص كافة الزيوت والسكريات الثقيلة.',
        descriptionEn: 'Undisturbed steeping allowing water to extract rich lipids and body.',
        techniqueTipAr: 'غطِ الإبريق بالمكبس دون إنزاله للحفاظ على حرارة المحلول.',
        techniqueTipEn: 'Rest plunger on top without pressing to retain radiant heat.'
      },
      {
        id: 'fp-break-skim',
        nameAr: 'كسر القشرة وقشط الرغوة (Break & Skim)',
        nameEn: 'Crust Break & Skim (Hoffmann Technique)',
        startSec: 240,
        endSec: 270,
        waterPctOfTotal: 0.0,
        cumulativePct: 1.0,
        descriptionAr: 'كسر القشرة بملعقة برفق؛ معظم البُن سيهبط للقاع. ازل الرغوة البيضاء الطافية.',
        descriptionEn: 'Gently break crust; grounds sink. Skim floating white foam and silt with 2 spoons.',
        techniqueTipAr: 'قشط الرغوة يزيل المرارة غير المرغوبة ويجعل الكوب نظيفاً جداً.',
        techniqueTipEn: 'Skimming removes astringent micro-fines, dramatically clarifying flavor.'
      },
      {
        id: 'fp-plunge',
        nameAr: 'إنزال المصفاة التصفية',
        nameEn: 'Surface Plunge & Pour',
        startSec: 270,
        endSec: 300,
        waterPctOfTotal: 0.0,
        cumulativePct: 1.0,
        descriptionAr: 'إنزال المكبس فقط حتى سطح السائل (دون كبس القاع) والصب الهادئ في الأكواب.',
        descriptionEn: 'Insert filter just below surface level. Pour gently without agitating bottom bed.',
        techniqueTipAr: 'لا تكبس القاع أبداً! فقط اجعل المصفاة تعمل كحاجز أثناء الصب.',
        techniqueTipEn: 'Never press to the floor. Use mesh merely as a baffle to trap grounds.'
      }
    ],
    baristaNotesAr: 'طريقة كلاسيكية ممتازة للمحاصيل ذات القوام الشوكولاتي كالبُن اليمني والعسيري. تكنيك قشط الرغوة يرفع جودة المكبس الفرنسي إلى مستوى استثنائي.',
    baristaNotesEn: 'Ideal for chocolate and molasses-heavy origins (Yemeni and Asiri). The crust-break and skimming technique elevates this brew to cafe quality.'
  },
  {
    id: 'espresso',
    nameAr: 'إسبريسو احترافي 9 بار (Espresso 9-Bar)',
    nameEn: '9-Bar Specialty Espresso',
    category: 'pressure',
    taglineAr: 'تركيز مكثف، كريما عسلية مخملية، وانفجار سكري متناغم في 28 ثانية',
    taglineEn: 'Dense syrupy concentration, golden crema & explosive tactile sensation',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    defaultDose: 18,
    doseRange: [16, 22],
    defaultRatio: 2.0, // 1:2 extraction ratio (18g in -> 36g out)
    ratioRange: [1.8, 2.5],
    ratioOptions: [1.8, 2.0, 2.2, 2.5],
    targetTimeSec: 28, // 28 seconds
    grindMicrons: [220, 320],
    grindDescriptionAr: 'ناعمة جداً حريرية (بودرة دقيقة متماسكة)',
    grindDescriptionEn: 'Ultra-Fine (Powdery consistency with slight clump)',
    grinders: {
      'Comandante C40 (Red Clix)': '12 - 16 نقرة (Clicks)',
      'Timemore C3 ESP': '7 - 9 نقرات (Clicks)',
      'Fellow Opus': '1.5 - 2.5 Dial',
      'DF64 Gen 2': '11 - 16 مؤشر',
      'Baratza Sette 270': '5 - 7 رقم'
    },
    tempByRoast: {
      light: 94,
      'medium-light': 93,
      medium: 92,
      dark: 90
    },
    steps: [
      {
        id: 'esp-preinfusion',
        nameAr: 'الترطيب الأولي منخفض الضغط (Pre-Infusion)',
        nameEn: 'Low Pressure Pre-Infusion (2-3 Bar)',
        startSec: 0,
        endSec: 7,
        waterPctOfTotal: 0.15,
        cumulativePct: 0.15,
        descriptionAr: 'ترطيب قرص البُن بضغط منخفض لتمديد الجزيئات ومنع تشكل القنوات (Channeling).',
        descriptionEn: 'Soaking the coffee puck under 2-3 bars to swell grounds and seal micro-fissures.',
        techniqueTipAr: 'استخدم أداة تفكيك التكتلات (WDT) ومكبس معاير (Calibrated Tamper) لتوزيع مثالي.',
        techniqueTipEn: 'Employ needle WDT distribution and level 30lb calibrated tamp.'
      },
      {
        id: 'esp-peak-pressure',
        nameAr: 'ذروة الاستخلاص 9 بار (Peak 9-Bar Flow)',
        nameEn: 'Peak 9-Bar Extraction',
        startSec: 7,
        endSec: 20,
        waterPctOfTotal: 0.60,
        cumulativePct: 0.75,
        descriptionAr: 'تدفق كستنائي متصل كذيل الفأر (Mouse Tail)، تتشكل فيه الكريما العسلية المعقدة.',
        descriptionEn: 'Rich mahogany mouse-tail stream building dense tigered crema and body.',
        techniqueTipAr: 'إذا سال الاستخلاص في أقل من 20 ثانية، صغّر درجة الطحن. إذا تجاوز 35، كبّرها.',
        techniqueTipEn: 'If flow exceeds 35s, coarsen grind. If below 20s, grind finer.'
      },
      {
        id: 'esp-drawout',
        nameAr: 'نهاية الاستخلاص وقطع التدفق (Cutoff)',
        nameEn: 'Cutoff & Blonde Phase',
        startSec: 20,
        endSec: 28,
        waterPctOfTotal: 0.25,
        cumulativePct: 1.0,
        descriptionAr: 'وصول المستخلص إلى الوزن المستهدف (36 جم) وقطع التدفق قبل تحول الكريما للون الشاحب.',
        descriptionEn: 'Reach 36g liquid target weight on precision scale and cut pump immediately.',
        techniqueTipAr: 'حرك فنجان الإسبريسو بالملعقة لمزج طبقة الكريما العلوية مع سوائل القاع السكرية.',
        techniqueTipEn: 'Stir with a demitasse spoon before sipping to harmonize layered density.'
      }
    ],
    baristaNotesAr: 'معيار الإسبريسو الحديث: 18 جم بُن ينتج 36 جم قهوة سائلة خلال 26-30 ثانية عند ضغط 9 بار وحرارة 93° مئوية.',
    baristaNotesEn: 'Golden modern ratio: 18g dry dose yields 36g liquid output in 26-30 seconds under 9-bar pump pressure.'
  },
  {
    id: 'coldbrew',
    nameAr: 'الترشيح البارد البطيء (Slow Cold Brew)',
    nameEn: 'Artisan Slow Cold Brew',
    category: 'cold',
    taglineAr: 'حلاوة طبيعية استثنائية، خلو كامل من الحموضة الحادة، وانتعاش صيفي لا يُنسى',
    taglineEn: 'Naturally sweet, low-acidity elixir steeped slowly over 18 hours',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="M12 18v4"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M2 12h6"/><path d="M18 12h4"/><path d="M4.93 19.07l4.24-4.24"/><path d="M14.83 9.17l4.24-4.24"/></svg>`,
    defaultDose: 60,
    doseRange: [30, 100],
    defaultRatio: 8, // 1:8 for concentrate, or 1:10
    ratioRange: [7, 10],
    ratioOptions: [7, 8, 9, 10],
    targetTimeSec: 64800, // 18 hours in seconds
    grindMicrons: [1100, 1400],
    grindDescriptionAr: 'خشنة جداً (حبيبات البرغل أو الفلفل الأسود المجروش)',
    grindDescriptionEn: 'Extra-Coarse (Coarse cracked peppercorns)',
    grinders: {
      'Comandante C40': '35 - 40 نقرة (Clicks)',
      'Timemore C3': '24 - 28 نقرة (Clicks)',
      'Fellow Ode Gen 2': '9.0 - 11.0 Dial',
      'DF64 Gen 2': '85 - 95 مؤشر',
      'Baratza Encore': '30 - 35 رقم'
    },
    tempByRoast: {
      light: 20, // room temp or ice water 4-20°C
      'medium-light': 18,
      medium: 15,
      dark: 12
    },
    steps: [
      {
        id: 'cb-steep-start',
        nameAr: 'الغمر بالماء البارد المفلتر',
        nameEn: 'Cold Filtered Immersion',
        startSec: 0,
        endSec: 60,
        waterPctOfTotal: 1.0,
        cumulativePct: 1.0,
        descriptionAr: 'صب ماء بارد نقي بدرجة حرارة الغرفة (أو ماء مثلج) بنسبة 1:8 على البُن الخشن.',
        descriptionEn: 'Pour pure chilled water at 1:8 ratio over extra-coarse grounds.',
        techniqueTipAr: 'استخدم ماءً بدرجة حرارة 18-20° مئوية للحصول على توازن سكري مثالي.',
        techniqueTipEn: 'Ambient 18-20°C water yields the richest sweetness extraction.'
      },
      {
        id: 'cb-steep-chill',
        nameAr: 'التخمير البطيء بالثلاجة (18 ساعة)',
        nameEn: 'Slow 18-Hour Refrigerated Steep',
        startSec: 60,
        endSec: 64800,
        waterPctOfTotal: 0.0,
        cumulativePct: 1.0,
        descriptionAr: 'حفظ الوعاء محكم الإغلاق في الثلاجة عند درجة 4° مئوية لمدة تتراوح بين 16-18 ساعة.',
        descriptionEn: 'Sealed cold steep at 4°C for 16-18 hours in complete dark chilled environment.',
        techniqueTipAr: 'لا تتجاوز 22 ساعة لتفادي استخلاص النكهات الخشبية والسيليلوزية.',
        techniqueTipEn: 'Do not exceed 22 hours to prevent woody cellulose extraction.'
      },
      {
        id: 'cb-filtration',
        nameAr: 'التصفية الدقيقة والتقديم',
        nameEn: 'Double Filtration & Serving',
        startSec: 64800,
        endSec: 65100,
        waterPctOfTotal: 0.0,
        cumulativePct: 1.0,
        descriptionAr: 'تصفية القهوة عبر فلتر ورقي أو قماش لإزالة الزيوت وحبيبات البُن الدقيقة، وتقديمها فوق مكعب ثلج نقي.',
        descriptionEn: 'Filter through paper or linen mesh. Serve chilled over a single clear ice block.',
        techniqueTipAr: 'المستخلص الناتج مركز (Concentrate)؛ يمكنك تخفيفه بماء نقي أو حليب بنسبة 1:1.',
        techniqueTipEn: 'Dilute this rich concentrate 1:1 with pure mineral water or whole milk.'
      }
    ],
    baristaNotesAr: 'استخلاص الماء البارد لا يذيب المركبات الحمضية المسببة للحرقان، مما يمنحك مشروباً حريراً حلواً كالشوكولاتة الباردة.',
    baristaNotesEn: 'Cold water extraction leaves behind harsh acidic oils, delivering an ultra-smooth, naturally sweet, cocoa-forward chilled beverage.'
  }
];
