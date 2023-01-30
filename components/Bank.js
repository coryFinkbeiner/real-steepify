import { bankedAlbumsState } from "../atoms/albumsAtom";
import { useRecoilState } from 'recoil';





function Bank() {

  const [bank, setBank] = useRecoilState(bankedAlbumsState)




  return (

      <div className='w-100 border h-screen p-3 border-white'>

          {bank?.map((album, i) => (
            <div>
              OIASJDLFKJLDSKAJF
            </div>

          ))}



    </div>
  );
}

export default Bank