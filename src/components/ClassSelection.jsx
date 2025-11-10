import React from 'react';
import { classes } from '../data/characterData';

export default function ClassSelection({ selected, onSelect }) {
  return (
    <div>
      <h2>Choose Your Class</h2>
      <p style={{ marginBottom: '24px', color: '#b0b0b0' }}>
        Select your character's class. This determines your hit points, saving throws, and available skills.
      </p>
      
      <div className="grid">
        {classes.map((c) => (
          <div
            key={c.id}
            className={`choice-card ${selected?.id === c.id ? 'selected' : ''}`}
            onClick={() => onSelect(c)}
          >
            <h3>{c.name}</h3>
            <p>{c.description}</p>
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#888' }}>
              <div>Hit Die: d{c.hitDie}</div>
              <div>Primary: {c.primaryAbility}</div>
            </div>
          </div>
        ))}
      </div>
      
      {selected && (
        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(102, 126, 234, 0.2)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '12px' }}>Selected: {selected.name}</h3>
          <div>
            <p><strong>Hit Die:</strong> d{selected.hitDie}</p>
            <p><strong>Primary Ability:</strong> {selected.primaryAbility}</p>
            <p><strong>Saving Throws:</strong> {selected.savingThrows.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

