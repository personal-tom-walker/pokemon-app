import Image from 'next/image';

import { Card, Heading, Flex, Text } from '@radix-ui/themes';

import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';

import { PokemonCardProps } from '../types';

const PokemonCard = ({ data }: { data: PokemonCardProps }) => {
  console.log('pokeData', data);
  const { name, img, primaryPokemonType, secondaryPokemonType } = data;
  return (
    <Card className='max-w-80 min-w-64'>
      <Flex direction='column' gap='4' align='center' p='2'>
        <Heading as='h2'>{name}</Heading>
        <Image src={img} alt={`${name} front view`} width={90} height={180} />
        <Flex
          width='100%'
          align='center'
          justify={secondaryPokemonType ? 'between' : 'center'}
          px='6'
          py='2'
          className='rounded-lg'
          style={{
            backgroundColor: secondaryPokemonType
              ? 'transparent'
              : POKEMON_TYPE_COLORS[primaryPokemonType],
            background: secondaryPokemonType
              ? `linear-gradient(135deg, ${POKEMON_TYPE_COLORS[primaryPokemonType]} 50%, ${POKEMON_TYPE_COLORS[secondaryPokemonType]} 50%`
              : '',
          }}
        >
          <Text align='center' weight='medium' size='3'>
            {primaryPokemonType.charAt(0).toUpperCase() +
              primaryPokemonType.slice(1)}
          </Text>
          {secondaryPokemonType && (
            <Text align='center' weight='medium' size='3'>
              {secondaryPokemonType.charAt(0).toUpperCase() +
                secondaryPokemonType.slice(1)}
            </Text>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default PokemonCard;
