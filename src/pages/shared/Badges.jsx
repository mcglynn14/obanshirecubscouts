import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Badgesform from '../../components/badges/Badgesform';
import Footer from '../../components/Footer';

const Badges = () => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
          <Hero title="Badges" herobadgesoverlay='hero-badgesoverlay' />
          <Badgesform />
        </main>
        <Footer />
    </>
  )
}

export default Badges