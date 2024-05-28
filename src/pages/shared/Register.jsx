import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import axios from 'axios';

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        username: '',
        phoneNumber: '', // Added phone number field
        childChecked: false,
        cubChecked: false,
        scoutChecked: false,
        helperChecked: false // Added helper checkbox field
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:5001/api/register', {
                ...values,
                userType: [
                    values.childChecked ? 'child' : '',
                    values.helperChecked ? 'helper' : '',
                ].filter(Boolean), // Filter out empty strings
            });
            if (res.status === 201) {
                navigate('/login'); 
            } else {
                alert("Error: " + res.data.error);
            }
        } catch (err) {
            console.error(err);
            alert("Error: " + err.response?.data?.error || "Internal Server Error");
        }
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setValues({
            ...values,
            [name]: value
        });
    };

    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Hero title={"Register"} heroregisteroverlay='hero-registeroverlay' />
                <form onSubmit={handleSubmit} className="register">
                    <div className="child-parentcheck">
                        <div className="child-check">
                            <label htmlFor="childCheckbox" className="child-text">Child</label>
                            <input type="checkbox" name="childChecked" id="childCheckbox" className="child-checkbox" onChange={handleInputChange} checked={values.childChecked} />
                        </div>
                        <div className="helper-check"> {/* Added helper checkbox */}
                            <label htmlFor="helperCheckbox" className="helper-text">Helper</label>
                            <input type="checkbox" name="helperChecked" id="helperCheckbox" className="helper-checkbox" onChange={handleInputChange} checked={values.helperChecked} />
                        </div>
                    </div>
                    <label htmlFor="nameInput" className="name-text">Name</label>
                    <input type="text" className="name-input" name="name" id="nameInput" onChange={handleInputChange} value={values.name} />
                    <label htmlFor="dateOfBirthInput" className="dateofbirth-text">Date of birth</label>
                    <input type="date" id="dateOfBirthInput" className="dateofbirth-input" name="dateOfBirth" onChange={handleInputChange} value={values.dateOfBirth} />
                    
                    {!values.helperChecked && (
                        <>
                            <label htmlFor="groupCubCheckbox" className="group-text">Group</label>
                            <div className="group-check">
                                <div className="group-cub">
                                    <label htmlFor="groupCubCheckbox" className="group-cubtext">Cub</label>
                                    <input type="checkbox" name="cubChecked" id="groupCubCheckbox" className="group-cubcheckbox" onChange={handleInputChange} checked={values.cubChecked} />
                                </div>
                                <div className="group-scout">
                                    <label htmlFor="groupScoutCheckbox" className="group-scoutText">Scout</label>
                                    <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" onChange={handleInputChange} checked={values.scoutChecked} />
                                </div>
                            </div>
                        </>
                    )}
                    
                    {values.helperChecked && (
                        <>
                            <label htmlFor="emailInput" className="email-text">Email</label>
                            <input type="email" className="email-input" name="email" id="emailInput" onChange={handleInputChange} value={values.email} />
                            <label htmlFor="phoneNumberInput" className="phone-number-text">Phone Number</label>
                            <input type="text" className="phone-number-input" name="phoneNumber" id="phoneNumberInput" onChange={handleInputChange} value={values.phoneNumber} />
                        </>
                    )}
                    
                    <label htmlFor="usernameInput" className="username-text">Username</label>
                    <input type="text" className="username-input" name="username" id="usernameInput" onChange={handleInputChange} value={values.username} />
                    <label htmlFor="passwordInput" className="password-text">Password</label>
                    <input type="password" className="password-input" name="password" id="passwordInput" onChange={handleInputChange} value={values.password} />
                    <button type="submit" className="btn btn-register">Register</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Register;
