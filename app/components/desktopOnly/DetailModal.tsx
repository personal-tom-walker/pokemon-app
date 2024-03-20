/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { Dialog, Flex, Heading, Text, Button } from '@radix-ui/themes';

import { capitaliseFirstLetter } from '../../utils/utils';
import { DetailModalTypes } from '../../types';
import { POKEMON_TYPE_COLORS } from '../../constants/pokemonTypeColors';
import { HIT_POINTS_API_PROPERTY_NAME } from '../../constants/other';

const DetailModalDesktop = ({
  data,
  handleClose,
}: {
  data: DetailModalTypes | null;
  handleClose: () => void;
  }) => {

  const addDefaultImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/question-mark-silhouette-dark-grey-180h.svg';
  };

  return (
    <>
      {data && (
        <Dialog.Content
          style={{
            background: data.detailData.secondaryPokemonType
              ? `linear-gradient(120deg, ${
                  POKEMON_TYPE_COLORS[data.detailData.primaryPokemonType]
                } 50%, ${
                  POKEMON_TYPE_COLORS[data.detailData.secondaryPokemonType]
                } 50%`
              : POKEMON_TYPE_COLORS[data.detailData.primaryPokemonType],
            position: 'relative',
            width: '700px',
            maxWidth: 'none',
            borderRadius: '0.5rem',
          }}
        >
          <Dialog.Close>
            <Button
              onClick={handleClose}
              variant='ghost'
              className='absolute top-6 left-10 hover:bg-transparent cursor-pointer'
            >
              <Image
                src={'/icons/close-crop-white.svg'}
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
            className='absolute top-0 right-0 w-[340px] bg-white py-6 rounded-tr-lg'
          >
            <img
              src={data.img}
              onError={addDefaultImg}
              alt={`${capitaliseFirstLetter(data.name)} front view`}
              className='h-[220px] max-w-72'
            />
          </Flex>
          <Flex justify='between' className='pt-12 pb-4 px-4'>
            <Flex
              direction={'column'}
              justify='center'
              gap='1'
              className='w-1/2'
            >
              <Heading as='h3' size={'6'} weight={'medium'} className='pb-2'>
                {'Base Stats'}
              </Heading>
              {data.detailData.stats ? (
                data.detailData.stats.map((item) => {
                  const { base_stat, stat } = item;
                  return (
                    <div key={stat.name}>
                      <h4 className='italic pt-2 text-lg'>
                        {stat.name === HIT_POINTS_API_PROPERTY_NAME
                          ? stat.name.toUpperCase()
                          : stat.name
                              .split('-')
                              .map((item) => capitaliseFirstLetter(item))
                              .join(' ')}
                      </h4>
                      <Text weight={'medium'} size={'6'}>
                        {base_stat || 'N/A'}
                      </Text>
                    </div>
                  );
                })
              ) : (
                <Text>{'Stats unavailable'}</Text>
              )}
            </Flex>
            <Flex
              direction={'column'}
              align='center'
              justify='end'
              gap='1'
              className='w-1/2'
            >
              <h2 className='text-4xl font-medium text-white pb-4'>
                {capitaliseFirstLetter(data.name)}
              </h2>
              <div className='h-[2px] rounded-lg bg-white opacity-20 w-3/4'></div>
              <Heading
                as='h3'
                weight={'medium'}
                size={'6'}
                className='pt-4 pb-2'
              >
                {'Abilities'}
              </Heading>
              {data.detailData.abilities ? (
                data.detailData.abilities.map((item) => {
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
            </Flex>
          </Flex>
        </Dialog.Content>
      )}
    </>
  );
};

export default DetailModalDesktop;
