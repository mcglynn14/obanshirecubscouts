import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log('Username:', username);
        console.log('Password:', password);
      
        try {
          const response = await axios.post('http://localhost:5001/api/login', {
            username,
            password,
          });
          const { token, usertype } = response.data;
          console.log('Login response:', response.data); // Debugging log
      
          localStorage.setItem('token', token);
      
          if (usertype) {
            // Convert the usertype to lowercase to ensure case-insensitive comparison
            const userTypeLowercase = usertype.toLowerCase();
      
            if (!['parent', 'helper', 'scoutleader', 'child'].includes(userTypeLowercase)) {
              throw new Error(`Unknown usertype: ${usertype}`);
            }
      
            localStorage.setItem('userRole', userTypeLowercase);
      
            // Navigate based on the usertype
            switch (userTypeLowercase) {
              case 'parent':
                navigate('/parentdashboard');
                break;
              case 'helper':
                navigate('/helperdashboard');
                break;
              case 'scoutleader': // Combined 'scout-leader' and 'scoutleader' into one
                navigate('/scoutleaderdashboard');
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

export default Login;
