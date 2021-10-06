import React from "react";
import "./Footer.css";
import LogoWhite from "../../assets/LogoWhite.png";
import instagram from "../../assets/instagram.png";
import Twitter from "../../assets/Twitter.png";
import Facebook from "../../assets/Facebook.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterHeader">
        <div className="FooterContainer">
          <div className="FooterText">
            <img src={LogoWhite} alt="logo" />
          </div>
          <div className="FooterNewsletter">
            <h2>Signup For Our Newsletter</h2>
            <div className="NewsletterBody">
              <input type="text" placeholder="Enter Your E-mail" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterBody">
        <div className="Copyright">
          <p>Copyright © 2021. All rights reserved.</p>
        </div>
        <div className="Socials">
          <img src={instagram} alt="" />
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
