// Import necessary modules and components from React and other libraries
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import axios from 'axios';

// Define the main component 'Viewhelpers'
const Viewhelpers = () => {
    // Declare a state variable 'helpers' to store the list of helpers and a setter 'setHelpers'
    const [helpers, setHelpers] = useState(null);

    // useEffect hook to fetch helpers data when the component is mounted
    useEffect(() => {
        // Make a GET request to the specified URL to fetch helpers data
        axios.get('http://localhost:5001/api/gethelpers')
            .then((response) => {
                // Log the received data to the console
                console.log('Received helpers:', response.data);
                // Update the 'helpers' state with the received data
                setHelpers(response.data);
            })
            .catch((error) => {
                // Log any errors to the console
                console.error('Error fetching helpers:', error);
            });
    }, []); // Empty dependency array means this effect runs only once after the initial render

    // Function to handle the deletion of a helper
    const handleDelete = (id) => {
        // Make a DELETE request to delete the helper by ID
        axios.delete(`http://localhost:5001/api/deletehelper/${id}`)
            .then((response) => {
                // Log a success message to the console
                console.log('Helper deleted successfully');
                // Update the 'helpers' state to reflect the deletion by filtering out the deleted helper
                setHelpers(helpers.filter(helper => helper._id !== id));
            })
            .catch((error) => {
                // Log any errors to the console
                console.error('Error deleting helper:', error);
            });
    };

    // Function to handle toggling the visibility of a helper
    const handleToggleVisibility = (id, hidden) => {
        // Make a PUT request to update the visibility of the helper by ID
        axios.put(`http://localhost:5001/api/updatehelper/${id}`, { hidden: !hidden })
            .then((response) => {
                // Log a success message to the console
                console.log('Helper visibility updated successfully');
                // Update the 'helpers' state to reflect the change in visibility
                setHelpers(helpers.map(helper => {
                    if (helper._id === id) {
                        return { ...helper, hidden: !hidden };
                    }
                    return helper;
                }));
            })
            .catch((error) => {
                // Log any errors to the console
                console.error('Error updating helper visibility:', error);
            });
    };

    return (
        <>
            {/* Header section with navigation */}
            <header>
                <Nav />
            </header>
            {/* Main content section */}
            <main>
                <Hero title="View helpers" heroviewhelperoverlay='hero-viewhelperoverlay' />
                <div className="container">
                    {/* Table to display the list of helpers */}
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Availability</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // Check if helpers data is loaded
                                helpers ? helpers.map((helper, index) => (
                                    // Render a table row for each helper
                                    <tr key={index}>
                                        <td>{helper.Name}</td>
                                        <td>{helper.dob}</td>
                                        <td>{helper.email}</td>
                                        <td>{helper.phonenumber}</td>
                                        <td>{helper.availability}</td>
                                        <td>
                                          {/* Button to delete the helper */}
                                          <button className='btn btn-helper-delete' onClick={() => handleDelete(helper._id)}>Delete</button>
                                          {
                                            helper.hidden ?
                                            // Button to show the helper if currently hidden
                                            <button className="btn btn-event-hide" onClick={() => handleToggleVisibility(helper._id, helper.hidden)}>
                                            Show
                                            </button> :
                                            // Button to hide the helper if currently visible
                                            <button className="btn btn-event-hide" onClick={() => handleToggleVisibility(helper._id, helper.hidden)}>
                                            Hide
                                            </button>
                                          }
                                        </td>
                                    </tr>
                                )) : <tr><td colSpan="6">Loading...</td></tr> // Show loading message if data is not yet loaded
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            {/* Footer section */}
            <Footer />
        </>
    );
};

export default Viewhelpers;
