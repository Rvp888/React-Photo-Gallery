
import React from 'react';
import './Upload.css';
import { useState } from 'react';
import { useContext } from 'react';
import { appContext } from '../App';
import { v4 as uuidv4 } from 'uuid';


export default function Upload() {

    const {setModalDisplay, addPhotos} = useContext(appContext);

    const [ photoUrl, setPhotoUrl ] = useState('');
    const [ photoName, setPhotoName ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addPhotos({
            id: uuidv4(),
            imgUrl: photoUrl,
            imgName: photoName,
            uploadTime: Date.now(),
        });
        setModalDisplay(false);
    }


    return (
        <div className='upload-box'>
            <h2 className='upload-title' >Uplod Photo</h2>
            <form className='upload-form' onSubmit={handleSubmit}>
                <label className='upload-label'>Photo URL</label>
                <br/>
                <input type='text' className='upload-input' onChange={(e) => setPhotoUrl(e.target.value)} />
                <br/>
                <label className='upload-label'>Photo Name</label>
                <br/>
                <input type='text' className='upload-input' onChange={(e) => setPhotoName(e.target.value)} />
                <br/>
                <button className='upload-btn'>Upload</button>
                <button className='cancel-btn' onClick={() => setModalDisplay(false)}>Cancel</button>
            </form>
        </div>
    )
}
