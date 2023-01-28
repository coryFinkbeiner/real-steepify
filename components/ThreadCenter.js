import { SearchIcon, XIcon } from '@heroicons/react/outline';
import Albums from './Albums';

function ThreadCenter() {

  return (

    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide text-white'>

      {/* search bar */}
      <div className=''>
        <form className='bg-white text-gray-500 flex flex-row rounded-full m-3 p-1 w-1/3'>
          <button className='flex items-center space-x-2 hover:text-black m-1'>
            <SearchIcon className='w-5 h-5'/>
          </button>
          <input type='text' placeholder='Search Albums Only' className='w-full focus:outline-none  p-1'>
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

export default ThreadCenter