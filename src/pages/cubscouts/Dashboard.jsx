import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Dashboard = () => {
    return (
        <>
                {/* Header */}
                <header>
                        <Nav />
                </header>
                {/* Main content */}
                <main>
                        {/* Hero section */}
                        <Hero title="Cub scout dashboard" herocubscoutoverlay='hero-cubscoutyoverlay' />
                        {/* Dashboard cards */}
                        <div className="dashboardcards">
                                {/* Games card */}
                                <Link to="/games" className="games-card">
                                        <img src="assets/img/obanshirecubscouts-games.jpg" alt="" className="games-cardimg" />
                                        <h2 className="games-cardtitle">Games</h2>
                                </Link>
                                {/* Upload image card */}
                                <Link to="/uploadimage" className="uploadimg-card">
                                        <img src="assets/img/obanshirecubscouts-uploadimg.webp" alt="" className="uploadimg-cardimg" />
                                        <h2 className="uploadimg-cardtitle">Upload image</h2>
                                </Link>
                                {/* Your badges card */}
                                <Link to="/yourbadges" className="yourbadges-card">
                                        <img src="assets/img/obanshirecubscouts-yourbadges.webp" alt="" className="yourbadges-cardimg" />
                                        <h2 className="yourbadges-cardtitle">Your badges</h2>
                                </Link>
                        </div>
                </main>
                {/* Footer */}
                <Footer />
        </>
    )
}

export default Dashboard