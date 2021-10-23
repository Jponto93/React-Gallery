import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({galleryData, fetchGallery}) {

    return (
        <div className="container">
            {galleryData.map((photo) => {
                return (
                    <GalleryItem 
                    photo={photo}
                    key={photo.id}
                    fetchGallery={fetchGallery}/>
                )
            })}
        </div>
    )
}

export default GalleryList;