import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Viewhelpers = () => {
  const [helpers, setHelpers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHelpersData = async () => {
      try {
        const response = await axios.get('/api/helpers'); // Use Axios to make GET request
        console.log('Response data:', response.data); // Log response data to inspect its structure
        if (Array.isArray(response.data)) {
          setHelpers(response.data);
        } else {
          throw new Error('Response data is not an array');
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHelpersData();
  }, []);

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
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {helpers.map(helper => (
                <tr key={helper._id}>
                  <td>{user._id}</td>
                  <td>{helper.name}</td>
                  <td>{helper.email}</td>
                  <td>{helper.usertype}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Viewhelpers;
