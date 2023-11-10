import React from "react";
import ReactDOM from "react-dom/client";
import { SOCIALMEDIA_ICON, TECHTITUDE_WHITE } from "../assets/IMAGES/img";

const footerSection = function () {
  return (
    <div className="footer-container">
      <div className="footer-layout">
        <div className="footer-logo">
          <img src={TECHTITUDE_WHITE} alt="TECHTITUDE LOGO" />
        </div>
        <div className="layout-1">
          <div className="footer-nav">
            <a href="#">COURSES</a>
            <a href="#">INSTRUCTORS</a>
            <a href="#">TESTIMONIALS</a>
          </div>
          <p>
            7 Adedotun Dina, Mende, Maryland, Lagos - Nigeria.
            admin@techtitude.org<br/> 09063940977
          </p>
        </div>
        <div className="news-letter">
          <div className="caption">
            <p>Like to receive our Newsletter?</p>
          </div>
          <div className="input">
            <input type="email" placeholder="Enter your Email here" id="email" />
            <button className="newsletter-button">READ MORE</button>
          </div>
          <div className="footer-icon">
            <img src={SOCIALMEDIA_ICON} alt="SOCIALMEDIA ICON" />
          </div>
        </div>
      </div>
      {/* <div className="footer-address"> */}

      {/* </div> */}
      <div className="copyright-footer">
      <hr />
      <div className="copy-right">
        <p>TECHTITUDE © 2023 - All Right reserved!</p>
      </div>
      </div>
    </div>
  );
};
export default footerSection;
