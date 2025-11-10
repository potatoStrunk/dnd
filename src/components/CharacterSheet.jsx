import React from 'react';
import { calculateModifier, getHitPoints, calculateProficiencyBonus } from '../utils/characterUtils';
import { abilityScores } from '../data/characterData';

export default function CharacterSheet({ character, onUpdate }) {
  if (!character.species || !character.class || !character.background) {
    return (
      <div>
        <p>Please complete all previous steps before viewing your character sheet.</p>
      </div>
    );
  }

  const getFinalAbilityScore = (abilityId) => {
    let score = character.abilityScores[abilityId] || 8;
    
    // Apply species increases
    if (character.species?.abilityScoreIncrease) {
      const increases = character.species.abilityScoreIncrease;
      if (increases[abilityId]) {
        score += increases[abilityId];
      }
      // Note: "any" increases would be applied here if implemented
    }
    
    return score;
  };

  const getAbilityModifier = (abilityId) => {
    return calculateModifier(getFinalAbilityScore(abilityId));
  };

  const constitutionMod = getAbilityModifier('constitution');
  const hitPoints = getHitPoints(character.class, character.level, constitutionMod);
  const proficiencyBonus = calculateProficiencyBonus(character.level);

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(character, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.name || 'character'}.json`;
    link.click();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2>Character Sheet</h2>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={handlePrint}>Print</button>
          <button onClick={handleExport} className="secondary">Export JSON</button>
        </div>
      </div>

      <div className="character-sheet">
        <div className="input-group">
          <label>Character Name</label>
          <input
            type="text"
            value={character.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            placeholder="Enter character name"
          />
        </div>

        <div className="character-sheet-grid">
          <div className="character-sheet-section">
            <h3>Basic Information</h3>
            <p><strong>Name:</strong> {character.name || 'Unnamed'}</p>
            <p><strong>Species:</strong> {character.species.name}</p>
            <p><strong>Class:</strong> {character.class.name}</p>
            <p><strong>Background:</strong> {character.background.name}</p>
            <p><strong>Level:</strong> {character.level}</p>
          </div>

          <div className="character-sheet-section">
            <h3>Ability Scores</h3>
            {abilityScores.map((ability) => {
              const score = getFinalAbilityScore(ability.id);
              const mod = getAbilityModifier(ability.id);
              return (
                <p key={ability.id}>
                  <strong>{ability.abbreviation}:</strong> {score} ({mod >= 0 ? '+' : ''}{mod})
                </p>
              );
            })}
          </div>

          <div className="character-sheet-section">
            <h3>Combat Stats</h3>
            <p><strong>Hit Points:</strong> {hitPoints}</p>
            <p><strong>Armor Class:</strong> 10 + DEX modifier (base)</p>
            <p><strong>Proficiency Bonus:</strong> +{proficiencyBonus}</p>
            <p><strong>Initiative:</strong> {getAbilityModifier('dexterity') >= 0 ? '+' : ''}{getAbilityModifier('dexterity')}</p>
          </div>

          <div className="character-sheet-section">
            <h3>Saving Throws</h3>
            {character.class.savingThrows.map((save) => {
              const abilityId = save.toLowerCase();
              const mod = getAbilityModifier(abilityId);
              const isProficient = true; // Class saving throws are always proficient
              const total = mod + (isProficient ? proficiencyBonus : 0);
              return (
                <p key={save}>
                  <strong>{save}:</strong> {total >= 0 ? '+' : ''}{total}
                </p>
              );
            })}
          </div>

          <div className="character-sheet-section">
            <h3>Skills</h3>
            <p><strong>Class Skills:</strong> {character.class.skills.length} available</p>
            <p><strong>Background Skills:</strong> {character.background.skillProficiencies.join(', ')}</p>
          </div>

          <div className="character-sheet-section">
            <h3>Traits & Features</h3>
            <div>
              <strong>Species Traits:</strong>
              <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                {character.species.traits.map((trait, i) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="character-sheet-section" style={{ marginTop: '24px' }}>
          <h3>Equipment</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {character.background.equipment.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

