/* eslint-disable @next/next/no-img-element */
'use client';

import { Card, Flex } from '@radix-ui/themes';

import { PokemonCardProps } from '../types';
import { capitaliseFirstLetter } from '../utils/utils';

const PokemonCard = ({ data }: { data: PokemonCardProps }) => {
  const { name, img } = data;
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
      </Flex>
    </Card>
  );
};

export default PokemonCard;
