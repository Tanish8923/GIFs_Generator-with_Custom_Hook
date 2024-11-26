import React, { useState } from 'react'
import useGif from '../hook/useGif';
import Spinner from './Spinner';

const Tag = () => {

    const [tag , setTag] = useState('');
    const {gif , Loading , fetchData} = useGif(tag);

  return (
    <div className='bg-blue-500 rounded-md border border-black w-[450px] h-[380px] mt-2 text-center'>
      <h1 className='text-2xl font-semibold underline uppercase '>RANDOM {tag} GIF</h1>
      <div className='flex justify-center '>
      {
            Loading ? <Spinner/> : <img src={gif} alt='gifs' className='mt-4 w-[400px] h-[250px] object-fit rounded-md'/>
        }
      </div>
      <div className='w-10/12 flex flex-row gap-x-2 mx-auto mt-8'>
          <input
            type='text'
            placeholder='Search GIF...'
            onChange={(event) => setTag(event.target.value)}
            value={tag}
            className='w-[48%] text-center py-[2px] rounded-md text-1xl '
            />
          <button className='w-[48%] bg-blue-200 py-[2px] rounded-md font-medium text-2xl ' onClick={() => fetchData()}>Generate</button>
      </div>
    </div>
  )
}

export default Tag
