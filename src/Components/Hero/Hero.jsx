import React from "react";
import "./Hero.css";
import profile_img from "../../assets/afzal-image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Resume.pdf";

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
     I am an aspiring Software Engineer with a strong foundation in full-stack development and AI-driven applications. With an MTech in Software Engineering, I specialize in building 
     scalable and efficient web solutions using 
     technologies like Spring Boot, Java, React, Flask, Docker, and PostgreSQL.
     I’m passionate about crafting clean, maintainable code and leveraging technology to solve real-world problems. With a deep interest in AI integration, backend architecture, and system design, 
     I aim to contribute to innovative software solutions that make an impact.
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
