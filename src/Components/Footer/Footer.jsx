import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import Linkedin_icon from "../../assets/linkedin_icon.png";
import Github_icon from "../../assets/github_icon.png";
const Footer = ()=>
{
  return(
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
            <div className="my-name">
            <h3>Mohd Afzal</h3>
            <img src={theme_pattern} alt=""></img>
        </div>
                <p>B.Tech in Computer Engineering  from ZHCET, Aligarh Muslim University</p>
            </div>
        </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Mohd Afzal. All rights reserved.</p>
        <div className="footer-bottom-right">
          <div className="linkedin">
         <img src={Linkedin_icon} alt=""></img>
        <p><a href="https://www.linkedin.com/in/sheikh-mohd-afzal-ali/"alt="" target="_blank">LinkedIn</a></p>
        </div>
      <div className="github">
        <img src={Github_icon} alt="" className="github"></img>
        <p><a href="https://github.com/MohdAfzal123zhcet"alt="" target="_blank">Github</a></p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;