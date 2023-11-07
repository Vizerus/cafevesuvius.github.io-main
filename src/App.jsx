import React from 'react';
import Menu from './page/Menu.jsx';
import NavBar from './NavBar.jsx';
import Home from './page/Home.jsx';
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import Login from './page/Login.jsx';
import Reservation from './page/Reservation.jsx';
import Admin from './page/Admin.jsx';
import ReservationView from './page/ReservationView';
import Statistics from './page/Statistics.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/reservation-view" element={<ReservationView />} />
          <Route path="/admin/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;