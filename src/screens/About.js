import React from 'react';
import StaticText from '../constants/text';

const headingStyle = {
  fontSize: "35px",
  fontFamily: 'serif'
};

const subHeadingStyle = {
  fontSize: "25px",
  fontFamily: 'serif'
};

const paragraphStyle = {
  margin: "15px",
  padding: "15px"
};

function About() {
  return (
    <div>
      <br/>
      <h1 style={headingStyle}>Our Mission</h1>
      <br/>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2 style={subHeadingStyle}>Vision</h2>
          <p style={paragraphStyle}>{StaticText.visionText}</p>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={subHeadingStyle}>Mission</h2>
          <p style={paragraphStyle}>{StaticText.missionText}</p>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={subHeadingStyle}>Core Values</h2>
          <p style={paragraphStyle}>
            We believe in Strong Leadership through the empowerment to all our Globalites. 
            <p>&nbsp;</p>
            <ul>
              <li>Agility</li>
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Ownership</li>
              <li>Innovation</li>
            </ul>
          </p>
        </div>
      </div>
      <p style={{ fontSize: "55px" }}>Who We Are ?</p>
    </div>
  );
}

export default About;
