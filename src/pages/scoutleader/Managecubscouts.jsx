// Import necessary modules and components from React and other libraries
import React, { useEffect, useState } from 'react'; 
import Nav from '../../components/Nav'; // Navigation component
import Hero from '../../components/Hero'; // Hero component for the page
import Footer from '../../components/Footer'; // Footer component
import axios from 'axios'; // Axios for making HTTP requests

// Define the Managecubscouts functional component
const Managecubscouts = () => {
    // Define a state variable 'users' and a function 'setUsers' to update it, initialized to null
    const [users, setUsers] = useState(null);

    // useEffect hook to run the specified code when the component mounts
    useEffect(() => {
        // Fetch all cub scouts data from the backend using axios
        axios.get('http://localhost:5001/api/getcubscouts')
            .then((response) => {
                // Log the received data to the console
                console.log('Received cub scouts:', response.data);
                // Update the 'users' state with the received data
                setUsers(response.data);
            })
            .catch((error) => {
                // Log any errors that occur during the fetch
                console.error('Error fetching cub scouts:', error);
            });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    // JSX to render the component's UI
    return (
        <>
            <header>
                <Nav /> {/* Render the Nav component */}
            </header>
            <main>
                <Hero title="Manage cub scouts" heromanagecubscoutsoverlay='hero-managecubscoutsoverlay' /> {/* Render the Hero component with specified props */}
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th> {/* Table header for Name */}
                                <th>Date Of Birth</th> {/* Table header for Date Of Birth */}
                                <th>Parent</th> {/* Table header for Parent */}
                                <th>Child age group</th> {/* Table header for Child age group */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // Conditional rendering based on whether 'users' is populated
                                users ? users.map((user, index) => (
                                    <tr key={index}> {/* Each row has a unique key */}
                                        <td>{user.Name}</td> {/* Display user Name */}
                                        <td>{user.dob}</td> {/* Display user Date Of Birth */}
                                        <td>{user.parentrelationship}</td> {/* Display user Parent relationship */}
                                        <td>{user.childagegroup}</td> {/* Display user Child age group */}
                                    </tr>
                                )) : <tr><td colSpan="4">Loading...</td></tr> // Display loading message while data is being fetched
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer /> {/* Render the Footer component */}
        </>
    )
}

// Export the Managecubscouts component as the default export
export default Managecubscouts;
