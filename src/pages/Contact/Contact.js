import React from "react";
import "./Contact.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Vector from "../../assets/Vector.png";
import Ellipse from "../../assets/Ellipse 22.png";
import Ellipse2 from "../../assets/Ellipse 23.png";

const Contact = () => {
  return (
    <div>
      <div className="ContactHeader">
        <Header />
        <div className="Message">
          <img src={Ellipse} alt="Ellipse" />
          <img src={Ellipse2} alt="Ellipse2" className="ContactEllipse2" />
          <h2>
            Get in touch with One1Card,<span> Leave a message</span>
          </h2>
          <Button
            buttonText="Contact"
            Color="White"
            backgroundColor="#EB6A2B"
            marginTop="50px"
          />
        </div>
      </div>
      <div className="ContactForm">
        <div className="FormContainer">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <Button
            buttonText="Send"
            marginTop="72px"
            Color="White"
            backgroundColor="#EB6A2B"
          />
        </div>
        <div className="ContactDetails">
          <div>
            <div className="Top"></div>
          </div>
          <div className="ContactAddress">
            <img src={Vector} alt="Vector" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
