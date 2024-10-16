import React, { useRef, useState } from "react";
import "./Navbar.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
            <h3>Mohd Afzal</h3>
            <img src={theme_pattern} alt=""></img>
        </div>
            <ul ref={menuRef} className="nav-menu">
              <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Portfolio</p></AnchorLink></li>
              <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
              <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
              <li><p>My resume</p></li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
      );
    }
export default Navbar;