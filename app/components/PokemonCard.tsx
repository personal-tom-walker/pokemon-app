/* eslint-disable @next/next/no-img-element */
'use client';

import { Card, Dialog, Flex } from '@radix-ui/themes';
import { useState } from 'react';

import { PokemonDetailDataTypes, PokemonCardProps } from '../types';

import { getPokemonDetail } from '../utils/apiUtils/utils';
import { capitaliseFirstLetter } from '../utils/utils';

import {
  POKEMON_IMG_BASE_URL,
  POKEMON_IMG_URL_SUFFIX,
} from '../constants/imgUrls';
import { breakpoints } from '../constants/breakpoints';

import DetailModalDesktop from './desktopOnly/DetailModal';
import DetailModalMobile from './mobileOnly/DetailModal';

const PokemonCard = ({ data }: { data: PokemonCardProps }) => {
  const { name } = data;

  const [detailData, setDetailData] = useState<PokemonDetailDataTypes | null>(
    null
  );

  const addDefaultImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/question-mark-silhouette-dark-grey-180h.svg';
  };

  const handleDetailOpen = () => {
    getPokemonDetail(data).then((detailRes) => {
      if (detailRes) {
        const { types, abilities, stats } = detailRes;
        const detailDataForModal = {
          primaryPokemonType: types[0].type.name,
          secondaryPokemonType:
            types.length > 1 ? detailRes.types[1].type.name : null,
          abilities,
          stats,
        };
        setDetailData(detailDataForModal);
      } else {
        throw new Error(`API Error when retrieving Pokemon detail for ${name}`);
      }
    });
  };

  const handleDetailClose = () => {
    setDetailData(null);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div role='button' tabIndex={0} onClick={() => handleDetailOpen()}>
          <Card className='max-w-80 min-w-72 transition-all hover:scale-105'>
            <Flex direction='column' gap='5' align='center' py='3' px='5'>
              <h2 className='text-3xl font-medium'>
                {capitaliseFirstLetter(name)}
              </h2>
              <img
                src={`${POKEMON_IMG_BASE_URL}/${name}${POKEMON_IMG_URL_SUFFIX}`}
                onError={addDefaultImg}
                alt={`${capitaliseFirstLetter(name)} front view`}
                height={180}
                className='h-[180px] max-w-64'
              />
            </Flex>
          </Card>
        </div>
      </Dialog.Trigger>
      {window.innerWidth > breakpoints.mobile ? (
        <DetailModalDesktop
          name={name}
          img={`${POKEMON_IMG_BASE_URL}/${name}${POKEMON_IMG_URL_SUFFIX}`}
          detailData={detailData}
          handleClose={handleDetailClose}
        />
      ) : (
        <DetailModalMobile
          name={name}
          img={`${POKEMON_IMG_BASE_URL}/${name}${POKEMON_IMG_URL_SUFFIX}`}
          detailData={detailData}
          handleClose={handleDetailClose}
        />
      )}
    </Dialog.Root>
  );
};

export default PokemonCard;
