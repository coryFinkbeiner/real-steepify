import { getSession } from 'next-auth/react';
import Player from '../components/Player';


export default function Thread() {

  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className='flex'>
        Thread
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