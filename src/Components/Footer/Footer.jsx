import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = ()=>
{
  return(
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=""></img>
                <p>Mohd Afzal | B.Tech in Computer Engineering  from ZHCET , Aligarh Muslim University</p>
            </div>
        </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Mohd Afzal. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>LinkedIn</p>
            <p>Github</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;