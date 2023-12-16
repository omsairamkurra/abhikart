import React from "react";
import "./footer.css";
import f_logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import pinterset from "../Assets/pintester_icon.png";
import whatsApp from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={f_logo} alt="footer" />
        <p>Abhikart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterset} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsApp} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
