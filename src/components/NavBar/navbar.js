import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} width={50} height={50} />
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link to="/" className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link to="/skills" className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link to="/caseStudies" className="listItem" onClick={()=>setShowMenu(false)}>Case-Studies</Link>
        <Link to="/clients" className="listItem" onClick={()=>setShowMenu(false)}>My Clients</Link>
        <Link to="/clients" className="listItem" onClick={()=>setShowMenu(false)}>Get In Touch</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
