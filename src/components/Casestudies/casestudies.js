import React from 'react';
import './casestudies.css';
import Estate1 from '../../assets/estate1.jpg';
import Soquify from '../../assets/soquiify (1).png';
import Telecom from '../../assets/telecom.png';


const Casestudies = () => {
  return (
    <section id="casestudies">
      <h2 className="casetitle">Case-Studies</h2>
      <span className="caseDesc">
        Experienced software engineer known for developing innovative, efficient
        solutions. Skilled in various technologies, I ensure high-quality,
        user-friendly software, fostering collaboration and driving business
        success
      </span>
      <div className="caseImgs">
        <a href="https://mern-estate-ya0i.onrender.com">
          <div className="caseImg">
            <img src={Estate1} alt="profile" />
            <div className="caseDescOverlay">
              <p>
                <h2>Modern Real Estate Website</h2>
                MongoDB, React, Expressjs and Nodejs.
                <br /> Advanced Authentication: Implemented JWT,
                <br /> Firebase, and Google OAuth for secure and seamless user
                access, Implement cutting-edge search features to help users
                find what they're looking for and more..
              </p>
            </div>
          </div>
        </a>
        <a href="https://souqify.com/">
          <div className="caseImg">
            <img src={Soquify} alt="profile" />
            <div className="caseDescOverlay">
              <p>
                <h2>Souqify </h2>
                Your plug for house finishing products.
                <br />
                As a web developer and a web scraper designed to extract
                valuable data and insights about Souqify, a dynamic and
                innovative company specializing in house finishing products.
                <h1> Liquid, Javascript, CSS/SCSS</h1>
              </p>
            </div>
          </div>
        </a>
        <a href="https://centdoor.com/index.php/services/">
          <div className="caseImg">
            <img src={Telecom} alt="profile" />
            <div className="caseDescOverlay">
              <p>
                <h2>Noc</h2>
                Troubleshooting.
                Security Monitoring.
                Monitoring Network Infrastructure.
                Alert Handling.



              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Casestudies