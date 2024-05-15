import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleNavbarToggleClick = () => {
            const mainnav = document.getElementById("mobile-nav");
            const navOpen = document.getElementById("open-toggle");
            const navClose = document.getElementById("close-toggle");

            mainnav.classList.toggle('active');
            navOpen.classList.toggle("open-toggle");
            navClose.classList.toggle("close-toggle");
        };
        const navbarToggle = document.getElementById("navbar-toggle");
        navbarToggle.addEventListener("click", handleNavbarToggleClick);
        return () => {
            navbarToggle.removeEventListener("click", handleNavbarToggleClick)
        };
    });

  return (
    <>
        <div className="headerinner">
            <div className="logo">
                <img src="../../assets/img/Obanshirecubscoutslogo.svg" alt="" className="" />
            </div>
            <div className="navbartoggle" id="navbar-toggle">
                <button className="">
                    <FontAwesomeIcon className="fa-bars" id="open-toggle" icon={faBars} />
                </button>
                <button className="">
                    <FontAwesomeIcon className="fa-X " id="close-toggle" icon={faX} />
                </button>
            </div>
        </div>
        <nav className="">
                    <ul className="ul-links" id="mobile-nav">
                        <Link to="/" className="nav-links">Home</Link>
                        <Link to="/gallery" className="nav-links">Gallery</Link>
                        <Link to="/badges" className="nav-links">Badges</Link>
                        <Link to="/contact" className="nav-links">Contact</Link>
                        <Link to="/localinfo" className="nav-links">Local information</Link>
                        <Link to="/generalinfo" className="nav-links">General information</Link>
                        <Link to="/login" className="nav-links">Login</Link>
                        <Link to="/register" className="nav-links">Register</Link>
                    </ul>
                </nav>
    </>
  )
}

export default Nav