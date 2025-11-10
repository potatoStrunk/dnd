import React from 'react';
import { backgrounds } from '../data/characterData';

export default function BackgroundSelection({ selected, onSelect }) {
  return (
    <div>
      <h2>Choose Your Background</h2>
      <p style={{ marginBottom: '24px', color: '#b0b0b0' }}>
        Select your character's background. This provides additional skills and equipment.
      </p>
      
      <div className="grid">
        {backgrounds.map((b) => (
          <div
            key={b.id}
            className={`choice-card ${selected?.id === b.id ? 'selected' : ''}`}
            onClick={() => onSelect(b)}
          >
            <h3>{b.name}</h3>
            <p>{b.description}</p>
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#888' }}>
              <div>Skills: {b.skillProficiencies.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
      
      {selected && (
        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(102, 126, 234, 0.2)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '12px' }}>Selected: {selected.name}</h3>
          <div>
            <p><strong>Skill Proficiencies:</strong> {selected.skillProficiencies.join(', ')}</p>
            {selected.languages > 0 && (
              <p><strong>Languages:</strong> {selected.languages} additional language(s)</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

