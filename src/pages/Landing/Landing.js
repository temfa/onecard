import React, { useState } from "react";
import "./Landing.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import OrangeButton from "../../components/Button/OrangeButton";
// import PhoneMan from "../../assets/PhoneMan.png";
import BlackMan from "../../assets/BlackMan.png";
import Auto from "../../assets/Auto.svg";
import Recharge from "../../assets/Recharge.svg";
import Schedule from "../../assets/Schedule.svg";
import AppScreen from "../../assets/app-screens.png";
// import Man from "../../assets/man.png";
import HomePage from "../../assets/HomePage.png";
import HomePage2 from "../../assets/HomePage2.png";
// import Eclipse from "../../assets/Ellipse 16.png";
// import Eclipse1 from "../../assets/Ellipse 17.png";
import Rectangle from "../../assets/Rectangle 25.png";
// import { useKeycloak } from '@react-keycloak/web';
import Providers from "../../utils/providers";
import axios from 'axios';

const Landing = () => {
  // const { keycloak } = useKeycloak();
  const [activeService, setActiveService] = useState('Data')
  const [activeProvider, setActiveProvider] = useState('MTN-AIRTIME')
  const [providers] = useState(Providers)
  const [recipient, updateRecipient] = useState(0)
  const [cost, updateCost] = useState(0)
  const [loadingBar, setLoadingBar] = useState(false)

  const activeServiceHandler = (service) => setActiveService(service)
  const activeProviderHandler = (provider) => setActiveProvider(provider)
  const recipientHandler = (num) => num.length <= 11 ? updateRecipient(Number(num)) : null
  const costHandler = (num) => { updateCost(num) }

  const rechargeHandler = (e) => {
    e.preventDefault()
    setLoadingBar(true)
    const rechargeData = {
      "serviceCode": activeProvider,
      "recipient": recipient,
      "serviceCost": cost,
    }

    axios
      .post('https://onecard.factorialsystems.io/api/v1/recharge', rechargeData, { headers: {
        "Content-Type": "application/json"
      }})
      .then(res => {
        updateRecipient(0)
        updateCost(0)
        setLoadingBar(false)
        window.open(res.data.authorizationUrl)
      })
      .catch(err => {
        console.log(err)
        setLoadingBar(false)
      })
  }

  return (
    <div>
      {/* <div>{`User is ${!keycloak.authenticated ? 'NOT ' : ''
        }authenticated`}</div> */}

      {/* {!!keycloak.authenticated && ( */}
      <div className="Welcome">
        <Header />
        <div className="jumbo-recharge">
          <div className="WelcomeText">
            <h2>
              Life just got easier <span> with One1Card</span>
            </h2>
            <p>
              Schedule (or automatically repeat) airtime recharges, data
              recharges, tv subscriptions or electricity payments
            </p>
            <OrangeButton buttonText="Explore" frameOnly={true} />
          </div>
          <div className="quick-recharge">
            <form className="qr-content" onSubmit={rechargeHandler}>
              <h3>Quick Recharge</h3>
              <div className="qr-options">
                <p>What would you like to do?</p>
                <ul className="options-list">
                  <li
                    className={activeService === "Data" ? "active" : ""}
                    onClick={() => activeServiceHandler('Data')}
                  >
                    <div>
                      <span className="material-icons">wifi</span>
                      <span>Data</span>
                    </div>
                  </li>
                  <li
                    className={activeService === "Airtime" ? "active" : ""}
                    onClick={() => activeServiceHandler('Airtime')}
                  >
                    <div>
                      <span className="material-icons">phone_in_talk</span>
                      <span>Airtime</span>
                    </div>
                  </li>
                  <li
                    className={activeService === "Power" ? "active" : ""}
                    onClick={() => activeServiceHandler('Power')}
                  >
                    <div>
                      <span className="material-icons">power</span>
                      <span>Electricity</span>
                    </div>
                  </li>
                  <li
                    className={activeService === "CableTV" ? "active" : ""}
                    onClick={() => activeServiceHandler('CableTV')}
                  >
                    <div>
                      <span className="material-icons">live_tv</span>
                      <span>Cable TV</span>
                    </div>
                  </li>
                  <li
                    className={activeService === "Others" ? "active" : ""}
                    onClick={() => activeServiceHandler('Others')}
                  >
                    <div>
                      <span className="material-icons">add_circle_outline</span>
                      <span>Others</span>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="qr-providers">
                {
                  providers.map((provider, index) => <li
                    key={index}
                    className={activeProvider === provider.serviceCode ? "active" : ""}
                    onClick={() => activeProviderHandler(provider.serviceCode)}
                  >
                    <img src={provider.logo} alt={`provider - ${provider.provider}`} />
                  </li>)
                }
              </ul>
              <div className="inputs">
                <input 
                  type="text" placeholder="Phone number" 
                  onChange={e => recipientHandler(e.target.value)}
                />
                <input 
                  type="number" placeholder="Recharge amount" 
                  onChange={e => costHandler(e.target.value)}
                />
              </div>
              <div className="button-section">
                <OrangeButton buttonText="Recharge" loading={loadingBar} />
                <p>For more recharge options | <span>Sign up</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="Recharge">
        <div className="RechargeText">
          <h2>
            Recharge options with <span className="Card"> One1Card</span>
          </h2>
          <img src={HomePage2} className="Rectangle2" alt="HomePage" />
        </div>
        <div className="RechargeOption">
          <img src={HomePage} className="Rectangle" alt="HomePage" />
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <img src={Recharge} alt="Recharge" />
            </div>
            <p className="RechargePara1">Instant Recharge</p>
            <p className="RechargePara2">
              This allows you to recharge instantly
            </p>
          </div>
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <img src={Schedule} alt="Schedule" />
            </div>
            <p className="RechargePara1">Scheduled Recharge</p>
            <p className="RechargePara2">
              You can set a future date and time for a recharge
            </p>
          </div>
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <img src={Auto} alt="Auto" />
            </div>
            <p className="RechargePara1">Auto Recharge</p>
            <p className="RechargePara2">
              Recharges can be set to automically repeat daily, weekly or
              monthly
            </p>
          </div>
        </div>
      </div>
      <div className="Why">
        <div className="WhyUs">
          <div className="WhyPicture">
            <img src={BlackMan} alt="BlackMan" className="BlackMan" />
            <img src={Rectangle} alt="BlackMan" className="RectangleWhy" />
          </div>
          <div className="WhyBody">
            <h2>Why One1Card?</h2>
            <p>
              We have built a robust technology that enables every individual to
              enjoy easy, convenient and extensive recharge or payment solutions
              for various services.
            </p>
            <p>
              Verified individuals and businesses have access to even more
              powerful capabilities
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="DashboardContainer">
        <div className="ColorRectangle4">
          <div className="ColorRectangle5"></div>
        </div>
        <div className="ColorRectangle6"></div>
        <div className="DashboardPicture">
          <img className="Pictures" src={AppScreen} alt="FirstPicture" />
        </div>
        <div className="DashCon">
          <h2>Sign up and enjoy swift recharge service to any network</h2>
          <Button
            buttonText="Sign Up for Free"
            marginTop="50px"
            backgroundColor="#EB6A2B"
            Color="White"
          />
        </div>
      </div>
      <Footer />
      )
      {/* } */}
    </div>
  );
};

export default Landing;
