export enum PokemonType {
  Normal = 'normal',
  Fighting = 'fighting',
  Flying = 'flying',
  Poison = 'poison',
  Ground = 'ground',
  Rock = 'rock',
  Bug = 'bug',
  Ghost = 'ghost',
  Steel = 'steel',
  Fire = 'fire',
  Water = 'water',
  Grass = 'grass',
  Electric = 'electric',
  Psychic = 'psychic',
  Ice = 'ice',
  Dragon = 'dragon',
  Dark = 'dark',
  Fairy = 'fairy',
  Unknown = 'unknown',
  Shadow = 'shadow'
}

// API DATA

export interface PokemonListApiTypes {
  name: string;
  url: string;
}

export interface PokemonAbilityTypes {
  ability: {
    name: string;
    url: string;
  }
}

export interface PokemonStatTypes {
  base_stat: number;
  stat: {
    name: string;
  };
}

// STATES ONLY

export interface PokemonDetailDataTypes {
  abilities: PokemonAbilityTypes[];
  stats: PokemonStatTypes[];
}

// COMPONENTS (ALSO USED FOR SOME STATES)

export interface PokemonCardProps {
  name: string;
  img: string;
  primaryPokemonType: PokemonType;
  secondaryPokemonType: PokemonType | null;
}

export interface DetailModalProps {
  cardData: PokemonCardProps;
  detailData: PokemonDetailDataTypes;
}




