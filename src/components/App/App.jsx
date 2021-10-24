import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
// import galleryItems from '../../../server/modules/gallery.data.js';


function App() {

  let [galleryData, setGalleryData] = useState([]);
  


  // when page opens...
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    Axios.get('/gallery')
    .then((response) => {
      console.log('successful GET', response.data);
      setGalleryData(response.data)
    }).catch((error) => {
      console.log('Error in GET', error);
    })
  }; // fetchGallery

  const addToGallery = (newItem) => {
    console.log('Post start', newItem);
    Axios({
      method: 'POST',
      url: '/gallery',
      data: newItem,
    })
      .then((response) => {
        console.log('POST success');
        fetchGallery();
      })
        .catch((error) => {
          console.log('Error in post', error);
        })
  } // end addToGallery


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryForm addToGallery={addToGallery}/>
        <GalleryList 
        galleryData={galleryData}
        fetchGallery={fetchGallery}
        />
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
