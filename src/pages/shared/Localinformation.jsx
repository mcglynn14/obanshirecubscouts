import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Localinformation = () => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Hero title="Local information" herolocalinfoOverlay='hero-localinfoOverlay' />
            <p className="localinfo-text">As part of our commitment to fostering a sense of community and adventure, we believe it's essential to learn about the wonderful area they call home. Here's a glimpse into the vibrant tapestry of Oban and its surrounding areas:</p>
            <h2 className="location-title">Location:</h2>
            <div className="location-textimg">
                <p className="location-text">Nestled on the west coast of Scotland, Oban is a picturesque town known as the "Gateway to the Isles." Situated in Argyll and Bute, it's surrounded by stunning landscapes, including rugged coastlines, serene lochs, and verdant hills</p>
                <img src="assets/img/obancubscout-oban.webp" alt="" className="locationimg" />
            </div>
            <h2 className="historical-landtitle">Historical Landmarks:</h2>
            <div className="historical-landtextimg">
                <p className="historical-landtext">Oban boasts a rich history, evident in its many historical landmarks. One of the most prominent is McCaig's Tower, a striking structure reminiscent of the Roman Colosseum, offering panoramic views of the town and its surroundings. Dunollie Castle, perched on a rocky promontory overlooking the sea, provides a fascinating glimpse into Scotland's medieval past.</p>
                <img src="assets/img/obanshirecubscouts-landmarks.webp" alt="" className="historical-landimg" />
            </div>
            <h2 className="outdoor-title">Outdoor Adventures:</h2>
            <div className="outdoor-textimg">
                <p className="outdoor-text">Our Cubs and scouts are fortunate to have an abundance of outdoor activities right on their doorstep. From hiking along the picturesque trails of Glen Lonan to exploring the hidden coves along the coastline, there's no shortage of adventures to be had. And for those eager to take to the water, kayaking and sailing are popular pastimes thanks to Oban's sheltered bay and proximity to the Inner Hebrides.</p>
                <img src="assets/img/obancubscouts-outdoors.webp" alt="" className="outdoor-img" />
            </div>
            <h2 className="wildlifewatch-title">Wildlife Watching:</h2>
            <div className="wildlifewatch-textimg">
                <p className="wildlifewatch-text">Oban is renowned for its diverse wildlife, offering Cubs the opportunity to observe seals basking on rocky shores, seabirds soaring overhead, and even the occasional glimpse of dolphins frolicking in the waves. The surrounding area is also home to red deer, pine martens, and a variety of bird species, making it a nature lover's paradise.</p>
                <img src="assets/img/obancubscouts-wildlife.webp" alt="" className="wildlifewatch-img" />
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Localinformation