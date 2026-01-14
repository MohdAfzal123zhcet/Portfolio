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
                    <p>Hi, I’m Mohd Afzal, a Computer Engineering graduate from Aligarh Muslim University (2023) and currently pursuing an M.Tech in Computer/Software Engineering. I have a strong foundation in Object-Oriented Programming, Core Java, and Advanced Spring Boot, along with hands-on experience in React.js, HTML, and CSS, enabling me to build scalable and user-friendly full-stack applications with clean and maintainable architectures.
                      <br></br>
                      <br></br>

I am a two-time GATE CSE qualifier (2023 & 2024), with a score of 458 in 2024, which enabled my postgraduate studies (M.Tech) and reflects my strong analytical thinking, problem-solving skills, and command over core computer science fundamentals. I am highly adaptable, a fast learner, and comfortable working across different technology stacks based on project or organizational needs.<br>
</br>
<br></br>

Alongside my technical journey, I bring over 5 years of experience as a home tutor, teaching Physics and Mathematics to Class 11th and 12th students. This experience has strengthened my ability to explain complex concepts clearly, mentor students with diverse learning styles, and approach problems in a structured, systematic manner.<br></br><br></br>

Beyond academics and work, I enjoy traveling, exploring new places, and trying different cuisines, which keeps me curious, open-minded, and continuously motivated to learn and grow. I aim to combine my technical expertise, teaching experience, and research-oriented mindset to create practical, real-world software solutions with meaningful impact.</p>
                    <h1>Tech Stack</h1>
                     <img src={theme_pattern} alt=""></img>
                </div>
                <div className="about-skills">
                     <div className="about-skill"><p>Algorithm</p><hr id="s1" style={{width:"55%"}}></hr></div>
                     <div className="about-skill"><p>Mathematics</p><hr id="s1" style={{width:"70%"}}></hr></div>
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