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

export interface PokemonDetailDataTypes {
  primaryPokemonType: PokemonType;
  secondaryPokemonType: PokemonType | null;
  abilities: PokemonAbilityTypes[];
  stats: PokemonStatTypes[];
}

export interface DetailModalTypes {
  name: string;
  img: string;
  detailData: PokemonDetailDataTypes;
}

export interface PokemonCardProps {
  name: string;
  img: string;
  url: string;
}






