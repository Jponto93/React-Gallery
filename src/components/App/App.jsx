import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
// import galleryItems from '../../../server/modules/gallery.data.js';


function App() {

  let [galleryData, setGalleryData] = useState([]);
  let [isInEditMode, setIsInEditMode] = useState(false);
  let [galleryItemToEdit, setGalleryItemToEdit] = useState({});
  


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


  const editGalleryItem = (galleryItemToEdit) => {
    console.log(`about to edit something on the server with a put`);
    console.log(`that object is`, galleryItemToEdit);
    Axios({
      method: `PUT`,
      url: `/gallery/${galleryItemToEdit.id}`,
      data: galleryItemToEdit
    })
      .then((response) => {
        console.log('App PUT success');
        fetchGallery();
        setIsInEditMode(false);
      })
        .catch((error) => {
          console.log('Error in App PUT', error);
        })
  }

    console.log(galleryData);
    console.log(`Is in edit mode:`, isInEditMode);

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
        setGalleryItemToEdit={setGalleryItemToEdit}
        galleryItemToEdit={galleryItemToEdit}
        setIsInEditMode={setIsInEditMode}/>
      </div>
    );
}

export default App;
