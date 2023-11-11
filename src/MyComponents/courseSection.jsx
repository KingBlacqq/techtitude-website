import React from "react";
import ReactDOM from "react-dom/client";
import {
  ANALYSIS_ICON,
  CYBER_LOGO,
  SCRUM_LOGO,
  UIUX_LOGO,
} from "../assets/IMAGES/img";

const courseSection = function App() {
  return (
    <div className="course-container">
      <div className="course-content">
        <h2>COURSES</h2>
        <p>UpSkill yourself in any of these.</p>
      </div>

      {/* //data_analysis */}

      <div className="course-module">
        <div className="course-data">
          <img src={ANALYSIS_ICON} alt="ANALYSIS LOGO" />
          <div className="course-item">
            <h2>Data Analytics</h2>
            <p>
              Data Analysis will help you differentiate yourself from other
              information technology and research workers who lack the same
              specialized knowledge as you. During your job search, you may have
              more job opportunities to pursue or qualify for more specialized
              positions
            </p>
          </div>
        </div>
        <div className="course-button">
          <div className="button-1">
            <button>
              <a href="#">Enroll Now!</a>
            </button>
          </div>
          <div className="button-2">
            <button>
              <a href="#">Download Brochure</a>
            </button>
          </div>
          <div className="button-content">
            <p>₦150,000</p>
          </div>
        </div>
      </div>

      {/* business_analysis */}

      <div className="course-module">
        <div className="course-data">
          <img src={ANALYSIS_ICON} alt="ANALYSIS LOGO" />
          <div className="course-item">
            <h2>Business Analysis</h2>
            <p>
              Business Analysis will help you differentiate yourself from other
              information technology and research workers who lack the same
              specialized knowledge as you. During your job search, you may have
              more job opportunities to pursue or qualify for more specialized
              positions.
            </p>
          </div>
        </div>
        <div className="course-button">
          <div className="button-1">
            <button>
              <a href="#">Enroll Now!</a>
            </button>
          </div>
          <div className="button-2">
            <button>
              <a href="#">Download Brochure</a>
            </button>
          </div>
          <div className="button-content">
            <p>₦150,000</p>
          </div>
        </div>
      </div>

      {/* cyber_security */}

      <div className="course-module">
        <div className="course-data">
          <img src={CYBER_LOGO} alt="CYBER LOGO" />
          <div className="course-item">
            <h2>Cyber Security</h2>
            <p>
              Data Analysis will help you differentiate yourself from other
              information technology and research workers who lack the same
              specialized knowledge as you. During your job search, you may have
              more job opportunities to pursue or qualify for more specialized
              positions.
            </p>
          </div>
        </div>
        <div className="course-button">
          <div className="button-1">
            <button>
              <a href="#">Enroll Now!</a>
            </button>
          </div>
          <div className="button-2">
            <button>
              <a href="#">Download Brochure</a>
            </button>
          </div>
          <div className="button-content">
            <p>₦100,000</p>
          </div>
        </div>
      </div>

      {/* uiux_design */}

      <div className="course-module">
        <div className="course-data">
          <img src={UIUX_LOGO} alt="UI/UX LOGO" />
          <div className="course-item">
            <h2>UI/UX Design</h2>
            <p>
              Learn the skills to create visually appealing and user-friendly
              interfaces. Our UI/UX Design track will teach you the principles
              of design, user research, wireframing, prototyping, and more.
              You'll gain practical experience by completing a variety of tasks,
              including designing web and mobile applications, creating user
              personas, and conducting usability testing.
            </p>
          </div>
        </div>
        <div className="course-button">
          <div className="button-1">
            <button>
              <a href="#">Enroll Now!</a>
            </button>
          </div>
          <div className="button-2">
            <button>
              <a href="#">Download Brochure</a>
            </button>
          </div>
          <div className="button-content">
            <p>₦150,000</p>
          </div>
        </div>
      </div>

      {/* scrum */}

      <div className="course-module">
        <div className="course-data">
          <img src={SCRUM_LOGO} alt="SCRUM LOGO" />
          <div className="course-item">
            <h2>Scrum</h2>
            <p>
              Data Analysis will help you differentiate yourself from other
              information technology and research workers who lack the same
              specialized knowledge as you. During your job search, you may have
              more job opportunities to pursue or qualify for more specialized
              positions
            </p>
          </div>
        </div>
        <div className="course-button">
          <div className="button-1">
            <button>
              <a href="#">Enroll Now!</a>
            </button>
          </div>
          <div className="button-2">
            <button>
              <a href="#">Download Brochure</a>
            </button>
          </div>
          <div className="button-content">
            <p>₦150,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default courseSection;
