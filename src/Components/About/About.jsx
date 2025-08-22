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
          
            <div className="about-right">
                <div className="about-para">
                    <p>H'i My Name is Mohd Afzal, a Computer Engineering graduate from Aligarh Muslim University (2023) with a strong foundation in Object-Oriented Programming and expertise in Core Java and Spring Boot (Advanced). I also have hands-on experience in React.js, HTML, and CSS, which allows me to build scalable and user-friendly full-stack applications.

I am a two-time GATE CSE qualifier (2023 & 2024) with a score of 458 in 2024, which reflects my strong problem-solving and analytical skills. I am highly adaptable, a fast learner, and capable of switching between different technology stacks as per organizational needs.

Beyond technical skills, I bring a problem-solving mindset, adaptability, and continuous learning attitude to every project I work on.

Outside of work, I enjoy traveling, exploring new places, and trying different cuisines, which keeps me curious and open to new experiences.</p>
                    <h1>Tech Stack</h1>
                     <img src={theme_pattern} alt=""></img>
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