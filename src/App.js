import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './auth/Signup';
import Login from './auth/Login';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Rewards from './assets/Rewards';
import Collection from './components/Collection';
import { useState } from 'react';
import { GoEarth } from './utilis';
import Contactus from './components/Contactus';
import UserDetails from './auth/EditUserDetails';
import ResetPassword from './auth/ResetPassword';
import Shop from './assets/Shop';
import AboutUs from './info/AboutUs';
import CareForPlanet from './info/CareForPlanet';
import Planttrees from './info/Planttrees';
import Savesoil from './info/Savesoil';
import Endpollution from './info/Endpollution';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showErrorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [userDTO, setUserDTO] = useState({})
  console.log(userDTO, "userDTO");
  return (
    <div className="App">
      <GoEarth.Provider value={{ setUserDTO, userDTO, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn, setErrorMessage, setShowSuccessMessage }}>
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
            <Route path="/recycle" element={<Collection />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/shop" element={<Shop />} />

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
