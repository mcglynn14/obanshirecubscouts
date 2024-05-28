import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Applyfortraining = () => {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Apply for training" heroapplytrainingoverlay='hero-applytrainingoverlay' />
        <form className="register">
          <label htmlFor="nameInput" className="name-text">Name</label>
          <input type="text" className="name-input" name="name" id="nameInput"  />
          <label htmlFor="dateOfBirthInput" className="dateofbirth-text">Date of birth</label>
          <input type="date" id="dateOfBirthInput" className="dateofbirth-input" name="dateOfBirth"  />
          <label htmlFor="usernameInput" className="username-text">Username</label>
          <input type="text" className="username-input" name="username" id="usernameInput"  />
          <label htmlFor="emailInput" className="email-text">Email</label>
          <input type="email" className="email-input" name="email" id="emailInput"  />
          <label htmlFor="phoneNumberInput" className="phone-number-text">Phone Number</label>
          <input type="text" className="phone-number-input" name="phoneNumber" id="phoneNumberInput"  />

          <label htmlFor="groupCubCheckbox" className="group-text">Availability</label>
          <div className="availbility-check">
            <div className="availbility-checkboxes">
                input
              <label htmlFor="groupCubCheckbox" className="group-cubtext">Weekdays</label>
              <label htmlFor="groupScoutCheckbox" className="group-scoutText">Evenings</label>
              <label htmlFor="groupScoutCheckbox" className="group-scoutText">Weekends</label>
            </div>
          </div>
          <button type="submit" className="btn btn-register">Register</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Applyfortraining;
