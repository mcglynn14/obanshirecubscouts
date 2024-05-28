import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/events/manage');
        const data = response.data;
        setEvents(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/events/${id}`);
      setEvents(events.filter(event => event._id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleToggleHide = async (id) => {
    try {
      await axios.patch(`http://localhost:5001/api/events/${id}/toggle-hide`);
      setEvents(events.map(event => event._id === id ? { ...event, hidden: !event.hidden } : event));
    } catch (error) {
      console.error('Error toggling event visibility:', error);
    }
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Manage events" heromanageeventsoverlay='hero-manageeventsoverlay' />
        <div className="events-cards">
          {events.map((event, index) => (
            <div className={`event-card event-card-${index % 5 === 0 ? '1' : index % 5 === 1 ? '2' : index % 5 === 2 ? '3' : index % 5 === 3 ? '4' : '5' }`} key={event._id}>
              <img src={event.image || 'assets/img/obanshirecubscouts-events.webp'} alt="" className="event-card-img" />
              <h2 className={`event-card-title event-card-title-${index % 4 === 0 ? '1' : index % 4 === 1 ? '2' : index % 4 === 1 ? '3' : '4'}`}>{event.title}</h2>
              <button className="btn btn-event-delete" onClick={() => handleDelete(event._id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
              <button className="btn btn-event-hide" onClick={() => handleToggleHide(event._id)}>
                <FontAwesomeIcon icon={event.hidden ? faEye : faEyeSlash} /> {event.hidden ? 'Show' : 'Hide'}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ManageEvents;
