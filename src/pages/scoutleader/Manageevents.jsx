import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState hooks
import Nav from '../../components/Nav'; // Importing the Nav component
import Hero from '../../components/Hero'; // Importing the Hero component
import Footer from '../../components/Footer'; // Importing the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon for icons
import { faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing specific icons from FontAwesome
import axios from 'axios'; // Importing axios for making HTTP requests

const ManageEvents = () => {
  const [events, setEvents] = useState([]); // State to hold the list of events

  // useEffect hook to fetch events when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/events/manage'); // Fetch events from API
        const data = response.data; // Get data from response
        setEvents(Array.isArray(data) ? data : []); // Set the events state if data is an array
      } catch (error) {
        console.error('Error fetching events:', error); // Log error if fetch fails
      }
    };

    fetchEvents(); // Call fetchEvents function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to handle deleting an event
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/events/${id}`); // Send delete request to API
      setEvents(events.filter(event => event._id !== id)); // Remove the deleted event from state
    } catch (error) {
      console.error('Error deleting event:', error); // Log error if delete fails
    }
  };

  // Function to handle toggling the visibility of an event
  const handleToggleHide = async (id) => {
    try {
      await axios.patch(`http://localhost:5001/api/events/${id}/toggle-hide`); // Send patch request to toggle visibility
      setEvents(events.map(event => event._id === id ? { ...event, hidden: !event.hidden } : event)); // Update event visibility in state
    } catch (error) {
      console.error('Error toggling event visibility:', error); // Log error if toggle fails
    }
  };

  return (
    <>
      <header>
        <Nav /> {/* Render Nav component */}
      </header>
      <main>
        <Hero title="Manage events" heromanageeventsoverlay='hero-manageeventsoverlay' /> {/* Render Hero component with props */}
        <div className="events-cards">
          {events.map((event, index) => ( // Iterate over events and render event cards
            <div 
              className={`event-card event-card-${index % 5 === 0 ? '1' : index % 5 === 1 ? '2' : index % 5 === 2 ? '3' : index % 5 === 3 ? '4' : '5' }`} 
              key={event._id}
            >
              <img src={event.image || 'assets/img/obanshirecubscouts-events.webp'} alt="" className="event-card-img" /> {/* Render event image */}
              <h2 className={`event-card-title event-card-title-${index % 4 === 0 ? '1' : index % 4 === 1 ? '2' : index % 4 === 1 ? '3' : '4'}`}>{event.title}</h2> {/* Render event title */}
              <button className="btn btn-event-delete" onClick={() => handleDelete(event._id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete {/* Render delete button with icon */}
              </button>
              <button className="btn btn-event-hide" onClick={() => handleToggleHide(event._id)}>
                <FontAwesomeIcon icon={event.hidden ? faEye : faEyeSlash} /> {event.hidden ? 'Show' : 'Hide'} {/* Render hide/show button with icon */}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Render Footer component */}
    </>
  );
};

export default ManageEvents; // Export ManageEvents component as default
