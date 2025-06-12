import React from "react";
import "./Footer.scss";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="footer-contents">
        <img src={Logo} alt="bootstrap" height={60} width={60}></img>
        <span className="footer-details">
          COPYRIGHT © 2025 PROFESSIONAL REGULATION COMMISSION. ALL RIGHTS
          RESERVED.
        </span>
      </div>
    </div>
  );
};

export default Footer;
