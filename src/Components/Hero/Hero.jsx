import React from "react";
import "./Hero.css";
import profile_img from "../../assets/afzal-image.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.pdf";

const Home = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-left">
        <img src={profile_img} alt="Mohd Afzal" />
        <br></br>
         <span>Mohd Afzal</span>
      </div>

      <div className="hero-right">
        <h1>
          Java Full Stack Developer
        </h1>

        <p>
          Enthusiastic and results-driven Full Stack Java Developer With Strong Problem Solving Mindset having hands-on experience in Spring Boot, RESTful
          APIs, and React.js. Skilled in building scalable web applications using Java, JPA, MySQL/PostgreSQL, and
          Docker.GATE-qualified with strong computer science fundamentals and problem-solving abilities. Well-versed in
          OOP, SDLC, and Agile methodologies. Experienced in integrating frontend and backend systems, containerizing
          applications using Docker, and deploying solutions in dev/testing environments.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
          </div>
          <div className="hero-resume">
            <a href={resume} download>My resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
