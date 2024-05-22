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
import Dashboard from './pages/cubscouts/Dashboard';
import Parentdashboard from './pages/parent/Parentdashboard';
import Helperdashboard from './pages/helper/Helperdashboard';
import Scoutleaderdashboard from './pages/scoutleader/Scoutleaderdashboard';
import Games from './pages/cubscouts/Games';
import Uploadimage from './pages/cubscouts/Uploadimage';
import Yourbadges from './pages/cubscouts/Yourbadges';
import Registerhelper from './pages/parent/Registerhelper';
import Viewhelpers from './pages/helper/Viewhelpers';




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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parentdashboard" element={<Parentdashboard />} />
          <Route path="/helperdashboard" element={<Helperdashboard />} />
          <Route path="/scoutleaderdashboard" element={<Scoutleaderdashboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/uploadimage" element={<Uploadimage />} />
          <Route path="/yourbadges" element={<Yourbadges />} />
          <Route path="/registerhelper" element={<Registerhelper />} />
          <Route path="/viewhelpers" element={<Viewhelpers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
