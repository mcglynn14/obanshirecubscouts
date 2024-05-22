import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Parentdashboard = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Parent dashboard" heroparentoverlay='hero-parentoverlay' />
        <div className="dashboardcards">
          <Link to="/registerhelper" className="registerhelper-card">
            <img src="assets/img/obanshirecubscouts-helper.webp" alt="" className="registerhelper-cardimg" />
            <h2 className="registerhelper-cardtitle">Register to be helper</h2>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Parentdashboard