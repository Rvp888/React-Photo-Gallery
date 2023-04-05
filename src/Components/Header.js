import React from 'react';
import './Header.css';
import { useContext } from 'react';
import { appContext } from '../App';

export default function Header() {

    const {setModalDisplay, filterSearchedImages} = useContext(appContext);

    function handleSearch(text) {
        setTimeout(() => {
            filterSearchedImages(text);
        },2000);
    }

    return (
        <div className='header'>
            <h2 className='app_title' >Photo-Gallery</h2>
            <input type='search' className='search-input' onChange={(e) => handleSearch(e.target.value)} placeholder='Search...' />
            <button className='upload-img-btn' onClick={() => setModalDisplay(true)} title='Upload Image' >+</button>
        </div>
    )
}
