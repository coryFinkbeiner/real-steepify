import TopBar from '../components/TopBar'
import Player from '../components/Player';
import Playlists from '../components/Playlists'
import Search from '../components/Search'
import Bank from '../components/Bank'
import Post from '../components/Post'
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import useSpotify from "../hooks/useSpotify";
import { bankedAlbumsState } from "../atoms/albumsAtom";




// import { getSession } from 'next-auth/react';

export default function Thread() {

  const [bank, setBank] = useRecoilState(bankedAlbumsState);


  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className='flex'>
        <div className='text-gray-500 p-1 text-xs lg:text-sm border-r overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36'>

          <div className='space-y-4 w-[566px]'>
            <TopBar />
            <Bank />
          </div>
        </div>
        {bank.length === 3 ? <Post /> : <Search />}

      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     }
//   };
// }