import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Camperscoutbadge = () => {
  return (
    <>
    {/* Header */}
    <header>
      <Nav />
    </header>
    {/* Main content */}
    <main>
      {/* Hero section */}
      <Hero title="Camper Scout Badge" herocamperbadgeoverlay="hero-camperbadgeoverlay" />
      {/* Badge information */}
      <div className="badgesinfodiv">
        {/* Print button */}
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
        {/* Badge image */}
        <img src="assets/img/obancubscouts-scout-activitycamper.svg" alt="" className="badgesinfo-img" />
        {/* Badge description */}
        <p className="badgesinfo-text">
          The Camper Scout badge is a symbol of proficiency in outdoor skills and camping expertise within scouting organizations. Here's some detailed information about it:<br/><br/>

          Purpose: The Camper Scout badge aims to recognize and encourage scouts who demonstrate competence and knowledge in various aspects of camping, wilderness survival, and outdoor activities.<br/><br/>

          Skill Areas: Scouts working towards the Camper Scout badge typically focus on mastering skills such as tent setup, fire building, outdoor cooking, map reading, knot tying, shelter construction, wildlife safety, and basic first aid.<br/><br/>

          Progression: The badge often represents a milestone in a scout's progression, signaling their readiness to undertake more challenging outdoor adventures and leadership roles within their troop or unit.<br/><br/>

          Training and Education: Scouts acquire the necessary skills through a combination of hands-on training, instructional sessions, workshops, and practical experience gained during camping trips, hikes, and outdoor expeditions.<br/><br/>

          Safety Emphasis: Safety is paramount in earning the Camper Scout badge. Scouts are taught to prioritize safety measures when engaging in outdoor activities, including proper equipment use, fire safety protocols, emergency preparedness, and wilderness first aid.<br/><br/>

          Environmental Awareness: Many scouting organizations incorporate environmental education and conservation principles into the Camper Scout badge requirements, teaching scouts to appreciate and protect natural resources while enjoying outdoor recreation responsibly.<br/><br/>

          Badge Requirements: Specific requirements for earning the Camper Scout badge may vary by scouting organization, but typically involve demonstrating proficiency in a set number of camping skills and completing related tasks or projects.<br/><br/>

          Badge Evaluation: Scouts are evaluated by their leaders, mentors, or merit badge counselors to ensure they meet the criteria for the Camper Scout badge. Evaluation methods may include practical demonstrations, written tests, oral interviews, and observation of outdoor skills in action.<br/><br/>

          Pride and Accomplishment: Earning the Camper Scout badge is a source of pride and accomplishment for scouts, reflecting their dedication, perseverance, and love for the outdoors. Displaying the badge on their uniform serves as a visible reminder of their achievements and commitment to scouting values.
        </p>
      </div>
    </main>
    {/* Footer */}
    <Footer />
  </>
  )
}

export default Camperscoutbadge