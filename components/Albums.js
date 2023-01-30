import Album from './Album'
import { useRecoilValue } from 'recoil';
import { searchResultsState } from "../atoms/albumsAtom";


function Albums() {

  const searchedAlbums = useRecoilValue(searchResultsState)
  console.log({searchedAlbums})

  return (

    <div className='h-screen bg-red-500 grid lg:grid-cols-8 md:grid-cols-4 m-2 gap-3.5 p-3.5'>

      {searchedAlbums.map((album, i) => (
        <Album
          key={i}
          
        />
      ))}


    </div>
  );
}

export default Albums;