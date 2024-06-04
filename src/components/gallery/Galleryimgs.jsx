import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState from 'react'
import axios from 'axios'; // Importing axios for making HTTP requests

// Galleryimgs component
const Galleryimgs = () => {
  const [images, setImages] = useState([]); // Initializing state for images

  useEffect(() => {
    // Function to fetch images
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5001/gallery'); // Sending a GET request to fetch images
        setImages(response.data); // Setting fetched images in the state
      } catch (error) {
        console.error('Error fetching images:', error); // Logging error if fetching images fails
      }
    };

    fetchImages(); // Calling the fetchImages function when the component mounts
  }, []); // Dependency array to ensure the effect runs only once on mount

  return (
    <> {/* Fragments to return multiple elements */}
      <div className="gallery-images">
        {/* Static images */}
        <div className="gallery-imgs">
          {/* Static image */}
          <img loading="lazy" src="assets/img/scoutsgalleryimg1.webp" alt="Three young boys dressed in scout uniforms are walking through a lush, green field. The boy on the left is holding a lantern and wearing a hat, the boy in the middle is carrying a long pole with a yellow flag, and the boy on the right is carrying a stick with cooking pots and pans hanging from it. They are smiling and appear to be enjoying their adventure in the sunny outdoor setting" className="galleryimg-1" />
        </div>

        {/* Dynamically fetched images */}
        {/* Mapping through fetched images and rendering each dynamically */}
        {images.map((image) => (
          <div key={image._id} className="gallery-imgs">
            {/* Dynamically fetched image */}
            <img loading="lazy" src={`/backend/${image.filePath}`} alt={image.fileName} className="gallery-img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Galleryimgs; // Exporting the Galleryimgs component
