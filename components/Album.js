import { PlusCircleIcon } from '@heroicons/react/outline';




function Album() {


  return (

    <div className='bg-gray-500 space-y-1 border border-white rounded p-2 h-[228px] group cursor-pointer'>

      <div  className='relative '>

        <img
          className='w-full h-2/3 rounded p-1'
          src='https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_320,c_limit/7055fb4d.jpg'
          alt=''
        />

        <PlusCircleIcon  className='text-black absolute h-1/3 bottom-2.5 right-2.5 bg-green-500 rounded-full hidden group-hover:block'/>

      </div>


      <p className='truncate font-semibold'>
        Album Name slkd lkjd lkjs  slk jlkasj
      </p>
      <p className='truncate text-sm'>
        2008 dot Radiohead laskdlfjsadlkjfds
      </p>

    </div>
  );
}

export default Album;