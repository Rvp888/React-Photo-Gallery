import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <h2 className='app_title' >Photo-Gallery</h2>
            <input type='search' placeholder='Search...' />
            <button>+</button>
        </div>
    )
}
