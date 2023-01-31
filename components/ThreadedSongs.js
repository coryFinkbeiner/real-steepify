import { useRecoilValue } from 'recoil';
import { bankedAlbumsState } from '../atoms/albumsAtom';
import Song from './Song'
import { useEffect, useState } from 'react';


function ThreadedSongs() {
  const bank = useRecoilValue(bankedAlbumsState);
  const [threadedTracks, setThreadedTracks] = useState([]);


  // const threadedAlbumIds = threader function

  //     getAlbumTracks: function(albumId, options, callback) {
  //     }.then  setThreadedTracks



  //     from useSongInfo hook
  //
  // useEffect(() => {
  //   const fetchSongInfo = async () => {
  //     if (currentIdTrack) {
  //       const trackInfo = await fetch(
  //         `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${spotifyApi.getAccessToken()}`
  //           }
  //         }
  //       ).then((res) => res.json());

  //       setSongInfo(trackInfo);
  //     }
  //   }





  console.log({bank})

  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
      {/* {threadedTracks?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i}/>
      ))} */}

    </div>
  )
}

export default ThreadedSongs;