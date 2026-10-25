import { BrewingMethod } from '../data/brewing-recipes';

export interface CalculatedBrewPlan {
  coffeeDoseGrams: number;
  ratio: number;
  totalWaterGrams: number;
  cupCount: number;
  recommendedTempC: number;
  grindMicronRange: [number, number];
  grinderSettings: Record<string, string>;
  stages: {
    id: string;
    nameAr: string;
    nameEn: string;
    startSec: number;
    endSec: number;
    durationSec: number;
    stageWaterGrams: number;
    cumulativeWaterGrams: number;
    descriptionAr: string;
    descriptionEn: string;
    techniqueTipAr: string;
    techniqueTipEn: string;
  }[];
  estimatedTdsPct: number; // e.g. 1.35%
  estimatedExtractionYieldPct: number; // e.g. 20.2%
}

export type RoastLevel = 'light' | 'medium-light' | 'medium' | 'dark';

export function calculateBrewPlan(
  method: BrewingMethod,
  doseGrams: number,
  ratio: number,
  roast: RoastLevel
): CalculatedBrewPlan {
  // Total water calculation
  let totalWater = Math.round(doseGrams * ratio);
  // For espresso, ratio is typically 1:2 (e.g. 18g dose -> 36g water output)
  if (method.id === 'espresso') {
    totalWater = Math.round(doseGrams * ratio);
  }

  // Estimated cups (approx 150ml - 200ml per cup, or 1 shot for espresso)
  const cupCount = method.id === 'espresso'
    ? (doseGrams >= 16 ? 2 : 1)
    : Math.max(1, Math.round(totalWater / 180));

  // Temperature based on roast degree
  const recommendedTempC = method.tempByRoast[roast] || 92;

  // Compute exact pulse steps grams
  let accumulatedWater = 0;
  const stages = method.steps.map((step, idx) => {
    const isLast = idx === method.steps.length - 1;
    let stepWater = Math.round(totalWater * step.waterPctOfTotal);
    accumulatedWater += stepWater;

    // ensure rounding matches totalWater exactly on the last water-adding step
    if (step.cumulativePct >= 0.99 && isLast) {
      stepWater = Math.max(0, totalWater - (accumulatedWater - stepWater));
      accumulatedWater = totalWater;
    }

    return {
      id: step.id,
      nameAr: step.nameAr,
      nameEn: step.nameEn,
      startSec: step.startSec,
      endSec: step.endSec,
      durationSec: step.endSec - step.startSec,
      stageWaterGrams: stepWater,
      cumulativeWaterGrams: Math.min(totalWater, Math.round(totalWater * step.cumulativePct)),
      descriptionAr: step.descriptionAr,
      descriptionEn: step.descriptionEn,
      techniqueTipAr: step.techniqueTipAr,
      techniqueTipEn: step.techniqueTipEn
    };
  });

  // Calculate estimated Extraction Yield (SCA Gold Cup Standard: 18% - 22% EY)
  // Brew Water retained by grounds: ~2g water retained per 1g dry coffee for filter, ~1.2g for espresso
  const waterRetainedRatio = method.id === 'espresso' ? 1.1 : 2.1;
  const beverageWeightGrams = Math.max(1, totalWater - (doseGrams * waterRetainedRatio));
  
  // Typical specialty TDS (Pour-over: ~1.25% - 1.45%, Espresso: ~8.5% - 10.5%)
  let baseTds = 1.35;
  if (method.id === 'espresso') {
    baseTds = 9.2;
  } else if (method.id === 'coldbrew') {
    baseTds = 2.1;
  } else if (method.id === 'chemex') {
    baseTds = 1.28;
  }

  // Slight adjustment based on roast solubility
  if (roast === 'dark') baseTds *= 1.08;
  else if (roast === 'light') baseTds *= 0.96;

  // EY% = (TDS% * Beverage Weight) / Coffee Dry Dose
  let estimatedExtractionYieldPct = ((baseTds / 100) * (method.id === 'espresso' ? totalWater : beverageWeightGrams) / doseGrams) * 100;
  estimatedExtractionYieldPct = Math.round(estimatedExtractionYieldPct * 10) / 10;

  return {
    coffeeDoseGrams: doseGrams,
    ratio,
    totalWaterGrams: totalWater,
    cupCount,
    recommendedTempC,
    grindMicronRange: method.grindMicrons,
    grinderSettings: method.grinders,
    stages,
    estimatedTdsPct: Math.round(baseTds * 100) / 100,
    estimatedExtractionYieldPct
  };
}
