import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import axios from 'axios'; // Import axios
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Viewhelpers = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch all helpers from the backend using axios
        axios.get('http://localhost:5001/api/gethelpers')
            .then((response) => {
                console.log('Received helpers:', response.data);
                setUser(response.data);
            })
            .catch((error) => {
                console.error('Error fetching helpers:', error);
            });
    }, []);

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
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Phone Number</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user ? user.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.Name}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.phonenumber}</td>
                                        <td>{user.availability}</td>
                                    </tr>
                                )) : <tr><td colSpan="4">Loading...</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Viewhelpers;
