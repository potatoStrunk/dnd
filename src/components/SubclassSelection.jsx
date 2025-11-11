import React from 'react';
import { subclasses } from '../data/characterData';

export default function SubclassSelection({ characterClass, selected, onSelect }) {
  if (!characterClass) {
    return (
      <div>
        <p>Please select a class first.</p>
      </div>
    );
  }

  const classSubclasses = subclasses[characterClass.id] || [];

  if (classSubclasses.length === 0) {
    return (
      <div>
        <p>No subclasses available for {characterClass.name}.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Choose Your Subclass</h2>
      <p style={{ marginBottom: '24px', color: '#b0b0b0' }}>
        Select your {characterClass.name} subclass. This specialization is typically chosen at level {characterClass.subclassLevel}.
      </p>
      
      <div className="grid">
        {classSubclasses.map((subclass) => (
          <div
            key={subclass.id}
            className={`choice-card ${selected?.id === subclass.id ? 'selected' : ''}`}
            onClick={() => onSelect(subclass)}
          >
            <h3>{subclass.name}</h3>
            <p>{subclass.description}</p>
          </div>
        ))}
      </div>
      
      {selected && (
        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(102, 126, 234, 0.2)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '12px' }}>Selected: {selected.name}</h3>
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  );
}

