import React from "react";
import ReactDOM from "react-dom/client";
import {
  CV_ICON,
  INTERNSHIP_ICON,
  LADY_ICON,
  PROJECT_ICON,
  TECHTITUDE_LOGO,
} from "../assets/IMAGES/img";

const headerSection = function App() {
  return (
    <div className="main-container">
      <div className="nav-bar">
        <div className="nav-logo">
          <img src={TECHTITUDE_LOGO} alt="TECHTITUDE LOGO" />
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#">TESTIMONIALS</a>
            </li>
            <li>
              <a href="#">COURSES</a>
            </li>
            <li>
              <a href="#">INSTRUCTORS</a>
            </li>
          </ul>
        </nav>
        <div className="nav-button">
          <button>
            <a href="#">SIGN UP NOW</a>
          </button>
        </div>
      </div>

      {/* HEADCONTENT */}

      <div className="main-content">
        <div className="head-content">
          <h2>Upskill<br/> Yourself with<br/> TECHTITUDE</h2>
          <p>
            We empower <b>WOMEN</b> with the topical<br/> skills and knowledge to
            become <br/>tech leaders.
          </p>
        </div>
        <div className="head-button">
          <button>
            <a href="#">SIGN UP NOW</a>
          </button>
        </div>
        <div className="head-image">
          <img src={LADY_ICON} alt="WOMAN IMAGE" />
        </div>
      </div>

      {/* HEADCAROUSEL */}

      <div className="head-carousel">
        <div className="carousel-card">
          <div className="ellipse"></div>
          <div className="ellipse-icon">
            <img src={INTERNSHIP_ICON} alt="INTERNSHIP ICON" />
          </div>
          <div className="carousel-content">
            <h2>Internship</h2>
            <p>
              Our academy provides internship opportunities to our students,
              allowing them to gain practical experience in a real-world
              setting. This helps students apply theoretical knowledge in
              practical situations and develop skills that employers seek.
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="ellipse"></div>
          <div className="ellipse-icon"></div>
          <div className="carousel-content">
            <h2>Mentorship</h2>
            <p>
              Our experienced mentors guide students through their tech journey,
              providing advice, support, and feedback. This helps our students
              build confidence, acquire new skills, and gain insights into the
              tech industry.
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="ellipse"></div>
          <div className="ellipse-icon">
            <img src={CV_ICON} alt="CV-ICON" />
          </div>
          <div className="carousel-content">
            <h2>CV Revamp</h2>
            <p>
              We help students revamp their resumes to showcase their skills,
              achievements, and projects. This improves their chances of getting
              noticed by potential employers and getting hired for tech roles.
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="ellipse"></div>
          <div className="ellipse-icon">
            <img src={PROJECT_ICON} alt="PROJECT ICON" />
          </div>
          <div className="carousel-content">
            <h2>Real Life Project</h2>
            <p>
              We assign real-life projects to our students, allowing them to
              apply their knowledge and skills to solve real-world problems.
              This helps our students develop critical thinking,
              problem-solving, and teamwork skills, and prepares them for future
              roles in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerSection;
