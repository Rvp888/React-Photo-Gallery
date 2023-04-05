import React, { useState } from 'react';
import './Main.css';
import { useContext } from 'react';
import { appContext } from '../App';

export default function Main() {

    const { images } = useContext(appContext);
    const [ listView, setListView ] = useState(false);
    
    return (
        <div className='main'>
            <button className='change-view-btn' onClick={() => setListView(!listView)} >Change View</button>
            <div className={`main_gallery ${listView ? "list-view" : "grid-view"}`} >
                {images.map((image) => (
                    <div key={image.id} className='img-div' >
                        <img src={image.imgUrl} />
                        <p className='img-name'>{image.imgName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
