import React from "react";
import playStore from "../../../images/Playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>store887</h1>
        <p>Your E Commerce shop for amazing products at affordable rates...</p>

        <p>Copyrights 2021 &copy; Ashutosh Jha</p>
      </div>

      <div className="rightFooter">
        <h4>Reach Out</h4>
        <a href="http://instagram.com/ashutosh.jha_">Instagram</a>
        <a href="https://in.linkedin.com/in/ashutosh887">LinkedIn</a>
        <a href="https://twitter.com/ashutoshj887">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
