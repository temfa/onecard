import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import UserService from "./services/UserService";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
// import { Provider } from 'react-redux'
// import Store from './redux/store'

const renderApp = () => ReactDOM.render(
  <ReactKeycloakProvider authClient={keycloak}>
    {/* <Provider store={Store}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </Provider> */}
  </ReactKeycloakProvider>,
  document.getElementById('root')
);

renderApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
