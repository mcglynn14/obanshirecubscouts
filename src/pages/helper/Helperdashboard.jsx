import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Helperdashboard = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Helper dashboard" herohelperoverlay='hero-helperoverlay' />
        <div className="dashboardcards">
          <Link to="/viewhelpers" className="viewhelpers-card">
            <img src="assets/img/obanshirecubscouts-helper.webp" alt="" className="viewhelpers-cardimg" />
            <h2 className="viewhelpers-cardtitle">View other helpers</h2>
          </Link>
          <Link to="/applytraining" className="applytraining-card">
            <img src="assets/img/obanshirecubscout-training.webp" alt="" className="applytraining-cardimg" />
            <h2 className="uploadimg-cardtitle">Apply for training</h2>
          </Link>
          <Link to="/events" className="events-card">
            <img src="assets/img/obanshirecubscouts-events.webp" alt="" className="events-cardimg" />
            <h2 className="events-cardtitle">Events</h2>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Helperdashboard