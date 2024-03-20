import Image from 'next/image';
import { Flex } from '@radix-ui/themes';

import { POKEAPI_BASE_URL, POKEMON_URL } from './constants/apiUrls';

import MainContent from './components/MainContent';

export const getPokemonList = async (offset = 0, limit = 1500) => {
  const apiUrl = `${POKEAPI_BASE_URL}/${POKEMON_URL}?offset=${offset}&limit=${limit}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('API Error when retrieving Pokemon list');
  }
  return response.json();
};

export default async function Home() {
  const pokemonListData = await getPokemonList();

  return (
    <main className='flex min-h-screen flex-col items-center p-5'>
      <Flex
        direction='column'
        width='100%'
        align='center'
        justify='center'
        className='max-w-3xl mb-10'
      >
        <Image
          src='/images/pokemon-logo-500.svg'
          alt='Pokemon logo'
          width={500}
          height={189}
        />
      </Flex>
      <MainContent data={pokemonListData.results} />
    </main>
  );
}
