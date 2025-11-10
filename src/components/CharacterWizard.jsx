import React, { useState } from 'react';
import StepIndicator from './StepIndicator';
import SpeciesSelection from './SpeciesSelection';
import ClassSelection from './ClassSelection';
import BackgroundSelection from './BackgroundSelection';
import AbilityScores from './AbilityScores';
import CharacterSheet from './CharacterSheet';
import { species, classes, backgrounds } from '../data/characterData';

const STEPS = [
  'Species',
  'Class',
  'Background',
  'Ability Scores',
  'Review'
];

export default function CharacterWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [abilityScoresValid, setAbilityScoresValid] = useState(false);
  const [character, setCharacter] = useState({
    species: null,
    class: null,
    background: null,
    abilityScores: {
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8
    },
    speciesAbilityIncreases: {},
    level: 1,
    name: ''
  });

  const updateCharacter = (updates) => {
    setCharacter(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return character.species !== null;
      case 1:
        return character.class !== null;
      case 2:
        return character.background !== null;
      case 3:
        // Check if point buy is valid (27 points used)
        return abilityScoresValid;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <SpeciesSelection
            selected={character.species}
            onSelect={(selectedSpecies) => updateCharacter({ species: selectedSpecies })}
          />
        );
      case 1:
        return (
          <ClassSelection
            selected={character.class}
            onSelect={(selectedClass) => updateCharacter({ class: selectedClass })}
          />
        );
      case 2:
        return (
          <BackgroundSelection
            selected={character.background}
            onSelect={(selectedBackground) => updateCharacter({ background: selectedBackground })}
          />
        );
      case 3:
        return (
          <AbilityScores
            character={character}
            onUpdate={updateCharacter}
            onValidationChange={setAbilityScoresValid}
          />
        );
      case 4:
        return (
          <CharacterSheet
            character={character}
            onUpdate={updateCharacter}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>
        D&D Character Generator
      </h1>
      
      <StepIndicator
        steps={STEPS}
        currentStep={currentStep}
      />

      <div className="card">
        {renderStep()}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="secondary"
        >
          Previous
        </button>
        
        {currentStep < STEPS.length - 1 ? (
          <button
            onClick={nextStep}
            disabled={!canProceed()}
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              // Reset to start
              setCurrentStep(0);
              setCharacter({
                species: null,
                class: null,
                background: null,
                abilityScores: {
                  strength: 8,
                  dexterity: 8,
                  constitution: 8,
                  intelligence: 8,
                  wisdom: 8,
                  charisma: 8
                },
                speciesAbilityIncreases: {},
                level: 1,
                name: ''
              });
            }}
            className="secondary"
          >
            Create New Character
          </button>
        )}
      </div>
    </div>
  );
}

