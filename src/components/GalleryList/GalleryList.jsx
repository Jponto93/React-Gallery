import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({
    galleryData, 
    fetchGallery,
    setIsInEditMode,
    setGalleryItemToEdit,
    galleryItemToEdit
}) {

    return (
        <div className="container">
            {galleryData.map((photo) => {
                return (
                    <GalleryItem 
                    photo={photo}
                    key={photo.id}
                    fetchGallery={fetchGallery}
                    setIsInEditMode={setIsInEditMode}
                    setGalleryItemToEdit={setGalleryItemToEdit}
                    galleryItemToEdit={galleryItemToEdit}/>
                )
            })}
        </div>
    )
}

export default GalleryList;