'use client'

import React, { FC, useEffect, useState } from 'react'
import ImageContainer from './ImageContainer';
import { ImageURL } from './data';

type GridProps = {
    urls: ImageURL[]
}

const Grid: FC<GridProps> = ({urls}) => {
    const [data, setData] = useState<ImageURL[]>([]);

    useEffect(()=>{
        setData(urls);
    }, [urls])

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