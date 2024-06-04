import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing page components
import Home from './pages/shared/Home';
import Gallery from './pages/shared/Gallery';
import Badges from './pages/badges/Badges';
import Contact from './pages/shared/Contact';
import Localinformation from './pages/shared/Localinformation';
import Generalinfo from './pages/shared/Generalinfo';
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
import Managegallery from './pages/scoutleader/Managegallery';
import Manageevents from './pages/scoutleader/Manageevents';
import Helpers from './pages/scoutleader/Helpers';
import Matchinggame from './pages/cubscouts/Matchinggame';
import Cubscoutquiz from './pages/cubscouts/Cubscoutquiz';
import Communicatorcubbadge from './pages/badges//cubbadges/Communicatorcubbadge';
import Equestiancubbadge from './pages/badges/cubbadges/Equestiancubbadge';
import Firesafetycubbadge from './pages/badges/cubbadges/Firesafetycubbadge';
import Localknowlegecubbadge from './pages/badges/cubbadges/Localknowlegecubbadge';
import Naturalistcubbadge from './pages/badges/cubbadges/Naturalistcubbadge';
import Roadsafetycubbadge from './pages/badges/cubbadges/Roadsafetycubbadge';
import Wateractivitiescubbadge from './pages/badges/cubbadges/Wateractivitiescubbadge';
import Camperscoutbadge from './pages/badges/scoutbadges/Camperscoutbadge';
import Communicatorscoutbadge from './pages/badges/scoutbadges/Communicatorscoutbadge';
import Emergencyaidbadge from './pages/badges/Emergencyaidbadge';
import Equestrianscoutbadge from './pages/badges/scoutbadges/Equestrianscoutbadge';
import Firesafetyscoutbadge from './pages/badges/scoutbadges/Firesafetyscoutbadge';
import Localknowledgescoutbadge from './pages/badges/scoutbadges/Localknowledgescoutbadge';
import Naturalistscoutbadge from './pages/badges/scoutbadges/Naturalistscoutbadge';
import Nauticalskillsbadge from './pages/badges/Nauticalskillsbadge';
import Navigatorbadge from './pages/badges/Navigatorbadge';
import Wateractivitiesscoutbadge from './pages/badges/scoutbadges/Wateractivitiesscoutbadge';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Define routes for different pages */}
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
          <Route path='/matchinggame' element={<Matchinggame />} />
          <Route path='/cubscoutquiz' element={<Cubscoutquiz />} />
          <Route path='/communicatorcub' element={<Communicatorcubbadge />} />
          <Route path='/equestiancub' element={<Equestiancubbadge />} />     
          <Route path='/firesafetycub' element={<Firesafetycubbadge />} />
          <Route path='/localknowlegecub' element={<Localknowlegecubbadge />} />
          <Route path='/naturalistcub' element={<Naturalistcubbadge />} />
          <Route path='/roadsafetycub' element={<Roadsafetycubbadge />} />
          <Route path='/wateractivitiescub' element={<Wateractivitiescubbadge />} />
          <Route path='/camperscout' element={<Camperscoutbadge />} />
          <Route path='/communicatorscout' element={<Communicatorscoutbadge />} />
          <Route path='/emergencyaid' element={<Emergencyaidbadge />} />
          <Route path='/equestrianscout' element={<Equestrianscoutbadge />} />
          <Route path='/firesafetyscout' element={<Firesafetyscoutbadge />} />
          <Route path='/localknowledgescout' element={<Localknowledgescoutbadge />} />
          <Route path='/naturalistscout' element={<Naturalistscoutbadge />} />
          <Route path='/nauticalskills' element={<Nauticalskillsbadge />}  />
          <Route path='/navigator' element={<Navigatorbadge />} /> 
          <Route path='/wateractivities-scout' element={<Wateractivitiesscoutbadge />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
