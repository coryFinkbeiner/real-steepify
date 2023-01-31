import { SearchIcon, XIcon } from '@heroicons/react/outline';
import Albums from './Albums';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import useSpotify from "../hooks/useSpotify";
import { searchResultsState } from "../atoms/albumsAtom";



function Search() {
  const [input, setInput] = useState('');
  const spotifyApi = useSpotify();
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  const handleChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    spotifyApi.searchAlbums(input)
      .then(data => {
        setSearchResults(data.body.albums.items)

      })

  }



  return (

    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide text-white'>

      {/* search bar */}
      <div className=''>
        <form onSubmit={handleSubmit} type='submit' className='bg-white text-gray-500 flex flex-row rounded-full m-3 p-1 w-2/5'>
          <div className='flex items-center space-x-2 hover:text-black m-1' >
            <SearchIcon className='w-5 h-5'/>
          </div>
          <input
            type='search'
            onChange={handleChange}
            placeholder='Search Albums Only'
            className='w-full focus:outline-none  p-1'

          >
          </input>
          <button className='flex items-center space-x-2 hover:text-black m-1'>
            <XIcon className='w-5 h-5'/>
          </button>
        </form>
      </div>

      {/* render search results */}
      <div className='h-full'>
        <Albums />
      </div>

    </div>
  );
}

export default Search;