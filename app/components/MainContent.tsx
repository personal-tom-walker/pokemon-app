'use client';

import Image from 'next/image';
import { Flex, Grid, Text } from '@radix-ui/themes';
import { useState, useEffect } from 'react';

import {
  PokemonListApiTypes,
  PokemonCardProps,
} from '../types';

import SearchField from '../components/SearchField';
import PokemonCard from '../components/PokemonCard';

const MainContent = ({ data }: { data: PokemonListApiTypes[] }) => {
  const [pokemonListDataToRender, setPokemonListDataToRender] =
    useState<PokemonCardProps[]>(data);

  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setPokemonListDataToRender(
      searchQuery.length > 0
        ? data.filter((item) => item.name.includes(searchQuery))
        : data
    );
  }, [searchQuery, data]);

  return (
    <main className='flex min-h-screen flex-col items-center p-5'>
      <Flex
        width='100%'
        align='center'
        justify='center'
        className='max-w-3xl mb-10'
      >
        <SearchField setState={setSearchQuery} />
      </Flex>
      {pokemonListDataToRender && pokemonListDataToRender.length > 0 ? (
          <Grid
            columns={{ initial: '1', sm: '2', lg: '3' }}
            gap='8'
            width='auto'
          >
            {pokemonListDataToRender.map((item) => {
              return (
                <div key={item.name}>
                      <PokemonCard data={item} />
                    </div>
              );
            })}
          </Grid>
      ) : (
        <Flex
          direction={'column'}
          gap={'4'}
          align={'center'}
          className='w-80 px-10 py-6 bg-white rounded-lg'
        >
          <Image
            src='/gifs/pokeball-v1-80.gif'
            alt='Pokeball loading gif'
            height={80}
            width={80}
          />
          <Text size={'4'} weight={'medium'} className='italic text-dark'>
            {'No results found!'}
          </Text>
        </Flex>
      )}
    </main>
  );
};

export default MainContent;
