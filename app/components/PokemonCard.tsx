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
        {!secondaryPokemonType ? (
          <Flex
            width='100%'
            align='center'
            justify='center'
            px='6'
            py='2'
            className='rounded-lg'
            style={{ backgroundColor: POKEMON_TYPE_COLORS[primaryPokemonType] }}
          >
            <Text align='center' weight='bold'>
              {primaryPokemonType.toUpperCase()}
            </Text>
          </Flex>
        ) : (
          <div></div>
        )}
      </Flex>
    </Card>
  );
};

export default PokemonCard;
