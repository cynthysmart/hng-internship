import React from 'react';
import abtone from '../images/aboutimages/abtone.svg';
import abttwo from '../images/aboutimages/abttwo.svg';
import abtthree from '../images/aboutimages/abtthree.png';
import abtfour from '../images/aboutimages/abtfour.png';
import abtfive from '../images/aboutimages/abtfive.png';
import firstabout from '../images/aboutimages/first-about.svg';
import secondabout from '../images/aboutimages/second-about.svg';
import thirdabout from '../images/aboutimages/third-about.svg';
import fourthabout from '../images/aboutimages/fourth-about.svg';
import fifthabout from '../images/aboutimages/fifth-about.svg';
import scaling from '../images/aboutimages/scaling.png';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-one">
        <div className="about-one-text">
          <h2 className="about-one-text-heading">What is the Internship?</h2>
          <h1 className="about-one-text-head">We find the most talented African developers</h1>
          <p className="about-one-text-paragraph">. . .and give them the opportunity to excel.</p>
        </div>
        <div className="about-one-image">
          <img src={abtone} className="abt-one" alt="abt one" />
        </div>
      </div>
      <div className="build-about">
        <div className="build-about-text">
          <h1 className="build-about-text-head">Building talents across the continent</h1>
          <p className="build-about-text-paragraph">The HNG internship is a 3-month remote internship designed to find and develop 
            the most talented software developers.</p>
          <p className="build-about-text-paragraph">Everyone is welcome to participate (there is no entrance exam). Anyone can log into the internship 
            using their laptop. Each week, we give tasks. Those who complete them advance forward. We pay the 
            interns weekly.</p>
          <p className="build-about-text-paragraph">The intern coders are introduced to complex programming frameworks, and get to work on real world 
            software. The finalists are connected to the best companies in the tech ecosystem and get full time 
            jobs and contracts immediately.</p>
        </div>
          <div className="build-about-image-one">
            <img src={abtthree} className="build-image" alt="abtthree" />
            <p className="build-p">Discover Talents</p>
          </div>
          <div className="build-about-image-three">
            <img src={abtfive} className="build-image" alt="abtfour" />
            <p className="build-p">Connect brilliant people with each other</p>
          </div>
          <div className="build-about-image-two">
            <img src={abtfour} className="build-image" alt="" />
            <p className="build-p">Make the internship process fun</p>
          </div>
      </div>

      <div className="about-work">
        <h3 className="about-work-heading">How the Internship works</h3>
        <p className="about-work-paragraph">We combine technology with a well proven education system of learning to mentor 
          interns and help them grow which in turn advances the ecosystem.</p>
          <div className="about-divs">
            <div className="about-div-item one">
              <img src={firstabout} alt="first about" />
              <p className="about-paragraph">EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED</p>
            </div>

            <div className="about-div-item two">
              <img src={secondabout} alt="second about" />
              <p className="about-paragraph">THE INTERNS LEARN IMPORTANT CONCEPTS QUICKLY</p>
            </div>

            <div className="about-div-item three">
              <img src={thirdabout} alt="third about" />
              <p className="about-paragraph">THE INTERNS ARE INTRODUCED TO COMPLEX PROGRAMMING FRAMEWORKS</p>
            </div>

            <div className="about-div-item four">
              <img src={fourthabout} alt="fourth about" />
              <p className="about-paragraph">THE INTERN CODERS GET TO WORK ON REAL LIFE APPLICATIONS THAT SCALE</p>
            </div>

            <div className="about-div-item five">
              <img src={fifthabout} alt="fifth about" />
              <p className="last-paragraph">EVERYONE CAN JOIN, NO EXTRANCE EXAM NEEDED</p>
            </div>
          </div>

          <div class="scale">
            <div className="scaling">
              <h3>Scaling</h3>
              <img src={scaling} alt="scaling image" />
            </div>
            <div className="scale-text">
              <h4 className="scale-heading">Increased rate of learning</h4>
              <p>The interns are given tasks that are more focused with real world experiences. 
                They typically involve a real world task which aims at identifying the most committed/driven 
                interns and helping them harness their skills better.</p><br></br>
              <hr></hr>

              <h4 className="scale-heading">Get paid to learn</h4>
              <p>Interns get paid on a weekly basis, they gain experience, learn and earn all at the same time.</p>
              <hr></hr>

              <h4 className="scale-heading">Connect and network</h4>
              <p>Interns join an online community that will be available 24/7 to network with each other and discuss.</p>
              <hr></hr>

              <h4 className="scale-heading">Technological approach</h4>
              <p>We combine technology with a well proven education system of learning to mentor interns and 
                help them grow which in turn advances the ecosystem.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
