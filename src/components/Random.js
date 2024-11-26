import useGif from '../hook/useGif';
import Spinner from './Spinner';



const Random = () => {

    const {gif , Loading , fetchData} = useGif();

  return (
    <div className='bg-green-500 rounded-md border border-black w-[450px] h-[380px] mt-2 text-center'>
      <h1 className='text-2xl font-semibold underline '>A RANDOM GIF</h1>
      <div className='flex justify-center '>
        {
            Loading ? <Spinner/> : <img src={gif} alt='gifs' className='mt-4 w-[400px] h-[250px] object-fit rounded-md'/>
        }
      </div>
      <button className='w-10/12 bg-green-200 py-[2px] rounded-md font-medium text-2xl mt-8' onClick={() => fetchData()}>Generate</button>
    </div>
  )
}

export default Random
