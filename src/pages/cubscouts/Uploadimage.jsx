import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Uploadimage = () => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Hero title="Upload Image" herouploadimageoverlay = 'hero-uploadimageoverlay'/>
            <div className="uploadimage">
                <img src="assets/img/obanshirecubscouts-placeholder.webp" alt="" className="uploadimage-img" />
                <button className="btn btn-uploadimage"><FontAwesomeIcon icon={faUpload} /> Upload image</button>
                <button className="btn btn-uploadimage-submit">Submit</button>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Uploadimage