import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen bg-slate-400 flex flex-col'>
      <div className='flex w-screen justify-center bg-yellow-400'>
        <h1 className='m-5 text-7xl font-bold h-min bg-white'> Gallery </h1>
      </div>
      <div className='flex w-screen justify-center bg-yellow-400'>
        <h1 className='m-5 bg-white'> Selected x items </h1>
      </div>
      <div className='flex w-screen justify-center bg-yellow-400'>
        <button className='m-3 bg-white'> Delete </button>
      </div>
      <div className='grid mt-3 ml-24 mr-24 px-4 py-4 bg-white sm:grid-cols-5 gap-4'>
        <div className='row-span-2 col-span-2 rounded-lg h-full w-full bg-red-400'>1</div>
        <div className='img-card'>2</div>
        <div className='img-card'>3</div>
        <div className='img-card'>4</div>
        <div className='img-card'>5</div>
        <div className='img-card'>6</div>
        <div className='img-card'>7</div>
        <div className='img-card'>8</div>
        <div className='img-card'>9</div>
        <div className='img-card'>10</div>
        <div className='img-card'>11</div>
        <div className='img-card'>12</div>
      </div>
    </div>
  )
}
