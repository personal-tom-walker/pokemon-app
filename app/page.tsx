import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      <section className='flex flex-col max-w-3xl w-full items-center justify-center'>
        <Image
          src='/images/pokemon-logo-500.svg'
          alt='Pokemon logo'
          width={500}
          height={189}
        />
      </section>
    </main>
  );
}
