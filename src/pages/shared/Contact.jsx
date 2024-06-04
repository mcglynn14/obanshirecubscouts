import React from 'react'; // Import React library
import Nav from '../../components/Nav'; // Import the Nav component
import Hero from '../../components/Hero'; // Import the Hero component
import Footer from '../../components/Footer'; // Import the Footer component

// Define the Contact component as a functional component
const Contact = () => {
  return (
    <>
        <header>
            <Nav /> {/* Render the Nav component within the header */}
        </header>
        <main>
            <Hero title="Contact" herocontactoverlay='hero-contactoverlay' /> {/* Render the Hero component with props */}
            <div className="contact-formdiv">
                <h2 className="contact-formtitle">Contact form</h2> {/* Title for the contact form */}
                <form action="" className="contact-form"> {/* Contact form structure */}
                    <p className="contact-formtext">Name</p>
                    <input type="text" className="contact-forminput" /> {/* Input for name */}
                    <p className="contact-formtext">Email</p>
                    <input type="text" className="contact-forminput" /> {/* Input for email */}
                    <p className="contact-formtext">Phone number</p>
                    <input type="text" className="contact-forminput" /> {/* Input for phone number */}
                    <p className="contact-formtext">Message</p>
                    <input type="text" className="contact-forminput contact-formmessage" /> {/* Input for message */}
                    <button type="submit" className="btn contact-formbtn">Submit</button> {/* Submit button */}
                </form>
            </div>
            <div className="email-phone"> {/* Section for displaying email and phone information */}
                <h2 className="email-title">Email</h2>
                <p className="email-text">info@obanshirecubscouts.com</p> {/* Email information */}
                <h2 className="phone-title">Phone number</h2>
                <p className="phone-text">01631 3355621</p> {/* Phone number information */}
            </div>
            <div className="map"> {/* Section for embedding Google Map */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.3962934126082!2d-5.476586666704268!3d56.41015779918966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488967092b78a745%3A0xf3eeeabdd2f332e!2sOban%20Baptist%20Church!5e1!3m2!1sen!2suk!4v1715686512014!5m2!1sen!2suk" 
                    width="400" 
                    height="300" 
                    style={{ border: '0' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe> {/* Embedded Google Map iframe */}
            </div>
        </main>
        <Footer /> {/* Render the Footer component */}
    </>
  )
}

export default Contact; // Export the Contact component as the default export
