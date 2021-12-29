import React, { useState } from "react";
import "./Landing.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import OrangeButton from "../../components/Button/OrangeButton";
import BlackMan from "../../assets/BlackMan.png";
import Auto from "../../assets/Auto.svg";
import Recharge from "../../assets/Recharge.svg";
import Schedule from "../../assets/Schedule.svg";
import AppScreen from "../../assets/app-screens.png";
import HomePage from "../../assets/HomePage.png";
import HomePage2 from "../../assets/HomePage2.png";
import Eclipse from "../../assets/Ellipse 16.png";
import Eclipse1 from "../../assets/Ellipse 17.png";
import Rectangle from "../../assets/Rectangle 25.png";
// import { useKeycloak } from '@react-keycloak/web';
import axios from "axios";
import services from "../../utils/defaults";

const Landing = () => {
  // const { keycloak } = useKeycloak();
  const [state, setState] = useState({
    service: 'Airtime',
    provider: 'MTN-AIRTIME',
    amount: '',
    phoneNumber: '',
    serviceNumber: '',
    productID: '',
    valid: false
  });
  const [activeService, setActiveService] = useState("");
  const [activeProvider, setActiveProvider] = useState("");
  const [providers, setProviders] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [selectInput, setSelectInput] = useState(false);
  const [dataPlans, setDataPlans] = useState([]);
  const [loadingBar, setLoadingBar] = useState(false);

  const activeServiceHandler = (service) => {
    setActiveService(service.title)
    setProviders(service.providers)
    setInputs(service.inputs)
    setSelectInput(service.select)
  };
  const activeProviderHandler = (provider) => {
    setActiveProvider(provider.serviceCode);
    if (activeService === 'Data') getPlans(provider.serviceCode)
  }

  const getPlans = (network) => {
    axios
        .get(
          `https://onecard.factorialsystems.io/api/v1/recharge/plans/${network}`,
          { headers: { "Content-Type": "application/json", }, }
        )
        .then((res) => setDataPlans(res.data))
        .catch((err) => {
          console.log(err);
        });
  }

  const rechargeHandler = (e) => {
    e.preventDefault();
    let rechargeData;
    setLoadingBar(true);

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    switch(activeService) {
      case 'Data':
        rechargeData = {
          serviceCode: activeProvider,
          recipient: state.phoneNumber,
          serviceCost: state.amount,
          productId: state.productID,
          redirectUrl: window.location.origin + "/success",
        };
        break;
      case 'Airtime':
        rechargeData = {
          serviceCode: activeProvider,
          recipient: state.phoneNumber,
          serviceCost: state.amount,
          redirectUrl: window.location.origin + "/success",
        };
        break;
      case 'Power':
        rechargeData = {
          serviceCode: activeProvider,
          recipient: state.serviceNumber,
          telephone: state.phoneNumber,
          serviceCost: state.amount,
          redirectUrl: window.location.origin + "/success",
        };
        break;
      default:
        rechargeData = {
          serviceCode: activeProvider,
          recipient: state.phoneNumber,
          serviceCost: state.amount,
          redirectUrl: window.location.origin + "/success",
        };
    }

    axios
      .post(
        "https://onecard.factorialsystems.io/api/v1/recharge",
        rechargeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        window.location.href = res.data.authorizationUrl;
      })
      .catch((err) => {
        setLoadingBar(false);
      });
  };

  const inputHandler = (val, stateOption) => {
    if (String(val).length <= 15) setState({ ...state, [stateOption]: val })
    
    // switch(activeService) {
    //   case 'Data':
    //     // if (activeProvider) console.log('provider is true')
    //     // if (state.phoneNumber.length >= 11) console.log('phone is true')
    //     if (activeProvider && state.phoneNumber.length >= 11) setState({ ...state, valid: true })
    //     break;
    //   default:
    //     setState({ ...state, valid: false })
    // }
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
            <img src={Eclipse} alt="Eclipse" className="Eclipse" />
            <img src={Eclipse1} alt="Eclipse1" className="Eclipse1" />
          </div>
          <div className="quick-recharge">
            <form className="qr-content" onSubmit={rechargeHandler}>
              <h3>Quick Recharge</h3>
              <div className="qr-options">
                <p>What would you like to do?</p>
                <ul className="options-list">
                  {
                    services.map(service => <li
                      className={activeService === service.title ? "active" : ""}
                      onClick={() => activeServiceHandler(service)}
                      key={service.title}
                    >
                      <div>
                        <span className="material-icons">{service.icon}</span>
                        <span>{service.name}</span>
                      </div>
                    </li>)
                  }
                </ul>
              </div>
              <ul className="qr-providers">
                {
                  providers.map((provider, index) => (
                    <li
                      key={index}
                      className={
                        activeProvider === provider.serviceCode ? "active" : ""
                      }
                      onClick={() => activeProviderHandler(provider)}
                    >
                      <img
                        src={provider.logo}
                        alt={`provider - ${provider.provider}`}
                      />
                    </li>))
                }
              </ul>
              <div className="inputs">
                {
                  selectInput && dataPlans.length > 0 && <select 
                    className="select-input"
                    value={state.productID}
                    onChange={(e) => inputHandler(e.target.value, 'productID')}
                  >
                    { dataPlans.map(plan => <option
                        key={plan.product_id}
                        value={plan.product_id}>
                          {'N' + new Intl.NumberFormat('en-US').format(plan.price) + ' - ' + plan.validity}
                        </option>
                      )
                    }
                  </select>
                }
                {
                  inputs.map(input => <input
                    type={input.type}
                    placeholder={input.placeholder}
                    key={input.placeholder}
                    name={input.value}
                    value={state[input.value]}
                    onChange={(e) => inputHandler(e.target.value, input.value)}
                  />)
                }
              </div>
              <div className="button-section">
                {/* {errorMsg && <p className="error-message">{errorMsg}</p>} */}
                <OrangeButton buttonText="Recharge" loading={loadingBar} 
                  // disabled={!activeProvider && !state.phoneNumber} />
                  // disabled={!state.valid} 
                  />
                <p>
                  For more recharge options | <span>Sign up</span>
                </p>
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
        <div className="ColorRectangle4">
          <div className="ColorRectangle5"></div>
        </div>
        <div className="ColorRectangle6"></div>
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
    </div>
  );
};

export default Landing;
