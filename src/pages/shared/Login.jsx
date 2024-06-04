// Importing necessary dependencies and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

// Defining the Login component
const Login = () => {
  // Setting up state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle the login process
  const handleLogin = async () => {
    // Logging the username and password
    console.log('Username:', username);
    console.log('Password:', password);
    
    try {
      // Sending a POST request to the login API
      const response = await axios.post('http://localhost:5001/api/login', {
      username,
      password,
      });
      // Extracting the token and usertype from the response
      const { token, usertype } = response.data;
      // Logging the login response for debugging
      console.log('Login response:', response.data);
    
      // Storing the token in local storage
      localStorage.setItem('token', token);
    
      if (usertype) {
      // Converting the usertype to lowercase for case-insensitive comparison
      const userTypeLowercase = usertype.toLowerCase();
    
      // Checking if the usertype is one of the allowed values
      if (!['parent', 'helper', 'scoutleader', 'child'].includes(userTypeLowercase)) {
        throw new Error(`Unknown usertype: ${usertype}`);
      }
    
      // Storing the user role in local storage
      localStorage.setItem('userRole', userTypeLowercase);
    
      // Navigating to the appropriate dashboard based on the usertype
      switch (userTypeLowercase) {
        case 'parent':
        navigate('/parentdashboard');
        break;
        case 'helper':
        navigate('/helperdashboard');
        break;
        case 'scoutleader': // Combined 'scout-leader' and 'scoutleader' into one
        navigate('/leaderdashboard');
        break;
        case 'child':
        navigate('/dashboard');
        break;
        default:
        console.error('Unknown usertype:', usertype);
        navigate('/login'); // Optionally navigate to a default dashboard
      }
      } else {
      console.error('Usertype is undefined or null');
      navigate('/login'); // Navigate to login if usertype is not defined
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data?.error || error.message);
    }
    };
    

  // Rendering the Login component
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title={"Login"} herologinoverlay='hero-loginoverlay' />
        <section className="login">
          <h2 className="login-title">Login</h2>
          <div className="loginform">
            <label className="login-text">Username</label>
            <input 
              type="text" 
              className="login-username" 
              name='username' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <label className="login-text">Password</label>
            <input 
              type="password" 
              className="login-password" 
              name='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
              type="button" // Change type to button
              className="btn login-btn" 
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Exporting the Login component
export default Login;