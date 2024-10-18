import React from "react";
import "./Hero.css";
import profile_img from "../../assets/afzal-image.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.pdf"
const Home = ()=>
{
  return(
    <div id="home" className="hero">
        <img src={profile_img} alt="" ></img>
     <h1><span>Mohd Afzal</span> Full Stack Developer & Teacher</h1>
     <p>I am Mohd Afzal, a passionate and dedicated full stack developer with expertise in HTML, CSS, JavaScript, React JS, Core Java, SQL.
        In addition I have 4 years of experience as a Physics teacher, I bring strong communication, 
        leadership, and problem-solving skills
        to my technical journey. 
        I use my technical skills to build efficient, user-friendly applications and grow as a professional developer.
        I am two times Gate qualified 2023 & 2024 with gate score of 458.</p>
     <div className="hero-action">
      <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
      <div className="hero-resume"><a href={resume} download alt="">My resume</a></div>
     </div>
    </div>
  );
}
export default Home;