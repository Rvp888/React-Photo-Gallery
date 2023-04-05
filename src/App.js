
import { createContext } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import { v4 as uuidv4 } from 'uuid';


const appContext = createContext();

function App() {

  const [images, setImages] = useState([
        {
          id: uuidv4(),
          imgUrl: "https://images.unsplash.com/photo-1680442170372-4a30138d03f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          uploadTime: Date.now(),
        },
        {
          id: uuidv4(),
          imgUrl: "https://images.unsplash.com/photo-1680675805063-3aa8b3607b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          uploadTime: Date.now(),
        },
        {
          id: uuidv4(),
          imgUrl: "https://images.unsplash.com/photo-1680523004872-f38aad6922b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          uploadTime: Date.now(),
        },
        {
          id: uuidv4(),
          imgUrl: "https://images.unsplash.com/photo-1679678691014-eba529defb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          uploadTime: Date.now(),
        },
  ]);


  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
