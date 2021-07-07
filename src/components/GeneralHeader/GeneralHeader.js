import React from 'react';
import logo from '../images/logo.png';
import Navbar from '../Navbar/Navbar';
import './GeneralHeader.css';
import { Link } from 'react-router-dom';


function GeneralHeader() {
  return (
    <div className="general-header">
      <div>
        <img src={logo} className="logo" alt="hng logo" />
      </div>
      <div>
        <ul className="nav-links">
          <Link to="/about">
            <li className="link-item">WHAT IS THE INTERNSHIP?</li>
          </Link>
          <Link to="/interns">
            <li className="link-item">THE INTERNS (SO FAR)</li>
          </Link>
          <Link to="/mission">
            <li className="link-item">SUPPORT THE MISSION</li>
          </Link>
          <Link to="/becomeintern">
            <li className="link-item">BECOME AN INTERN</li>
          </Link>
        </ul>
      </div>
      <Navbar />
    </div>
  );
}

export default GeneralHeader;
