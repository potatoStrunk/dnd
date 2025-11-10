import { pointBuyCosts, maxPointBuyScore, minPointBuyScore, totalPointBuyPoints } from '../data/characterData';

export function calculateModifier(score) {
  return Math.floor((score - 10) / 2);
}

export function calculatePointBuyCost(score) {
  if (score < minPointBuyScore || score > maxPointBuyScore) {
    return Infinity;
  }
  return pointBuyCosts[score] || 0;
}

export function calculateTotalPointBuyCost(scores) {
  return Object.values(scores).reduce((total, score) => {
    return total + calculatePointBuyCost(score);
  }, 0);
}

export function getRemainingPoints(scores) {
  const used = calculateTotalPointBuyCost(scores);
  return totalPointBuyPoints - used;
}

export function applySpeciesModifiers(baseScores, species) {
  const modified = { ...baseScores };
  
  if (!species || !species.abilityScoreIncrease) {
    return modified;
  }
  
  const increases = species.abilityScoreIncrease;
  
  // Handle specific ability increases
  Object.keys(increases).forEach(key => {
    if (key !== 'any' && key !== 'any2') {
      modified[key] = (modified[key] || 8) + increases[key];
    }
  });
  
  // Note: "any" increases are handled in the UI by user selection
  return modified;
}

export function calculateProficiencyBonus(level) {
  return Math.ceil(level / 4) + 1;
}

export function calculateSkillModifier(abilityScore, isProficient, level) {
  const baseMod = calculateModifier(abilityScore);
  const profBonus = isProficient ? calculateProficiencyBonus(level) : 0;
  return baseMod + profBonus;
}

export function getHitPoints(characterClass, level, constitutionModifier) {
  if (!characterClass) return 0;
  
  const hitDie = characterClass.hitDie;
  const firstLevelHP = hitDie + constitutionModifier;
  const additionalLevels = Math.max(0, level - 1);
  const averageRoll = Math.floor(hitDie / 2) + 1;
  const additionalHP = additionalLevels * (averageRoll + constitutionModifier);
  
  return firstLevelHP + additionalHP;
}

