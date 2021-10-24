import axios from "axios";
import { useState } from "react";
import Button from '@mui/material/Button';






function GalleryItem({
    photo,
    fetchGallery,
}) {

    let [flipToggle, setFlipToggle] = useState(true);

    function changeDisplay() {
        setFlipToggle(!flipToggle)
    } // changeDisplay

    function addLike() {
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

    // this is what deletes pictures from the display
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

    return (

        <>
            <div className="tile">
                <div onClick={changeDisplay}>
                    {flipToggle ? (<img className="imgToggle" src={photo.path} alt={photo.description} />) :
                        (
                            <>
                                {/* <button onClick={editItem}>Edit Description</button> */}
                                <p className="imgToggle">
                                    {photo.description}
                                </p>
                            </>)}
                </div>

                <div className="container">

                    <Button
                        color="error"
                        variant="text"
                        size="small"
                        onClick={addLike}>&#10084;</Button>

                    {photo.likes ? <p>{photo.likes} People love this!</p> : <p>No love yet</p>}

                    <Button
                        color="warning"
                        size="small"
                        variant="text"
                        onClick={removeItem}>&#9033;</Button>
                </div>
            </div>
        </>
    )

}

export default GalleryItem;