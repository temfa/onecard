import React from "react";
import "./Cards.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Phone from "../../assets/Phone.png";
import Left from "../../assets/Left.png";
import Right from "../../assets/Right.png";

const Cards = () => {
  return (
    <div>
      <div className="CardWelcome">
        <Header />
        <div className="CardWelcomeBody">
          <h2>
            Enjoy customized<span> One1Card</span> with your friends, families &
            more
          </h2>
          <Button
            buttonText="Explore"
            Color="White"
            marginTop="18px"
            backgroundColor="#EB6A2B"
          />
        </div>
      </div>
      <div className="WhatWeOffer">
        <div>
          <img src={Phone} alt="Phone" />
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
        <h2>Who can you gift your One1Card to?</h2>
        <div className="ContainerCard">
          <div className="Container">
            <div></div>
            <p>Employees</p>
          </div>
          <div className="Container">
            <div></div>
            <p>Family and Friends</p>
          </div>
          <div className="Container">
            <div></div>
            <p>Occassion Guests</p>
          </div>
          <div className="Container">
            <div></div>
            <p>Competition Winners</p>
          </div>
        </div>
        <div className="Images">
          <img src={Left} alt="picture" className="FirstPicture" />
          <img src={Right} alt="picture" className="SecondPicture" />
        </div>
      </div>
      <div className="CustomizedCards">
        <div className="CardsRequest">
          <h2>Get Your Customized Cards</h2>
          <p>
            Our multipurpose recharge card (One1Card); available in various
            denominations N50 - N10,000. Also customizable for brands and
            service providers
          </p>
          <select>
            <option>Select Order Quantity</option>
          </select>
          <select>
            <option>Card Amount</option>
          </select>
          <Button
            buttonText="Request Card"
            marginTop="50px"
            backgroundColor="#EB6A2B"
            Color="White"
          />
        </div>
        <div className="CardPicture">
          <img src={Right} alt="picture" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cards;
