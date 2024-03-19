'use client';

import Image from 'next/image';
import { Flex, Grid } from '@radix-ui/themes';
import { useState, useEffect } from 'react';

import { PokemonListApiTypes, PokemonCardProps } from './types';
import {
  POKEMON_IMG_BASE_URL,
  POKEMON_IMG_URL_SUFFIX,
} from './constants/imgUrls';
import { getPokemonList, getPokemonDetail } from './utils/apiUtils/utils';

import SearchField from './components/SearchField';
import PokemonCard from './components/PokemonCard';

export default function Home() {
  const [pokemonListCalled, setPokemonListCalled] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cardData, setCardData] = useState<PokemonCardProps[]>([]);

  useEffect(() => {
    if (!pokemonListCalled) {
      getPokemonList().then((res) => {
        setPokemonListCalled(true);
        if (res) {
          const results = res.results;
          const newCardData: PokemonCardProps[] = [];
          results.forEach((item: PokemonListApiTypes, index: number) => {
            getPokemonDetail(item).then((detailRes) => {
              if (detailRes) {
                newCardData.push({
                  name: item.name,
                  img: `${POKEMON_IMG_BASE_URL}/${item.name}${POKEMON_IMG_URL_SUFFIX}`,
                  primaryPokemonType: detailRes.types[0].type.name,
                  secondaryPokemonType:
                    detailRes.types.length > 1
                      ? detailRes.types[1].type.name
                      : null,
                });
                if (results.length - 1 === index) {
                  setCardData([...newCardData]);
                }
              } else {
                throw new Error(
                  `API Error when retrieving Pokemon detail for ${item.name}`
                );
              }
            });
          });
        } else {
          throw new Error('API Error when retrieving Pokemon list');
        }
      });
    }
  }, [pokemonListCalled, cardData]);

  useEffect(() => {
    console.log('cardData', cardData);
  }, [cardData]);

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
      {cardData && cardData.length > 0 ? (
        <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap='8' width='auto'>
          {cardData.map((item) => {
            return <PokemonCard key={item.name} data={item} />;
          })}
        </Grid>
      ) : (
        <h2>LOADING...</h2>
      )}
    </main>
  );
}
