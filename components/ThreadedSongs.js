import { useRecoilValue } from 'recoil';
import { bankedAlbumsState } from '../atoms/albumsAtom';
import Song from './Song'


function Songs() {
  const playlist = useRecoilValue(playlistState)

  // need to pass the bankedAlbums through the threading function.

  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i}/>
      ))}
    </div>
  )
}

export default Songs;