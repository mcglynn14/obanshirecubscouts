// Import necessary modules and components from React, axios, and other libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons';
import { format, parseISO } from 'date-fns';

const Events = () => {
  // Declare a state variable 'events' to hold the fetched events data
  const [events, setEvents] = useState([]);

  // useEffect hook to perform side effects, in this case, fetching events data
  useEffect(() => {
    // Function to fetch events from the API
    const fetchEvents = async () => {
      try {
        console.log('Fetching events...');
        const response = await axios.get('http://localhost:5001/api/events');
        console.log('Response:', response);
        const data = response.data;
        console.log('Fetched events data:', data);
        // Update the state with the fetched events data
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    // Call the fetchEvents function
    fetchEvents();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <>
      {/* Render the Nav component in the header */}
      <header>
        <Nav />
      </header>
      <main>
        {/* Render the Hero component with title and overlay class */}
        <Hero title="Events" heroeventsoverlay="hero-eventsoverlay" />
        <div className="events-cards">
          {/* Map through the events array and render each event */}
          {events.map((event, index) => (
            <div className="event" key={event._id}>
              {/* Dynamic class name for event cards based on index */}
              <div className={`event-card event-card-${index % 5 === 0 ? '1' : index % 5 === 1 ? '2' : index % 5 === 2 ? '3' : index % 5 === 3 ? '4' : '5' }`}>
                {/* Display event image or a default image */}
                <img src={event.image || 'assets/img/obanshirecubscouts-events.webp'} alt="" className="event1-cardimg" />
                {/* Display event title */}
                <h2 className="event-cardtitle">{event.title}</h2>
                <div className="event1-date">
                  {/* Display event date with a calendar icon */}
                  <FontAwesomeIcon icon={faCalendarDays} /> <p className="event-date">{format(parseISO(event.datetime), 'yyyy-MM-dd')}</p>
                </div>
                <div className="event1-time">
                  {/* Display event time with a clock icon */}
                  <FontAwesomeIcon icon={faClock} /> <p className="event-time">{format(parseISO(event.datetime), 'HH:mm')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Render the Footer component */}
      <Footer />
    </>
  );
};

// Export the Events component as the default export
export default Events;
