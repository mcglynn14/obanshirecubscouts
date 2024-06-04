import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setToken(null);
    setUserRole(null);
    navigate('/login');
  };

  useEffect(() => {
    // Function to handle navbar toggle click
    const handleNavbarToggleClick = () => {
      const mainnav = document.getElementById('mobile-nav');
      const navOpen = document.getElementById('open-toggle');
      const navClose = document.getElementById('close-toggle');

      mainnav.classList.toggle('active');
      navOpen.classList.toggle('open-toggle');
      navClose.classList.toggle('close-toggle');
    };

    const navbarToggle = document.getElementById('navbar-toggle');
    if (navbarToggle) {
      navbarToggle.addEventListener('click', handleNavbarToggleClick);
    }

    // Cleanup function to remove event listener
    return () => {
      if (navbarToggle) {
        navbarToggle.removeEventListener('click', handleNavbarToggleClick);
      }
    };
  }, []);

  // Add a console log to debug user role
  useEffect(() => {
    console.log(`User role is: ${userRole}`);
  }, [userRole]);

  // Function to get user role in lowercase
  const getRoleLowerCase = () => {
    return userRole ? userRole.toLowerCase() : '';
  };

  return (
    <>
      <div className="headerinner">
        <div className="logo">
          <img src="../../assets/img/Obanshirecubscoutslogo.svg" alt="Logo" />
        </div>
        <div className="navbartoggle" id="navbar-toggle">
          <button>
            <FontAwesomeIcon className="fa-bars" id="open-toggle" icon={faBars} />
          </button>
          <button>
            <FontAwesomeIcon className="fa-X" id="close-toggle" icon={faX} />
          </button>
        </div>
      </div>
      <nav>
        <ul className="ul-links" id="mobile-nav">
          {/* Render navigation links based on user role */}
          {!token && (
            <>
              <li><Link to="/" className="nav-links">Home</Link></li>
              <li><Link to="/gallery" className="nav-links">Gallery</Link></li>
              <li><Link to="/badges" className="nav-links">Badges</Link></li>
              <li><Link to="/contact" className="nav-links">Contact</Link></li>
              <li><Link to="/localinfo" className="nav-links">Local information</Link></li>
              <li><Link to="/generalinfo" className="nav-links">General information</Link></li>
              <li><Link to="/login" className="nav-links">Login</Link></li>
              <li><Link to="/register" className="nav-links">Register</Link></li>
            </>
          )}
          {token && getRoleLowerCase() === 'helper' && (
            <>
              <li><Link to="/" className="nav-links">Home</Link></li>
              <li><Link to="/gallery" className="nav-links">Gallery</Link></li>
              <li><Link to="/localinfo" className="nav-links">Local information</Link></li>
              <li><Link to="/helperdashboard" className="nav-links">Dashboard</Link></li>
              <li><Link to="/viewhelpers" className="nav-links">View other helpers</Link></li>
              <li><Link to="/applytraining" className="nav-links">Apply for training</Link></li>
              <li><Link to="/events" className="nav-links">Events</Link></li>
              <li><button className="nav-links" onClick={logout}>Logout</button></li>
            </>
          )}
          {token && getRoleLowerCase() === 'scoutleader' && (
            <>
              <li><Link to="/" className="nav-links">Home</Link></li>
              <li><Link to="/gallery" className="nav-links">Gallery</Link></li>
              <li><Link to="/leaderdashboard" className="nav-links">Leader Dashboard</Link></li>
              <li><Link to="/managecubscouts" className="nav-links">Manage cub scouts</Link></li>
              <li><Link to="/managegallery" className="nav-links">Manage gallery</Link></li>
              <li><Link to="/helpers" className="nav-links">Helpers</Link></li>
              <li><Link to="/manageevents" className="nav-links">Manage events</Link></li>
              <li><button className="nav-links" onClick={logout}>Logout</button></li>
            </>
          )}
          {token && getRoleLowerCase() === 'child' && (
            <>
              <li><Link to="/" className="nav-links">Home</Link></li>
              <li><Link to="/gallery" className="nav-links">Gallery</Link></li>
              <li><Link to="/yourbadges" className="nav-links">Your badges</Link></li>
              <li><Link to="/dashboard" className="nav-links">Dashboard</Link></li>
              <li><Link to="/games" className="nav-links">Games</Link></li>
              <li><button className="nav-links" onClick={logout}>Logout</button></li>
            </>
          )}
          {/* Add a default case to handle unknown user roles */}
          {token && !['helper', 'scoutleader', 'child'].includes(getRoleLowerCase()) && (
            <>
              <li><Link to="/" className="nav-links">Home</Link></li>
              <li><Link to="/gallery" className="nav-links">Gallery</Link></li>
              <li><Link to="/contact" className="nav-links">Contact</Link></li>
              <li><button className="nav-links" onClick={logout}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
