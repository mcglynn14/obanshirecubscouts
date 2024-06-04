// import React and useState from 'react' library
import React, { useState } from 'react';

// import useNavigate from 'react-router-dom' library
import { useNavigate } from 'react-router-dom';

// import components
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

// import axios library for making HTTP requests
import axios from 'axios';

// Define the Register component
const Register = () => {
    // Define state variables using useState hook
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

    // Get the navigate function from useNavigate hook
    const navigate = useNavigate();

    // Define the handleSubmit function
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to the server
            const res = await axios.post('http://localhost:5001/api/register', {
                ...values,
                userType: [
                    values.childChecked ? 'child' : '',
                    values.helperChecked ? 'helper' : '',
                ].filter(Boolean), // Filter out empty strings
            });
            if (res.status === 201) {
                // If the request is successful, navigate to the login page
                navigate('/login'); 
            } else {
                // If there is an error, display the error message
                alert("Error: " + res.data.error);
            }
        } catch (err) {
            // If there is an error, log the error and display a generic error message
            console.error(err);
            alert("Error: " + err.response?.data?.error || "Internal Server Error");
        }
    };

    // Define the handleInputChange function
    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        // Update the state with the new input value
        setValues({
            ...values,
            [name]: value
        });
    };

    // Render the Register component
    return (
        <>
            {/* Render the Nav component */}
            <header>
                <Nav />
            </header>
            <main>
                {/* Render the Hero component */}
                <Hero title={"Register"} heroregisteroverlay='hero-registeroverlay' />
                {/* Render the registration form */}
                <form onSubmit={handleSubmit} className="register">
                    <div className="child-parentcheck">
                        <div className="child-check">
                            {/* Render the child checkbox */}
                            <label htmlFor="childCheckbox" className="child-text">Child</label>
                            <input type="checkbox" name="childChecked" id="childCheckbox" className="child-checkbox" onChange={handleInputChange} checked={values.childChecked} />
                        </div>
                        <div className="helper-check"> {/* Added helper checkbox */}
                            {/* Render the helper checkbox */}
                            <label htmlFor="helperCheckbox" className="helper-text">Helper</label>
                            <input type="checkbox" name="helperChecked" id="helperCheckbox" className="helper-checkbox" onChange={handleInputChange} checked={values.helperChecked} />
                        </div>
                    </div>
                    {/* Render the name input field */}
                    <label htmlFor="nameInput" className="name-text">Name</label>
                    <input type="text" className="name-input" name="name" id="nameInput" onChange={handleInputChange} value={values.name} />
                    {/* Render the date of birth input field */}
                    <label htmlFor="dateOfBirthInput" className="dateofbirth-text">Date of birth</label>
                    <input type="date" id="dateOfBirthInput" className="dateofbirth-input" name="dateOfBirth" onChange={handleInputChange} value={values.dateOfBirth} />
                    
                    {!values.helperChecked && (
                        <>
                            {/* Render the group checkboxes */}
                            <label htmlFor="groupCubCheckbox" className="group-text">Group</label>
                            <div className="group-check">
                                <div className="group-cub">
                                    {/* Render the cub checkbox */}
                                    <label htmlFor="groupCubCheckbox" className="group-cubtext">Cub</label>
                                    <input type="checkbox" name="cubChecked" id="groupCubCheckbox" className="group-cubcheckbox" onChange={handleInputChange} checked={values.cubChecked} />
                                </div>
                                <div className="group-scout">
                                    {/* Render the scout checkbox */}
                                    <label htmlFor="groupScoutCheckbox" className="group-scoutText">Scout</label>
                                    <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" onChange={handleInputChange} checked={values.scoutChecked} />
                                </div>
                            </div>
                        </>
                    )}
                    
                    {values.helperChecked && (
                        <>
                            {/* Render the email input field */}
                            <label htmlFor="emailInput" className="email-text">Email</label>
                            <input type="email" className="email-input" name="email" id="emailInput" onChange={handleInputChange} value={values.email} />
                            {/* Render the phone number input field */}
                            <label htmlFor="phoneNumberInput" className="phone-number-text">Phone Number</label>
                            <input type="text" className="phone-number-input" name="phoneNumber" id="phoneNumberInput" onChange={handleInputChange} value={values.phoneNumber} />
                            {/* Render the availability checkboxes */}
                            <label htmlFor="groupCubCheckbox" className="group-text">Availibility</label>
                            <div className="group-check">
                                <div className="group-cub">
                                    {/* Render the weekdays checkbox */}
                                    <label htmlFor="groupCubCheckbox" className="group-cubtext">Weekdays</label>
                                    <input type="checkbox" name="cubChecked" id="groupCubCheckbox" className="group-cubcheckbox"  />
                                </div>
                                <div className="group-scout">
                                    {/* Render the weekdays checkbox */}
                                    <label htmlFor="groupScoutCheckbox" className="group-scoutText">Weekdays</label>
                                    <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" />
                                </div>
                            </div>
                        </>
                    )}
                    
                    {/* Render the username input field */}
                    <label htmlFor="usernameInput" className="username-text">Username</label>
                    <input type="text" className="username-input" name="username" id="usernameInput" onChange={handleInputChange} value={values.username} />
                    {/* Render the password input field */}
                    <label htmlFor="passwordInput" className="password-text">Password</label>
                    <input type="password" className="password-input" name="password" id="passwordInput" onChange={handleInputChange} value={values.password} />
                    {/* Render the submit button */}
                    <button type="submit" className="btn btn-register">Register</button>
                </form>
            </main>
            {/* Render the Footer component */}
            <Footer />
        </>
    )
}

// Export the Register component as the default export
export default Register;