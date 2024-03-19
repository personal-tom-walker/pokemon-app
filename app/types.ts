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

// COMPONENTS

export interface PokemonCardProps {
  name: string;
  img: string;
  primaryPokemonType: PokemonType;
  secondaryPokemonType: PokemonType | null;
}
