// import Head from 'next/head';
import TopBar from '../components/TopBar';
import Center from '../components/Center';
import Player from '../components/Player';
import Playlists from '../components/Playlists';
import { getSession } from 'next-auth/react';



export default function Home() {

  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className='flex'>
        <div className='text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36'>
          <div className='space-y-4'>
            <TopBar />
            <Playlists />
          </div>
        </div>
        <Center />
      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
}