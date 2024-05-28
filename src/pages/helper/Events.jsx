import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons';
import { format, parseISO } from 'date-fns';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log('Fetching events...');
        const response = await axios.get('http://localhost:5001/api/events');
        console.log('Response:', response);
        const data = response.data;
        console.log('Fetched events data:', data);
        setEvents(data); // Assuming the response data is an array of events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Events" heroeventsoverlay="hero-eventsoverlay" />
        <div className="events-cards">
          {events.map((event, index) => (
            <div className="event" key={event._id}>
              <div className={`event-card event-card-${index % 5 === 0 ? '1' : index % 5 === 1 ? '2' : index % 5 === 2 ? '3' : index % 5 === 3 ? '4' : '5' }`}>
                <img src={event.image || 'assets/img/obanshirecubscouts-events.webp'} alt="" className="event1-cardimg" />
                <h2 className="event-cardtitle">{event.title}</h2>
                <div className="event1-date">
                  <FontAwesomeIcon icon={faCalendarDays} /> <p className="event-date">{format(parseISO(event.datetime), 'yyyy-MM-dd')}</p>
                </div>
                <div className="event1-time">
                  <FontAwesomeIcon icon={faClock} /> <p className="event-time">{format(parseISO(event.datetime), 'HH:mm')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Events;
