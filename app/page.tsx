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
    <div className='relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-200 flex flex-col'>
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
          <div className='featured-card'> <img src='/images/image-1.webp'/> </div>
          {
            images_url.map((image_) => (
              (
                <div key={image_.key} className='img-card'>
                  <img src={'/images/'+image_.name} alt={image_.name} />
                </div>
              )
            ))
          } 
        </div>
      </div>
    </div>
  )
}
