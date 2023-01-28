import Album from './Album'

function Albums() {

  const searchedAlbums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

  return (

    <div className='h-full bg-red-500 grid grid-cols-4'>

      {searchedAlbums.map((album, i) => (
        <Album />
      ))}


    </div>
  );
}

export default Albums;