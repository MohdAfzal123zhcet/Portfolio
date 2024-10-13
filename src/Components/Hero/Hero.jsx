import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Home = ()=>
{
  return(
    <div className="hero">
        <img src={profile_img} alt=""></img>
     <h1><span>I'm Mohd Afzal</span> Full Stack Developer</h1>
     <p>I am Full Stack Developer xyz.....................bad me lkhunga</p>
     <div className="hero-action">
      <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">My resume</div>
     </div>
    </div>
  );
}
export default Home;