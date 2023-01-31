import { bankedAlbumsState } from "../atoms/albumsAtom";
import { useRecoilState } from 'recoil';
import {XIcon} from '@heroicons/react/solid';






function Bank() {

  const [bank, setBank] = useRecoilState(bankedAlbumsState)




  return (

      <div className='w-full border h-screen p-1'>
        <div className=' h-screen w-full flex flex-col gap-2 p-1'>

          {bank?.map((album, i) => (

            <div className='bg-gray-500 space-y-1 border border-white rounded p-2 h-[228px] group cursor-pointer w-[180px] self-center'>

              <div
                className='relative'
                onClick={() => {
                  var newBank = bank.slice()
                  newBank.splice(i, 1)
                  setBank(newBank)
                }}

              >


                <img
                  className='w-full h-[160px] rounded p-1'
                  src={album.images[2].url}
                  alt=''
                />

                <XIcon className='text-black absolute h-1/3 bottom-2.5 right-2.5 bg-red-500 rounded-full hidden group-hover:block' />
              </div>
              <p className='truncate font-semibold text-white'>
                {album.name}
              </p>
              <p className='truncate text-sm text-white'>
              {album.release_date.split('-')[0]} *dot {album.artists[0].name}
              </p>
            </div>

          ))}
        </div>
    </div>
  );
}

export default Bank