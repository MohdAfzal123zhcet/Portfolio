import React from "react";
import "./Hero.css";
import profile_img from "../../assets/afzal-image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Afzal_Teaching_Resume.pdf";

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
          Software Engineer | Edge-Cases Thinker
        </h1>

        <p>
   Software Engineering professional with an M.Tech background and a strong foundation in mathematics, algorithms, data structures, and system-level software development, complemented by a research-oriented approach to problem solving and system design. Skilled in designing and building scalable, efficient, and maintainable web applications using technologies such as Java, Spring Boot, React, Flask, Docker, and PostgreSQL. Demonstrates strong analytical abilities with a keen interest in backend architecture, AI integration, and applied research-driven solutions. Driven to develop practical, real-world software systems that deliver impact through clean code, sound design principles, and structured engineering practices.
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
