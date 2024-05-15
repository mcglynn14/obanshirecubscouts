import React from 'react';
import { Link } from 'react-router-dom';

const Readytojoin = () => {
  return (
    <>
        <section className="readytojoin-section">
            <h2 className="readytojoin-title">Ready to Join the Fun?</h2>
            <p className="readytojoin-text1">Joining Obanshire Cub Scouts is easy and exciting! Whether you're a parent looking for enriching experiences for your child or a young adventurer eager to explore, we welcome you to join our pack.</p>
            <p className="readytojoin-text2">Simply click the button below to start your journey with Obanshire Cub Scouts. We can't wait to welcome you aboard and embark on amazing adventures together!</p>
            <Link to="/generalinfo" className="btn">Join us</Link>
            <img src="assets/img/scoutsactivites.webp" alt="" className="readytojoin-img" />
        </section>
    </>
  )
}

export default Readytojoin