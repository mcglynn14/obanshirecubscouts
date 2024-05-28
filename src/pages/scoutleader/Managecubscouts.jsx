import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import axios from 'axios';

const Managecubscouts = () => {
    const [users, setUsers] = useState(null); // Change 'user' to 'users'

    useEffect(() => {
        // Fetch all cub scouts from the backend using axios
        axios.get('http://localhost:5001/api/getcubscouts')
            .then((response) => {
                console.log('Received cub scouts:', response.data);
                setUsers(response.data); // Change 'user' to 'users'
            })
            .catch((error) => {
                console.error('Error fetching cub scouts:', error);
            });
    }, []);

    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Hero title="Manage cub scouts" heromanagecubscoutsoverlay='hero-managecubscoutsoverlay' />
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Parent</th>
                                <th>Child age group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users ? users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td> {/* Change 'Name' to 'name' */}
                                        <td>{user.dob}</td>
                                        <td>{user.parentrelationship}</td>
                                        <td>{user.childagegroup}</td>
                                    </tr>
                                )) : <tr><td colSpan="4">Loading...</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Managecubscouts;
