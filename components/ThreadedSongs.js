import { useRecoilValue } from 'recoil';
import { bankedAlbumsState } from '../atoms/albumsAtom';
import Song from './Song'
import { useEffect, useState } from 'react';
import useSpotify from '../hooks/useSpotify';


function ThreadedSongs() {
  const bank = useRecoilValue(bankedAlbumsState);
  const spotifyApi = useSpotify();
  const [trackList, setTrackList] = useState([])

  const [album1, setAlbum1] = useState([])
  const [album2, setAlbum2] = useState([])
  const [album3, setAlbum3] = useState([])



  useEffect(() => {

    spotifyApi.getAlbumTracks(bank[0].id)
      .then(data => setAlbum1(data.body.items))

    spotifyApi.getAlbumTracks(bank[1].id)
      .then(data => setAlbum2(data.body.items))

    spotifyApi.getAlbumTracks(bank[2].id)
      .then(data => setAlbum3(data.body.items))

  }, [spotifyApi, bank])


  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
    </div>
  )

}

export default ThreadedSongs;

