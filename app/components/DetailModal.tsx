/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {
  Dialog,
  Flex,
  Heading,
  Text,
  Button,
  Separator,
} from '@radix-ui/themes';

import { DetailModalProps } from '../types';
import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';
import { HIT_POINTS_API_PROPERTY_NAME } from '../constants/other';
import { capitaliseFirstLetter } from '../utils/utils';

const DetailModal = ({ cardData, detailData }: DetailModalProps) => {
  const { name, img, primaryPokemonType, secondaryPokemonType } = cardData;
  const { abilities, stats } = detailData;
  return (
    <Dialog.Content
      className='relative w-[700] max-w-none rounded-lg'
      style={{
        background: secondaryPokemonType
          ? `linear-gradient(120deg, ${POKEMON_TYPE_COLORS[primaryPokemonType]} 50%, ${POKEMON_TYPE_COLORS[secondaryPokemonType]} 50%`
          : POKEMON_TYPE_COLORS[primaryPokemonType],
        width: '700px',
        maxWidth: 'none',
        borderRadius: '0.5rem',
      }}
    >
      <Dialog.Close>
        <Button
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
      <Flex align={'center'} justify={'center'} className='absolute top-0 right-0 w-[340px] bg-white py-6 rounded-tr-lg'>
        <img
          src={img}
          alt={`${capitaliseFirstLetter(name)} front view`}
          className='h-[220px] max-w-72'
        />
      </Flex>
      <Flex justify='between' className='pt-12 pb-4 px-4'>
        <Flex direction={'column'} justify='center' gap='1' className='w-1/2'>
          <Heading as='h3' size={'6'} weight={'medium'} className='pb-2'>
            {'Base Stats'}
          </Heading>
          {stats ? (
            stats.map((item) => {
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
          <Dialog.Title as='h2' size={'8'} className='text-white pb-2'>
            {capitaliseFirstLetter(name)}
          </Dialog.Title>
          <div className='h-[2px] rounded-lg bg-white opacity-20 w-3/4'></div>
          <Heading as='h3' weight={'medium'} size={'6'} className='pt-4 pb-2'>
            {'Abilities'}
          </Heading>
          {abilities ? (
            abilities.map((item) => {
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
  );
};

export default DetailModal;
