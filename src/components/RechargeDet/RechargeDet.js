import React, { useState, useEffect } from "react";
import "./RechargeDet.css";
// import Providers from "../../utils/providers";
import axios from "axios";
import OrangeButton from "../../components/Button/OrangeButton";
import { useHistory } from 'react-router-dom';
import services from "../../utils/defaults";

const RechargeDet = () => {
  const history = useHistory();
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
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => redirectToPaymentFeedback() )

  const redirectToPaymentFeedback = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const trxref = params["trxref"];
    // console.log(params, trxref)

    if(trxref && localStorage.id) {
    // if(trxref && localStorage.id) {
      history.push('/feedback')
    } else if (trxref) {
      window.history.replaceState(null, 'OneCard | OneCard Nigeria', '/')
    }
  }

  const activeServiceHandler = (service) => {
    setActiveService(service.title)
    setActiveProvider('')
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

    // const formData = new FormData(e.target);
    // const formProps = Object.fromEntries(formData);

    switch(activeService) {
      case 'Data':
        if (activeProvider && state.phoneNumber && state.productID) {
          rechargeData = {
            serviceCode: activeProvider,
            recipient: state.phoneNumber,
            productId: state.productID,
            redirectUrl: window.location.origin,
          };
          rechargeFunc(rechargeData)
        } else {
          setLoadingBar(false);
          setErrorMsg('Please complete the form to continue')
          setTimeout(() => {
            setErrorMsg('')
          }, 2000)
        }
        break;
      case 'Airtime':
        if (activeProvider && state.phoneNumber && state.amount) {
        rechargeData = {
          serviceCode: activeProvider,
          recipient: state.phoneNumber,
          serviceCost: state.amount,
          redirectUrl: window.location.origin,
          // redirectUrl: window.location.origin + "/success",
        };
        rechargeFunc(rechargeData)
      } else {
        setLoadingBar(false);
        setErrorMsg('Please complete the form to continue')
        setTimeout(() => {
          setErrorMsg('')
        }, 2000)
      }
        break;
      case 'Power':
        if (activeProvider && state.serviceNumber && state.phoneNumber && state.amount) {
        rechargeData = {
          serviceCode: activeProvider,
          recipient: state.serviceNumber,
          telephone: state.phoneNumber,
          serviceCost: state.amount,
          redirectUrl: window.location.origin,
        };
        rechargeFunc(rechargeData)
      } else {
        setLoadingBar(false);
        setErrorMsg('Please complete the form to continue')
        setTimeout(() => {
          setErrorMsg('')
        }, 2000)
      }
        break;
      default:
        setLoadingBar(false);
        setErrorMsg('Something went wrong! Please refresh and try again..')
        setTimeout(() => {
          setErrorMsg('')
        }, 2000)
    }
  };

  const rechargeFunc = (rechargeData) => {
    axios
      .post(
        "https://onecard.factorialsystems.io/api/v1/auth-recharge",
        rechargeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // window.location.href = res.data.authorizationUrl;
        // localStorage.id = res.data.id
        // localStorage.recipient = rechargeData.recipient
      })
      .catch((err) => {
        setLoadingBar(false);
      });
  }

  const inputHandler = (val, stateOption) => {
    if (String(val).length <= 15) setState({ ...state, [stateOption]: val })
  }

  return (
    <div>
      <h2 className="recharge-banner">Recharge Details</h2>
      <div className="recharge-details">
        <form className="qr-content" onSubmit={rechargeHandler}>
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
                <option style={{opacity:'0.5'}}>Choose one {activeProvider} plan</option>
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
          {/* <div className="recharge-inputs">
            <input
              type="text"
              placeholder="Select Data Plan"
              disabled
            />
            <div className="bene">
              <button>Choose Beneficiaries</button>
              <div className="bene-circles">
                <div>AD</div>
                <div>AD</div>
                <div>AD</div>
                <div>AD</div>
                <div>AD</div>
              </div>
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              disabled
            />
          </div>
          <p className="more-info">{props.details}</p> */}
          <div className="button-section">
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            <OrangeButton buttonText="Next" loading={loadingBar} />
          </div>
          <p className="amount-remain">
            Wallet Balance: <span> NGN 345,678,896.00 </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RechargeDet;
