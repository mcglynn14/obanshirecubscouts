// Importing necessary modules and components
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import axios from 'axios';

const Viewhelpers = () => {
    // Initializing state to hold the list of helpers
    const [helpers, setHelpers] = useState(null);

    // useEffect hook to fetch data from the API when the component mounts
    useEffect(() => {
        // Sending a GET request to the API to fetch helpers data
        axios.get('http://localhost:5001/api/gethelpers')
            .then((response) => {
                // Logging the received data to the console
                console.log('Received helpers:', response.data);
                // Updating the state with the received data
                setHelpers(response.data);
            })
            .catch((error) => {
                // Logging any errors that occur during the request
                console.error('Error fetching helpers:', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <header>
                {/* Rendering the navigation bar */}
                <Nav />
            </header>
            <main>
                {/* Rendering the hero section with a title and a custom overlay class */}
                <Hero title="View helpers" heroviewhelperoverlay='hero-viewhelperoverlay' />
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Phone Number</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // Checking if helpers data is available
                                helpers ? 
                                    // Mapping over the helpers array to create a table row for each helper
                                    helpers.map((helper, index) => (
                                        <tr key={index}>
                                            <td>{helper.Name}</td>
                                            <td>{helper.dob}</td>
                                            <td>{helper.phonenumber}</td>
                                            <td>{helper.availability}</td>
                                        </tr>
                                    )) : 
                                    // Displaying a loading message while the data is being fetched
                                    <tr><td colSpan="4">Loading...</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            {/* Rendering the footer */}
            <Footer />
        </>
    );
};

// Exporting the component as the default export
export default Viewhelpers;
