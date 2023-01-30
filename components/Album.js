import { PlusIcon } from '@heroicons/react/solid';




function Album({ albumCover, name, year, artist }) {


  return (

    <div className='bg-gray-500 space-y-1 border border-white rounded p-2 h-[228px] group cursor-pointer'>

      <div  className='relative '>

        <img
          className='w-full h-2/3 rounded p-1'
          src={albumCover}
          alt=''
        />

        <PlusIcon className='text-black absolute h-1/3 bottom-2.5 right-2.5 bg-green-500 rounded-full hidden group-hover:block' />

      </div>


      <p className='truncate font-semibold'>
        {name}
      </p>
      <p className='truncate text-sm'>
        {year} *dot {artist}
      </p>

    </div>
  );
}

export default Album;