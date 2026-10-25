export interface WaterProfile {
  tds: number; // ppm (mg/L)
  gh: number;  // General Hardness (Ca2+ & Mg2+) as CaCO3 ppm
  kh: number;  // Alkalinity (HCO3-) as CaCO3 ppm
  ph: number;
}

export interface WaterEvaluationResult {
  score: number; // 0 - 100
  status: 'ideal' | 'sour_risk' | 'bitter_risk' | 'flat_empty' | 'scale_risk';
  statusAr: string;
  statusEn: string;
  badgeClass: string;
  explanationAr: string;
  explanationEn: string;
  recommendationsAr: string[];
  recommendationsEn: string[];
  calciumPct: number;
  magnesiumPct: number;
  bufferRatio: number;
}

export const WATER_PRESETS: Record<string, { nameAr: string; nameEn: string; profile: WaterProfile }> = {
  sca_ideal: {
    nameAr: 'معيار الجمعية العالمية للقهوة (SCA Gold Standard)',
    nameEn: 'SCA Benchmark Target',
    profile: { tds: 150, gh: 68, kh: 40, ph: 7.0 }
  },
  third_wave: {
    nameAr: 'مياه ويف ثيرد كلاسيك (Third Wave Mineral Blend)',
    nameEn: 'Third Wave Mineral Water',
    profile: { tds: 145, gh: 75, kh: 35, ph: 7.1 }
  },
  soft_volcanic: {
    nameAr: 'مياه ينابيع بركانية ناعمة (Soft Highland Spring)',
    nameEn: 'Soft Highland Spring Water',
    profile: { tds: 85, gh: 48, kh: 28, ph: 6.8 }
  },
  tap_water: {
    nameAr: 'مياه الصنبور غير المفلترة (Municipal Tap Water)',
    nameEn: 'Unfiltered Municipal Tap',
    profile: { tds: 320, gh: 190, kh: 110, ph: 7.8 }
  },
  ro_distilled: {
    nameAr: 'مياه التناضح العكسي الخالية (Zero RO / Distilled)',
    nameEn: 'Pure Zero RO / Distilled',
    profile: { tds: 8, gh: 4, kh: 4, ph: 6.2 }
  }
};

