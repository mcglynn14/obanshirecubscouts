import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Games = () => {
    return (
        <>
                {/* Header */}
                <header>
                        <Nav />
                </header>
                {/* Main content */}
                <main>
                        {/* Hero section */}
                        <Hero title="Games" herogamesoverlay='hero-gamesoverlay' />
                        {/* Dashboard cards */}
                        <div className="dashboardcards">
                                {/* Link to Matching game */}
                                <Link to='/matchinggame' className="matching-game-card">
                                        <img src="assets/img/obanshirecubscouts-games.jpg" alt="" className="matching-game-cardimg" />
                                        <h2 className="matching-game-cardtitle">Matching game</h2>
                                </Link>
                                {/* Link to Hangman game */}
                                <Link to='https://www.quia.com/hm/3496.html' className="hangman-card">
                                        <img src="assets/img/obanshirecubscouts-games.jpg" alt="" className="hangman-cardimg" />
                                        <h2 className="hangman-cardtitle">Hangman</h2>
                                </Link>
                                {/* Link to Cub scout quiz */}
                                <Link to='/cubscoutquiz' className="cubscoutquiz-card">
                                        <img src="assets/img/obanshirecubscouts-games.jpg" alt="" className="cubscoutquiz-cardimg" />
                                        <h2 className="cubscoutquiz-cardtitle">Cub scout quiz</h2>
                                </Link>
                        </div>
                </main>
                {/* Footer */}
                <Footer />
        </>
    )
}

export default Games