import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Games = () => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Hero title="Games" herogamesoverlay = 'hero-gamesoverlay'/>
            <div className="dashboardcards">
                <div className="matching-game-card">
                    <img src="assets/img/obanshirecubscouts-games.jpg" alt="" className="matching-game-cardimg" />
                    <h2 className="matching-game-cardtitle">Matching game</h2>
                </div>
                <div className="hangman-card">
                    <img src="assets/img/obanshirecubscouts-games.jpg" alt="" className="hangman-cardimg" />
                    <h2 className="hangman-cardtitle">Hangman</h2>
                </div>
                <div className="cubscoutquiz-card">
                    <img src="assets/img/obanshirecubscouts-games.jpg" alt="" className="cubscoutquiz-cardimg" />
                    <h2 className="cubscoutquiz-cardtitle">Cub scout quiz</h2>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Games