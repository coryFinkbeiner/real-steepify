import Album from './Album'
import { useRecoilValue } from 'recoil';
import { searchResultsState } from "../atoms/albumsAtom";


function Albums() {

  const searchedAlbums = useRecoilValue(searchResultsState);

  return (

    <div className='h-screen bg-red-500 grid lg:grid-cols-8 md:grid-cols-4 m-2 gap-3.5 p-3.5'>

      {searchedAlbums?.map((album, i) => (
        <Album
          key={i}
          albumCover={album.images[2].url}
          name={album.name}
          year={album.release_date.split('-')[0]}
          artist={album.artists[0].name}
          albumObject={album}
        />
      ))}


    </div>
  );
}

export default Albums;