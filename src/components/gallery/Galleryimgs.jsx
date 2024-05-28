import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Galleryimgs = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5001/gallery');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="gallery-images">
        {/* Static images */}
        <div className="gallery-imgs">
          <img src="assets/img/scoutsgalleryimg1.webp" alt="Three young boys dressed in scout uniforms are walking through a lush, green field. The boy on the left is holding a lantern and wearing a hat, the boy in the middle is carrying a long pole with a yellow flag, and the boy on the right is carrying a stick with cooking pots and pans hanging from it. They are smiling and appear to be enjoying their adventure in the sunny outdoor setting" className="galleryimg-1" />
        </div>

        {/* Dynamically fetched images */}
        {images.map((image) => (
          <div key={image._id} className="gallery-imgs">
            <img src={`/backend/${image.filePath}`} alt={image.fileName} className="gallery-img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Galleryimgs;
