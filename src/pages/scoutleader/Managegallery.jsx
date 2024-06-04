import React, { useState, useEffect } from 'react'; // Import necessary React hooks
import Nav from '../../components/Nav'; // Import Nav component
import Hero from '../../components/Hero'; // Import Hero component
import Footer from '../../components/Footer'; // Import Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import specific icons from FontAwesome
import axios from 'axios'; // Import axios for making HTTP requests

const ManageGallery = () => {
  // Define state for images
  const [images, setImages] = useState([]);

  // useEffect hook to fetch images when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5001/gallery'); // Fetch images from backend
        setImages(response.data); // Set fetched images to state
      } catch (error) {
        console.error('Error fetching images:', error); // Log any errors
      }
    };

    fetchImages(); // Call the function to fetch images
  }, []); // Empty dependency array to run only on mount

  // Function to handle image deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/images/${id}`); // Delete image by id
      setImages(images.filter(image => image._id !== id)); // Update state to remove deleted image
    } catch (error) {
      console.error('Error deleting image:', error); // Log any errors
    }
  };

  // Function to handle toggling image visibility
  const handleToggleHide = async (id) => {
    try {
      await axios.patch(`http://localhost:5001/api/images/${id}/toggle-hide`); // Toggle image visibility by id
      setImages(images.map(image => image._id === id ? { ...image, hidden: !image.hidden } : image)); // Update state to reflect visibility change
    } catch (error) {
      console.error('Error toggling image visibility:', error); // Log any errors
    }
  };

  // Render the component
  return (
    <>
      <header>
        <Nav /> {/* Render Nav component */}
      </header>
      <main>
        <Hero title="Manage Gallery" heromanagegalleryoverlay='hero-managegalleryoverlay' /> {/* Render Hero component with props */}
        <div className="images-grid">
          {images.map((image, index) => (
            <div
              className={`image-card image-card-${index % 9 === 0 ? '1' : index % 9 === 1 ? '2' : index % 9 === 2 ? '3' : index % 9 === 3 ? '4' : index % 9 === 4 ? '5' : index % 9 === 5 ? '6' : index % 9 === 6 ? '7' : index % 9 === 7 ? '8' : '9'}`}
              key={image._id}
            >
              <img src={`/backend/${image.filePath}`} alt={image.fileName} className="image-card-img" /> {/* Render image */}
              <button className="btn btn-image-delete" onClick={() => handleDelete(image._id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete {/* Render delete button with icon */}
              </button>
              <button className="btn btn-image-hide" onClick={() => handleToggleHide(image._id)}>
                <FontAwesomeIcon icon={image.hidden ? faEye : faEyeSlash} /> {image.hidden ? 'Show' : 'Hide'} {/* Render toggle hide button with dynamic icon and text */}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Render Footer component */}
    </>
  );
};

export default ManageGallery; // Export the component
