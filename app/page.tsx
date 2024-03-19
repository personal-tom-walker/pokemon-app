'use client';

import Image from 'next/image';
import { Flex, Grid, Dialog, Text } from '@radix-ui/themes';
import { useState, useEffect } from 'react';

import useWindowWidth from './hooks/useWindowWidth';
import {
  PokemonListApiTypes,
  PokemonCardProps,
  DetailModalTypes,
} from './types';
import {
  POKEMON_IMG_BASE_URL,
  POKEMON_IMG_URL_SUFFIX,
} from './constants/imgUrls';
import { breakpoints } from './constants/breakpoints';
import { getPokemonList, getPokemonDetail } from './utils/apiUtils/utils';

import SearchField from './components/SearchField';
import PokemonCard from './components/PokemonCard';
import DetailModalDesktop from './components/desktopOnly/DetailModal';
import DetailModalMobile from './components/mobileOnly/DetailModal';

export default function Home() {
  const windowWidth = useWindowWidth();

  const [pokemonListCalled, setPokemonListCalled] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pokemonListData, setPokemonListData] = useState<PokemonCardProps[]>(
    []
  );
  const [detailData, setDetailData] = useState<DetailModalTypes | null>(null);

  const handleDetailOpen = (item: PokemonListApiTypes) => {
    getPokemonDetail(item).then((detailRes) => {
      if (detailRes) {
        const { types, abilities, stats } = detailRes;
        const detailDataForModal = {
          name: item.name,
          img: `${POKEMON_IMG_BASE_URL}/${item.name}${POKEMON_IMG_URL_SUFFIX}`,
          detailData: {
            primaryPokemonType: types[0].type.name,
            secondaryPokemonType:
              types.length > 1 ? detailRes.types[1].type.name : null,
            abilities,
            stats,
          },
        };
        setDetailData(detailDataForModal);
      } else {
        throw new Error(
          `API Error when retrieving Pokemon detail for ${item.name}`
        );
      }
    });
  };

  useEffect(() => {
    if (!pokemonListCalled) {
      getPokemonList().then((res) => {
        setPokemonListCalled(true);
        if (res) {
          const results = res.results;
          const newPokemonListData: PokemonCardProps[] = [];
          results.forEach((item: PokemonListApiTypes, index: number) => {
            newPokemonListData.push({
              name: item.name,
              img: `${POKEMON_IMG_BASE_URL}/${item.name}${POKEMON_IMG_URL_SUFFIX}`,
              url: item.url,
            });
            setPokemonListData([...newPokemonListData]);
          });
        } else {
          throw new Error('API Error when retrieving Pokemon list');
        }
      });
    }
  }, [pokemonListCalled, pokemonListData]);

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
      {pokemonListData && pokemonListData.length > 0 ? (
        <Dialog.Root>
          <Grid
            columns={{ initial: '1', sm: '2', lg: '3' }}
            gap='8'
            width='auto'
          >
            {pokemonListData.map((item, index) => {
              return (
                <div key={item.name}>
                  <Dialog.Trigger>
                    <div
                      role='button'
                      tabIndex={0}
                      onClick={() => handleDetailOpen(item)}
                    >
                      <PokemonCard data={item} />
                    </div>
                  </Dialog.Trigger>
                </div>
              );
            })}
          </Grid>
          {windowWidth && windowWidth > breakpoints.mobile ? (
            <DetailModalDesktop data={detailData} />
          ) : (
            <DetailModalMobile data={detailData} />
          )}
        </Dialog.Root>
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
            {'loading...'}
          </Text>
        </Flex>
      )}
    </main>
  );
}
