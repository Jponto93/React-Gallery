import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';



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

  console.log(galleryData);
  // console.log(`Is in edit mode:`, isInEditMode);

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
      <div id="container">
        <GalleryForm
          addToGallery={addToGallery}
          galleryData={galleryData}
          fetchGallery={fetchGallery}
        />

        <GalleryList
          galleryData={galleryData}
          fetchGallery={fetchGallery}
        />
      </div>
    </div>
  );
}

export default App;
