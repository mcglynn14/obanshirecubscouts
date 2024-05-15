import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Galleryimgs from '../../components/gallery/Galleryimgs';
import Footer from '../../components/Footer';

const Gallery = () => {
    return (
      <>
        <header>
          <Nav />
        </header>
        <main>
        <Hero title="Gallery" herogalleryoverlay = 'hero-galleryoverlay' />
        <Galleryimgs />
        </main>
        <Footer />
      </>
    )
  }
  
  export default Gallery