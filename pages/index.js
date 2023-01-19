// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Sidebar from '../components/Sidebar'



export default function Home() {

  return (
    <div className="">

      <main className='bg-black h-screen overflow-hidden'>
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

