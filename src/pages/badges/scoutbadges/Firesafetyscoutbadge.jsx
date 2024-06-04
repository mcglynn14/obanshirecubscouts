import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Firesafetyscoutbadge = () => {
  return (
    <>
    {/* Header */}
    <header>
      <Nav />
    </header>
    {/* Main content */}
    <main>
      {/* Hero section */}
      <Hero title="Fire safety Scout Badge" heroequestrianbadgeoverlay="hero-equestrianbadgeoverlay" />
      {/* Badge information */}
      <div className="badgesinfodiv">
        {/* Print button */}
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
        {/* Badge image */}
        <img src="assets/img/obancubscouts-scout-activityfire-safety.svg" alt="" className="badgesinfo-img" />
        {/* Badge description */}
        <p className="badgesinfo-text">
          The Fire Safety Scout Badge is a recognition awarded to scouts who demonstrate proficiency in fire safety and prevention. Here's some detailed information about it:<br/><br/>

          Purpose:<br/><br/>
          The Fire Safety Scout Badge serves the primary purpose of educating scouts about fire safety practices, equipping them with the knowledge and skills necessary to prevent fires and respond effectively in case of emergencies. It aims to instill a sense of responsibility and preparedness in scouts regarding fire-related risks.<br/><br/>

          Requirements:<br/><br/>
          To earn the Fire Safety Scout Badge, scouts typically need to fulfill specific requirements set by their scouting organization. These requirements often include completing educational modules, participating in practical exercises, and demonstrating competency in various fire safety tasks. For example, scouts may need to learn about different types of fires, how to safely use fire extinguishers, develop evacuation plans, and understand the importance of smoke detectors.<br/><br/>

          Educational Components:<br/><br/>
          Scouts learn about the science of fire, including how fires start, spread, and behave under different conditions. They are taught the importance of fire prevention measures such as proper storage of flammable materials, safe handling of fire-making tools, and the dangers of playing with matches or lighters.<br/><br/>

          Practical Skills:<br/><br/>
          In addition to theoretical knowledge, scouts are often required to demonstrate practical skills related to fire safety. This may include conducting fire drills, identifying fire hazards in different environments, practicing emergency evacuation procedures, and effectively using firefighting equipment like fire extinguishers and hoses.<br/><br/>

          Community Engagement:<br/><br/>
          Scouts are encouraged to engage with their local communities as part of their fire safety education. This may involve collaborating with fire departments to learn from professionals, participating in community fire safety events, and educating others about fire prevention practices.<br/><br/>

          Lifelong Impact:<br/><br/>
          Earning the Fire Safety Scout Badge not only signifies a scout's achievement but also fosters a lifelong commitment to fire safety. Scouts are encouraged to continue practicing and promoting fire safety principles throughout their lives, making positive contributions to their communities and ensuring the well-being of themselves and others.
        </p>
      </div>
    </main>
    {/* Footer */}
    <Footer />
  </>
  )
}

export default Firesafetyscoutbadge