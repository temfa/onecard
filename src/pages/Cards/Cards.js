import React from "react";
import "./Cards.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Phone from "../../assets/Phone.png";
import Left from "../../assets/Left.png";
import Right from "../../assets/Right.png";
import Happy from "../../assets/happy.png";
import Bottom from "../../assets/Bottom.png";
import Ellipse from "../../assets/Ellipse 17.png";
import Ellipse2 from "../../assets/Ellipse 19.png";
import Ellipse3 from "../../assets/Ellipse 18.png";
import Group from "../../assets/Group.png";
import Group2 from "../../assets/Group 189.png";
import Group3 from "../../assets/Group 190.png";
import Layer from "../../assets/Layer 3.png";
import { useKeycloak } from "@react-keycloak/web";
import ApiService from "../../services/ApiService";

const Cards = () => {
  const { keycloak } = useKeycloak();
  console.log(keycloak);

  const HTTP = ApiService.instance;
  HTTP.get("/provider/amounts").then((res) => console.log(res.data));

  return (
    // <div>
    //   <h1>Cards Page</h1>

    //   <strong>Anyone can access this page</strong>

    //   {keycloak.init ?
    //     keycloak.authenticated && <pre >{JSON.stringify(keycloak, undefined, 2)}</pre>
    //     : <h2>keycloak initializing ....!!!!</h2>
    //   }
    // </div>
    // <div>
    //   <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>
    //   {!!keycloak?.authenticated && (
    //     <button type="button" onClick={() => keycloak.logout()}>
    //       Logout
    //     </button>
    //   )}
    // </div>
    <div>
      <div className="CardWelcome">
        <Header />
        {/* {!keycloak.authenticated && <pre >{JSON.stringify(keycloak, undefined, 2)}</pre>} */}
        <div className="CardWelcomeBody">
          <h2>
            Enjoy customized
            <span>
              <br /> OneCard
            </span>{" "}
            with your friends, families & more
          </h2>
          <Button
            buttonText="Explore"
            Color="White"
            marginTop="18px"
            backgroundColor="#EB6A2B"
          />
        </div>
        <img src={Happy} alt="Happy" className="happy" />
      </div>
      <div className="WhatWeOffer">
        <div>
          <img src={Phone} alt="Phone" className="Phone" />
          <img src={Ellipse} alt="Ellipse" className="CardEllipse" />
          <h2>
            Get to know<span> what we offer</span>
          </h2>
        </div>
        <p>
          The OneCard recharge cards can be customized for brands, individuals
          and organizations with the front of the card-carrying specific design
          as desired by the client.
        </p>
        <p>
          Customized OneCard can only be used for promotional purposes, they are
          not allowed for sale in trade except for orders relating to designated
          revenue collection
        </p>
        <p>
          Usage of the card is very simple; to recharge any mobile network, a
          user simply dials *979*PIN# while to top up any bank account, user
          simply dials *979*SPID*PIN*NUBAN# where SPID represents the USSD code
          of the bank e.g 737 for GTB. Instructions for use are also written on
          the cards.
        </p>
        <p>
          These multipurpose cards come in sizes and denominations as desired by
          the customer.
        </p>
      </div>
      <div className="ColorRectangle4">
        <div className="ColorRectangle5"></div>
      </div>
      <div className="ColorRectangle6"></div>
      <div className="WhatCardDo">
        <h2>Who can you gift your OneCard Recharge Cards to?</h2>
        <div className="ContainerCard">
          <div className="Container">
            <div>
              <img src={Layer} alt="Layer" />
            </div>
            <p>Employees</p>
          </div>
          <div className="Container">
            <div>
              <img src={Group2} alt="Group2" />
            </div>
            <p>Family and Friends</p>
          </div>
          <div className="Container">
            <div>
              <img src={Group} alt="Group" />
            </div>
            <p>Occassion Guests</p>
          </div>
          <div className="Container">
            <div>
              <img src={Group3} alt="Group3" />
            </div>
            <p>Competition Winners</p>
          </div>
        </div>
        <div className="Images">
          <img src={Ellipse2} alt="Ellipse2" className="CardEllipse2" />
          <img src={Left} alt="" className="FirstPicture" />
          <img src={Right} alt="" className="SecondPicture" />
          <img src={Ellipse3} alt="Ellipse3" className="CardEllipse3" />
        </div>
      </div>
      <div className="CustomizedCards">
        <h2>Get Your Customized Recharge Cards</h2>
        <p>
          Our multipurpose recharge card (OneCard); available in various
          denominations N50 - N10,000. Also customizable for brands and service
          providers
        </p>
        <div className="CardsRequestBody">
          <div className="CardsRequest">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number" />
            <select>
              <option>Order Quantity</option>
            </select>
            <select>
              <option>Denomination </option>
            </select>
            <button>Request Recharge Card</button>
          </div>
          <div className="CardPicture">
            <img src={Bottom} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cards;
