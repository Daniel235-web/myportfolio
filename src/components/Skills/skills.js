import React from 'react';
import './skills.css';
import networkA from '../../assets/networkA.png';
import linux from '../../assets/linux.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Skills</span>
            <span className="skillDesc">Hi!,

 I'm Emmanuel, an adept software engineer with a robust networking background.<br /> Over two years, I've contributed my expertise to esteemed companies<br /> like Smile and 9mobile through <a href="https://centdoor.com/">"Centdoor.com" </a><br />

Key Skills:<br />

 Proficient in Python and JavaScript (ES6+).<br />
 Expert in React.js, Next.js, and cutting-edge UI technologies.<br />
 Skilled in customizing Shopify, Wix, Webflow, and WordPress.<br />
 Proficient in Express.js (Node.js) and Django (Python).<br />
Databases: Experienced in MySQL, PostgreSQL, and MongoDB.<br />
I've applied my networking background to excel as a software engineer,<br /> Proficient in both front-end and back-end development. <br />My commitment to tailored solutions aligns projects seamlessly with business goals.<br />
With expertise in content management systems, <br />I create engaging websites that prioritize user engagement.<br />

My holistic perspective, blending development and networking, <br />ensures every project I undertake is technically proficient and business-oriented.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={linux} alt="webdevelopment" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>This is a snapshot of my programs</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={networkA} alt="networking" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Network Administration</h2>
                        <p>These are sites that are down, and I ensure they are up in due time.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
