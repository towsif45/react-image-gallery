import Image from 'next/image'

type ImageURL = {
  name: string;
  key: string;
}

export default function Home() {
  const images_url: ImageURL[] = [
    {name: 'image-1.webp', key: '1'},
    {name: 'image-2.webp', key: '2'},
    {name: 'image-3.webp', key: '3'},
    {name: 'image-4.webp', key: '4'},
    {name: 'image-5.webp', key: '5'},
    {name: 'image-6.webp', key: '6'},
    {name: 'image-7.webp', key: '7'},
    {name: 'image-8.webp', key: '8'},
    {name: 'image-9.webp', key: '9'},
    {name: 'image-10.jpeg', key: '10'},
    {name: 'image-11.jpeg', key: '11'}, 
  ];
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
        <div className='img-grid'>
        {
          images_url.map((element, id) => {
            if(id === 0){
              return(
                <div key={element.key} className='featured-card group hover:scale-105 hover: duration-300'> 
                  <input type='checkbox' className='checkbox peer z-10' />
                  <img src='/images/image-1.webp' className='rounded-lg peer-checked:opacity-50 z-0'/> 
                </div>
              )
            }
            return (
              <div key={element.key} className='img-card group hover:scale-105 duration-300'>
                  <input type='checkbox' className='checkbox peer z-10' />
                  <img src={'/images/'+element.name} alt={element.name} className='rounded-lg peer-checked:opacity-50 z-0' />
              </div>
            )
          })
        } 
        </div>
      </div>
    </div>
  )
}
