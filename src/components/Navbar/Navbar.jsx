import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

import { Link } from 'react-router-dom';

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = ()=>{
    setOpenMenu(!openMenu)
  };

  return (
    <>

      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/mylogo.jpg" alt="" />

          <ul>
            <li>
              <Link className="menu-item" to="/" >Home</Link>
            </li>
            <li>
              <Link className="menu-item" to="/skills">Skills</Link>
            </li>
            <li>
              <Link className="menu-item" to="/experiance" >Work Experience</Link>
            </li>
            <li>
              <Link className="menu-item" to="contact" >Contact Me</Link>
            </li>
            {/* <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button> */}
            <a className="contact-btn" href="mailto:abhishramishra07@gmail.com">Hire Me</a>
          </ul>
          
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {/* -<br/><br/><br/><br/>-<br/><br/><br/><br/>- */}
              {openMenu ? "*":`--`}

            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
