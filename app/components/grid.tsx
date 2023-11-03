'use client'

import Image from 'next/image';
import React, { FC, useEffect, useMemo, useState } from 'react'
import ImageContainer from './ImageContainer';

export type ImageURL = {
    name: string;
    key: string;
  }

const Grid: FC = () => {
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
        <div className='image-grid'>
        {
          data.map((element, id) => {
            if(id === 0){
              return(
                <div key={element.key} className='featured-dropzone'>
                    <ImageContainer filename={element.name} id={element.key} />
                </div>
                
              )
            }
            return (
                <div key={element.key} className='image-dropzone'>
                    <ImageContainer filename={element.name} id={element.key} />
                </div>
                
            )
          })
        } 
        </div>
    )
}

export default Grid