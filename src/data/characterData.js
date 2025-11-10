// D&D 2024 Player's Handbook Character Data

export const species = [
  {
    id: 'human',
    name: 'Human',
    description: 'Versatile and ambitious, humans are the most adaptable of peoples.',
    abilityScoreIncrease: { any: 2, any2: 1 }, // +2 to one, +1 to another
    size: 'Medium',
    speed: 30,
    traits: ['Extra Feat at 1st level', 'Extra Skill Proficiency']
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Graceful and long-lived, elves are magical beings.',
    abilityScoreIncrease: { dexterity: 2, any: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance']
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description: 'Bold and hardy, dwarves are known as skilled warriors and workers of stone and metal.',
    abilityScoreIncrease: { constitution: 2, any: 1 },
    size: 'Medium',
    speed: 25,
    traits: ['Darkvision', 'Dwarven Resilience', 'Stonecunning']
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description: 'Small but brave, halflings are cheerful and optimistic.',
    abilityScoreIncrease: { dexterity: 2, any: 1 },
    size: 'Small',
    speed: 25,
    traits: ['Lucky', 'Brave', 'Halfling Nimbleness']
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    description: 'Born of dragons, dragonborn are proud and strong.',
    abilityScoreIncrease: { strength: 2, charisma: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Draconic Ancestry', 'Breath Weapon', 'Damage Resistance']
  },
  {
    id: 'gnome',
    name: 'Gnome',
    description: 'Curious and inventive, gnomes are known for their love of knowledge.',
    abilityScoreIncrease: { intelligence: 2, any: 1 },
    size: 'Small',
    speed: 25,
    traits: ['Darkvision', 'Gnome Cunning']
  },
  {
    id: 'half-elf',
    name: 'Half-Elf',
    description: 'Combining the best qualities of humans and elves.',
    abilityScoreIncrease: { charisma: 2, any: 1, any2: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Fey Ancestry', 'Skill Versatility']
  },
  {
    id: 'half-orc',
    name: 'Half-Orc',
    description: 'Combining the physical might of orcs with the determination of humans.',
    abilityScoreIncrease: { strength: 2, constitution: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Relentless Endurance', 'Savage Attacks']
  },
  {
    id: 'tiefling',
    name: 'Tiefling',
    description: 'Descended from infernal bloodlines, tieflings are charismatic and magical.',
    abilityScoreIncrease: { charisma: 2, intelligence: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Hellish Resistance', 'Infernal Legacy']
  }
];

export const classes = [
  {
    id: 'barbarian',
    name: 'Barbarian',
    description: 'A fierce warrior who can enter a battle rage.',
    hitDie: 12,
    primaryAbility: 'Strength',
    savingThrows: ['Strength', 'Constitution'],
    skills: ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival']
  },
  {
    id: 'bard',
    name: 'Bard',
    description: 'An inspiring magician whose power echoes the music of creation.',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['Dexterity', 'Charisma'],
    skills: ['Athletics', 'Acrobatics', 'Sleight of Hand', 'Stealth', 'Arcana', 'History', 'Investigation', 'Nature', 'Religion', 'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival', 'Deception', 'Intimidation', 'Performance', 'Persuasion']
  },
  {
    id: 'cleric',
    name: 'Cleric',
    description: 'A priestly champion who wields divine magic in service of a higher power.',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Wisdom', 'Charisma'],
    skills: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']
  },
  {
    id: 'druid',
    name: 'Druid',
    description: 'A priest of the Old Faith, wielding the powers of nature.',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Intelligence', 'Wisdom'],
    skills: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']
  },
  {
    id: 'fighter',
    name: 'Fighter',
    description: 'A master of martial combat, skilled with a variety of weapons and armor.',
    hitDie: 10,
    primaryAbility: 'Strength or Dexterity',
    savingThrows: ['Strength', 'Constitution'],
    skills: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival']
  },
  {
    id: 'monk',
    name: 'Monk',
    description: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.',
    hitDie: 8,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    skills: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth']
  },
  {
    id: 'paladin',
    name: 'Paladin',
    description: 'A holy warrior bound to a sacred oath.',
    hitDie: 10,
    primaryAbility: 'Strength and Charisma',
    savingThrows: ['Wisdom', 'Charisma'],
    skills: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']
  },
  {
    id: 'ranger',
    name: 'Ranger',
    description: 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.',
    hitDie: 10,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    skills: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
    hitDie: 8,
    primaryAbility: 'Dexterity',
    savingThrows: ['Dexterity', 'Intelligence'],
    skills: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth']
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    description: 'A spellcaster who draws on inherent magic from a gift or bloodline.',
    hitDie: 6,
    primaryAbility: 'Charisma',
    savingThrows: ['Constitution', 'Charisma'],
    skills: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion']
  },
  {
    id: 'warlock',
    name: 'Warlock',
    description: 'A wielder of magic that is derived from a bargain with an extraplanar entity.',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['Wisdom', 'Charisma'],
    skills: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']
  },
  {
    id: 'wizard',
    name: 'Wizard',
    description: 'A scholarly magic-user capable of manipulating the structures of reality.',
    hitDie: 6,
    primaryAbility: 'Intelligence',
    savingThrows: ['Intelligence', 'Wisdom'],
    skills: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion']
  }
];

export const backgrounds = [
  {
    id: 'acolyte',
    name: 'Acolyte',
    description: 'You have spent your life in the service of a temple.',
    skillProficiencies: ['Insight', 'Religion'],
    languages: 2,
    equipment: ['Holy symbol', 'Prayer book', '5 sticks of incense', 'Vestments', 'Common clothes', '15 gp']
  },
  {
    id: 'criminal',
    name: 'Criminal',
    description: 'You are an experienced criminal with a history of breaking the law.',
    skillProficiencies: ['Deception', 'Stealth'],
    languages: 0,
    equipment: ['Crowbar', 'Common clothes (dark)', '15 gp']
  },
  {
    id: 'folk-hero',
    name: 'Folk Hero',
    description: 'You come from a humble social rank, but you are destined for so much more.',
    skillProficiencies: ['Animal Handling', 'Survival'],
    languages: 0,
    equipment: ['Artisan\'s tools', 'Shovel', 'Iron pot', 'Common clothes', '10 gp']
  },
  {
    id: 'noble',
    name: 'Noble',
    description: 'You understand wealth, power, and privilege.',
    skillProficiencies: ['History', 'Persuasion'],
    languages: 1,
    equipment: ['Fine clothes', 'Signet ring', 'Scroll of pedigree', 'Purse with 25 gp']
  },
  {
    id: 'sage',
    name: 'Sage',
    description: 'You spent years learning the lore of the multiverse.',
    skillProficiencies: ['Arcana', 'History'],
    languages: 2,
    equipment: ['Bottle of black ink', 'Quill', 'Small knife', 'Letter from a dead colleague', 'Common clothes', '10 gp']
  },
  {
    id: 'soldier',
    name: 'Soldier',
    description: 'War has been your life for as long as you care to remember.',
    skillProficiencies: ['Athletics', 'Intimidation'],
    languages: 0,
    equipment: ['Insignia of rank', 'Trophy from a fallen enemy', 'Bone dice', 'Common clothes', '10 gp']
  },
  {
    id: 'hermit',
    name: 'Hermit',
    description: 'You lived in seclusion for a formative part of your life.',
    skillProficiencies: ['Medicine', 'Religion'],
    languages: 1,
    equipment: ['Scroll case', 'Winter blanket', 'Common clothes', 'Herbalism kit', '5 gp']
  },
  {
    id: 'outlander',
    name: 'Outlander',
    description: 'You grew up in the wilds, far from civilization.',
    skillProficiencies: ['Athletics', 'Survival'],
    languages: 1,
    equipment: ['Staff', 'Hunting trap', 'Trophy from an animal', 'Traveler\'s clothes', '10 gp']
  }
];

export const abilityScores = [
  { id: 'strength', name: 'Strength', abbreviation: 'STR' },
  { id: 'dexterity', name: 'Dexterity', abbreviation: 'DEX' },
  { id: 'constitution', name: 'Constitution', abbreviation: 'CON' },
  { id: 'intelligence', name: 'Intelligence', abbreviation: 'INT' },
  { id: 'wisdom', name: 'Wisdom', abbreviation: 'WIS' },
  { id: 'charisma', name: 'Charisma', abbreviation: 'CHA' }
];

// Point buy costs (2024 PHB: 27 points, scores 8-15 before species modifiers)
export const pointBuyCosts = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9
};

export const maxPointBuyScore = 15;
export const minPointBuyScore = 8;
export const totalPointBuyPoints = 27;

