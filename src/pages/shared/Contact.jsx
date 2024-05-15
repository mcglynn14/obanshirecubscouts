import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Hero title="Contact" herocontactoverlay='hero-contactoverlay' />
            <div className="contact-formdiv">
                <h2 className="contact-formtitle">Contact form</h2>
                <form action="" className="contact-form">
                    <p className="contact-formtext">Name</p>
                    <input type="text" className="contact-forminput" />
                    <p className="contact-formtext">Email</p>
                    <input type="text" className="contact-forminput" />
                    <p className="contact-formtext">Phone number</p>
                    <input type="text" className="contact-forminput" />
                    <p className="contact-formtext">Message</p>
                    <input type="text" className="contact-forminput contact-formmessage" />
                    <button type="submit" className="btn contact-formbtn">Submit</button> {/* Changed <a> to <button> */}
                </form>
            </div>
            <div className="email-phone">
                <h2 className="email-title">Email</h2>
                <p className="email-text">info@obanshirecubscouts.com</p>
                <h2 className="phone-title">Phone number</h2>
                <p className="phone-text">01631 3355621</p>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.3962934126082!2d-5.476586666704268!3d56.41015779918966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488967092b78a745%3A0xf3eeeabdd2f332e!2sOban%20Baptist%20Church!5e1!3m2!1sen!2suk!4v1715686512014!5m2!1sen!2suk" width="400" height="300" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Contact;
