import React, { useState, useEffect } from 'react';

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

                <form onSubmit={handleSubmit}>
                    <div className="urlDiv">
                        <label htmlFor="url">Add URL</label>
                        <input
                            className="urlIn"
                            onChange={(event) => setGalleryItemPath(event.target.value)}
                            value={galleryItemPath}
                        />
                    </div>

                    <div className="descriptionDiv">
                        <label htmlFor="description">Add Description</label>
                        <input
                            className="descriptionIn"
                            onChange={(event) => setGalleryItemDescription(event.target.value)}
                            value={galleryItemDescription} />
                    </div>

                    <button>Add image</button>
                </form>
            </div>
        </>
    )

} // end GalleryForm

export default GalleryForm;