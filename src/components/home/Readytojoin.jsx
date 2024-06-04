import React from 'react';
import { Link } from 'react-router-dom';

const Readytojoin = () => {
  return (
    <>
        {/* Section for the "Ready to Join" content */}
        <section className="readytojoin-section">
            {/* Title */}
            <h2 className="readytojoin-title">Ready to Join the Fun?</h2>
            {/* First paragraph */}
            <p className="readytojoin-text1">Joining Obanshire Cub Scouts is easy and exciting! Whether you're a parent looking for enriching experiences for your child or a young adventurer eager to explore, we welcome you to join our pack.</p>
            {/* Second paragraph */}
            <p className="readytojoin-text2">Simply click the button below to start your journey with Obanshire Cub Scouts. We can't wait to welcome you aboard and embark on amazing adventures together!</p>
            {/* Button to join */}
            <Link to="/generalinfo" className="btn">Join us</Link>
            {/* Image */}
            <img src="assets/img/scoutsactivites.webp" alt="A group of hikers in rain gear walking in a grassy field with trees in the background. The person in the front is smiling and carrying a yellow and red backpack. It's raining lightly, and the hikers are dressed in black waterproof clothing" className="readytojoin-img" />
        </section>
    </>
  )
}

export default Readytojoin