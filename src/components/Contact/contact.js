import React, { useRef } from 'react';
import './contact.css';
import centdoor from '../../assets/centdoor.png';
import soquify from '../../assets/soquify.png';
import Linkedin from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/twitter.png';
import GithubIcon from '../../assets/github.png';
import CvIcon from '../../assets/CV1.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ho7y46d', 'template_1tcczsn', form.current, 'N8LyrRiRdZAMzt-Nq')
      .then((result) => {
          console.log(result.text);
          alert('Email sent !');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
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
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
             <input type='text' className='name' placeholder='Your Name' name='from_name' required />
             <input type='email' className='email' placeholder='Your Email' name='your_email' required />
            <textarea className='msg' name='message' rows='5' placeholder='Type Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
              <a href="https://www.linkedin.com/in/emmanuel-samuel-813507220/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt='LinkedIn' className='link'/>
              </a>
              <a href="https://twitter.com/Samuel475095031" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt='Twitter' className='link'/>
              </a>
              <a href="https://github.com/Daniel235-web" target="_blank" rel="noopener noreferrer">
                 <img src={GithubIcon} alt='GitHub' className='link'/>
              </a>
              <a href="https://www.example.com/your-cv-url.pdf" target="_blank" rel="noopener noreferrer">
                 <img src={CvIcon} alt='CV' className='link'/>
              </a>
            </div>

          </form>

        </div>
        <div className='footer'>
        &copy; 2023 Samuel Emmanuel. All rights reserved.
    </div>
    </section>
  );
}

export default Contact