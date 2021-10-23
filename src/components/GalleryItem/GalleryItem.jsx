import axios from "axios";
import { useState } from "react";
import GalleryPhoto from "../GalleryPhoto/GalleryPhoto";

function GalleryItem({ photo }) {
    
    let [toggle, setToggle] = useState(false);

     
    return (
        
        <>
            <div>
                <div>
                    <img src={photo.path} alt="" />
                    
                </div>
                <div>
                    <button>Love it</button>
                </div>
            </div>
        </>
    )
    


}

export default GalleryItem;