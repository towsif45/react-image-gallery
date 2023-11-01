import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-200 flex flex-col'>
      <div className='flex w-screen justify-center'>
        <h1 className='m-5 p-3 rounded-lg text-7xl font-bold h-min bg-white'> Gallery </h1>
      </div>
      <div className='flex w-screen justify-center'>
        <h1 className='m-5 bg-white'> Selected x items </h1>
      </div>
      <div className='flex w-screen justify-center'>
        <button className='m-3 p-3 rounded-md bg-white'> Delete </button>
      </div>
      <div className='img-grid'>
        <div className='featured-card'>1</div>
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
