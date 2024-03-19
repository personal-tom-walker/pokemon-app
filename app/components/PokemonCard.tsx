/* eslint-disable @next/next/no-img-element */
'use client';

import { Card, Heading, Flex, Text } from '@radix-ui/themes';

import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';
import { PokemonCardProps } from '../types';
import { capitaliseFirstLetter } from '../utils/utils';

const PokemonCard = ({ data }: { data: PokemonCardProps }) => {
  const { name, img, primaryPokemonType, secondaryPokemonType } = data;
  return (
    <Card className='max-w-80 min-w-72'>
      <Flex direction='column' gap='5' align='center' py='3' px='5'>
        <h2 className='text-3xl font-medium'>
          {capitaliseFirstLetter(name)}
        </h2>
        <img
          src={img}
          alt={`${capitaliseFirstLetter(name)} front view`}
          height={180}
          className='h-[180px] max-w-64'
        />
        <Flex
          width='100%'
          align='center'
          justify={secondaryPokemonType ? 'between' : 'center'}
          px='6'
          py='2'
          className='rounded-lg'
          style={{
            background: secondaryPokemonType
              ? `linear-gradient(135deg, ${POKEMON_TYPE_COLORS[primaryPokemonType]} 50%, ${POKEMON_TYPE_COLORS[secondaryPokemonType]} 50%`
              : POKEMON_TYPE_COLORS[primaryPokemonType],
          }}
        >
          <Text align='center' weight='medium' size='3'>
            {capitaliseFirstLetter(primaryPokemonType)}
          </Text>
          {secondaryPokemonType && (
            <Text align='center' weight='medium' size='3'>
              {capitaliseFirstLetter(secondaryPokemonType)}
            </Text>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default PokemonCard;
