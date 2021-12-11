import React from "react";
import Landing from "./pages/Landing/Landing.js";
import Services from "./pages/Services/Services.js";
import Cards from "./pages/Cards/Cards.js";
import Contact from "./pages/Contact/Contact.js";
import SignIn from "./pages/SignIn/SignIn.js";
import SignUp from "./pages/SignUp/SignUp.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from "./pages/Success/Success.js";
import Blog from "./pages/Blog/Blog.js";
import Account from "./pages/Account/Account.js";
import BlogDetails from "./pages/BlogDetails/BlogDetails.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Landing} />
          <Route path="/services" component={Services} />
          <Route path="/cards" component={Cards} />
          <Route path="/contact" component={Contact} />
          <Route path="/success" component={Success} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogdetails" component={BlogDetails} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
