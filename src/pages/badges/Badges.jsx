import React from 'react';
import Nav from '../../components/Nav'; // Importing the Nav component
import Hero from '../../components/Hero'; // Importing the Hero component
import Badgesform from '../../components/badges/Badgesform'; // Importing the Badgesform component
import Footer from '../../components/Footer'; // Importing the Footer component

const Badges = () => {
  return (
    <>
        <header>
            <Nav /> // Rendering the Nav component
        </header>
        <main>
          <Hero title="Badges" herobadgesoverlay='hero-badgesoverlay' /> // Rendering the Hero component with title and overlay props
          <Badgesform /> // Rendering the Badgesform component
        </main>
        <Footer /> // Rendering the Footer component
    </>
  )
}

export default Badges // Exporting the Badges component as the default export