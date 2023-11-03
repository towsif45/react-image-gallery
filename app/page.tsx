import Grid from './components/Grid'
import { IMAGE_URLS } from './components/data';

export default function Home() {

  return (
    <div className='body'>
      <div className='flex w-screen justify-center'>
        <h1 className='m-5 p-3 rounded-lg text-7xl font-bold h-min bg-white'> Gallery </h1>
      </div>
      <div className='flex w-screen justify-center'>
        <h1 className='m-5 bg-white'> Selected x items </h1>
      </div>
      <div className='flex w-screen justify-center'>
        <button className='m-3 p-3 rounded-md bg-white'> Delete </button>
      </div>
      <div className='flex justify-center'>
        <Grid urls={IMAGE_URLS} />
      </div>
    </div>
  )
}
