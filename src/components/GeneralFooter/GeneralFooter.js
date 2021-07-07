import React from 'react';
import logo from '../images/logo.png';
import twitter from '../images/twitter.svg';
import './GeneralFooter.css';

function GenaralFooter() {
  return (
    <div className="general-footer">
      
      <div className="first-footer">
        <img src={logo} className="logo" alt="hng logo" />
        <div className="sub-first-footer">
          <div className="footer-address">
            <p>3 Birrel Avenue, Sabo.<br></br>
              Yaba, Lagos State,<br></br> 
              Nigeria
            </p>
          </div>

          <div className="footer-contact">
            <p>hello@hng.tech<br></br>
              +234 (0) 812 345 6789
            </p>
          </div>
          <div>
            <a href="#"><button className="footer-btn">Contact us</button></a>
          </div>
        </div>
      </div>

      <div className="second-footer">
        <p>© 2021 HNG internship . All Rights Reserved. HNG Group</p>
        <img src={twitter} alt="twitter logo" className="twitter-logo" />
      </div>
    </div>
  );
}

export default GenaralFooter;
