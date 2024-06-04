import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Applyfortraining = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Nav />
      </header>
      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero title="Apply for training" heroapplytrainingoverlay='hero-applytrainingoverlay' />
        {/* Registration form */}
        <form className="register">
          {/* Name input */}
          <label htmlFor="nameInput" className="name-text">Name</label>
          <input type="text" className="name-input" name="name" id="nameInput"  />
          {/* Date of birth input */}
          <label htmlFor="dateOfBirthInput" className="dateofbirth-text">Date of birth</label>
          <input type="date" id="dateOfBirthInput" className="dateofbirth-input" name="dateOfBirth"  />
          {/* Username input */}
          <label htmlFor="usernameInput" className="username-text">Username</label>
          <input type="text" className="username-input" name="username" id="usernameInput"  />
          {/* Email input */}
          <label htmlFor="emailInput" className="email-text">Email</label>
          <input type="email" className="email-input" name="email" id="emailInput"  />
          {/* Phone number input */}
          <label htmlFor="phoneNumberInput" className="phone-number-text">Phone Number</label>
          <input type="text" className="phone-number-input" name="phoneNumber" id="phoneNumberInput"  />
          {/* Training options */}
          <label htmlFor="groupCubCheckbox" className="group-text">Training</label>
          <div className="group-check">
            {/* First aid checkbox */}
            <div className="group-cub">
              <label htmlFor="groupCubCheckbox" className="group-cubtext">First aid</label>
              <input type="checkbox" name="cubChecked" id="groupCubCheckbox" className="group-cubcheckbox"  />
            </div>
            {/* Knot-Tying checkbox */}
            <div className="group-cub">
              <label htmlFor="groupScoutCheckbox" className="group-scoutText">Knot-Tying</label>
              <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" />
            </div>
            {/* Outdoor Skills checkbox */}
            <div className="group-cub">
              <label htmlFor="groupScoutCheckbox" className="group-scoutText">Outdoor Skills</label>
              <input type="checkbox" name="scoutChecked" id="groupScoutCheckbox" className="group-scoutcheckbox" />
            </div>
          </div>
          {/* Register button */}
          <button type="submit" className="btn btn-register">Register</button>
        </form>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Applyfortraining;
