import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Userinformation from '../../components/Userinformation';


const Viewhelpers = () => {
  const user = Userinformation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showStoryboard, setShowStoryboard] = useState(false); // State to control storyboard visibility


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading helpers: {error.message}</p>;
  }

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="View helpers" heroviewhelperoverlay='hero-viewhelperoverlay' />
        
        {/* User Information Section */}
        {user && (
          <div className="container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Of Birth</th>
                <th>Phone Number</th>
                <th>Availibility</th>
              </tr>
            </thead>
            <tbody>
              {user => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.dob}</td>
                  <td>{user.phonenumber}</td>
                  <td>{user.availibility}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        )}

        Helpers Table Section
        
      </main>
      <Footer />
    </>
  );
};

export default Viewhelpers;
