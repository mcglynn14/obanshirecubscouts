// Importing React library
import React from 'react';

// Importing components
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Clubinfo from '../../components/home/Clubinfo';
import Whyjoin from '../../components/home/Whyjoin';
import Readytojoin from '../../components/home/Readytojoin';
import Footer from '../../components/Footer';

// Defining the Home component
const Home = () => {
  return (
    <>
        {/* Header section */}
        <header>
            {/* Rendering the Nav component */}
            <Nav />
        </header>

        {/* Main section */}
        <main className="">
          {/* Rendering the Hero component with a title */}
          <Hero title="Welcome to obanshire cub scouts" />

          {/* Rendering the Clubinfo component */}
          <Clubinfo />

          {/* Rendering the Whyjoin component */}
          <Whyjoin />

          {/* Rendering the Readytojoin component */}
          <Readytojoin />
        </main>

        {/* Footer section */}
        <Footer />
    </>
  )
}

// Exporting the Home component as the default export
export default Home