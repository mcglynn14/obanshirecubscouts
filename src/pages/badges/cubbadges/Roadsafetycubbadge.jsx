import React from 'react';
import Nav from '../../../components/Nav';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Roadsafetycubbadge = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Nav />
      </header>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero title="Road safety Cub Badge" heroroadsafetybadgeoverlay="hero-roadsafetybadgeoverlay" />
        {/* Badge information */}
        <div className="badgesinfodiv">
          {/* Print button */}
          <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
          {/* Badge image */}
          <img src="assets/img/obancubscouts-cub-activityroad-safety.svg" alt="" className="badgesinfo-img" />
          {/* Badge description */}
          <p className="badgesinfo-text">
            The Road Safety Cub Badge is a merit badge earned by Cub Scouts as they learn about and demonstrate knowledge of road safety principles. Here are some random facts about it:<br/><br/>

            Origins: The Road Safety Cub Badge was introduced as a part of the Cub Scouts program to emphasize the importance of road safety education among young children.<br/><br/>

            Requirements: To earn the badge, Cub Scouts typically have to complete a set of requirements related to road safety, such as understanding traffic signs, learning pedestrian safety rules, and demonstrating proper bicycle safety.<br/><br/>

            Activities: Cub Scouts may participate in various activities to fulfill the badge requirements, including mock road crossings, role-playing scenarios, and visits from local law enforcement or road safety educators.<br/><br/>

            Community Involvement: Some Cub Scout troops engage with their local communities to promote road safety awareness, such as organizing safety presentations at schools or participating in community road clean-up events.<br/><br/>

            Practical Skills: Earning the Road Safety Cub Badge helps Cub Scouts develop practical skills that they can apply in real-life situations to stay safe while navigating roads and streets.<br/><br/>

            Continued Emphasis: Many scouting organizations continually update the requirements for merit badges like the Road Safety Cub Badge to ensure they remain relevant and address current road safety issues and challenges.<br/><br/>

            Recognition: Once earned, the Road Safety Cub Badge is typically worn on the Cub Scout uniform, serving as a visible symbol of the scout's commitment to road safety.<br/><br/>

            Impact: Through earning the badge, Cub Scouts not only learn how to keep themselves safe but also become advocates for road safety within their families and communities.<br/><br/>

            International Reach: While the specifics may vary, similar road safety badges or programs exist in scouting organizations around the world, reflecting the universal importance of teaching children about road safety.
          </p>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Roadsafetycubbadge