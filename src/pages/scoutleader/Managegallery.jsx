import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import axios from 'axios';

const ManageGallery = () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/images/${id}`);
      setImages(images.filter(image => image._id !== id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleToggleHide = async (id) => {
    try {
      await axios.patch(`http://localhost:5001/api/images/${id}/toggle-hide`);
      setImages(images.map(image => image._id === id ? { ...image, hidden: !image.hidden } : image));
    } catch (error) {
      console.error('Error toggling image visibility:', error);
    }
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Manage Gallery" heromanagegalleryoverlay='hero-managegalleryoverlay' />
        <div className="images-grid">
          {/* {images.map((image, index) => (
            <div
              className={`image-card image-card-${index % 5 === 0 ? '1' : index % 5 === 1 ? '2' : index % 5 === 2 ? '3' : index % 5 === 3 ? '4' : '5'}`}
              key={image._id}
            >
              <img src={`/backend/${image.filePath}`} alt={image.fileName} className="image-card-img" />
              <button className="btn btn-image-delete" onClick={() => handleDelete(image._id)}>
                Delete
              </button>
              <button className="btn btn-image-hide" onClick={() => handleToggleHide(image._id)}>
                {image.hidden ? 'Show' : 'Hide'}
              </button>
            </div>
          ))} */}
          {images.map((image) => (
          <div key={image._id} className="gallery-imgs">
            <img src={`/backend/${image.filePath}`} alt={image.fileName} className="gallery-img" />
          </div>
        ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ManageGallery;
