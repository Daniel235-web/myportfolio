import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Note the corrected attribute name */}
      <img src={logo} alt="logo" className="logo" width={50} height={50} />
      <div className="desktopMenu">
        <Link to="home" className="desktopMenuListItem">Home</Link>
        <Link to="about" className="desktopMenuListItem">About</Link>
        <Link to="caseStudies" className="desktopMenuListItem">Case Studies</Link>
        <Link to="blog" className="desktopMenuListItem">Blog</Link>
        
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Get In Touch
      </button>
    </nav>
  );
}

export default Navbar;
