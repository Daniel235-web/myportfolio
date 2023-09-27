import React from 'react';
import './contact.css';
import centdoor from '../../assets/centdoor.png';
import soquify from '../../assets/soquify.png';
import Linkedin from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/twitter.png';
import GithubIcon from '../../assets/github.png';
import CvIcon from '../../assets/CV1.png';

const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className='contactPageTitle'>My clients</h1>
            <p className="clientDesc">
            "I have had the privilege of collaborating with a wide range of esteemed organizations,
             among which are notable companies."
            </p>
            <div className='clientImgs'>
               <img src={centdoor} alt="oop!..sorry reload the page " className="clientImg"/>
               <img src={soquify} alt="oop!..sorry reload the page" className="clientImg"/>
                 
            </div>
        </div>
        <div id="contact">
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Let's connect to discuss how I can bring value to your organization.</span>
          <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input  type='email' className='email' placeholder='Your Email'/> 
            <textarea className='msg' name='message' rows='5' placeholder='Type Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
              <img src={Linkedin} alt='FacebookIcon' className='link'/>
              <img src={TwitterIcon} alt='TwitterIcon' className='link'/>
              <img src={GithubIcon } alt='YoutubeIcon' className='link'/>
              <img src={CvIcon } alt='InstagramIcon' className='link'/>
              
            </div>
          </form>

        </div>
        <div className='footer'>
        copyright &# 052: 2023 Samuel Emmanuel. All right received.
    </div>
    </section>
  );
}

export default Contact