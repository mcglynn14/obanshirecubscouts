import React from 'react';
import Nav from './../../../components/Nav';
import Hero from './../../../components/Hero';
import Footer from './../../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Communicatorcubbadge = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Nav />
      </header>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero title="Communicator Cub Badge" herocommunicatorbadgeoverlay="hero-communicatorbadgeoverlay" />
        {/* Badge information */}
        <div className="communicatorbadge">
          {/* Print button */}
          <button className="btn btn-print" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
          {/* Badge image */}
          <img src="assets/img/obancubscouts-cub-activitycommunicator.svg" alt="" className="communicatorcubbadge-img" />
          {/* Badge description */}
          <p className="communicatorbadge-text">
            The Communicator Cub Badge is part of the Cub Scouts program, designed to encourage young scouts to develop effective communication skills. Here are some random facts and information about this badge:<br/><br/>

            Objectives: The badge aims to enhance verbal, written, and non-verbal communication skills among cubs. It helps them understand the importance of clear communication and teaches them various ways to convey messages.<br/><br/>

            Activities: To earn the badge, cubs might engage in activities such as giving a short speech, writing a letter or an email, participating in a group discussion, learning basic sign language, and practicing active listening.<br/><br/>

            Requirements: Specific requirements may vary by region, but typically include tasks like:<br/><br/>

            - Describing an object or event in detail to someone.<br/>
            - Reading a story or article aloud.<br/>
            - Creating a poster or flyer to inform others about an event.<br/>
            - Using a communication device like a phone or computer to send a message.<br/><br/>

            Skills Developed: Cubs develop various skills such as public speaking, writing clarity, digital communication proficiency, teamwork, and empathy by understanding others' perspectives.<br/><br/>

            Non-verbal Communication: The badge also emphasizes non-verbal communication. Cubs might learn about body language, facial expressions, and tone of voice, and how these can affect the message being conveyed.<br/><br/>

            Role-playing: Cubs often participate in role-playing scenarios where they practice different types of communication, such as conflict resolution, storytelling, or giving instructions.<br/><br/>

            Cultural Awareness: Some programs include elements of cultural communication, where cubs learn about how communication styles can vary across different cultures and communities.<br/><br/>

            Technology Use: Given the digital age, the badge often includes components on using modern technology for communication. This might involve creating a short video, sending an email, or using social media responsibly.<br/><br/>

            Group Projects: Many badge requirements encourage group projects, fostering collaboration and collective problem-solving. For example, cubs might work together to create a skit that demonstrates effective communication.<br/><br/>

            Parent and Leader Involvement: Earning the badge usually involves guidance and evaluation from adult leaders and sometimes parents. They help assess the cubs' performance and provide feedback to help them improve.<br/><br/>

            Historical Context: The Communicator Badge has evolved over time to include modern communication methods while maintaining traditional skills like letter writing and face-to-face conversation.
          </p>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Communicatorcubbadge