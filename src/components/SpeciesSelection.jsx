import React, { useState } from 'react';
import { species } from '../data/characterData';

export default function SpeciesSelection({ selected, onSelect }) {
  const [selectedSubspecies, setSelectedSubspecies] = useState(null);

  const handleSpeciesSelect = (s) => {
    setSelectedSubspecies(null);
    onSelect(s);
  };

  const handleSubspeciesSelect = (subspecies) => {
    setSelectedSubspecies(subspecies);
    // Combine base species with subspecies
    const baseSpecies = species.find(s => s.id === selected.id);
    if (!baseSpecies) return;
    
    const combined = {
      ...baseSpecies,
      subspecies: subspecies,
      name: `${subspecies.name} ${baseSpecies.name}`,
      traits: [...baseSpecies.traits, ...subspecies.additionalTraits],
      abilityScoreIncrease: {
        ...baseSpecies.abilityScoreIncrease,
        ...subspecies.abilityScoreIncrease
      }
    };
    onSelect(combined);
  };

  // Get the base species data to access subspecies array
  const baseSpeciesData = selected ? species.find(s => s.id === selected.id) : null;
  const availableSubspecies = (baseSpeciesData && Array.isArray(baseSpeciesData.subspecies)) ? baseSpeciesData.subspecies : [];
  
  // Check if we should show subspecies selection
  const showSubspeciesSelection = selected && 
                                   baseSpeciesData && 
                                   baseSpeciesData.hasSubspecies && 
                                   availableSubspecies.length > 0 && 
                                   !selected.subspecies;

  return (
    <div>
      <h2>Choose Your Species</h2>
      <p style={{ marginBottom: '24px', color: '#b0b0b0' }}>
        Select your character's species. This determines your base traits and ability score increases.
        {selected?.hasSubspecies && ' Then choose a subspecies variant.'}
      </p>
      
      <div className="grid">
        {species.map((s) => (
          <div
            key={s.id}
            className={`choice-card ${selected?.id === s.id ? 'selected' : ''}`}
            onClick={() => handleSpeciesSelect(s)}
          >
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#888' }}>
              <div>Size: {s.size}</div>
              <div>Speed: {s.speed} ft</div>
              {s.hasSubspecies && <div style={{ color: '#ffd700', marginTop: '4px' }}>Has Subspecies</div>}
              {s.source && <div style={{ color: '#4caf50', marginTop: '4px' }}>Source: {s.source}</div>}
            </div>
          </div>
        ))}
      </div>
      
      {selected && (
        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(102, 126, 234, 0.2)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '12px' }}>Selected: {selected.name}</h3>
          <div>
            <strong>Traits:</strong>
            <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
              {selected.traits.map((trait, i) => (
                <li key={i}>{trait}</li>
              ))}
            </ul>
          </div>

          {showSubspeciesSelection && (
            <div style={{ marginTop: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: '#ffd700' }}>Choose Subspecies:</h4>
              <p style={{ marginBottom: '12px', fontSize: '14px', color: '#b0b0b0' }}>
                Select a subspecies variant to customize your {selected.name} character.
              </p>
              <div className="grid">
                {availableSubspecies.map((sub) => (
                  <div
                    key={sub.id}
                    className={`choice-card ${selectedSubspecies?.id === sub.id ? 'selected' : ''}`}
                    onClick={() => handleSubspeciesSelect(sub)}
                  >
                    <h4>{sub.name}</h4>
                    <p style={{ fontSize: '14px' }}>{sub.description}</p>
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
                      <strong>Additional Traits:</strong>
                      <ul style={{ marginTop: '4px', paddingLeft: '16px', fontSize: '11px' }}>
                        {sub.additionalTraits.map((trait, i) => (
                          <li key={i}>{trait}</li>
                        ))}
                      </ul>
                    </div>
                    {sub.source && <div style={{ color: '#4caf50', marginTop: '4px', fontSize: '11px' }}>Source: {sub.source}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selected.subspecies && (
            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(255, 215, 0, 0.2)', borderRadius: '8px' }}>
              <strong>Subspecies:</strong> {selected.subspecies.name}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
