
import { createContext, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Upload from './Components/Upload';


export const appContext = createContext();

function App() {

  const [modalDisplay, setModalDisplay] = useState(false);
  const [images, setImages] = useState(JSON.parse(localStorage.getItem("images")) || []);
  const [searchedImages, setSearchedImages] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  },[images]);

  function addPhotos(photo) {
    setImages(images => [...images, photo]);
  }

  function setSearchImages() {

  }


  return (
    <div className="App">
      <appContext.Provider value={{images, setModalDisplay, addPhotos}} >
        <Header />
        <Main />
        <Footer />
        {modalDisplay && <Upload />}
      </appContext.Provider>     
    </div>
  );
}

export default App;
