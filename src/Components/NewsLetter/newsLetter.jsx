import React from "react";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="newsLetter-input">
        <input type="email" placeholder="Enter Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
