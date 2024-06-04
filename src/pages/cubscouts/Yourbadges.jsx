// Import React library
import React from 'react';

// Import custom components
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

// Define the Yourbadges functional component
const Yourbadges = () => {
  return (
    <>
        {/* Header section containing the navigation bar */}
        <header>
            <Nav />
        </header>
        
        {/* Main content section */}
        <main>
            {/* Hero section with a title and overlay class */}
            <Hero title="Your Badges" heroyourbadgesoverlay='hero-yourbadgesoverlay'/>
            
            {/* Container for badge cards */}
            <div className="yourbadges">
                {/* Each badge card with an image and title */}
                <div className="card-1">
                    <img className="badges-cardimg" src="assets/img/obancubscouts-cub-activitycommunicator.svg" alt="" />
                    <h3 className="card-title">Communicator</h3>
                </div>
                <div className="card-2">
                    <img src="assets/img/obancubscouts-emergency-aid.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Emergency aid</h3>
                </div>
                <div className="card-3 not-achieved">
                    <img src="assets/img/obancubscouts-cub-activityequestrian.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Equestrian</h3>
                </div>
                <div className="card-4">
                    <img src="assets/img/obancubscouts-cub-activityfire-safety.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Fire safety</h3>
                </div>
                <div className="card-5 not-achieved">
                    <img src="assets/img/obancubscouts-cub-activitylocal-knowledge.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Local Knowledge</h3>
                </div>
                <div className="card-6 not-achieved">
                    <img src="assets/img/obancubscouts-cub-activitynaturalist.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Naturalist</h3>
                </div>
                <div className="card-7 not-achieved">
                    <img src="assets/img/obancubscouts-nautical.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Nautical skills</h3>
                </div>
                <div className="card-8">
                    <img src="assets/img/obancubscouts-navigator.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Navigator</h3>
                </div>
                <div className="card-9">
                    <img src="assets/img/obancubscouts-cub-activityroad-safety.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Road safety</h3>
                </div>
                <div className="card-10 not-achieved">
                    <img src="assets/img/obancubscouts-cub-activitywater-activities.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Water activities</h3>
                </div>
                {/* Repeat similar structure for additional badge cards */}
                <div className="card-1">
                    <img className="badges-cardimg" src="assets/img/obancubscouts-scout-activitycamper.svg" alt="" />
                    <h3 className="card-title">Camper</h3>
                </div>
                <div className="card-2">
                    <img src="assets/img/obancubscouts-scout-activitycommunicator.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Communicator</h3>
                </div>
                <div className="card-3">
                    <img src="assets/img/obancubscouts-emergency-aid.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Emergency aid</h3>
                </div>
                <div className="card-4 not-achieved">
                    <img src="assets/img/obancubscouts-scout-activityequestrian.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Equestrian</h3>
                </div>
                <div className="card-5">
                    <img src="assets/img/obancubscouts-scout-activityfire-safety.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Fire safety</h3>
                </div>
                <div className="card-6 not-achieved">
                    <img src="assets/img/obancubscouts-scout-activitylocal-knowledge.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Local knowledge</h3>
                </div>
                <div className="card-7 not-achieved">
                    <img src="assets/img/obancubscouts-scout-activitynaturalist.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Naturalist</h3>
                </div>
                <div className="card-8 not-achieved">
                    <img src="assets/img/obancubscouts-nautical.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Nautical skills</h3>
                </div>
                <div className="card-9">
                    <img src="assets/img/obancubscouts-navigator.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Navigator</h3>
                </div>
                <div className="card-10 not-achieved">
                    <img src="assets/img/obancubscouts-scout-activitywateractivities.svg" alt="" className="badges-cardimg" />
                    <h3 className="card-title">Water activities</h3>
                </div>
            </div>
        </main>
        
        {/* Footer section */}
        <Footer />
    </>
  );
}

// Export the Yourbadges component as default
export default Yourbadges;
