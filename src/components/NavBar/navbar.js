import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" width={50} height={50} />
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/skills" className="desktopMenuListItem">About</Link>
        <Link to="/caseStudies" className="desktopMenuListItem">Case-Studies</Link>
        <Link to="/clients" className="desktopMenuListItem">My Clients</Link>
      </div>
      {/* Link to the Contact page */}
      <Link to="/clients" className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Get In Touch
      </Link>
    </nav>
  );
}

export default Navbar;
