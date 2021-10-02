import React from "react";
import Landing from "./pages/Landing/Landing.js";
import Services from "./pages/Services/Services.js";
import Cards from "./pages/Cards/Cards.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>One1Card Website Design</h1> */}
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Landing} />
          <Route path="/services" component={Services} />
          <Route path="/cards" component={Cards} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
