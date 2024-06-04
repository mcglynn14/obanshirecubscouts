import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React
import axios from 'axios'; // Importing axios for making HTTP requests

// Userinformation component
const Userinformation = () => {
  const [user, setUser] = useState(null); // Initializing state for user data

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieving token from local storage
        if (!token) {
          console.error('No token found'); // Logging error if token is not found
          return;
        }
        // Sending a GET request to '/api/users' with authorization header
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: `Bearer ${token}`, // Attaching token to the authorization header
          },
        });
        if (response && response.data) {
          // Setting the user data in the state if response is valid
          setUser(response.data);
        } else {
          console.error('Invalid response from the server:', response); // Logging error for invalid response
        }
      } catch (error) {
        console.error('Error fetching user data:', error); // Logging error for fetch failure
        if (error.response) {
          console.error('Server responded with:', error.response.data); // Logging server response error
        }
      }
    };

    // Calling the fetchUserData function when the component mounts
    fetchUserData();
  }, []); // Dependency array to ensure the effect runs only once on mount

  // Returning the user data
  return user;
};

export default Userinformation; // Exporting the Userinformation component
