import { useRecoilValue } from 'recoil';
import { bankedAlbumsState } from '../atoms/albumsAtom';
import Song from './Song'
import { useEffect, useState } from 'react';
import useSpotify from '../hooks/useSpotify';


function ThreadedSongs() {
  const bank = useRecoilValue(bankedAlbumsState);
  const spotifyApi = useSpotify();
  const [trackList, setTrackList] = useState([])


  // I GUESS I SHOULD THREAD THEM FIRST...



  // I THINK YOU WILL NOT KEEP THIS
  useEffect(() => {
    spotifyApi.getAlbumTracks(bank[0].id)
      .then(data => {
        setTrackList([data.body.items])
        spotifyApi.getAlbumTracks(bank[1].id)
        .then(data => {

          console.log('2', data.body.items)

          setTrackList([...trackList, data.body.items])
          console.log({trackList})


        //   spotifyApi.getAlbumTracks(bank[2].id)
        //   .then(data => {


        //     setTrackList([...trackList, ...data.body.items])


        //     var thread = trackList.slice()
        //     console.log({thread})

        //   })

        })

      })







  }, [bank, spotifyApi]);




  //   useEffect

  //     getAlbumTracks: function(albumId, options, callback) {
  //     }.then  setThreadedTracks


  //    }, [bank]

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



  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
      {/* {threadedTracks?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i}/>
      ))} */}
      {trackList[25]?.href}
    </div>
  )
}

export default ThreadedSongs;