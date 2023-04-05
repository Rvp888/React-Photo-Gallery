import React from 'react';
import './Main.css';
import { useContext } from 'react';
import { appContext } from '../App';

export default function Main() {

    const { images } = useContext(appContext);
    
  return (
    <div className='main'>
      <div className='main_gallery' >
        {images.map((image) => (
            <div key={image.id} className='img-div' >
                <img src={image.imgUrl} />
            </div>
        ))}
      </div>
    </div>
  )
}
