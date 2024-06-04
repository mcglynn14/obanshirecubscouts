import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Scoutleaderdashboard = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Nav />
      </header>

      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero title="Scout leader dashboard" heroscoutleaderoverlay='hero-scoutleaderoverlay' />

        {/* Dashboard cards */}
        <div className="dashboardcards">
          {/* Manage cub scouts card */}
          <Link to='/managecubscouts' className="managecubscouts-card">
            <img src="assets/img/obanshirecubscouts-helper.webp" alt="" className="managecubscouts-cardimg" />
            <h2 className="managecubscouts-cardtitle">Manage cub scouts</h2>
          </Link>

          {/* Manage gallery card */}
          <Link to='/managegallery' className="managegallery-card">
            <img src="assets/img/obanshirecubscouts-uploadimg.webp" alt="" className="managegallery-cardimg" />
            <h2 className="managegallery-cardtitle">Manage gallery</h2>
          </Link>

          {/* Helpers card */}
          <Link to='/helpers' className="helpers-card">
            <img src="assets/img/obanshirecubscouts-events.webp" alt="" className="helpers-cardimg" />
            <h2 className="helpers-cardtitle">Helpers</h2>
          </Link>

          {/* Manage events card */}
          <Link to='/manageevents' className="manageevents-card">
            <img src="assets/img/obanshirecubscouts-events.webp" alt="" className="manageevents-cardimg" />
            <h2 className="manageevents-cardtitle">Manage events</h2>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Scoutleaderdashboard