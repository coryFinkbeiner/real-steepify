import { ChevronDownIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import ThreadedSongs from './ThreadedSongs';

import useSpotify from '../hooks/useSpotify'


const colors = [
   'from-indigo-500',
   'from-blue-500',
   'from-green-500',
   'from-red-500',
   'from-yellow-500',
   'from-pink-500',
   'from-purple-500'
];



function Post() {
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  // const playlistId = useRecoilValue(playlistIdState);
  // const [playlist, setPlaylist] = useRecoilState(playlistState);




  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);


  // useEffect(() => {
  //   spotifyApi
  //     .getPlaylist(playlistId)
  //     .then((data) => {
  //       setPlaylist(data.body);
  //     })
  //     .catch((err) => console.log('ERROR', err));
  // }, [spotifyApi, playlistId]);

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
        <img
          className='h-44 w-44 shadow-2xl'
          src=''
          alt=''
        />
        <div>
          <p>Name Your Playlist:</p>
          <input

            className='text-black h-[40px] w-[300px] rounded p-2'
            onChange={(e) => console.log(e.target.value)}
          />
          <button
            className='bg-green-500 rounded w-[90px] h-[40px] p-2'
          >
              Post
          </button>
          <button
            className='bg-red-500 rounded w-[90px] h-[40px] p-2'
          >
            Undo
          </button>

        </div>
      </section>

      <div>
        <ThreadedSongs />
      </div>

    </div>
  )
}

export default Post;