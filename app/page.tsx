'use client';

import Image from 'next/image';
import { Flex } from '@radix-ui/themes';
import { useState } from 'react';

import SearchField from './components/SearchField';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-5'>
      <Flex
        direction='column'
        width='100%'
        align='center'
        justify='center'
        gap="4"
        className='max-w-3xl'
      >
        <Image
          src='/images/pokemon-logo-500.svg'
          alt='Pokemon logo'
          width={500}
          height={189}
        />
        <SearchField setState={setSearchQuery} />
      </Flex>
    </main>
  );
}
