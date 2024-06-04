import React from 'react';
import Nav from '../../../components/Nav'; // Importing the Nav component from its location
import Hero from '../../../components/Hero'; // Importing the Hero component from its location
import Footer from '../../../components/Footer'; // Importing the Footer component from its location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faPrint } from '@fortawesome/free-solid-svg-icons'; // Importing the faPrint icon

// Firesafetycubbadge component
const Firesafetycubbadge = () => {
  return (
    <> {/* Fragments to return multiple elements */}
      <header>
        <Nav /> {/* Rendering the Nav component in the header */}
      </header>
      <main>
        <Hero title="Fire safety Cub Badge" herofiresafetybadgeoverlay="hero-firesafetybadgeoverlay" /> {/* Rendering the Hero component with title and overlay */}
        <div className="firesafetybadge">
          {/* Button to trigger print functionality */}
          <button className="btn btn-print" onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </button>
          {/* Image related to fire safety badge */}
          <img src="assets/img/obancubscouts-cub-activityfire-safety.svg" alt="" className="firesafetycubbadge-img" />
          {/* Text describing the Fire Safety Cub Badge */}
          <p className="firesafetybadge-text">
            The Fire Safety Cub Badge is a part of the Cub Scouts program aimed at educating young scouts on the importance of fire safety and prevention. Earning this badge involves completing various activities and learning essential skills related to fire safety. Here are some random pieces of information about the Fire Safety Cub Badge:<br/><br/>
            Fire Safety Knowledge: Scouts learn about the different types of fire extinguishers (A, B, C, and D) and their appropriate uses. They also study how to identify fire hazards in different environments, such as homes and campsites.<br/><br/>
            Home Fire Escape Plan: To earn the badge, scouts often need to create a home fire escape plan. This includes identifying all exits, establishing a family meeting point outside the home, and practicing the plan regularly with their family.<br/><br/>
            Stop, Drop, and Roll: Scouts must demonstrate the "Stop, Drop, and Roll" technique, which is a crucial response if their clothing catches fire. This helps them understand how to smother flames and protect themselves.<br/><br/>
            Fire Safety Equipment: Learning about various fire safety equipment is a key component. Scouts may need to identify and understand the use of smoke detectors, fire alarms, fire blankets, and fire extinguishers.<br/><br/>
            Emergency Numbers: Knowing how and when to dial emergency numbers (like 999) is vital. Scouts practice what information to give to emergency operators, such as their address, the nature of the emergency, and any other relevant details.<br/><br/>
            Firefighter Visit: Many scout groups organize a visit to a local fire station. Here, scouts can interact with firefighters, see firefighting equipment up close, and learn about the daily routines and responsibilities of firefighters.<br/><br/>
            Fire Safety Quiz: To test their knowledge, scouts often take a fire safety quiz covering various topics they have learned. This can include identifying fire hazards, knowing what to do in case of a fire, and recognizing different types of fires.<br/><br/>
            Fire Drills: Participation in fire drills, both at home and during scout meetings, is a common requirement. This helps reinforce the importance of being prepared and knowing what to do in an emergency.<br/><br/>
            Campfire Safety: Scouts also learn about campfire safety, including how to build a safe campfire, how to maintain it, and the proper way to extinguish it. This is particularly important for scouts who frequently go camping.<br/><br/>
            Fire Safety Pledge: Some programs include a fire safety pledge where scouts commit to practicing fire safety and educating others about what they have learned.<br/><br/>
            These activities not only help scouts earn their Fire Safety Badge but also instill lifelong skills that can keep them and their families safe from fire-related dangers.
          </p>
        </div>
      </main>
      <Footer /> {/* Rendering the Footer component */}
    </>
  )
}

export default Firesafetycubbadge; // Exporting the Firesafetycubbadge component
