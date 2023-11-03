import React from 'react';
import './intro.css';
import bg from '../../assets/WhatsApp Image 2023-08-26 at 2.17.10 AM (1).png';
import { Link } from 'react-router-dom'; // Import the Link component
import btnImage from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Emmanuel</span>
          <br />
          Software Engineer
        </span>
        <p className="introPara">
          I am a skilled software engineer with decades of experience<br /> in creating innovative and high-quality software solutions.
          <br />
          Working at <a href="https://souqify.com/">souqify.com</a> as a web scraper and a web developer .
          <br />
          Spent 2 years in networking <a href="https://centdoor.com/">"Centdoor.com" </a> as a Noc.
          <br />
          Currently, I'm focused on building a user-friendly human-centered websites <br /> at <a href="https://esoftresponse.com/">eSoftResponse </a>
        </p>
        <Link to="/clients"><button className="btn"><img src={btnImage} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

