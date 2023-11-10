import React from "react";
import ReactDOM from "react-dom/client";
import { COMPONENT_ICON, RECTANGLE_ICON } from "../assets/IMAGES/img";

const testimonialSection = function App() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-text">
        <h1>TESTIMONIALS</h1>
        <h2>What some of our Trainees have to say<br/> about us!</h2>
      </div>
      <div className="client-reviews">
        <div className="testimonial-star">
          <img src={COMPONENT_ICON} alt="STARS" />
        </div>
        <div className="testimonial-quote">
          <p>
            Hello Techtitude,
            <br /> <br />
            While waiting for my fiancé visa to be approved in America, my
            husband suggested that I take the Business Analysis course. I am
            thrilled to share that I now work for one of the top 4 companies in
            America. I am truly grateful for your outstanding training and
            support. You guys are the best! I am excited to spread the word
            about Techtitude and recommend your services to everyone I know.
            <br />
            <br /> Thank you once again!
          </p>
        </div>

        <div className="testimonial-author">
          <div className="rectangle">
            <img src={RECTANGLE_ICON} alt="RECTANGLE" />
          </div>
          <div className="author-name">
            <p>
              Olamide
            </p>
            <p className="author-title">Business Analysis</p>
          </div>
        </div>
      </div>

      <div className="client-reviews">
        <div className="testimonial-star">
          <img src={COMPONENT_ICON} alt="STARS" />
        </div>
        <div className="testimonial-quote">
          <p>
          Dear Techtitude,<br /><br /> Thank you for the excellent Cyber Security course! I now work at a top bank in Nigeria and thoroughly enjoyed the program. Surprisingly, I discovered a passion for coding. Your help with my CV was invaluable, and I'm currently in the second stage of an interview with a Canadian company. Mr. T is an amazing lecturer.<br /><br /> I highly recommend Techtitude!
          </p>
        </div>

        <div className="testimonial-author">
          <div className="rectangle">
            <img src={RECTANGLE_ICON} alt="RECTANGLE" />
          </div>
          <div className="author-name">
            <p>
            Ajoke
            </p>
            <p className="author-title">
            Cybersecurity - Lagos
            </p>
          </div>
        </div>
      </div>
    
      <div className="client-reviews">
        <div className="testimonial-star">
          <img src={COMPONENT_ICON} alt="STARS" />
        </div>
        <div className="testimonial-quote">
          <p>
          Hello Techtitude,<br /><br /> I had a fantastic time in your classes, and the mentoring session helped solidify my decision to pursue a career as a Business Analyst. This training surpassed my expectations and stood out among others. Thank you for providing exceptional education and guidance. I'm on my way to becoming a great BA,<br /><br /> all thanks to Techtitude
          </p>
        </div>

        <div className="testimonial-author">
          <div className="rectangle">
            <img src={RECTANGLE_ICON} alt="RECTANGLE" />
          </div>
          <div className="author-name">
            <p>
            Anonymous
            </p>
            <p className="author-title">
            Business Analysis - Lagos
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default testimonialSection;
