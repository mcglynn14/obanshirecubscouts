import React, { useState } from 'react';
import Nav from '../../components/Nav';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http//localhost:3001/login', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/dashboard');
            }
            else{
                alert("Error");
            }
        })
        .then(err => console.log(err));
    }
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Hero title={"Login"} herologinoverlay='hero-loginoverlay' />
            <section className="login">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit} className="loginform">
                    <label className="login-text">Username</label>
                    <input type="text" className="login-username" name='username' onChange={e => setValues({...values, username: e.target.value})} />
                    <label className="login-text">Password</label>
                    <input type="text" className="login-password" name='password' onChange={e => setValues({...values, password: e.target.value})} />
                    <a href="" type="submit" className="btn login-btn">Login</a>
                </form>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Login