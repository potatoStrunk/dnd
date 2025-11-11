import React, { useState, useEffect } from 'react';
import { spells, spellsKnownLevel1 } from '../data/characterData';

export default function SpellSelection({ characterClass, selectedSpells, onUpdate }) {
  const [cantrips, setCantrips] = useState(selectedSpells?.cantrips || []);
  const [level1Spells, setLevel1Spells] = useState(selectedSpells?.level1 || []);

  useEffect(() => {
    onUpdate({ spells: { cantrips, level1: level1Spells } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cantrips, level1Spells]);

  if (!characterClass || !characterClass.isSpellcaster) {
    return (
      <div>
        <p>{characterClass?.name || 'This class'} does not have spellcasting abilities.</p>
      </div>
    );
  }

  const classSpells = spells[characterClass.id] || {};
  const availableCantrips = classSpells[0] || [];
  const availableLevel1 = classSpells[1] || [];
  const spellsKnown = spellsKnownLevel1[characterClass.id] || { cantrips: 0, spells: 0 };

  const toggleCantrip = (spell) => {
    if (cantrips.some(s => s.id === spell.id)) {
      setCantrips(cantrips.filter(s => s.id !== spell.id));
    } else {
      const maxCantrips = typeof spellsKnown.cantrips === 'number' ? spellsKnown.cantrips : 0;
      if (cantrips.length < maxCantrips) {
        setCantrips([...cantrips, spell]);
      }
    }
  };

  const toggleLevel1Spell = (spell) => {
    if (level1Spells.some(s => s.id === spell.id)) {
      setLevel1Spells(level1Spells.filter(s => s.id !== spell.id));
    } else {
      const maxSpells = typeof spellsKnown.spells === 'number' ? spellsKnown.spells : 0;
      if (level1Spells.length < maxSpells) {
        setLevel1Spells([...level1Spells, spell]);
      }
    }
  };

  const getMaxSpells = () => {
    if (typeof spellsKnown.spells === 'string') {
      return 'See class description';
    }
    return spellsKnown.spells;
  };

  return (
    <div>
      <h2>Choose Your Spells</h2>
      <p style={{ marginBottom: '24px', color: '#b0b0b0' }}>
        Select your spells for {characterClass.name}. At 1st level, you know {spellsKnown.cantrips} cantrip(s) and {getMaxSpells()} 1st-level spell(s).
      </p>

      {availableCantrips.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '16px' }}>Cantrips (0-level spells)</h3>
          <p style={{ marginBottom: '12px', fontSize: '14px', color: '#b0b0b0' }}>
            Selected: {cantrips.length} / {spellsKnown.cantrips}
          </p>
          <div className="grid">
            {availableCantrips.map((spell) => {
              const isSelected = cantrips.some(s => s.id === spell.id);
              const canSelect = cantrips.length < spellsKnown.cantrips || isSelected;
              return (
                <div
                  key={spell.id}
                  className={`choice-card ${isSelected ? 'selected' : ''} ${!canSelect ? 'disabled' : ''}`}
                  onClick={() => canSelect && toggleCantrip(spell)}
                  style={{ 
                    opacity: canSelect ? 1 : 0.5,
                    cursor: canSelect ? 'pointer' : 'not-allowed'
                  }}
                >
                  <h4>{spell.name}</h4>
                  <p style={{ fontSize: '12px', marginTop: '8px' }}>{spell.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {availableLevel1.length > 0 && (
        <div>
          <h3 style={{ marginBottom: '16px' }}>1st-Level Spells</h3>
          <p style={{ marginBottom: '12px', fontSize: '14px', color: '#b0b0b0' }}>
            Selected: {level1Spells.length} / {getMaxSpells()}
          </p>
          <div className="grid">
            {availableLevel1.map((spell) => {
              const isSelected = level1Spells.some(s => s.id === spell.id);
              const maxSpells = typeof spellsKnown.spells === 'number' ? spellsKnown.spells : 999;
              const canSelect = level1Spells.length < maxSpells || isSelected;
              return (
                <div
                  key={spell.id}
                  className={`choice-card ${isSelected ? 'selected' : ''} ${!canSelect ? 'disabled' : ''}`}
                  onClick={() => canSelect && toggleLevel1Spell(spell)}
                  style={{ 
                    opacity: canSelect ? 1 : 0.5,
                    cursor: canSelect ? 'pointer' : 'not-allowed'
                  }}
                >
                  <h4>{spell.name}</h4>
                  <p style={{ fontSize: '12px', marginTop: '8px' }}>{spell.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {(cantrips.length > 0 || level1Spells.length > 0) && (
        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(102, 126, 234, 0.2)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '12px' }}>Selected Spells</h3>
          {cantrips.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <strong>Cantrips:</strong>
              <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
                {cantrips.map((spell) => (
                  <li key={spell.id}>{spell.name}</li>
                ))}
              </ul>
            </div>
          )}
          {level1Spells.length > 0 && (
            <div>
              <strong>1st-Level Spells:</strong>
              <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
                {level1Spells.map((spell) => (
                  <li key={spell.id}>{spell.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

