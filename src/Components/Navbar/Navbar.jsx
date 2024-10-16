import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
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
            <ul ref={menuRef} className="nav-menu">
              <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Portfolio</p></AnchorLink></li>
              <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
              <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
            </ul>
        </div>
      );
    }
export default Navbar;