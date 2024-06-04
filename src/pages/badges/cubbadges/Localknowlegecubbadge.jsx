import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Localknowlegecubbadge = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Nav />
      </header>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero title="Local knowlege Cub Badge" herolocalknowlegebadgeoverlay="hero-localknowlegebadgeoverlay" />
        {/* Badge information */}
        <div className="localknowlegebadge">
          {/* Print button */}
          <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
          {/* Badge image */}
          <img src="assets/img/obancubscouts-cub-activitylocal-knowledge.svg" alt="" className="localknowlegecubbadge-img" />
          {/* Badge description */}
          <p className="localknowlegebadge-text">
            The Local Knowledge Cub Badge is a fictional scouting achievement meant to encourage young scouts to learn about their local community, history, and environment. Here are some random pieces of information about the badge:<br/><br/>

            Purpose:<br/><br/>

            To enhance scouts' understanding of their local community.<br/><br/>
            To promote awareness of local history, landmarks, and natural features.<br/><br/>
            To encourage active participation in community events and projects.<br/><br/>

            Requirements:<br/><br/>

            Historical Awareness:<br/><br/>

            Research and present a brief history of your town or city.<br/><br/>
            Visit at least two local historical sites or museums and share your experiences with your troop.<br/><br/>

            Environmental Stewardship:<br/><br/>

            Identify and learn about three native plants or animals in your area.<br/><br/>
            Participate in a community clean-up event or conservation project.<br/><br/>

            Community Involvement:<br/><br/>

            Attend a local government meeting, such as a city council session, to learn how local governance works.<br/><br/>
            Volunteer at a local charity or community center for at least two hours.<br/><br/>
            
            Local Landmarks:<br/><br/>

            Create a map of your local area highlighting key landmarks, parks, and places of interest.<br/><br/>
            Visit at least three landmarks and document your visits with photos and a short report.<br/><br/>
            
            Cultural Understanding:<br/><br/>

            Learn about the cultural heritage of a significant ethnic or cultural group in your area.<br/><br/>
            Attend a cultural festival or event and share your experience with your troop.<br/><br/>
            
            Local Legends and Stories:<br/><br/>

            Collect and share at least two local legends, myths, or folktales from your community.<br/><br/>
            Interview a long-time resident about changes they have seen in the community over the years.<br/><br/>
            
            Activities:<br/><br/>

            Local Quiz Night: Organize a quiz night with questions related to local history, geography, and notable personalities.<br/><br/>
            Scavenger Hunt: Plan a scavenger hunt around the community, focusing on historical sites, public art, and natural features.<br/><br/>
            Photo Journal: Create a photo journal documenting various aspects of your community, including historical sites, natural beauty, and cultural events.
          </p>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Localknowlegecubbadge