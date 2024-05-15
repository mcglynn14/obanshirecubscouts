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
        childChecked: false,
        parentChecked: false,
        cubChecked: false,
        scoutChecked: false
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8888/register', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/login'); 
            } else {
                alert("Error");
            }
        })
        .catch(err => console.error(err));
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
                            <input type="checkbox" name="childChecked" id="childCheckbox" className="child-checkbox" onChange={handleInputChange} />
                        </div>
                        <div className="parent-check">
                            <label htmlFor="parentCheckbox" className="parent-text">Parent</label>
                            <input type="checkbox" name="parentChecked" id="parentCheckbox" className="parent-checkbox" onChange={handleInputChange} />
                        </div>
                    </div>
                    <label htmlFor="nameInput" className="name-text">Name</label>
                    <input type="text" className="name-input" name="name" id="nameInput" onChange={handleInputChange} />
                    <label htmlFor="dateOfBirthInput" className="dateofbirth-text">Date of birth</label>
                    <input type="date" id="dateOfBirthInput" className="dateofbirth-input" name="dateOfBirth" onChange={handleInputChange} />
                    <label htmlFor="groupCubCheckbox" className="group-text">Group</label>
                    <div className="group-check">
                        <div className="group-cub">
                            <label htmlFor="groupCubCheckbox" className="group-cubtext">Cub</label>
                            <input type="checkbox" name="cubChecked" id="groupCubCheckbox" className="group-cubcheckbox" onChange={handleInputChange} />
                        </div>
                        <div className="group-scout">
                            <label htmlFor="groupScoutCheckbox" className="group-scoutText">Scout</label>
                            <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" onChange={handleInputChange} />
                        </div>
                    </div>
                    <label htmlFor="usernameInput" className="username-text">Username</label>
                    <input type="text" className="username-input" name="username" id="usernameInput" onChange={handleInputChange} />
                    <label htmlFor="passwordInput" className="password-text">Password</label>
                    <input type="password" className="password-input" name="password" id="passwordInput" onChange={handleInputChange} />
                    <button type="submit" className="btn btn-register">Register</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Register;
