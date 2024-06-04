import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Equestrianscoutbadge = () => {
  return (
    <>
    {/* Header */}
    <header>
      <Nav />
    </header>
    {/* Main content */}
    <main>
      {/* Hero section */}
      <Hero title="Equestrian Scout Badge" heroequestrianbadgeoverlay="hero-equestrianbadgeoverlay" />
      {/* Badge information */}
      <div className="badgesinfodiv">
        {/* Print button */}
        <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
        {/* Badge image */}
        <img src="assets/img/obancubscouts-scout-activityequestrian.svg" alt="" className="badgesinfo-img" />
        {/* Badge description */}
        <p className="badgesinfo-text">
          The Equestrian Scout Badge is a prestigious recognition awarded to scouts who demonstrate proficiency in horseback riding and related skills. Here are some random facts about the Equestrian Scout Badge:<br/><br/>

          Origins: The Equestrian Scout Badge has its roots in the early days of scouting when cavalry skills were considered essential for scouts. It was introduced as a badge to honor scouts who excelled in horseback riding and horse care.<br/><br/>

          Requirements: To earn the Equestrian Scout Badge, scouts typically have to complete a set of requirements that may include mastering basic riding techniques, demonstrating knowledge of horse care and safety, and participating in equestrian-related activities such as trail riding or horse shows.<br/><br/>

          Emblem: The badge usually features a design related to horses, such as a galloping horse or a horse and rider silhouette, surrounded by the scout emblem or motto.<br/><br/>

          Skill Development: Earning the Equestrian Scout Badge not only requires proficiency in riding but also fosters skills such as responsibility, discipline, and empathy towards animals.<br/><br/>

          Variations: Different scouting organizations may have variations of the Equestrian Scout Badge with slightly different requirements or designs, but the core focus on horseback riding and related skills remains consistent.<br/><br/>

          Recognition: Scouts who earn the Equestrian Scout Badge often take pride in displaying it on their uniforms, showcasing their dedication and expertise in equestrian activities within the scouting community.<br/><br/>

          Mentorship: Many scouts pursuing the Equestrian Scout Badge receive mentorship from experienced riders or equine professionals, fostering a sense of camaraderie and learning within the scouting organization.<br/><br/>

          Safety Emphasis: Safety is paramount in equestrian activities, and scouts working towards this badge learn important skills in horse handling, equipment maintenance, and emergency procedures to ensure the well-being of both rider and horse.<br/><br/>

          Community Involvement: Earning the Equestrian Scout Badge may involve participation in community events such as horse shows, parades, or volunteer work at local stables, strengthening the bond between scouts and the broader equestrian community.<br/><br/>

          Lifelong Passion: For many scouts, earning the Equestrian Scout Badge ignites a lifelong passion for horses and riding, leading them to pursue further opportunities in equestrian sports or even careers in the equine industry.
        </p>
      </div>
    </main>
    {/* Footer */}
    <Footer />
  </>
  )
}

export default Equestrianscoutbadge