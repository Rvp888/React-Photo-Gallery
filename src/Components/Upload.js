
import React from 'react';



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
                <input type='text' onChange={(e) => } />
                <br/>
                <label>Photo Name</label>
                <input type='text' onChange={(e) => } />
                <br/>
            </form>
        </div>
    )
}
