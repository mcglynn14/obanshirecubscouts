import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Equestiancubbadge = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Nav />
      </header>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero title="Equestian Cub Badge" heroequestrianbadgeoverlay="hero-equestianbadgeoverlay" />
        {/* Equestian badge content */}
        <div className="equestianbadge">
          {/* Print button */}
          <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
          {/* Badge image */}
          <img src="assets/img/obancubscouts-cub-activityequestrian.svg" alt="" className="equestiancubbadge-img" />
          {/* Badge description */}
          <p className="equestianbadge-text">
            The Equestrian Cub Badge is a scouting achievement designed for young scouts who have an interest in horseback riding and equestrian skills. Earning this badge typically involves a mix of practical riding skills, knowledge of horse care, and understanding equestrian safety. Here are some key aspects that might be part of earning the Equestrian Cub Badge:<br/><br/>

            Basic Riding Skills: Scouts must demonstrate their ability to ride a horse or pony at a walk and trot. They may also need to show they can mount and dismount safely.<br/><br/>

            Horse Care Knowledge: Scouts learn the basics of horse care, including grooming, feeding, and understanding the daily needs of a horse. This often includes learning how to clean tack (saddles, bridles, etc.) and recognizing common health issues in horses.<br/><br/>

            Safety Procedures: Understanding the importance of safety around horses is crucial. Scouts are taught how to approach, lead, and tie up a horse correctly, as well as the importance of wearing appropriate riding gear such as helmets and boots.<br/><br/>

            Equestrian Etiquette: Proper behavior around horses and in stables is emphasized. Scouts learn the importance of being calm and consistent around horses and respecting the rules of the riding facility.<br/><br/>

            Horse Anatomy and Breeds: Basic knowledge about horse anatomy and different horse breeds might be required. Scouts could learn to identify major parts of the horse and recognize some common breeds and their characteristics.<br/><br/>

            Trail Riding and Navigation: If the badge includes trail riding, scouts might learn basic navigation skills and the principles of riding in a group. This can include understanding trail markers, basic map reading, and the importance of leaving no trace.<br/><br/>

            Horseback Riding Games and Activities: To make learning fun, scouts might participate in horseback riding games and activities that reinforce their riding skills and knowledge in a playful and engaging way.<br/><br/>

            Horse History and Cultural Significance: Scouts could explore the history of horses and their significance in different cultures, understanding how horses have been used throughout history for work, war, and sport.<br/><br/>

            Participation in an Equestrian Event: To earn the badge, scouts might be required to participate in or attend an equestrian event, such as a local horse show, rodeo, or trail ride, to observe and learn from experienced riders.<br/><br/>

            Earning the Equestrian Cub Badge encourages young scouts to develop confidence, responsibility, and a deep respect for animals through hands-on experience and learning.
          </p>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Equestiancubbadge