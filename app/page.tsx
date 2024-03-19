'use client';

import Image from 'next/image';
import { Flex, Grid } from '@radix-ui/themes';
import { useState } from 'react';

import { PokemonCardProps } from './types';
import { defaultCardData } from './constants/defaultCardData';

import SearchField from './components/SearchField';
import PokemonCard from './components/PokemonCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cardData, setCardData] = useState<PokemonCardProps[]>(defaultCardData);
  return (
    <main className='flex min-h-screen flex-col items-center p-5'>
      <Flex
        direction='column'
        width='100%'
        align='center'
        justify='center'
        gap='4'
        className='max-w-3xl mb-10'
      >
        <Image
          src='/images/pokemon-logo-500.svg'
          alt='Pokemon logo'
          width={500}
          height={189}
        />
        <SearchField setState={setSearchQuery} />
      </Flex>
      <Grid columns={{initial: '1', sm: '2', lg: '3'}} gap='8' width='auto'>
        {cardData.map((item) => {
          return <PokemonCard key={item.name} data={item} />;
        })}
      </Grid>
    </main>
  );
}
