import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Wateractivitiescubbadge = () => {
  return (
    <>
    {/* Header */}
    <header>
      <Nav />
    </header>
    {/* Main content */}
    <main>
      {/* Hero section */}
      <Hero title="Water activites Cub Badge" herowateractivitesbadgeoverlay="hero-wateractivitesbadgeoverlay" />
      {/* Badge information */}
      <div className="badgesinfodiv">
        {/* Print button */}
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
        {/* Badge image */}
        <img src="assets/img/obancubscouts-cub-activitywater-activities.svg" alt="" className="badgesinfo-img" />
        {/* Badge description */}
        <p className="badgesinfo-text">
          The Water Activities badge is a badge earned by Cub Scouts, typically aged between 8 to 10 years old, in various scouting organizations worldwide. It aims to teach young scouts essential skills and safety practices related to water-based activities, promoting confidence and competence in aquatic environments. Here's some detailed information about the badge:<br/><br/>

          Purpose: The Water Activities badge aims to instill in Cub Scouts a respect for water safety, an understanding of various water activities, and the development of skills necessary for safe participation in water-based recreation.<br/><br/>

          Badge Requirements: The requirements for earning the Water Activities badge may vary slightly depending on the specific scouting organization and region. However, they generally include tasks such as demonstrating swimming proficiency, learning basic boating safety rules, understanding the importance of wearing a personal flotation device (PFD), identifying different types of watercraft, and demonstrating knowledge of water rescue techniques.<br/><br/>

          Skill Development: Through earning the Water Activities badge, Cub Scouts learn essential skills such as swimming strokes, knot tying (especially those useful in boating situations), how to safely enter and exit watercraft, and how to respond to emergencies like someone in distress in the water.<br/><br/>

          Safety Focus: Safety is a central theme throughout the Water Activities badge program. Cubs are taught to recognize potential hazards in and around water, including currents, underwater obstacles, and changing weather conditions. They also learn how to assess risks and make informed decisions to ensure their safety and the safety of others.<br/><br/>

          Environmental Awareness: Many Water Activities badge programs include components focused on environmental awareness and conservation. Cubs learn about the importance of protecting water sources, minimizing pollution, and preserving aquatic habitats for future generations.<br/><br/>

          Hands-On Learning: The badge requirements often involve hands-on learning experiences, such as practicing water skills at a local swimming pool, participating in boating excursions on lakes or rivers, or attending water safety classes led by qualified instructors.<br/><br/>

          Progression: Earning the Water Activities badge is often a stepping stone for Cub Scouts who may later pursue more advanced aquatic activities in Scouts BSA or other scouting programs, such as kayaking, sailing, or lifeguarding.<br/><br/>

          Recognition: Once Cub Scouts complete the requirements for the Water Activities badge, they are typically recognized and celebrated within their scouting unit or community. This recognition can take the form of a ceremony, presentation of the badge, or inclusion in a scouting newsletter or bulletin.<br/><br/>

          Family Involvement: Family involvement is encouraged in the Water Activities badge program, with parents or guardians often playing a role in helping Cubs fulfill badge requirements, practicing skills together, and reinforcing water safety practices outside of formal scouting activities.<br/><br/>

          Lifelong Skills: Beyond earning a badge, the Water Activities program equips Cub Scouts with lifelong skills and knowledge that promote safe and enjoyable participation in water-based activities throughout their lives.
        </p>
      </div>
    </main>
    {/* Footer */}
    <Footer />
  </>
  )
}

export default Wateractivitiescubbadge