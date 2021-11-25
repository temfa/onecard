import React from "react";
import Landing from "./pages/Landing/Landing.js";
import Services from "./pages/Services/Services.js";
import Cards from "./pages/Cards/Cards.js";
import Contact from "./pages/Contact/Contact.js";
import SignIn from "./pages/SignIn/SignIn.js";
import SignUp from "./pages/SignUp/SignUp.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <div className="App">
          <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/home" component={Landing} />
              <Route path="/services" component={Services} />
              <Route path="/cards" component={Cards} />
              <Route path="/contact" component={Contact} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
