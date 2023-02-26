import { useRecoilValue } from 'recoil';
import { bankedAlbumsState } from '../atoms/albumsAtom';
import ThreadedSong from './ThreadedSong'
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


  const albumInfoAttacher = (tracks, album) => {
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].album_name = album.name
      tracks[i].album_image = album.images[0].url
    }
  }

  useEffect(() => {
    var a1 = album1.slice()
    albumInfoAttacher(a1, bank[0])
    var a2 = album2.slice()
    albumInfoAttacher(a2, bank[1])
    var a3 = album3.slice()
    albumInfoAttacher(a3, bank[2])
    var array = [a1, a2, a3]
    var newPlaylist = []
    var count = 0
    while (count < 3) {
      for (let i = 0; i < array.length; i++) {
        if (!array[i].length) {
          array.splice(i, 1)
          count++
          i--
        } else {
          newPlaylist.push(array[i].shift())
        }
      }
    }
    setTrackList(newPlaylist)
  }, [spotifyApi, album1, album2, album3])

  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
      {trackList?.map((track, i) => (
        <ThreadedSong key={track.id} track={track} order={i}/>
      ))}
    </div>
  )

}

export default ThreadedSongs;

