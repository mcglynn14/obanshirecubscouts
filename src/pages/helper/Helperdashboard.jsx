import React from 'react';  // Importing the React library
import { Link } from 'react-router-dom';  // Importing the Link component from react-router-dom for navigation
import Nav from '../../components/Nav';  // Importing the Nav component from the specified path
import Hero from '../../components/Hero';  // Importing the Hero component from the specified path
import Footer from '../../components/Footer';  // Importing the Footer component from the specified path

// Functional component named Helperdashboard
const Helperdashboard = () => {
  return (
    // Fragment shorthand to avoid adding extra nodes to the DOM
    <>
      <header>
        <Nav />  // Rendering the Nav component inside the header
      </header>
      <main>
        {/* Rendering the Hero component with a title and a custom class */}
        <Hero title="Helper dashboard" herohelperoverlay='hero-helperoverlay' />
        <div className="dashboardcards">
          {/* Link to navigate to the "viewhelpers" route with a card layout */}
          <Link to="/viewhelpers" className="viewhelpers-card">
            <img src="assets/img/obanshirecubscouts-helper.webp" alt="" className="viewhelpers-cardimg" />
            <h2 className="viewhelpers-cardtitle">View other helpers</h2>
          </Link>
          {/* Link to navigate to the "applytraining" route with a card layout */}
          <Link to="/applytraining" className="applytraining-card">
            <img src="assets/img/obanshirecubscout-training.webp" alt="" className="applytraining-cardimg" />
            <h2 className="uploadimg-cardtitle">Apply for training</h2>
          </Link>
          {/* Link to navigate to the "events" route with a card layout */}
          <Link to="/events" className="events-card">
            <img src="assets/img/obanshirecubscouts-events.webp" alt="" className="events-cardimg" />
            <h2 className="events-cardtitle">Events</h2>
          </Link>
        </div>
      </main>
      {/* Rendering the Footer component */}
      <Footer />
    </>
  )
}

export default Helperdashboard;  // Exporting the Helperdashboard component as the default export
