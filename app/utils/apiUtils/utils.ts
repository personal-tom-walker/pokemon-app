import { POKEAPI_BASE_URL, POKEMON_URL } from '../../constants/apiUrls';
import { PokemonListApiTypes } from '../../types';

export const getPokemonList = async (offset = 0, limit = 6) => {
  const apiUrl = `${POKEAPI_BASE_URL}/${POKEMON_URL}?offset=${offset}&limit=${limit}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('API Error when retrieving Pokemon list');
  }
  return response.json();
};

export const getPokemonDetail = async (item: PokemonListApiTypes) => {
  const response = await fetch(item.url);
  if (!response.ok) {
    throw new Error(`API Error when retrieving Pokemon detail for ${item.name}`);
  }
  return response.json();
};
