import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import Linkedin_icon from "../../assets/linkedin_icon.png";
import Github_icon from "../../assets/github_icon.png";
const Contact = ()=>
{
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "113d20d1-b65b-4254-9b7c-303611a17ddf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };  

  return(
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=""></img>
        </div>
      <div className="contact-section">
            <div className="contact-left">
            <h1>Let's talk</h1>
            <p>You can contact anytime</p>
              <div className="contact-details">
                <div className="contact-detail">
                <img src={mail_icon} alt=""></img>
                <p>afzalmohd44099@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={call_icon} alt=""></img>
                <p>8630074875</p>
                </div>
                <div className="contact-detail">
                <img src={Linkedin_icon} alt="" className="linkedin"></img>
                <p><a href="https://www.linkedin.com/in/sheikh-mohd-afzal-ali/"alt="" target="_blank">LinkedIn</a></p>
                </div>
                <div className="contact-detail">
                <img src={Github_icon} alt="" className="github"></img>
                <p><a href="https://github.com/MohdAfzal123zhcet"alt=""target="_blank">Github</a></p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt=""></img>
                <p>Aligarh,UP,India</p>
                </div>
            </div>
         </div> 
       <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter Your Name" name="name"></input>
        <label htmlFor="">Your Email</label>
        <input type="email"placeholder="Enter Your Email" name="email"></input>
        <label htmlFor="">Write Your Message Here</label>
        <textarea name="message" rows="8"placeholder="Enter Your Message"></textarea>
        <button type="submit" className="contact-submit">Submit now</button>
       </form>
      </div> 
    </div>
  );
}
export default Contact;