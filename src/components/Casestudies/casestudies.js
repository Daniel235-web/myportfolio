import React from 'react';
import './casestudies.css'
import Estate1 from '../../assets/estate1.jpg'

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
          <img src={Estate1} alt="profile" className="caseImg" />
        </a>
      </div>
    </section>
  );
}

export default Casestudies