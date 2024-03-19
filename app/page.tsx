import Image from 'next/image';
import { Flex } from '@radix-ui/themes';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      <Flex
        direction='column'
        width='100%'
        align='center'
        justify='center'
        className='max-w-3xl'
      >
        <Image
          src='/images/pokemon-logo-500.svg'
          alt='Pokemon logo'
          width={500}
          height={189}
        />
      </Flex>
    </main>
  );
}
