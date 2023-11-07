import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navdropdown from 'react-bootstrap/Navdropdown';
import "./style.scss";

function NavbarDiv() {
  const [isOpen, setIsOpen] = useState(false);

  const ControlCollapse = () => {
    const navBurger = document.getElementById('nav-burger');
    const navMenu = document.getElementById('nav-menu');

    navBurger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  const Collapse = () => {
    const navBurger = document.getElementById('nav-burger');
    const navMenu = document.getElementById('nav-menu');

    navBurger.classList.remove('active');
    navMenu.classList.remove('active');
  }

  return (
    <nav className="navbar">
      <a href="/">
      <div className="nav-icon">
        <img src="src\img\logo.png" alt="logo" />
      </div>
      </a>
      <div id="nav-burger" onClick={ControlCollapse}>
        <hr className="nav-line" />
        <hr className="nav-line" />
        <hr className="nav-line" />
      </div>
      <div id="nav-menu" onClick={Collapse}>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/menu" className="nav-link">Menu</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="/reservation" className="nav-link">Reservation</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="/admin" className="nav-link">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarDiv;