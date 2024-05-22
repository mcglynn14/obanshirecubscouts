import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Generalinfo = () => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Hero title="General information" herogeneralinfoOverlay='hero-generalinfoOverlay' />
            <section className="aboutus">
                <h2 className="aboutus-title">About us</h2>
                <p className="aboutus-text">Obanshire Cub Scouts is a vibrant and inclusive community organization dedicated to providing fun and educational experiences for young boys and girls aged 8 to 10 for cubs and 10 to 14 for scouts. As part of the worldwide scouting movement, we aim to insist of values of leadership, teamwork, and community service while fostering personal growth and outdoor exploration.</p>
            </section>
            <section className="our-mission">
                <h2 className="our-missiontitle">Our Mission</h2>
                <p className="our-missiontext">At Obanshire Cub Scouts, our mission is to inspire young minds, encourage curiosity, and promote the development of well-rounded individuals who are prepared to make a positive impact in their communities. Through a diverse range of activities, adventures, and challenges, we strive to create a supportive environment where every child can thrive.</p>
            </section>
            <section className="whatwedo">
                <h2 className="whatwedo-title">What We Do</h2>
                <p className="whatwedo-text">Our program offers a wide variety of exciting activities designed to engage and empower young scouts. From outdoor adventures like camping, hiking, and orienteering to creative pursuits such as arts and crafts, cooking, and science experiments, there's always something new to discover at Obanshire Cub Scouts. We also focus on developing important life skills such as leadership, communication, and problem-solving through hands-on learning and teamwork.</p>
            </section>
            <section className="getinvoled">
                <h2 className="getinvoled-title">Get Involved</h2>
                <p className="getinvoled-text">Parents, guardians, and volunteers play a crucial role in our scouting community. Whether you can spare an hour a week or a day a month, there are plenty of opportunities to get involved and make a difference. From assisting with activities and outings your support helps ensure the success of Obanshire Cub Scouts.</p>
            </section>
            <section className="applyhelper">
                <h2 className="applyhelper-title">How to apply for helper</h2>
                <p className="applyhelper-text">you will find the form to apply to be a helper on the parent dashboard. This form will gather basic information about you, including your contact details, any previous experience with scouting or youth organizations and availability.</p>
            </section>
            <section className="disclosure">
                <h2 className="disclosure-title">How to apply for helper</h2>
                <p className="disclosure-text">you will find the form to apply to be a helper on the parent dashboard. This form will gather basic information about you, including your contact details, any previous experience with scouting or youth organizations and availability.</p>
                
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Generalinfo