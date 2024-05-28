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
import Helperdashboard from './pages/helper/Helperdashboard';
import Scoutleaderdashboard from './pages/scoutleader/Scoutleaderdashboard';
import Games from './pages/cubscouts/Games';
import Uploadimage from './pages/cubscouts/Uploadimage';
import Yourbadges from './pages/cubscouts/Yourbadges';
import Viewhelpers from './pages/helper/Viewhelpers';
import Applyfortraining from './pages/helper/Applyfortraining';
import Events from './pages/helper/Events';
import Managecubscouts from './pages/scoutleader/Managecubscouts';
import Managegallery from './pages/scoutleader/managegallery';
import Manageevents from './pages/scoutleader/Manageevents';
import Helpers from './pages/scoutleader/Helpers';




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/badges' element={<Badges />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/localinfo' element={<Localinformation />} />
          <Route path='/generalinfo' element={<Generalinfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/helperdashboard' element={<Helperdashboard />} />
          <Route path='/leaderdashboard' element={<Scoutleaderdashboard />} />
          <Route path='/games' element={<Games />} />
          <Route path='/uploadimage' element={<Uploadimage />} />
          <Route path='/yourbadges' element={<Yourbadges />} />
          <Route path='/viewhelpers' element={<Viewhelpers />} />
          <Route path='/applytraining' element={<Applyfortraining />} />
          <Route path='/events' element={<Events />} />
          <Route path='/managecubscouts' element={<Managecubscouts />} />
          <Route path='/managegallery' element={<Managegallery />} />
          <Route path='/manageevents' element={<Manageevents />} />
          <Route path='/helpers' element={<Helpers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
