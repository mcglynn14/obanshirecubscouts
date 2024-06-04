import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

// Define a functional component called Communicatorscoutbadge
const Communicatorscoutbadge = () => {
  return (
    <>
    <header>
      <Nav /> {/* Render the Nav component */}
    </header>
    <main>
      <Hero title="Communicator Scout Badge" herocommunicatorbadgeoverlay="hero-communicatorbadgeoverlay" /> {/* Render the Hero component with a title prop */}
      <div className="badgesinfodiv">
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button> {/* Render a button with a FontAwesomeIcon and an onClick event listener */}
        <img src="assets/img/obancubscouts-scout-activitycommunicator.svg" alt="" className="badgesinfo-img" /> {/* Render an image */}
        <p className="badgesinfo-text">
          {/* Render a paragraph with information about the Communicator Scout Badge */}
          The Communicator Scout Badge is a mark of achievement earned by scouts who demonstrate excellence in communication skills within the scouting community. Here are some random facts about it:<br/><br/>

          Origins: The Communicator Scout Badge has its roots in the early days of scouting, where communication skills were valued for their role in fostering teamwork, leadership, and community engagement.<br/><br/>

          Requirements: To earn the Communicator Scout Badge, scouts typically have to demonstrate proficiency in various forms of communication, such as public speaking, writing, digital communication, and possibly even non-verbal communication.<br/><br/>

          Modern Adaptations: With the advent of digital media and technology, many scouting organizations have updated the requirements for the Communicator Scout Badge to include skills such as social media management, website development, and multimedia content creation.<br/><br/>

          Community Impact: Scouts who earn the Communicator Scout Badge are often encouraged to use their communication skills to make a positive impact in their communities, whether through raising awareness about important issues, promoting scouting events, or facilitating effective teamwork among their peers.<br/><br/>

          International Recognition: While the specifics may vary, the importance of effective communication is recognized across scouting organizations worldwide, making the Communicator Scout Badge a universally valued achievement.<br/><br/>

          Leadership Potential: Scouts who excel in communication often demonstrate strong leadership potential, as effective communication is a cornerstone of successful leadership in any field.<br/><br/>

          Continued Development: Even after earning the badge, scouts are encouraged to continue honing their communication skills, recognizing that effective communication is a lifelong skill with countless applications in both personal and professional life.
        </p>
      </div>
    </main>
    <Footer /> {/* Render the Footer component */}
  </>
  )
}

export default Communicatorscoutbadge // Export the Communicatorscoutbadge component as the default export