export function evaluateWaterProfile(profile: WaterProfile): WaterEvaluationResult {
  const { tds, gh, kh, ph } = profile;

  let penalty = 0;

  // TDS penalty (ideal ~150, acceptable 75 - 250)
  if (tds < 75) {
    penalty += Math.min(35, (75 - tds) * 0.5);
  } else if (tds > 250) {
    penalty += Math.min(35, (tds - 250) * 0.25);
  } else {
    penalty += Math.abs(tds - 150) * 0.08;
  }

  // GH penalty (ideal ~68, acceptable 50 - 175)
  if (gh < 50) {
    penalty += Math.min(25, (50 - gh) * 0.5);
  } else if (gh > 175) {
    penalty += Math.min(30, (gh - 175) * 0.3);
  } else {
    penalty += Math.abs(gh - 68) * 0.12;
  }

  // KH penalty (ideal ~40, acceptable 30 - 75)
  if (kh < 30) {
    penalty += Math.min(25, (30 - kh) * 0.6);
  } else if (kh > 75) {
    penalty += Math.min(35, (kh - 75) * 0.5);
  } else {
    penalty += Math.abs(kh - 40) * 0.15;
  }

  // pH penalty (ideal 7.0, acceptable 6.5 - 7.5)
  if (ph < 6.5) {
    penalty += (6.5 - ph) * 20;
  } else if (ph > 7.5) {
    penalty += (ph - 7.5) * 25;
  }

  const score = Math.max(10, Math.min(100, Math.round(100 - penalty)));

  // Determine diagnosis
  let status: WaterEvaluationResult['status'] = 'ideal';
  let statusAr = 'ماء متوازن ومثالي (SCA Golden Extraction)';
  let statusEn = 'SCA Golden Extraction Zone';
  let badgeClass = 'status-ideal';
  let explanationAr = 'محتوى أملاح وعسر متناسق جداً؛ يذيب الأحماض الفاكهية والسكريات العطرية بأعلى كفاءة دون ترسبات.';
  let explanationEn = 'Exceptional mineral harmony. Maximizes floral and citric extraction yield with optimal sweetness.';

  const recsAr: string[] = [];
  const recsEn: string[] = [];

  if (tds < 40 || gh < 25) {
    status = 'flat_empty';
    statusAr = 'ماء مفرغ / فقير بالأملاح (Flat & Under-Extracting)';
    statusEn = 'Flat & Mineral-Deficient';
    badgeClass = 'status-warning';
    explanationAr = 'نقص حاد في أيونات الكالسيوم والمغنيسيوم؛ الماء يفتقر للقدرة على التقاط مركبات النكهة، مما ينتج كوباً باهتاً وحاد الحموضة المزعجة.';
    explanationEn: 'Severe shortage of Ca2+/Mg2+ ions. Water lacks mineral carriers to dissolve flavor compounds, resulting in a hollow, sour cup.';
    recsAr.push('أضف أملاح مغنيسيوم (كبريتات المغنيسيوم Epsom Salt) لتعزيز الإيحاءات الفاكهية.');
    recsAr.push('ارفع القلوية قليلاً عبر كمية ضئيلة من بيكربونات الصوديوم.');
    recsEn.push('Dose food-grade magnesium sulfate (Epsom salt) to bind bright fruit acids.');
    recsEn.push('Add a pinch of sodium bicarbonate to lift alkalinity buffer.');
  } else if (kh > 85 || ph > 7.6) {
    status = 'sour_risk';
    statusAr = 'قلوية مرتفعة تمحو النكهات (High Alkalinity Buffer)';
    statusEn = 'Excess Buffer / Muted Acidity';
    badgeClass = 'status-danger';
    explanationAr = 'القلوية العالية (KH) تعمل كدرع إسفنجي يبتلع ويحيّد حموضة القهوة الزاهية، مما يحول المحاصيل الفاخرة إلى مذاق طباشيري مسطح وممل.';
    explanationEn: 'High bicarbonate buffer acts as an acid sponge, neutralizing delicate fruity notes and leaving an earthy, chalky palate.';
    recsAr.push('خفف الماء بنسبة 40% من مياه منزوعة المعادن (RO) لخفض القلوية.');
    recsAr.push('استخدم فلاتر تقليل العسر الكربوني (Ion Exchange Filters).');
    recsEn.push('Dilute brew water 40% with pure RO water to reduce bicarbonate.');
    recsEn.push('Deploy decarbonizing weak-acid ion-exchange filter.');
  } else if (tds > 260 || gh > 180) {
    status = 'bitter_risk';
    statusAr = 'عسر زائد وخطر مرارة وترسبات (Over-Extraction Risk)';
    statusEn = 'Excess Hardness & Bitterness';
    badgeClass = 'status-danger';
    explanationAr = 'كثرة الأملاح تعوق تدفق الماء وتستخلص المركبات الثقيلة المرة غير المحببة، كما تهدد بتكوين كلس وترسبات داخل الغلايات.';
    explanationEn: 'Excessive mineral density extracts heavy astringent tannins and poses severe boiler scale risk.';
    recsAr.push('قم بتركيب وحدة تناضح عكسي (RO) مع صمام خلط (Remineralization Blending).');
    recsAr.push('نظف أدوات وغلايات التحضير بانتظام لإزالة ترسبات الكالسيوم.');
    recsEn.push('Install a reverse osmosis unit with blending bypass.');
    recsEn.push('Perform periodic descaling of kettle heating elements.');
  } else {
    recsAr.push('درجة مثالية! حافظ على استقرار فلتر الكربون ومصدر المياه الحالي.');
    recsAr.push('مثالي لجميع محاصيل الفلتر والإسبريسو الحرفي.');
    recsEn.push('Optimal calibration. Maintain filter cartridges regularly.');
    recsEn.push('Suited for competition pour-overs and specialty espresso.');
  }

  const bufferRatio = gh > 0 ? Math.round((kh / gh) * 100) / 100 : 0.5;

  return {
    score,
    status,
    statusAr,
    statusEn,
    badgeClass,
    explanationAr,
    explanationEn,
    recommendationsAr: recsAr,
    recommendationsEn: recsEn,
    calciumPct: Math.round((gh * 0.6) * 10) / 10,
    magnesiumPct: Math.round((gh * 0.4) * 10) / 10,
    bufferRatio
  };
}
