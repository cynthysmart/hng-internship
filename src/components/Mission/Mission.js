import React from 'react';
import firstmission from '../images/firstmission.png';
import missionsponsor from '../images/missionsponsor.png';
import './Mission.css';

function Mission() {
  return (
    <div className="Mission">
      <div className="support-mission">
        <h1 className="support-mission-heading">Support the Mission</h1>
      </div>
      <div className="first-mission">
        <div className="first-mission-text">
          <h2 className="first-mission-text-heading">The HNG Internship</h2>
          <h3 className="first-mission-text-head">“the interns use this money to finance their participation in the internship”</h3>
          <p className="first-mission-text-paragraph">The HNG Internship does not earn any money. We raise money and pay the interns all the money we raise 
            on each internship. The interns use this money to finance their participation in the internship. You can 
            support in multiple ways - the most important way is to take on one of our interns in your organisation.</p>
          <p className="first-mission-text-paragraph">Outside of that, you can co-finance an internship. We will use your product as part of the internship then 
            (it’s good to have your product in front of 4,000 learning developers), and probably be the first tool they 
            ever use.</p>
          <p className="first-mission-text-paragraph">Or you can just contribute directly (we are a non-profit and tax deductable). We have two addresses you can 
            contribute to - For Everyone or Female-Only.”</p>
        </div>
        <div className="first-mission-image">
          <img src={firstmission} alt="first mission image" />
          <button className="mission-button">Download Deck</button>
        </div>
      </div>
      <div className="contribute">
        <div className="first-contribute">
          <h2 className="first-contribute-heading">Want to contribute?</h2>
          <hr className="contribute-hr"></hr>
          <p>The HNG Internship does not earn any money.</p>
        </div>
        <div className="second-contribute">
          <p className="second-contribute-paragraph">Support the Internship.</p>
        </div>
      </div>
      <div className="sponsor-groups">
        <h2>Sponsor underrepresented groups</h2>
        <div className="sponsor-groups-sections">
          <img src={missionsponsor} alt="" />
          <div className="sponsor-groups-text">
            <div className="sponsor-groups-text-item">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
