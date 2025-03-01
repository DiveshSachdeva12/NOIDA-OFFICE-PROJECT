import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Bushire from './pages/Bushire';
// import Tours from './pages/Tours';
// import Booking from './pages/Booking';
import Login from './pages/Login';
import Register from './pages/Register';
import MapPage from './pages/MapPage';  // Import the MapPage component

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Bushire />} />
        <Route path="/Bushire" element={<Bushire />} />
          {/* <Route path={["/", "/Bushire"]} element={<Bushire />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<MapPage />} />  {/* Route for the map page */}
      </Routes>
    </Router>
  );
}

export default App;
