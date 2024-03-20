'use client';

import Image from 'next/image';
import { Dialog, Flex, Heading, Text, Button } from '@radix-ui/themes';

import { PokemonType } from '../types';
import { capitaliseFirstLetter } from '../utils/utils';
import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';

const LegendModal = () => {
  return (
    <Dialog.Content
      style={{
        backgroundColor: 'rgb(255, 203, 8)',
        position: 'relative',
        width: '80%',
        borderRadius: '0.5rem',
      }}
    >
      <Dialog.Close>
        <Button
          variant='ghost'
          className='absolute top-6 left-10 hover:bg-transparent cursor-pointer'
        >
          <Image
            src={'/icons/close-crop-blue.svg'}
            alt={'Close Modal'}
            height={20}
            width={20}
            className='cursor-pointer'
          />
        </Button>
      </Dialog.Close>
      <Flex
        direction={'column'}
        justify='center'
        align='center'
        width='100%'
        gap='1'
        className='bg-yellow pt-8 pb-4 px-4 modal-scroll-content'
      >
        <Heading as='h3' size={'6'} weight={'bold'} className='text-dark'>
          {'Legend'}
        </Heading>
        <Text
          weight={'medium'}
          size={'3'}
          align={'center'}
          className='text-dark py-4'
        >
          {
            'Colour types correspond to background colours for each pokemon modal (click on a pokemon to see). Where there are two background colours, the Pokemon has two types!'
          }
        </Text>
        <div className='rounded-lg h-72 w-11/12 bg-white opacity-50 mb-[-268px]'></div>
        <Flex
          direction={'column'}
          width={'100%'}
          gap={'4'}
          className='max-w-72 h-60 mb-4 px-12 rounded-lg overflow-y-scroll z-10'
        >
          {Object.values(PokemonType).map((item) => {
            return (
              <Flex
                key={item}
                justify={'center'}
                align={'center'}
                width={'100%'}
                className='py-2 rounded-lg'
                style={{ backgroundColor: POKEMON_TYPE_COLORS[item] }}
              >
                <h4 className='font-semibold text-lg'>
                  {capitaliseFirstLetter(item)}
                </h4>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Dialog.Content>
  );
};

export default LegendModal;
