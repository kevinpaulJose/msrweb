import React from "react";
import "./nav.css";
import logo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <div className="avatar">
          <img className="avatar-img" src={logo} alt="logo" />
        </div>
        <div className="head-text-container">
          <span className="head-text">MSR Construction</span>
        </div>
        <div className="contact-wrapper">
          <div className="email">
            <a href="mailto:msrconstruction.co.in@gmail.com">
              <span>msrconstruction.co.in@gmail.com</span>
            </a>
          </div>
          <div className="call">
            <a href="tel:9487854458">Call us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
