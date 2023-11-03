'use client'

import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react'

export type ImageURL = {
    name: string;
    key: string;
  }

const Grid = () => {
    const [data, setData] = useState<ImageURL[]>([]);
    
    const images_url: ImageURL[] = useMemo(() => 
        [
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
        ], []
    ) ;

    useEffect(()=>{
        setData(images_url);
    }, [images_url])

    return (
        <div className='img-grid'>
        {
          data.map((element, id) => {
            if(id === 0){
              return(
                <div key={element.key} className='featured-card'>
                    <div className='w-full h-auto group hover:scale-105 duration-300'> 
                        <input type='checkbox' className='checkbox peer z-10' />
                        <Image 
                            src={'/images/'+element.name} 
                            alt={element.name} 
                            width="0"
                            height="0"
                            sizes="100vw"
                            className='rounded-lg peer-checked:opacity-50 z-0 w-full h-auto'/> 
                    </div>
                </div>
                
              )
            }
            return (
                <div key={element.key} className='img-card'>
                    <div  className='w-full h-auto group hover:scale-105 duration-300'>
                        <input type='checkbox' className='checkbox peer z-10' />
                        <Image 
                            src={'/images/'+element.name} 
                            alt={element.name} 
                            width="0"
                            height="0"
                            sizes="100vw"
                            className='rounded-lg peer-checked:opacity-50 z-0 w-full h-auto' />
                    </div>
                </div>
                
            )
          })
        } 
        </div>
    )
}

export default Grid