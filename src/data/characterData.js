// D&D 2024 Player's Handbook Character Data

export const species = [
  {
    id: 'human',
    name: 'Human',
    description: 'Versatile and ambitious, humans are the most adaptable of peoples.',
    abilityScoreIncrease: { any: 2, any2: 1 }, // +2 to one, +1 to another
    size: 'Medium',
    speed: 30,
    traits: ['Extra Feat at 1st level', 'Extra Skill Proficiency'],
    hasSubspecies: false
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Graceful and long-lived, elves are magical beings.',
    abilityScoreIncrease: { dexterity: 2, any: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'],
    hasSubspecies: true,
    subspecies: [
      {
        id: 'high-elf',
        name: 'High Elf',
        description: 'Elves of the surface world, known for their grace and magical aptitude.',
        additionalTraits: ['Cantrip (Wizard cantrip)', 'Extra Language'],
        abilityScoreIncrease: { intelligence: 1 }
      },
      {
        id: 'wood-elf',
        name: 'Wood Elf',
        description: 'Elves of the forests, swift and stealthy.',
        additionalTraits: ['Fleet of Foot (speed 35 ft)', 'Mask of the Wild'],
        abilityScoreIncrease: { wisdom: 1 }
      },
      {
        id: 'drow',
        name: 'Drow (Dark Elf)',
        description: 'Elves of the Underdark, marked by their dark skin and white hair.',
        additionalTraits: ['Superior Darkvision (120 ft)', 'Sunlight Sensitivity', 'Drow Magic'],
        abilityScoreIncrease: { charisma: 1 }
      },
      {
        id: 'eladrin',
        name: 'Eladrin',
        description: 'Elves with a strong connection to the Feywild.',
        additionalTraits: ['Fey Step (teleportation)', 'Seasonal Affinity'],
        abilityScoreIncrease: { intelligence: 1 }
      }
    ]
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description: 'Bold and hardy, dwarves are known as skilled warriors and workers of stone and metal.',
    abilityScoreIncrease: { constitution: 2, any: 1 },
    size: 'Medium',
    speed: 25,
    traits: ['Darkvision', 'Dwarven Resilience', 'Stonecunning'],
    hasSubspecies: true,
    subspecies: [
      {
        id: 'hill-dwarf',
        name: 'Hill Dwarf',
        description: 'Dwarves who prefer hills and mountains, known for their wisdom.',
        additionalTraits: ['Dwarven Toughness (+1 HP per level)'],
        abilityScoreIncrease: { wisdom: 1 }
      },
      {
        id: 'mountain-dwarf',
        name: 'Mountain Dwarf',
        description: 'Dwarves of the highest peaks, strong and hardy.',
        additionalTraits: ['Dwarven Armor Training'],
        abilityScoreIncrease: { strength: 2 }
      },
      {
        id: 'duergar',
        name: 'Duergar (Gray Dwarf)',
        description: 'Dwarves of the Underdark, known for their psionic abilities.',
        additionalTraits: ['Superior Darkvision (120 ft)', 'Sunlight Sensitivity', 'Duergar Magic'],
        abilityScoreIncrease: { strength: 1 }
      }
    ]
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description: 'Small but brave, halflings are cheerful and optimistic.',
    abilityScoreIncrease: { dexterity: 2, any: 1 },
    size: 'Small',
    speed: 25,
    traits: ['Lucky', 'Brave', 'Halfling Nimbleness'],
    hasSubspecies: true,
    subspecies: [
      {
        id: 'lightfoot-halfling',
        name: 'Lightfoot Halfling',
        description: 'Halflings who are naturally stealthy and social.',
        additionalTraits: ['Naturally Stealthy'],
        abilityScoreIncrease: { charisma: 1 }
      },
      {
        id: 'stout-halfling',
        name: 'Stout Halfling',
        description: 'Halflings with dwarven blood, hardier than most.',
        additionalTraits: ['Stout Resilience (poison resistance)'],
        abilityScoreIncrease: { constitution: 1 }
      }
    ]
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    description: 'Born of dragons, dragonborn are proud and strong.',
    abilityScoreIncrease: { strength: 2, charisma: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Draconic Ancestry', 'Breath Weapon', 'Damage Resistance'],
    hasSubspecies: false
  },
  {
    id: 'gnome',
    name: 'Gnome',
    description: 'Curious and inventive, gnomes are known for their love of knowledge.',
    abilityScoreIncrease: { intelligence: 2, any: 1 },
    size: 'Small',
    speed: 25,
    traits: ['Darkvision', 'Gnome Cunning'],
    hasSubspecies: true,
    subspecies: [
      {
        id: 'forest-gnome',
        name: 'Forest Gnome',
        description: 'Gnomes of the forests, naturally stealthy and attuned to nature.',
        additionalTraits: ['Natural Illusionist', 'Speak with Small Beasts'],
        abilityScoreIncrease: { dexterity: 1 }
      },
      {
        id: 'rock-gnome',
        name: 'Rock Gnome',
        description: 'Gnomes known for their tinkering and inventiveness.',
        additionalTraits: ['Artificer\'s Lore', 'Tinker'],
        abilityScoreIncrease: { constitution: 1 }
      },
      {
        id: 'autognome',
        name: 'Autognome',
        description: 'Mechanical gnomes created by rock gnomes, combining magic and technology.',
        additionalTraits: ['Mechanical Nature', 'Sentry\'s Rest', 'Built for Success', 'Armored Casing'],
        abilityScoreIncrease: { constitution: 1 },
        source: 'Spelljammer'
      }
    ]
  },
  {
    id: 'half-elf',
    name: 'Half-Elf',
    description: 'Combining the best qualities of humans and elves.',
    abilityScoreIncrease: { charisma: 2, any: 1, any2: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Fey Ancestry', 'Skill Versatility'],
    hasSubspecies: false
  },
  {
    id: 'half-orc',
    name: 'Half-Orc',
    description: 'Combining the physical might of orcs with the determination of humans.',
    abilityScoreIncrease: { strength: 2, constitution: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Relentless Endurance', 'Savage Attacks'],
    hasSubspecies: false
  },
  {
    id: 'tiefling',
    name: 'Tiefling',
    description: 'Descended from infernal bloodlines, tieflings are charismatic and magical.',
    abilityScoreIncrease: { charisma: 2, intelligence: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Hellish Resistance', 'Infernal Legacy'],
    hasSubspecies: false
  },
  // Additional species from other sourcebooks
  {
    id: 'warforged',
    name: 'Warforged',
    description: 'Living constructs created for war, now seeking their own purpose.',
    abilityScoreIncrease: { constitution: 2, any: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Constructed Resilience', 'Sentry\'s Rest', 'Integrated Protection', 'Specialized Design'],
    hasSubspecies: false,
    source: 'Eberron: Rising from the Last War'
  },
  {
    id: 'aasimar',
    name: 'Aasimar',
    description: 'Touched by celestial power, aasimar are blessed with divine heritage.',
    abilityScoreIncrease: { charisma: 2, any: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Celestial Resistance', 'Healing Hands', 'Light Bearer'],
    hasSubspecies: false,
    source: 'Volo\'s Guide to Monsters'
  },
  {
    id: 'genasi',
    name: 'Genasi',
    description: 'Planetouched beings with elemental power flowing through their veins.',
    abilityScoreIncrease: { constitution: 2, any: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Elemental Resistance'],
    hasSubspecies: true,
    subspecies: [
      {
        id: 'air-genasi',
        name: 'Air Genasi',
        description: 'Genasi with the power of air and storms.',
        additionalTraits: ['Unending Breath', 'Mingle with the Wind'],
        abilityScoreIncrease: { dexterity: 1 }
      },
      {
        id: 'earth-genasi',
        name: 'Earth Genasi',
        description: 'Genasi with the power of earth and stone.',
        additionalTraits: ['Earth Walk', 'Merge with Stone'],
        abilityScoreIncrease: { strength: 1 }
      },
      {
        id: 'fire-genasi',
        name: 'Fire Genasi',
        description: 'Genasi with the power of fire and flame.',
        additionalTraits: ['Darkvision', 'Reach to the Blaze'],
        abilityScoreIncrease: { intelligence: 1 }
      },
      {
        id: 'water-genasi',
        name: 'Water Genasi',
        description: 'Genasi with the power of water and waves.',
        additionalTraits: ['Acid Resistance', 'Amphibious', 'Swim', 'Call to the Wave'],
        abilityScoreIncrease: { wisdom: 1 }
      }
    ],
    source: 'Elemental Evil Player\'s Companion'
  },
  {
    id: 'goliath',
    name: 'Goliath',
    description: 'Powerful mountain-dwelling people known for their strength and endurance.',
    abilityScoreIncrease: { strength: 2, constitution: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Natural Athlete', 'Stone\'s Endurance', 'Powerful Build', 'Mountain Born'],
    hasSubspecies: false,
    source: 'Volo\'s Guide to Monsters'
  },
  {
    id: 'yuan-ti',
    name: 'Yuan-Ti Pureblood',
    description: 'Descendants of serpentfolk, yuan-ti are cunning and resistant to magic.',
    abilityScoreIncrease: { charisma: 2, intelligence: 1 },
    size: 'Medium',
    speed: 30,
    traits: ['Darkvision', 'Innate Spellcasting', 'Magic Resistance', 'Poison Immunity'],
    hasSubspecies: false,
    source: 'Volo\'s Guide to Monsters'
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
    skills: ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival'],
    isSpellcaster: false,
    subclassLevel: 3
  },
  {
    id: 'bard',
    name: 'Bard',
    description: 'An inspiring magician whose power echoes the music of creation.',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['Dexterity', 'Charisma'],
    skills: ['Athletics', 'Acrobatics', 'Sleight of Hand', 'Stealth', 'Arcana', 'History', 'Investigation', 'Nature', 'Religion', 'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival', 'Deception', 'Intimidation', 'Performance', 'Persuasion'],
    isSpellcaster: true,
    spellcastingAbility: 'Charisma',
    subclassLevel: 3
  },
  {
    id: 'cleric',
    name: 'Cleric',
    description: 'A priestly champion who wields divine magic in service of a higher power.',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Wisdom', 'Charisma'],
    skills: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'],
    isSpellcaster: true,
    spellcastingAbility: 'Wisdom',
    subclassLevel: 1
  },
  {
    id: 'druid',
    name: 'Druid',
    description: 'A priest of the Old Faith, wielding the powers of nature.',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Intelligence', 'Wisdom'],
    skills: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'],
    isSpellcaster: true,
    spellcastingAbility: 'Wisdom',
    subclassLevel: 2
  },
  {
    id: 'fighter',
    name: 'Fighter',
    description: 'A master of martial combat, skilled with a variety of weapons and armor.',
    hitDie: 10,
    primaryAbility: 'Strength or Dexterity',
    savingThrows: ['Strength', 'Constitution'],
    skills: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
    isSpellcaster: false,
    subclassLevel: 3
  },
  {
    id: 'monk',
    name: 'Monk',
    description: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.',
    hitDie: 8,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    skills: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'],
    isSpellcaster: false,
    subclassLevel: 3
  },
  {
    id: 'paladin',
    name: 'Paladin',
    description: 'A holy warrior bound to a sacred oath.',
    hitDie: 10,
    primaryAbility: 'Strength and Charisma',
    savingThrows: ['Wisdom', 'Charisma'],
    skills: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'],
    isSpellcaster: true,
    spellcastingAbility: 'Charisma',
    subclassLevel: 3
  },
  {
    id: 'ranger',
    name: 'Ranger',
    description: 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.',
    hitDie: 10,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    skills: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'],
    isSpellcaster: true,
    spellcastingAbility: 'Wisdom',
    subclassLevel: 3
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
    hitDie: 8,
    primaryAbility: 'Dexterity',
    savingThrows: ['Dexterity', 'Intelligence'],
    skills: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'],
    isSpellcaster: false,
    subclassLevel: 3
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    description: 'A spellcaster who draws on inherent magic from a gift or bloodline.',
    hitDie: 6,
    primaryAbility: 'Charisma',
    savingThrows: ['Constitution', 'Charisma'],
    skills: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'],
    isSpellcaster: true,
    spellcastingAbility: 'Charisma',
    subclassLevel: 1
  },
  {
    id: 'warlock',
    name: 'Warlock',
    description: 'A wielder of magic that is derived from a bargain with an extraplanar entity.',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['Wisdom', 'Charisma'],
    skills: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'],
    isSpellcaster: true,
    spellcastingAbility: 'Charisma',
    subclassLevel: 1
  },
  {
    id: 'wizard',
    name: 'Wizard',
    description: 'A scholarly magic-user capable of manipulating the structures of reality.',
    hitDie: 6,
    primaryAbility: 'Intelligence',
    savingThrows: ['Intelligence', 'Wisdom'],
    skills: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'],
    isSpellcaster: true,
    spellcastingAbility: 'Intelligence',
    subclassLevel: 2
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

// Subclasses
export const subclasses = {
  barbarian: [
    { id: 'berserker', name: 'Path of the Berserker', description: 'A barbarian who channels rage into pure destruction.' },
    { id: 'totem-warrior', name: 'Path of the Totem Warrior', description: 'A barbarian who draws spiritual power from a totem animal.' },
    { id: 'ancestral-guardian', name: 'Path of the Ancestral Guardian', description: 'A barbarian who calls upon ancestral spirits for protection.' },
    { id: 'storm-herald', name: 'Path of the Storm Herald', description: 'A barbarian who channels the power of the elements.' },
    { id: 'zealot', name: 'Path of the Zealot', description: 'A barbarian driven by divine fury.' }
  ],
  bard: [
    { id: 'lore', name: 'College of Lore', description: 'A bard who seeks knowledge and stories from across the world.' },
    { id: 'valor', name: 'College of Valor', description: 'A bard who combines magic and martial prowess.' },
    { id: 'glamour', name: 'College of Glamour', description: 'A bard who weaves magic through beauty and charm.' },
    { id: 'swords', name: 'College of Swords', description: 'A bard who fights with blade and word.' },
    { id: 'whispers', name: 'College of Whispers', description: 'A bard who uses words as weapons to infiltrate and destroy.' }
  ],
  cleric: [
    { id: 'life', name: 'Life Domain', description: 'A cleric devoted to preserving life and healing.' },
    { id: 'light', name: 'Light Domain', description: 'A cleric who wields the power of light and fire.' },
    { id: 'nature', name: 'Nature Domain', description: 'A cleric who draws power from the natural world.' },
    { id: 'tempest', name: 'Tempest Domain', description: 'A cleric who commands storms and sea.' },
    { id: 'trickery', name: 'Trickery Domain', description: 'A cleric who uses deception and illusion.' },
    { id: 'war', name: 'War Domain', description: 'A cleric who serves as a divine warrior.' },
    { id: 'knowledge', name: 'Knowledge Domain', description: 'A cleric who seeks to preserve and share knowledge.' },
    { id: 'grave', name: 'Grave Domain', description: 'A cleric who maintains the balance between life and death.' }
  ],
  druid: [
    { id: 'land', name: 'Circle of the Land', description: 'A druid who draws power from a specific terrain.' },
    { id: 'moon', name: 'Circle of the Moon', description: 'A druid who specializes in wild shape combat.' },
    { id: 'stars', name: 'Circle of Stars', description: 'A druid who draws power from the stars and constellations.' },
    { id: 'wildfire', name: 'Circle of Wildfire', description: 'A druid who uses fire to destroy and renew.' },
    { id: 'spores', name: 'Circle of Spores', description: 'A druid who finds beauty in decay and rebirth.' }
  ],
  fighter: [
    { id: 'champion', name: 'Champion', description: 'A fighter who focuses on raw physical power and skill.' },
    { id: 'battle-master', name: 'Battle Master', description: 'A fighter who uses tactical maneuvers in combat.' },
    { id: 'eldritch-knight', name: 'Eldritch Knight', description: 'A fighter who combines martial prowess with magic.' },
    { id: 'arcane-archer', name: 'Arcane Archer', description: 'A fighter who infuses arrows with magic.' },
    { id: 'samurai', name: 'Samurai', description: 'A fighter who combines discipline and combat prowess.' }
  ],
  monk: [
    { id: 'open-hand', name: 'Way of the Open Hand', description: 'A monk who masters the fundamentals of combat.' },
    { id: 'shadow', name: 'Way of Shadow', description: 'A monk who uses darkness and stealth.' },
    { id: 'four-elements', name: 'Way of the Four Elements', description: 'A monk who channels elemental power.' },
    { id: 'kensei', name: 'Way of the Kensei', description: 'A monk who perfects the use of weapons.' },
    { id: 'drunken-master', name: 'Way of the Drunken Master', description: 'A monk who uses unpredictable movements.' }
  ],
  paladin: [
    { id: 'devotion', name: 'Oath of Devotion', description: 'A paladin who serves justice and good.' },
    { id: 'ancients', name: 'Oath of the Ancients', description: 'A paladin who protects nature and life.' },
    { id: 'vengeance', name: 'Oath of Vengeance', description: 'A paladin who hunts down evildoers.' },
    { id: 'conquest', name: 'Oath of Conquest', description: 'A paladin who seeks to dominate and control.' },
    { id: 'redemption', name: 'Oath of Redemption', description: 'A paladin who seeks to redeem evildoers.' }
  ],
  ranger: [
    { id: 'beast-master', name: 'Beast Master', description: 'A ranger who fights alongside an animal companion.' },
    { id: 'hunter', name: 'Hunter', description: 'A ranger who specializes in slaying specific types of foes.' },
    { id: 'gloom-stalker', name: 'Gloom Stalker', description: 'A ranger who hunts in darkness and shadows.' },
    { id: 'horizon-walker', name: 'Horizon Walker', description: 'A ranger who protects the world from planar threats.' },
    { id: 'monster-slayer', name: 'Monster Slayer', description: 'A ranger who specializes in hunting supernatural creatures.' }
  ],
  rogue: [
    { id: 'thief', name: 'Thief', description: 'A rogue who specializes in stealth and larceny.' },
    { id: 'assassin', name: 'Assassin', description: 'A rogue who specializes in eliminating targets.' },
    { id: 'arcane-trickster', name: 'Arcane Trickster', description: 'A rogue who combines stealth with magic.' },
    { id: 'mastermind', name: 'Mastermind', description: 'A rogue who excels at manipulation and deception.' },
    { id: 'swashbuckler', name: 'Swashbuckler', description: 'A rogue who fights with style and panache.' }
  ],
  sorcerer: [
    { id: 'draconic', name: 'Draconic Bloodline', description: 'A sorcerer with dragon ancestry.' },
    { id: 'wild-magic', name: 'Wild Magic', description: 'A sorcerer whose magic is unpredictable.' },
    { id: 'divine-soul', name: 'Divine Soul', description: 'A sorcerer with a connection to the divine.' },
    { id: 'shadow', name: 'Shadow Magic', description: 'A sorcerer who draws power from the Shadowfell.' },
    { id: 'storm', name: 'Storm Sorcery', description: 'A sorcerer with power over storms and wind.' }
  ],
  warlock: [
    { id: 'fiend', name: 'The Fiend', description: 'A warlock who made a pact with a fiend.' },
    { id: 'great-old-one', name: 'The Great Old One', description: 'A warlock who serves an otherworldly entity.' },
    { id: 'archfey', name: 'The Archfey', description: 'A warlock who made a pact with a fey lord.' },
    { id: 'celestial', name: 'The Celestial', description: 'A warlock who serves a celestial being.' },
    { id: 'hexblade', name: 'The Hexblade', description: 'A warlock who wields a sentient weapon.' }
  ],
  wizard: [
    { id: 'abjuration', name: 'School of Abjuration', description: 'A wizard who specializes in protective magic.' },
    { id: 'conjuration', name: 'School of Conjuration', description: 'A wizard who specializes in summoning.' },
    { id: 'divination', name: 'School of Divination', description: 'A wizard who specializes in seeing the future.' },
    { id: 'enchantment', name: 'School of Enchantment', description: 'A wizard who specializes in mind control.' },
    { id: 'evocation', name: 'School of Evocation', description: 'A wizard who specializes in destructive magic.' },
    { id: 'illusion', name: 'School of Illusion', description: 'A wizard who specializes in deception and illusion.' },
    { id: 'necromancy', name: 'School of Necromancy', description: 'A wizard who specializes in death magic.' },
    { id: 'transmutation', name: 'School of Transmutation', description: 'A wizard who specializes in changing matter.' },
    { id: 'war-magic', name: 'War Magic', description: 'A wizard who combines magic with combat tactics.' }
  ]
};

// Spells organized by class and level
export const spells = {
  bard: {
    0: [ // Cantrips
      { id: 'vicious-mockery', name: 'Vicious Mockery', description: 'Insult a creature within range. On a failed save, it takes 1d4 psychic damage and has disadvantage on its next attack.' },
      { id: 'mage-hand', name: 'Mage Hand', description: 'A spectral hand appears and can manipulate objects.' },
      { id: 'minor-illusion', name: 'Minor Illusion', description: 'Create a sound or image within range.' },
      { id: 'prestidigitation', name: 'Prestidigitation', description: 'Perform minor magical tricks.' },
      { id: 'dancing-lights', name: 'Dancing Lights', description: 'Create up to four torch-sized lights.' }
    ],
    1: [
      { id: 'cure-wounds', name: 'Cure Wounds', description: 'Heal a creature you touch for 1d8 + spellcasting modifier hit points.' },
      { id: 'healing-word', name: 'Healing Word', description: 'Heal a creature within 60 feet for 1d4 + spellcasting modifier hit points.' },
      { id: 'charm-person', name: 'Charm Person', description: 'Make a humanoid regard you as a friendly acquaintance.' },
      { id: 'disguise-self', name: 'Disguise Self', description: 'Make yourself appear different.' },
      { id: 'faerie-fire', name: 'Faerie Fire', description: 'Objects and creatures glow, giving advantage on attacks against them.' },
      { id: 'thunderwave', name: 'Thunderwave', description: 'Create a wave of thunderous force that damages creatures.' },
      { id: 'detect-magic', name: 'Detect Magic', description: 'Sense the presence of magic within 30 feet.' },
      { id: 'identify', name: 'Identify', description: 'Learn the properties of a magic item.' }
    ]
  },
  cleric: {
    0: [
      { id: 'guidance', name: 'Guidance', description: 'Add 1d4 to one ability check of a creature you touch.' },
      { id: 'resistance', name: 'Resistance', description: 'Add 1d4 to one saving throw of a creature you touch.' },
      { id: 'sacred-flame', name: 'Sacred Flame', description: 'Deal 1d8 radiant damage to a creature within 60 feet.' },
      { id: 'thaumaturgy', name: 'Thaumaturgy', description: 'Perform minor divine effects.' },
      { id: 'toll-the-dead', name: 'Toll the Dead', description: 'Deal 1d8 or 1d12 necrotic damage to a creature within 60 feet.' }
    ],
    1: [
      { id: 'bless', name: 'Bless', description: 'Up to three creatures add 1d4 to attack rolls and saving throws.' },
      { id: 'cure-wounds', name: 'Cure Wounds', description: 'Heal a creature you touch for 1d8 + spellcasting modifier hit points.' },
      { id: 'healing-word', name: 'Healing Word', description: 'Heal a creature within 60 feet for 1d4 + spellcasting modifier hit points.' },
      { id: 'inflict-wounds', name: 'Inflict Wounds', description: 'Deal 3d10 necrotic damage to a creature you touch.' },
      { id: 'shield-of-faith', name: 'Shield of Faith', description: 'A creature gains +2 AC.' },
      { id: 'guiding-bolt', name: 'Guiding Bolt', description: 'Deal 4d6 radiant damage and give advantage on next attack.' },
      { id: 'detect-magic', name: 'Detect Magic', description: 'Sense the presence of magic within 30 feet.' },
      { id: 'purify-food-and-drink', name: 'Purify Food and Drink', description: 'Purify food and drink within 5 feet.' }
    ]
  },
  druid: {
    0: [
      { id: 'druidcraft', name: 'Druidcraft', description: 'Perform minor nature-related effects.' },
      { id: 'guidance', name: 'Guidance', description: 'Add 1d4 to one ability check of a creature you touch.' },
      { id: 'mending', name: 'Mending', description: 'Repair a single break or tear in an object.' },
      { id: 'poison-spray', name: 'Poison Spray', description: 'Deal 1d12 poison damage to a creature within 10 feet.' },
      { id: 'produce-flame', name: 'Produce Flame', description: 'Create a flame in your hand that deals 1d8 fire damage.' },
      { id: 'shillelagh', name: 'Shillelagh', description: 'Make a club or quarterstaff magical for 1 minute.' }
    ],
    1: [
      { id: 'cure-wounds', name: 'Cure Wounds', description: 'Heal a creature you touch for 1d8 + spellcasting modifier hit points.' },
      { id: 'entangle', name: 'Entangle', description: 'Plants restrain creatures in a 20-foot square.' },
      { id: 'faerie-fire', name: 'Faerie Fire', description: 'Objects and creatures glow, giving advantage on attacks against them.' },
      { id: 'goodberry', name: 'Goodberry', description: 'Create up to 10 berries that restore 1 HP each.' },
      { id: 'healing-word', name: 'Healing Word', description: 'Heal a creature within 60 feet for 1d4 + spellcasting modifier hit points.' },
      { id: 'thunderwave', name: 'Thunderwave', description: 'Create a wave of thunderous force that damages creatures.' },
      { id: 'detect-magic', name: 'Detect Magic', description: 'Sense the presence of magic within 30 feet.' },
      { id: 'speak-with-animals', name: 'Speak with Animals', description: 'Communicate with beasts for 10 minutes.' }
    ]
  },
  paladin: {
    1: [
      { id: 'bless', name: 'Bless', description: 'Up to three creatures add 1d4 to attack rolls and saving throws.' },
      { id: 'cure-wounds', name: 'Cure Wounds', description: 'Heal a creature you touch for 1d8 + spellcasting modifier hit points.' },
      { id: 'detect-evil-and-good', name: 'Detect Evil and Good', description: 'Detect celestials, fiends, and undead within 30 feet.' },
      { id: 'divine-favor', name: 'Divine Favor', description: 'Your weapon attacks deal an extra 1d4 radiant damage.' },
      { id: 'heroism', name: 'Heroism', description: 'A creature is immune to being frightened and gains temporary HP each turn.' },
      { id: 'protection-from-evil-and-good', name: 'Protection from Evil and Good', description: 'Protect a creature from certain creature types.' },
      { id: 'shield-of-faith', name: 'Shield of Faith', description: 'A creature gains +2 AC.' }
    ]
  },
  ranger: {
    1: [
      { id: 'cure-wounds', name: 'Cure Wounds', description: 'Heal a creature you touch for 1d8 + spellcasting modifier hit points.' },
      { id: 'hunters-mark', name: 'Hunter\'s Mark', description: 'Deal an extra 1d6 damage to a marked target.' },
      { id: 'ensnaring-strike', name: 'Ensnaring Strike', description: 'Your weapon attack restrains the target on a hit.' },
      { id: 'goodberry', name: 'Goodberry', description: 'Create up to 10 berries that restore 1 HP each.' },
      { id: 'speak-with-animals', name: 'Speak with Animals', description: 'Communicate with beasts for 10 minutes.' },
      { id: 'detect-magic', name: 'Detect Magic', description: 'Sense the presence of magic within 30 feet.' }
    ]
  },
  sorcerer: {
    0: [
      { id: 'fire-bolt', name: 'Fire Bolt', description: 'Deal 1d10 fire damage to a target within 120 feet.' },
      { id: 'mage-hand', name: 'Mage Hand', description: 'A spectral hand appears and can manipulate objects.' },
      { id: 'minor-illusion', name: 'Minor Illusion', description: 'Create a sound or image within range.' },
      { id: 'prestidigitation', name: 'Prestidigitation', description: 'Perform minor magical tricks.' },
      { id: 'ray-of-frost', name: 'Ray of Frost', description: 'Deal 1d8 cold damage and reduce speed by 10 feet.' },
      { id: 'shocking-grasp', name: 'Shocking Grasp', description: 'Deal 1d8 lightning damage and prevent reactions.' }
    ],
    1: [
      { id: 'magic-missile', name: 'Magic Missile', description: 'Three darts deal 1d4+1 force damage each.' },
      { id: 'burning-hands', name: 'Burning Hands', description: 'Deal 3d6 fire damage in a 15-foot cone.' },
      { id: 'charm-person', name: 'Charm Person', description: 'Make a humanoid regard you as a friendly acquaintance.' },
      { id: 'mage-armor', name: 'Mage Armor', description: 'Touch a willing creature to give it AC 13 + Dex modifier.' },
      { id: 'shield', name: 'Shield', description: 'Gain +5 AC against one attack as a reaction.' },
      { id: 'thunderwave', name: 'Thunderwave', description: 'Create a wave of thunderous force that damages creatures.' },
      { id: 'detect-magic', name: 'Detect Magic', description: 'Sense the presence of magic within 30 feet.' },
      { id: 'identify', name: 'Identify', description: 'Learn the properties of a magic item.' }
    ]
  },
  warlock: {
    0: [
      { id: 'eldritch-blast', name: 'Eldritch Blast', description: 'Deal 1d10 force damage to a target within 120 feet.' },
      { id: 'mage-hand', name: 'Mage Hand', description: 'A spectral hand appears and can manipulate objects.' },
      { id: 'minor-illusion', name: 'Minor Illusion', description: 'Create a sound or image within range.' },
      { id: 'prestidigitation', name: 'Prestidigitation', description: 'Perform minor magical tricks.' }
    ],
    1: [
      { id: 'armor-of-agathys', name: 'Armor of Agathys', description: 'Gain 5 temporary HP and deal 5 cold damage to attackers.' },
      { id: 'hex', name: 'Hex', description: 'Deal an extra 1d6 necrotic damage to a marked target.' },
      { id: 'hellish-rebuke', name: 'Hellish Rebuke', description: 'Deal 2d10 fire damage to a creature that damaged you.' },
      { id: 'charm-person', name: 'Charm Person', description: 'Make a humanoid regard you as a friendly acquaintance.' },
      { id: 'witch-bolt', name: 'Witch Bolt', description: 'Deal 1d12 lightning damage and continue dealing damage each turn.' },
      { id: 'protection-from-evil-and-good', name: 'Protection from Evil and Good', description: 'Protect a creature from certain creature types.' }
    ]
  },
  wizard: {
    0: [
      { id: 'fire-bolt', name: 'Fire Bolt', description: 'Deal 1d10 fire damage to a target within 120 feet.' },
      { id: 'mage-hand', name: 'Mage Hand', description: 'A spectral hand appears and can manipulate objects.' },
      { id: 'minor-illusion', name: 'Minor Illusion', description: 'Create a sound or image within range.' },
      { id: 'prestidigitation', name: 'Prestidigitation', description: 'Perform minor magical tricks.' },
      { id: 'ray-of-frost', name: 'Ray of Frost', description: 'Deal 1d8 cold damage and reduce speed by 10 feet.' },
      { id: 'shocking-grasp', name: 'Shocking Grasp', description: 'Deal 1d8 lightning damage and prevent reactions.' }
    ],
    1: [
      { id: 'magic-missile', name: 'Magic Missile', description: 'Three darts deal 1d4+1 force damage each.' },
      { id: 'burning-hands', name: 'Burning Hands', description: 'Deal 3d6 fire damage in a 15-foot cone.' },
      { id: 'mage-armor', name: 'Mage Armor', description: 'Touch a willing creature to give it AC 13 + Dex modifier.' },
      { id: 'shield', name: 'Shield', description: 'Gain +5 AC against one attack as a reaction.' },
      { id: 'thunderwave', name: 'Thunderwave', description: 'Create a wave of thunderous force that damages creatures.' },
      { id: 'detect-magic', name: 'Detect Magic', description: 'Sense the presence of magic within 30 feet.' },
      { id: 'identify', name: 'Identify', description: 'Learn the properties of a magic item.' },
      { id: 'find-familiar', name: 'Find Familiar', description: 'Summon a familiar that takes the form of an animal.' },
      { id: 'sleep', name: 'Sleep', description: 'Put creatures to sleep based on their hit points.' },
      { id: 'charm-person', name: 'Charm Person', description: 'Make a humanoid regard you as a friendly acquaintance.' }
    ]
  }
};

// Spell slots per level for spellcasters at level 1
export const spellSlotsLevel1 = {
  bard: { 1: 2 },
  cleric: { 1: 2 },
  druid: { 1: 2 },
  paladin: { 1: 0 }, // Paladins don't get spells until level 2
  ranger: { 1: 0 }, // Rangers don't get spells until level 2
  sorcerer: { 1: 2 },
  warlock: { 1: 1 }, // Warlocks use pact magic
  wizard: { 1: 2 }
};

// Number of spells known/prepared at level 1
export const spellsKnownLevel1 = {
  bard: { cantrips: 2, spells: 4 },
  cleric: { cantrips: 3, spells: 'Wisdom modifier + 1 (minimum 1)' },
  druid: { cantrips: 2, spells: 'Wisdom modifier + 1 (minimum 1)' },
  paladin: { cantrips: 0, spells: 0 },
  ranger: { cantrips: 0, spells: 0 },
  sorcerer: { cantrips: 4, spells: 2 },
  warlock: { cantrips: 2, spells: 2 },
  wizard: { cantrips: 3, spells: 6 }
};
