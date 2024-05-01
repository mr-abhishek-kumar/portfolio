import React from "react";
import "./MobileNav.css";
import { Link } from 'react-router-dom';


function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src="./assets/images/mylogo.jpg" className="logo" />

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
          
        </div>
      </div>
    </>
  );
}

export default MobileNav;
