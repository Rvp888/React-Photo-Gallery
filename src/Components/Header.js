import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <h2 className='app_title' >Photo-Gallery</h2>
            <input type='search' className='search-input' placeholder='Search...' />
            <button className='upload-img-btn' title='Upload Image' >+</button>
        </div>
    )
}
