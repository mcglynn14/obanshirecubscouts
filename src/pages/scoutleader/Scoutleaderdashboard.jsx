import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Scoutleaderdashboard = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Scout leader dashboard" heroscoutleaderoverlay='hero-scoutleaderoverlay' />
        <div className="dashboardcards">
          <div className="managecubscouts-card">
            <img src="assets/img/obanshirecubscouts-helper.webp" alt="" className="managecubscouts-cardimg" />
            <h2 className="managecubscouts-cardtitle">Manage cub scouts</h2>
          </div>
          <div className="managegallery-card">
            <img src="assets/img/obanshirecubscout-training.webp" alt="" className="managegallery-cardimg" />
            <h2 className="managegallery-cardtitle">Manage gallery</h2>
          </div>
          <div className="helpers-card">
            <img src="assets/img/obanshirecubscouts-events.webp" alt="" className="helpers-cardimg" />
            <h2 className="helpers-cardtitle">Helpers</h2>
          </div>
          <div className="manageevents-card">
            <img src="assets/img/obanshirecubscouts-events.webp" alt="" className="manageevents-cardimg" />
            <h2 className="manageevents-cardtitle">Manage events</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Scoutleaderdashboard