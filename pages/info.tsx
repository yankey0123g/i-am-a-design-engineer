import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { ArrowRightIcon } from '@iconicicons/react';

const inter = Inter({ subsets: ['latin'] });

export default function Info() {
  return (
    <>
      <Head>
        <title>Emmanuel Yankey - Design Engineer</title>
        <meta name='description' content='Design Engineer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='min-h-screen w-full dark:bg-[#111] dark:text-white'>
        <div className='max-w-[800px] mx-auto space-y-20 py-20 p-4 lg:px-[0]'>
          {' '}
          <header>
            <nav className='flex justify-between w-24'>
              <Link className='opacity-40' href='/'>
                Work
              </Link>
              <span className='opacity-40'>/</span>
              <Link href='/info'>Info</Link>
            </nav>
          </header>
          <div className='space-y-10 h-full'>
            <Image
              src='/'
              alt='An image of me'
              width={800}
              height={250}
              className=' w-full h-[340px] object-cover bg-gradient-to-br from-[#5647FC33] to-[#F32BD300] rounded-[32px] border-black border-opacity-10'
            />
            <p className='text-lg sm:text-xl'>
              I’m Emmanuel Yankey a Design Engineer building products for
              brands. Focused on interfaces and user experience. Helping clients
              craft beautiful interfaces and taking brands further through
              visual experience. I enjoy collaborating with design & engineering
              teams to help identify, explore and solve user-centered problems.
            </p>
          </div>
          <div className='fixed bottom-4 flex justify-center w-[100%] sm:w-[800px]  z-10 '>
            {' '}
            <Link
              href='mailto:hiyankey@gmail.com'
              className='flex bg-black dark:bg-transparent  bg-opacity-40 backdrop-blur-[10px] text-white items-center px-4 py-2 rounded-[16px] justify-between relative dark:shadow-[0_0_0_1px_rgba(100,100,100,0.4)]'
            >
              <p className='mr-5'>Available for your next project!</p>{' '}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
