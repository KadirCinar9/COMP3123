// WelcomeCard.js
import React from 'react';
import './App.css'; // Import the CSS file

const WelcomeCard = ({ studentId, name }) => {
  return (
    <div className="WelcomeCard">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
      />
      <h2>Welcome to Fullstack Development - I</h2>
      <h3>React JS Programming Week09 Lab exercise</h3>
      <p>{studentId}</p>
      <p>{name}</p>
      <p>George Brown College, Toronto</p>
    </div>
  );
};

export default WelcomeCard;
