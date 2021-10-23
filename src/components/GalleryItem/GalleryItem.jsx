import axios from "axios";
import { useState } from "react";
import GalleryPhoto from "../GalleryPhoto/GalleryPhoto";

function GalleryItem({ photo }) {
    
    let [flipToggle, setFlipToggle] = useState(true);
    
    function changeDisplay () {
        setFlipToggle(!flipToggle)
    } // changeDisplay
    
    function addLike () {

    } // end addLike
    
    return (
        
        <>
            <div>
                <div onClick={changeDisplay}>
                    {flipToggle ? (<img className="imgToggle" src={photo.path} alt={photo.description}/> )  : ( <p className="imgToggle">{photo.description}</p> )}
                </div>
                <div>
                    <button className="loveBtn">Love it</button>
                    {photo.likes ? <p>{photo.likes} people love this!</p> : <p>No love yet!</p>}
                </div>
            </div>
        </>
    )
    


}

export default GalleryItem;