import React from "react";
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg";
import afzal_img from "../../assets/afzal-image.jpg";
const About = ()=>
{
  return(
    <div id="about" className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""></img>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={afzal_img} alt=""></img>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A highly Enthusiastic
                         and results-driven Full Stack Java Developer with proven
                          experience in building and deploying end-to-end web 
                          applications from scratch using Spring Boot, RESTful
                           APIs, React.js, and Docker. Skilled in designing 
                           scalable architectures, integrating frontend and 
                           backend systems, and delivering production-ready solutions..</p>
                    <h1>Strong Tech Stack</h1>
                </div>
                <div className="about-skills">
                     <div className="about-skill"><p>Algorithm</p><hr id="s1" style={{width:"55%"}}></hr></div>
                     <div className="about-skill"><p>C Language</p><hr id="s2" style={{width:"70%"}}></hr></div>
                    <div className="about-skill"><p>Core Java</p><hr id="s3"style={{width:"90%"}}></hr></div>
                    <div className="about-skill"><p>Spring Boot</p><hr id="s4" style={{width:"75%"}}></hr></div>
                    <div className="about-skill"><p>React Js</p><hr id="s5" style={{width:"60%"}}></hr></div>
                     <div className="about-skill"><p>Docker Compose</p><hr id="s6" style={{width:"50%"}}></hr></div>
                      <div className="about-skill"><p>Git/GitHub (CI/CD)</p><hr id="s7" style={{width:"70%"}}></hr></div>
                    <div className="about-skill"><p>Java Script</p><hr id="s8" style={{width:"50%"}}></hr></div>
                    <div className="about-skill"><p>Html & Css</p><hr id="s9" style={{width:"90%"}}></hr></div>
                    <div className="about-skill"><p>Sql</p><hr id="s10" style={{width:"95%"}}></hr></div>
                </div>
            </div>
        </div>
    
    </div>
  );
}
export default About;