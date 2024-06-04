import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Localknowledgescoutbadge = () => {
  return (
    <>
    {/* Header */}
    <header>
      <Nav />
    </header>
    {/* Main content */}
    <main>
      {/* Hero section */}
      <Hero title="Local knowlege Scout Badge" herolocalknowlegebadgeoverlay="hero-localknowlegebadgeoverlay" />
      {/* Badge information */}
      <div className="badgesinfodiv">
        {/* Print button */}
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
        {/* Badge image */}
        <img src="assets/img/obancubscouts-scout-activitylocal-knowledge.svg" alt="" className="badgesinfo-img" />
        {/* Badge description */}
        <p className="badgesinfo-text">
          The Local Knowledge Scout Badge is a recognition of a Scout's understanding and familiarity with their immediate environment. Here's some detailed information about it:<br/><br/>

          Purpose: The Local Knowledge Scout Badge is designed to encourage Scouts to explore and appreciate their local community, fostering a sense of belonging and stewardship for the environment around them.<br/><br/>

          Requirements: To earn the badge, Scouts typically need to demonstrate a comprehensive understanding of various aspects of their local area, including geography, history, culture, and ecology. This often involves completing a series of tasks or projects that showcase their knowledge and engagement with their surroundings.<br/><br/>

          Research and Exploration: Scouts are encouraged to conduct research, go on field trips, and engage with local experts to deepen their understanding of their community. This may involve studying maps, visiting historical sites, exploring nature reserves, or interviewing local residents.<br/><br/>

          Skills Development: Pursuing the Local Knowledge Scout Badge helps Scouts develop a range of skills, including research and critical thinking, communication and presentation, navigation, and teamwork.<br/><br/>

          Topics Covered: The badge requirements typically encompass a wide range of topics, such as:<br/><br/>

          Local geography: Understanding the natural features, landmarks, and ecosystems in the area.<br/><br/>
          
          History and heritage: Learning about significant events, historical figures, and cultural traditions that have shaped the community.<br/><br/>
          
          Community resources: Identifying local services, organizations, and facilities available to residents.<br/><br/>
          
          Environmental awareness: Recognizing environmental issues and conservation efforts relevant to the area.<br/><br/>
          
          Navigation and mapping: Developing skills in reading maps, using compasses, and creating accurate representations of the local landscape.<br/><br/>

          Impact and Benefits: Earning the Local Knowledge Scout Badge not only demonstrates a Scout's commitment to learning and exploration but also instills a sense of pride and connection to their community. It encourages them to become active participants in local initiatives and to appreciate the importance of preserving and promoting their local heritage and environment.
        </p>
      </div>
    </main>
    {/* Footer */}
    <Footer />
  </>
  )
}

export default Localknowledgescoutbadge