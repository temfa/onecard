import React from "react";
import "./Services.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import ServicesBox from "../../components/ServicesBox/ServicesBox";
import ServicesMan from "../../assets/ServicesMan.png";
import System from "../../assets/System.png";
import LightBulb from "../../assets/LightBulb.png";
import GroupPeople from "../../assets/GroupPeople.png";
import Laptop from "../../assets/Laptop.png";
import BlackMan2 from "../../assets/BlackMan2.png";
import Ellipse from "../../assets/Ellipse 21.png";
import Rectangle from "../../assets/Rectangle 33.png";

const Services = () => {
  const serviceDetails = [
    {
      buttonText: "Quick Recharge",
      bigText: "Airtime and Data",
      smallText:
        "Recharge as low as N50 and up to N50,000 in a single transaction",
      imgName: ServicesMan,
      imgName2: Ellipse,
      backgroundColor: "#FDF0EA",
      top: "1097px",
      left: "950px",
    },
    {
      buttonText: "Recharge for 2 or more numbers",
      bigText: "Bulk Recharge",
      smallText:
        "A convenient way to recharge for hundreds or thousands all at once",
      imgName: System,
      imgName2: Ellipse,
      backgroundColor: "White",
      top: "1852px",
      left: "230px",
    },
    {
      buttonText: "Pay a bill",
      bigText: "Utility Bills",
      smallText:
        "You can also pay for scratch cards, electricity bills and TV subscriptions",
      imgName: LightBulb,
      imgName2: Ellipse,
      backgroundColor: "#FDF0EA",
      top: "2655px",
      left: "980px",
    },
    {
      buttonText: "Create a beneficiary",
      bigText: "Beneficiaries",
      smallText:
        "Save numbers (phone, smartcard, meter) as beneficiaries for quick repeat transactions",
      imgName: GroupPeople,
      backgroundColor: "White",
      imgName2: Ellipse,
      top: "3416px",
      left: "234px",
    },
    {
      buttonText: "Schedule a recharge",
      bigText: "Scheduled & Auto Recharge",
      smallText:
        "Schedule or automically repeat your recharges or payments with a single transaction",
      imgName: Laptop,
      imgName2: Ellipse,
      backgroundColor: "#FDF0EA",
      top: "4191px",
      left: "965px",
    },
  ];
  return (
    <div>
      <div className="WelcomeService">
        <Header />
        <div className="Explore">
          <h2>
            Enjoy various
            <span> recharge and payment options with One1Card</span>
          </h2>
          <Button
            buttonText="Explore"
            Color="White"
            backgroundColor="#EB6A2B"
            marginTop="50px"
            width="231px"
            height="56px"
          />
        </div>
      </div>
      {serviceDetails.map((service, index) => (
        <ServicesBox
          key={index}
          bigText={service.bigText}
          smallText={service.smallText}
          buttonText={service.buttonText}
          imgName={service.imgName}
          imgName2={service.imgName2}
          backgroundColor={service.backgroundColor}
          top={service.top}
          left={service.left}
        />
      ))}
      <div className="SignUp">
        <div>
          <div>
            <img src={BlackMan2} alt="BlackMan2" />
            <img src={Rectangle} alt="Rectangle" className="ServiceRectangle" />
          </div>
          <div>
            <h2>Sign up and enjoy swift recharge service to any network</h2>
            <Button
              backgroundColor="#EB6A2B"
              Color="white"
              buttonText="Sign up for free"
              marginTop="40px"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
