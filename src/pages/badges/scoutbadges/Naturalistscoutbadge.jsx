import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Naturalistscoutbadge = () => {
  return (
    <>
    {/* Header */}
    <header>
      <Nav />
    </header>
    {/* Main content */}
    <main>
      {/* Hero section */}
      <Hero title="Naturalist Scout Badge" heronaturalistbadgeoverlay="hero-naturalistbadgeoverlay" />
      {/* Badge information */}
      <div className="badgesinfodiv">
        {/* Print button */}
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
        {/* Badge image */}
        <img src="assets/img/obancubscouts-scout-activitynaturalist.svg" alt="" className="badgesinfo-img" />
        {/* Badge description */}
        <p className="badgesinfo-text">The Naturalist Scout Badge is earned by Scouts who demonstrate an understanding and appreciation for the natural world. Here are some random facts about this badge:<br/><br/>

        Origins: The Naturalist Scout Badge has its roots in the early Scouting movement, where emphasis was placed on fostering a connection with nature and outdoor skills.<br/><br/>

        Requirements: To earn the badge, Scouts typically have to complete a series of tasks related to identifying plants, animals, and ecosystems, as well as demonstrating skills such as fire building, orienteering, and conservation practices.<br/><br/>

        Field Trips: Many Scout troops organize field trips to local parks, nature reserves, or wilderness areas to help Scouts fulfill badge requirements. These outings often involve guided hikes, nature walks, and educational activities led by naturalists or park rangers.<br/><br/>

        Wildlife Observation: Scouts may be required to observe and document various species of wildlife, either through photography, journaling, or sketching. This helps them develop an appreciation for biodiversity and understand the importance of habitat conservation.<br/><br/>

        Environmental Stewardship: The badge often includes requirements related to environmental stewardship and conservation efforts. Scouts might participate in activities such as tree planting, litter clean-ups, or invasive species removal projects to earn their badge.<br/><br/>

        Citizen Science: Some badge requirements may involve participating in citizen science projects, where Scouts contribute data to ongoing research efforts by scientists and conservation organizations.<br/><br/>

        Historical Figures: Scouts may learn about historical figures who were influential naturalists, such as John Muir, Rachel Carson, or Aldo Leopold, as part of their badge requirements.<br/><br/>

        Life Skills: In addition to learning about nature, earning the Naturalist Scout Badge helps Scouts develop important life skills such as observation, critical thinking, problem-solving, and teamwork.<br/><br/>

        Continued Learning: Many Scouts continue to pursue their interest in naturalism beyond earning the badge, participating in activities like birdwatching, camping, hiking, and environmental advocacy throughout their lives.</p>
      </div>
    </main>
    {/* Footer */}
    <Footer />
  </>
  )
}

export default Naturalistscoutbadge