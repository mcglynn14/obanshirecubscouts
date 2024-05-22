import React, { useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Registerhelper = () => {
  const [values, setValues] = useState({
    childChecked: false,
    parentChecked: false,
    // other state values
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

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
            <Hero title="Register to be helper" heroregisterhelperoverlay='hero-registerhelperoverlay' />
            <form className="register">
                <label htmlFor="nameInput" className="name-text">Name</label>
                <input type="text" className="name-input" name="name" id="nameInput" onChange={handleInputChange} value={values.name} />
                <label htmlFor="dateOfBirthInput" className="dateofbirth-text">Date of birth</label>
                <input type="date" id="dateOfBirthInput" className="dateofbirth-input" name="dateOfBirth" onChange={handleInputChange} value={values.dateOfBirth} />  
                <label htmlFor="usernameInput" className="username-text">Username</label>
                <input type="text" className="username-input" name="username" id="usernameInput" onChange={handleInputChange} value={values.username} />  
                <label htmlFor="emailInput" className="email-text">Email</label>
                <input type="email" className="email-input" name="email" id="emailInput" onChange={handleInputChange} value={values.email} />
                <label htmlFor="phoneNumberInput" className="phone-number-text">Phone Number</label>
                <input type="text" className="phone-number-input" name="phoneNumber" id="phoneNumberInput" onChange={handleInputChange} value={values.phoneNumber} />
                <label htmlFor="groupCubCheckbox" className="group-text">Availability</label>
                <div className="availbility-check">
                    <div className="availbility-checkboxes">
                        <label htmlFor="groupCubCheckbox" className="group-cubtext">Weekdays</label>
                        <input type="checkbox" name="cubChecked" id="groupCubCheckbox" className="group-cubcheckbox" onChange={handleInputChange} checked={values.cubChecked} />
                        <label htmlFor="groupScoutCheckbox" className="group-scoutText">Evenings</label>
                        <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" onChange={handleInputChange} checked={values.scoutChecked} />
                        <label htmlFor="groupScoutCheckbox" className="group-scoutText">Weekends</label>
                        <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" onChange={handleInputChange} checked={values.scoutChecked} />
                    </div>
                </div>
                <label htmlFor="groupCubCheckbox" className="group-text">Experience</label>
                <div className="experience-check">
                    <div className="experience-checkboxes">
                        <label htmlFor="groupCubCheckbox" className="group-cubtext">Yes</label>
                        <input type="checkbox" name="cubChecked" id="groupCubCheckbox" className="group-cubcheckbox" onChange={handleInputChange} checked={values.cubChecked} />
                        <label htmlFor="groupScoutCheckbox" className="group-scoutText">No</label>
                        <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" onChange={handleInputChange} checked={values.scoutChecked} />
                    </div>
                </div>
                <button type="submit" className="btn btn-register">Register</button>
            </form>
        </main>
        <Footer />
    </>
  )
}

export default Registerhelper;
