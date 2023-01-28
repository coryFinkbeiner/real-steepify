import Album from './Album'

function Albums() {

  const searchedAlbums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 4, 3, 2, 7, 4, 4]

  return (

    <div className='h-screen bg-red-500 grid grid-cols-8 m-2 gap-3.5 p-3.5'>

      {searchedAlbums.map((album, i) => (
        <Album />
      ))}


    </div>
  );
}

export default Albums;