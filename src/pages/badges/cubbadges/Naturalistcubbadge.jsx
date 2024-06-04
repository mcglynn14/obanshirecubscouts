import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Naturalistcubbadge = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Nav />
      </header>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero title="Naturalist Cub Badge" heronaturalistbadgeoverlay="hero-naturalistbadgeoverlay" />
        {/* Badge information */}
        <div className="naturalistbadge">
          {/* Print button */}
          <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
          {/* Badge image */}
          <img src="assets/img/obancubscouts-cub-activitynaturalist.svg" alt="" className="naturalistcubbadge-img" />
          {/* Badge description */}
          <p className="naturalistbadge-text">
            The Naturalist Cub Badge encourages young scouts to explore and appreciate the wonders of the natural world. Here's some random info about it:<br/><br/>

            Requirements: To earn the Naturalist Cub Badge, scouts might need to complete tasks like identifying local flora and fauna, learning about ecosystems, demonstrating outdoor skills like fire building or shelter construction, and participating in conservation activities.<br/><br/>

            Field Trips: Scouts often go on field trips to parks, forests, or nature reserves as part of earning this badge. These trips allow them to observe plants and animals in their natural habitats and learn about environmental conservation firsthand.<br/><br/>

            Community Projects: Some badge requirements may involve community projects, such as volunteering for park clean-ups, participating in tree planting events, or helping with wildlife habitat restoration efforts.<br/><br/>

            Educational Component: Scouts might need to attend workshops or lectures on topics like wildlife biology, botany, ecology, or environmental science to fulfill badge requirements.<br/><br/>

            Tracking Progress: Scouts usually keep a log or journal to track their progress towards earning the Naturalist Cub Badge. This helps them document their observations, experiences, and reflections throughout the process.<br/><br/>

            Practical Skills: In addition to learning about nature and conservation, scouts may also develop practical outdoor skills like orienteering, map reading, and wilderness survival techniques as part of earning this badge.
          </p>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Naturalistcubbadge