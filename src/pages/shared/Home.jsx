import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Clubinfo from '../../components/home/Clubinfo';
import Whyjoin from '../../components/home/Whyjoin';
import Readytojoin from '../../components/home/Readytojoin';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main className="">
          <Hero title="Welcome to obanshire cub scouts" />
          <Clubinfo />
          <Whyjoin />
          <Readytojoin />
        </main>
        <Footer />
    </>
  )
}

export default Home