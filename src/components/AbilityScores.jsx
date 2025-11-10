import React, { useState, useEffect } from 'react';
import { abilityScores, pointBuyCosts, totalPointBuyPoints, maxPointBuyScore, minPointBuyScore } from '../data/characterData';
import { calculateModifier, calculatePointBuyCost, calculateTotalPointBuyCost } from '../utils/characterUtils';

export default function AbilityScores({ character, onUpdate, onValidationChange }) {
  const [scores, setScores] = useState(character.abilityScores);
  const [speciesIncreases, setSpeciesIncreases] = useState(character.speciesAbilityIncreases || {});

  useEffect(() => {
    setScores(character.abilityScores);
    setSpeciesIncreases(character.speciesAbilityIncreases || {});
  }, [character]);

  const handleScoreChange = (ability, value) => {
    const numValue = parseInt(value) || minPointBuyScore;
    const clampedValue = Math.max(minPointBuyScore, Math.min(maxPointBuyScore, numValue));
    
    const newScores = { ...scores, [ability]: clampedValue };
    setScores(newScores);
    
    // Update parent
    onUpdate({ 
      abilityScores: newScores,
      speciesAbilityIncreases: speciesIncreases
    });
  };

  const handleSpeciesIncrease = (ability) => {
    if (!character.species) return;
    
    const increases = character.species.abilityScoreIncrease;
    if (!increases) return;

    // Handle "any" increases
    const anyCount = increases.any || 0;
    const any2Count = increases.any2 || 0;
    const totalAny = anyCount + any2Count;
    
    // For now, we'll let the user manually apply increases
    // This is a simplified version - full implementation would have a UI for selecting which abilities get the "any" bonuses
  };

  const getFinalScore = (ability) => {
    let final = scores[ability] || 8;
    
    // Apply species-specific increases
    if (character.species?.abilityScoreIncrease) {
      const increases = character.species.abilityScoreIncrease;
      if (increases[ability]) {
        final += increases[ability];
      }
    }
    
    // Apply "any" increases if assigned
    if (speciesIncreases[ability]) {
      final += speciesIncreases[ability];
    }
    
    return final;
  };

  const usedPoints = calculateTotalPointBuyCost(scores);
  const remainingPoints = totalPointBuyPoints - usedPoints;
  const isValid = remainingPoints === 0 && usedPoints <= totalPointBuyPoints;

  // Notify parent of validation status
  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(isValid);
    }
  }, [isValid, onValidationChange]);

  // Determine available "any" increases from species
  const getAvailableIncreases = () => {
    if (!character.species?.abilityScoreIncrease) return { any: 0, any2: 0 };
    const inc = character.species.abilityScoreIncrease;
    return {
      any: inc.any || 0,
      any2: inc.any2 || 0
    };
  };

  const available = getAvailableIncreases();
  const totalAvailable = available.any + available.any2;

  return (
    <div>
      <h2>Assign Ability Scores</h2>
      <p style={{ marginBottom: '24px', color: '#b0b0b0' }}>
        Use the Point Buy system: Start with 8 in all scores, then spend 27 points to increase them.
        Scores can range from 8 to 15 before species modifiers.
      </p>

      {character.species && totalAvailable > 0 && (
        <div style={{ 
          padding: '16px', 
          background: 'rgba(255, 215, 0, 0.2)', 
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <p><strong>Species Ability Increases:</strong></p>
          <p>Your {character.species.name} grants additional ability score increases that will be applied after point buy.</p>
          <p>You have {totalAvailable} point(s) to assign to any ability score(s).</p>
        </div>
      )}

      <div className="points-remaining">
        Points Remaining: {remainingPoints} / {totalPointBuyPoints}
        {!isValid && remainingPoints !== 0 && (
          <span style={{ color: '#ff6b6b', marginLeft: '12px' }}>
            (Must use exactly {totalPointBuyPoints} points)
          </span>
        )}
      </div>

      <div className="ability-scores">
        {abilityScores.map((ability) => {
          const baseScore = scores[ability.id] || 8;
          const finalScore = getFinalScore(ability.id);
          const modifier = calculateModifier(finalScore);
          const cost = calculatePointBuyCost(baseScore);

          return (
            <div key={ability.id} className="ability-score">
              <label>{ability.name} ({ability.abbreviation})</label>
              <input
                type="number"
                min={minPointBuyScore}
                max={maxPointBuyScore}
                value={baseScore}
                onChange={(e) => handleScoreChange(ability.id, e.target.value)}
              />
              <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
                Cost: {cost} points
              </div>
              {character.species && (
                <div style={{ fontSize: '12px', color: '#4caf50', marginTop: '4px' }}>
                  Final: {finalScore} (Mod: {modifier >= 0 ? '+' : ''}{modifier})
                </div>
              )}
              {!character.species && (
                <div className="ability-modifier">
                  Modifier: {modifier >= 0 ? '+' : ''}{modifier}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(102, 126, 234, 0.2)', borderRadius: '8px' }}>
        <h3>Point Buy Costs</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '8px', marginTop: '12px' }}>
          {Object.entries(pointBuyCosts).map(([score, cost]) => (
            <div key={score} style={{ textAlign: 'center', fontSize: '14px' }}>
              Score {score}: {cost} points
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

