
import TopBar from '../components/TopBar'
import Player from '../components/Player';
import Playlists from '../components/Playlists'
import Search from '../components/Search'
import Bank from '../components/Bank'
import Post from '../components/Post'


// import { getSession } from 'next-auth/react';

export default function Thread() {

  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className='flex'>
        <div className='text-gray-500 p-1 text-xs lg:text-sm border-r overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36'>

          <div className='space-y-4 w-[566px]'>
            <TopBar />
            <Bank />
          </div>
        </div>
        {/* add conditional render for bank being full */}
        <Post />
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