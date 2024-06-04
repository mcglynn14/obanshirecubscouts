import React from 'react';
import Nav from '../../components/Nav'; // Importing the Nav component
import Hero from '../../components/Hero'; // Importing the Hero component
import Galleryimgs from '../../components/gallery/Galleryimgs'; // Importing the Galleryimgs component
import Footer from '../../components/Footer'; // Importing the Footer component

const Gallery = () => {
  return (
    <>
    <header>
      <Nav /> {/* Rendering the Nav component */}
    </header>
    <main>
      <Hero title="Gallery" herogalleryoverlay='hero-galleryoverlay' /> {/* Rendering the Hero component with props */}
      <Galleryimgs /> {/* Rendering the Galleryimgs component */}
    </main>
    <Footer /> {/* Rendering the Footer component */}
    </>
  )
}

export default Gallery; // Exporting the Gallery component