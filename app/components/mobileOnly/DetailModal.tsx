/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { Dialog, Flex, Heading, Text, Button } from '@radix-ui/themes';

import { capitaliseFirstLetter } from '../../utils/utils';
import { DetailModalTypes } from '../../types';
import { POKEMON_TYPE_COLORS } from '../../constants/pokemonTypeColors';
import { HIT_POINTS_API_PROPERTY_NAME } from '../../constants/other';

const DetailModalMobile = ({ name, img, detailData, handleClose }: DetailModalTypes) => {
  const addDefaultImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/question-mark-silhouette-dark-grey-180h.svg';
  };

  return (
    <Dialog.Content
      style={{
        position: 'relative',
        width: '90%',
        maxWidth: 'none',
        padding: 0,
        borderRadius: '0.5rem',
      }}
    >
      <Dialog.Close>
        <Button
          onClick={handleClose}
          variant='ghost'
          className='absolute top-4 left-4 hover:bg-transparent cursor-pointer'
        >
          <Image
            src={'/icons/close-crop-grey-40.png'}
            alt={'Close Modal'}
            height={20}
            width={20}
            className='cursor-pointer'
          />
        </Button>
      </Dialog.Close>
      <Flex
        align={'center'}
        justify={'center'}
        className='w-full h-[200px] bg-white px-2 rounded-t-lg'
      >
        <img
          src={img}
          onError={addDefaultImg}
          alt={`${capitaliseFirstLetter(name)} front view`}
          className='h-[160px] max-w-64'
        />
      </Flex>
      {detailData ? (
        <Flex
          direction={'column'}
          align={'center'}
          gap='1'
          className='modal-scroll-content pt-10 pb-8 px-4'
          style={{
            background: detailData.secondaryPokemonType
              ? `linear-gradient(131deg, ${
                  POKEMON_TYPE_COLORS[detailData.primaryPokemonType]
                } 50%, ${
                  POKEMON_TYPE_COLORS[detailData.secondaryPokemonType]
                } 50%`
              : POKEMON_TYPE_COLORS[detailData.primaryPokemonType],
          }}
        >
          <h2 className='text-4xl font-medium text-white pb-4'>
            {capitaliseFirstLetter(name)}
          </h2>
          <div className='rounded-lg h-72 w-11/12 bg-white opacity-20 mb-[-268px]'></div>
          <Flex
            direction={'column'}
            align={'center'}
            gap='2'
            className='w-5/6 rounded-lg h-60 mb-6 overflow-y-scroll z-10'
          >
            <Heading as='h3' weight={'medium'} size={'6'} className='pb-2'>
              {'Abilities'}
            </Heading>
            {detailData.abilities ? (
              detailData.abilities.map((item) => {
                return (
                  <Text
                    key={item.ability.name}
                    weight={'light'}
                    size={'5'}
                    className='italic'
                  >
                    {capitaliseFirstLetter(item.ability.name)}
                  </Text>
                );
              })
            ) : (
              <Text weight={'light'} className='italic text-2xl'>
                {'None'}
              </Text>
            )}
            <Heading as='h3' size={'6'} weight={'medium'} className='pt-6 pb-2'>
              {'Base Stats'}
            </Heading>
            {detailData.stats ? (
              detailData.stats.map((item) => {
                const { base_stat, stat } = item;
                return (
                  <Flex key={stat.name} direction={'column'} align={'center'}>
                    <h4 className='italic pt-2 text-lg'>
                      {stat.name === HIT_POINTS_API_PROPERTY_NAME
                        ? stat.name.toUpperCase()
                        : stat.name
                            .split('-')
                            .map((item) => capitaliseFirstLetter(item))
                            .join(' ')}
                    </h4>
                    <Text weight={'medium'} size={'6'} align={'center'}>
                      {base_stat || 'N/A'}
                    </Text>
                  </Flex>
                );
              })
            ) : (
              <Text>{'Stats unavailable'}</Text>
            )}
          </Flex>
        </Flex>
      ) : (
        <Flex
          direction={'column'}
          gap={'4'}
          align={'center'}
          className='w-full px-10 py-6 bg-white rounded-lg'
        >
          <Image
            src='/gifs/pokeball-v1-80.gif'
            alt='Pokeball loading gif'
            height={80}
            width={80}
          />
          <Text size={'4'} weight={'medium'} className='italic text-dark'>
            {'Loading...'}
          </Text>
        </Flex>
      )}
    </Dialog.Content>
  );
};

export default DetailModalMobile;
