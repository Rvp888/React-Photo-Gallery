
import React from 'react';
import './Upload.css';
import { useState } from 'react';


export default function Upload() {

    const [ photoUrl, setPhotoUrl ] = useState('');
    const [ photoName, setPhotoName ] = useState('');

    function handleSubmit() {

    }


    return (
        <div className='upload-box'>
            <h2>Uplod Photo</h2>
            <form className='upload-form' onSubmit={handleSubmit}>
                <label>Photo URL</label>
                <br/>
                <input type='text' onChange={(e) => setPhotoUrl(e.target.value)} />
                <br/>
                <label>Photo Name</label>
                <br/>
                <input type='text' onChange={(e) => setPhotoName(e.target.value)} />
                <br/>
                <button className='upload-btn'>Upload</button>
                <button className='cancel-btn'>Cancel</button>
            </form>
        </div>
    )
}
