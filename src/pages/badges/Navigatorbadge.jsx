import React from 'react';
import Nav from '../../components/Nav'; // Importing the Nav component
import Hero from '../../components/Hero'; // Importing the Hero component
import Footer from '../../components/Footer'; // Importing the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing the FontAwesomeIcon component
import { faPrint } from '@fortawesome/free-solid-svg-icons'; // Importing the faPrint icon

const Navigatorbadge = () => {
  return (
    <>
    <header>
      <Nav /> {/* Rendering the Nav component */}
    </header>
    <main>
      <Hero title="Navigator Badge" heronavigatorbadgeoverlay="hero-navigatorbadgeoverlay" /> {/* Rendering the Hero component with props */}
      <div className="badgesinfodiv">
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button> {/* Rendering a button with FontAwesomeIcon */}
        <img src="assets/img/obancubscouts-navigator.svg" alt="" className="badgesinfo-img" /> {/* Rendering an image */}
        <p className="badgesinfo-text">
          {/* Badge information */}
        </p>
      </div>
    </main>
    <Footer /> {/* Rendering the Footer component */}
  </>
  )
}

export default Navigatorbadge; // Exporting the Navigatorbadge component
