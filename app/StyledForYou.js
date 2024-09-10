// src/StyledForYou.js
import React from 'react';
import './StyledForYou.css';

const StyledForYou = () => {
  return (
    <div className="styled-for-you-container">
      <div className="header">
        <h1>👗Styled for you</h1>
        <p>
          Say hello to effortless elegance with "Styled for You" by Abbey Glass, your personalized fashion concierge. 
          Imagine curated product recommendations that align perfectly with your personal tastes, needs, and the unique shapes 
          that make you, <strong>you</strong>. By answering a few quick questions about yourself, your upcoming event, and your 
          distinctive silhouette, you unlock a world of custom style possibilities tailored just for you. 
          Embrace the luxury of curated fashion and let Abbey Glass transform the way you shop—because you deserve nothing less than 
          perfection. Discover your personalized style journey today.
        </p>
      </div>

      <div className="questions">
        <button className="question-button">🌐 Tell us about your event (Mother of, wedding, black tie, cocktail, daytime)</button>
        <button className="question-button">😊 Tell us about yourself (age, location, style, vibe, favorite color, favorite brands)</button>
        <button className="question-button">✏️ Tell us about your shape (size, body considerations, coverage on arms/legs)</button>
      </div>

      <button className="style-button">✨ Style for me</button>
    </div>
  );
};

export default StyledForYou;
