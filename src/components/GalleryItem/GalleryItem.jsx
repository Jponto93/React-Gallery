import axios from "axios";
import { useState } from "react";
import GalleryPhoto from "../GalleryPhoto/GalleryPhoto";


function GalleryItem({ photo, fetchGallery}) {
    
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
            </div>
        </>
    )
    


}

export default GalleryItem;