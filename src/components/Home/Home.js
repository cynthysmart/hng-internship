import React from 'react';
import firsthome from '../images/homeimages/firsthome.svg';
import secondhome from '../images/homeimages/secondhome.svg';
import thirdhome from '../images/homeimages/thirdhome.svg';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <h2 className="home-text-heading">The HNG Internship</h2>
        <h1 className="home-text-head">Perfection is always under construction</h1>
        <p className="home-text-paragraph">The HNG Internship is an ambitious attempt to change the way education is 
        done in Africa. It’s the bridge between learning to code, and becoming the best in the world.</p>
      </div>
      <div className="home-image">
        <div className="home-image-one">
          <img src={firsthome} className="first-home-image" alt="first home image" />
          <img src={secondhome} className="second-home-image" alt="office image" />
        </div>
        <img src={thirdhome} className="third-home-image" alt="floor image" />
      </div>
      
    </div>
  );
}

export default Home;
