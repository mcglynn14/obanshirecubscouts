import React from 'react';
import Nav from '../../components/Nav'; // Importing the Nav component
import Hero from '../../components/Hero'; // Importing the Hero component
import Footer from '../../components/Footer'; // Importing the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing the FontAwesomeIcon component
import { faPrint } from '@fortawesome/free-solid-svg-icons'; // Importing the faPrint icon

const Nauticalskillsbadge = () => {
  return (
    <>
    <header>
      <Nav /> {/* Rendering the Nav component */}
    </header>
    <main>
      <Hero title="Nautical skills Badge" heronauticalskillsbadgeoverlay="hero-nauticalskillsbadgeoverlay" /> {/* Rendering the Hero component with a title prop */}
      <div className="badgesinfodiv">
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button> {/* Rendering a button with a FontAwesomeIcon and an onClick event */}
        <img src="assets/img/obancubscouts-nautical.svg" alt="" className="badgesinfo-img" /> {/* Rendering an image */}
        <p className="badgesinfo-text">
          {/* Badge information */}
        </p>
      </div>
    </main>
    <Footer /> {/* Rendering the Footer component */}
  </>
  )
}

export default Nauticalskillsbadge
