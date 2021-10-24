import axios from "axios";
import { useState } from "react";
import GalleryPhoto from "../GalleryPhoto/GalleryPhoto";


function GalleryItem({ 
    photo, 
    fetchGallery,
    setGalleryItemToEdit,
    setIsInEditMode,
    galleryItemToEdit
}) {
    
    let [flipToggle, setFlipToggle] = useState(true);
    
    function changeDisplay () {
        setFlipToggle(!flipToggle)
    } // changeDisplay
    
    function addLike () {
        console.log('addLike clicked');
        console.log(photo.id);
        let id = photo.id;

        axios
            .put(`/gallery/like/${id}`)
            .then((response) => {
                //refresh DOM
                fetchGallery();
            })
        
    } // end addLike

    const removeItem = () => {
        console.log('In remove item', photo.id);
        axios
            .delete(`/gallery/${photo.id}`)
            .then((response) => {
                fetchGallery();
            })
            .catch((err) => {
                console.log('Error deleting in DB', err);
            })
    }

    const editItem = () => {
        setIsInEditMode(true);
        console.log(galleryItemToEdit);
        // pass the current galleryItem as the galleryItemToEdit
        setGalleryItemToEdit({...galleryItem });
    }

    return (
        
        <>
            <div className="tile">
                <div onClick={changeDisplay}>
                    {flipToggle ? (<img className="imgToggle" src={photo.path} alt={photo.description}/> )  : ( <p className="imgToggle">{photo.description}</p> )}
                </div>
                <div>
                    <button className="loveBtn" onClick={addLike}>Love it</button>
                    {photo.likes ? <p>{photo.likes} people love this!</p> : <p>No love yet!</p>}
                </div>
                <div>
                    <button onClick={removeItem}>Remove</button>
                </div>
            </div>
        </>
    )
    


}

export default GalleryItem;