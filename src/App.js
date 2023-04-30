import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Rewards from './components/Rewards';
import Collection from './components/Collection';
import { useState } from 'react';
import { GoEarth } from './utilis';
import Contactus from './components/Contactus';
import AboutUs from './info/AboutUs';
import CareForPlanet from './info/CareForPlanet';
import Planttrees from './info/Planttrees';
import Savesoil from './info/Savesoil';
import Endpollution from './info/Endpollution';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showErrorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false) 
  return (
    <div className="App">
      <GoEarth.Provider value={{ isLoading, setIsLoading, isLoggedIn, setIsLoggedIn, setErrorMessage, setShowSuccessMessage }}>
        {showErrorMessage.length > 0 ? (
          <div class="alert custom-alert alert-danger" role="alert">
            {showErrorMessage}
          </div>
        ) : <></>}
        {showSuccessMessage.length > 0 ? (
          <div class="alert custom-alert alert-success" role="alert">
            {showSuccessMessage}
          </div>
        ) : <></>}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/add-waste" element={<Collection />} />

            <Route path="/rewards" element={<Rewards />} />

            <Route path="/contact-us" element={<Contactus />} />

            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/planetcare" element={<CareForPlanet />} />
            <Route path="/planttrees" element={<Planttrees />} />
            <Route path="/savesoil" element={<Savesoil />} />
            <Route path="/pollutionfree" element={<Endpollution />} />




          </Routes>
        </Router>
      </GoEarth.Provider>
    </div>
  );
}

export default App;
