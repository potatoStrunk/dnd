import React from 'react';
import { species } from '../data/characterData';

export default function SpeciesSelection({ selected, onSelect }) {
  return (
    <div>
      <h2>Choose Your Species</h2>
      <p style={{ marginBottom: '24px', color: '#b0b0b0' }}>
        Select your character's species. This determines your base traits and ability score increases.
      </p>
      
      <div className="grid">
        {species.map((s) => (
          <div
            key={s.id}
            className={`choice-card ${selected?.id === s.id ? 'selected' : ''}`}
            onClick={() => onSelect(s)}
          >
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#888' }}>
              <div>Size: {s.size}</div>
              <div>Speed: {s.speed} ft</div>
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
        </div>
      )}
    </div>
  );
}

