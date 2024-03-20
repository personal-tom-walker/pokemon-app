import { PokemonListApiTypes } from '../../types';

export const getPokemonDetail = async (item: PokemonListApiTypes) => {
  const response = await fetch(item.url);
  if (!response.ok) {
    throw new Error(`API Error when retrieving Pokemon detail for ${item.name}`);
  }
  return response.json();
};
