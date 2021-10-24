import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function GalleryForm({
    addToGallery,
}) {
    console.log('inside GalleryForm');

    const [galleryItemPath, setGalleryItemPath] = useState('');
    const [galleryItemDescription, setGalleryItemDescription] = useState('');

    const handleSubmit = (event) => {
        console.log('inside handleSubmit');
        event.preventDefault();

        let galleryAddition = {
            path: galleryItemPath,
            description: galleryItemDescription,
            likes: 0
        };

        addToGallery(galleryAddition);
        clearInputFields();

    } // end handleSubmit

    const clearInputFields = () => {

        setGalleryItemPath('');
        setGalleryItemDescription('');
    } // end clearInputFields

    return (
        <>
            <div className="inputContainer">
                <form>
                    <div className="urlDiv">
                        <TextField
                            label="URL"
                            variant="outlined"
                            className="urlIn"
                            onChange={(event) => setGalleryItemPath(event.target.value)}
                            value={galleryItemPath}
                        />
                    </div>
                    <div className="descriptionDiv">
                        <TextField
                            label="Description"
                            className="descriptionIn"
                            onChange={(event) => setGalleryItemDescription(event.target.value)}
                            value={galleryItemDescription}
                        />
                    </div>
                    <button onSubmit={handleSubmit}>Add pic</button>
                </form>
            </div>
        </>
    )

} // end GalleryForm

export default GalleryForm;