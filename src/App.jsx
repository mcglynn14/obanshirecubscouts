import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/shared/Home';
import Gallery from './pages/shared/Gallery';
import Badges from './pages/shared/Badges';
import Contact from './pages/shared/Contact';
import Localinformation from './pages/shared/Localinformation';
import Generalinfo from './pages/shared/Generalinfo';
import './scss/style.scss';
import Login from './pages/shared/Login';
import Register from './pages/shared/Register';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/localinfo" element={<Localinformation />} />
          <Route path="/generalinfo" element={<Generalinfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
