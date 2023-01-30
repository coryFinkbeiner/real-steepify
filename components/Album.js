import { PlusIcon } from '@heroicons/react/solid';
import { bankedAlbumsState } from "../atoms/albumsAtom";
import { useRecoilState } from 'recoil';





function Album({ albumCover, name, year, artist, albumObject }) {

  const [bank, setBank] = useRecoilState(bankedAlbumsState);
  // console.log({bank})


  return (

    <div className='bg-gray-500 space-y-1 border border-white rounded p-2 h-[228px] group cursor-pointer'>
      <div
        className='relative'
        onClick={() => { setBank([...bank, albumObject]) }}
      >
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