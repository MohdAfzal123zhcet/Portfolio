import React, { useRef, useState } from "react";
import "./Navbar.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import resume from "../../assets/Resume.pdf"
const Navbar = ()=>
    {
      const [menu,setMenu]= useState("home");
     const menuRef = useRef();
      
      const openMenu = ()=>
      {
        menuRef.current.style.right="0";
      }

      const closeMenu = ()=>
        {
          menuRef.current.style.right="-350px";
        }


      return(
        <div className="navbar">
          <div className="my-name">
            <h5>Mohd Afzal</h5>
            <img src={theme_pattern} alt=""></img>
        </div>
        <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"></img>
            <ul ref={menuRef} className="nav-menu">
              <img src={menu_close} onClick={closeMenu}alt="" className="nav-mob-close"></img>
              <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Portfolio</p></AnchorLink></li>
              <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
              <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
              <li><a href={resume} alt=""download>My resume</a></li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
      );
    }
export default Navbar;