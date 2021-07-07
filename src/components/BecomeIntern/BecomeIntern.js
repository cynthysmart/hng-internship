import React from 'react';
import uiux from '../images/uiux.svg';
import frontend from '../images/frontend.svg';
import backend from '../images/backend.svg';
import machinel from '../images/machinel.svg';
import firstbecomeintern from '../images/firstbecomeintern.jpg';
import secondbecomeintern from '../images/secondbecomeintern.jpg';
import thirdbecomeintern from '../images/thirdbecomeintern.jpg';
import becometwitter from '../images/becometwitter.svg';
import eightynine from '../images/eightynine.png';
import './BecomeIntern.css';
import * as AiIcons from "react-icons/ai";

function BecomeIntern() {
  return (
    <div className="BecomeIntern">
      <div className="first-become">
        <div className="first-become-photo">
          <div className="image-button">
            <img src={firstbecomeintern} className="first-becomeintern" alt="first become intern" />
            <a href="#"><button className="first-become-button">LEARN MORE <span>
            <AiIcons.AiOutlineArrowRight /></span>
            </button></a>
          </div>
          <img src={secondbecomeintern} className="second-becomeintern" alt="first become intern" />
        </div>
        <div className="first-become-text">
          <h2 className="first-become-heading">The HNG Internship</h2>
          <h1 className="first-become-header">Become an Intern.</h1>
          <p className="first-become-paragraph">Learn, grow and scale your software developer career with real world experience.</p>
          <p className="first-become-paragraph">The HNG Internship 6 starts on September 15, 2019. Click on the link below to join the internship now.</p>
          <a href="#"><button className="second-become-button">join now</button></a>
        </div>
      </div>

      <div className="tracks">
        <h2 className="track-heading">Available Learning Tracks</h2>
        <p className="track-p">The HNG Internship does not earn any money. 
          We raise money and pay the interns all the money we raise on each internship.</p>
        <div className="track-divs">
          <div className="learning-track-div">
            <img src={uiux} alt="uiux" />
            <h4 className="learning-track">UI/UX Design</h4>
            <p className="learning-paragraph">Put your UX/UI Design skills to test 
            and sharpen it as you design exciting User Interfaces for great User Experience.</p>
          </div>

          <div className="learning-track-div">
            <img src={frontend} alt="frontend" />
            <h4 className="learning-track">Frontend</h4>
            <p className="learning-paragraph">Put your Frontend skills to test and sharpen 
            it further as you turn exciting UI Designs into stunning web pages.</p>
          </div>

          <div className="learning-track-div">
            <img src={backend} alt="backend" />
            <h4 className="learning-track">Backend</h4>
            <p className="learning-paragraph">Put your Backend skills to test and sharpen it by 
            building scalable, logic driven applications with world class technologies.</p>
          </div>

          <div className="learning-track-div">
            <img src={machinel} alt="machine learning" />
            <h4 className="learning-track">Machine Learning</h4>
            <p className="learning-paragraph">Develop programs that can access data and utilize it 
            to automatically learn and improve from experience.</p>
            <img src={becometwitter} alt="twitter logo" />
          </div>
        </div>
      </div>
      <div className="last-become">
        <div className="first-last-become">
        <div>
              <h3>300</h3>
              <h3>INTERNS</h3>
              <h3>BATCH 1</h3>
            </div>
            <div>
              <h3>2,000</h3>
              <h3>INTERNS</h3>
              <h3>BATCH 1</h3>
            </div>
            <div>
              <h3>3,000</h3>
              <h3>INTERNS</h3>
              <h3>BATCH 1</h3>
            </div>
            <div>
              <h3>4,000</h3>
              <h3>INTERNS</h3>
              <h3>BATCH 1</h3>
            </div>
            <div>
              <h3>5,700</h3>
              <h3>INTERNS</h3>
              <h3>BATCH 1</h3>
            </div>
        </div>
        <div className="second-last-become">
          <div className="second-last-become-text">
            <p className="second-last-become-paragraph">You can support in multiple ways - the most important way is to take on one of our interns in your 
              organisation. Outside of that, you can co-finance an internship.</p>
          </div>
          <div className="second-last-become-image">
            <img src={thirdbecomeintern} className="third-becomeintern" alt="" />
          </div>
          <div className="second-last-become-section">
            <img src={eightynine} className="eighty-nine" alt="eighty nine percent" />
            <p className="second-last-become-p">Percentage of interns that get employed right after the Program</p>
            <p className="second-last-become-para">The HNG Internship does not earn any money. We raise money and pay 
              the interns all the money we raise on each internship.</p><br></br><br></br>
            <div className="latest-become">
              <p className="latest-become-text">See what our interns say on twitter</p>
              <img src={becometwitter} alt="" />
            </div>
          </div>
          
        </div>
        <div className="third-last-become">
          <h2 className="third-last-become-heading">Get started on your tech career</h2>
          <p className="third-last-become-paragraph">The HNG Internship 6.0 starts in September. Click on this link to join now.</p>
          <a href="#"><button className="last-become-button">join now</button></a>
        </div>
      </div>

    </div>
      
  );
}

export default BecomeIntern;
