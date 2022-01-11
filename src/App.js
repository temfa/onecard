import React from "react";
import Landing from "./pages/Landing/Landing.js";
import Services from "./pages/Services/Services.js";
import Cards from "./pages/Cards/Cards.js";
import Contact from "./pages/Contact/Contact.js";
import SignIn from "./pages/SignIn/SignIn.js";
import SignUp from "./pages/SignUp/SignUp.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from "./pages/Success/Success.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import SingleRecharge from "./pages/SingleRecharge/SingleRecharge.js";
import Bulk from "./pages/Bulk/Bulk.js";
import Fund from "./pages/Fund/Fund.js";
import Roles from "./pages/Roles/Roles.js";
import Auto from "./pages/Auto/Auto.js";
import Beneficiaries from "./pages/Beneficiaries/Beneficiaries.js";
import Trans from "./pages/Trans/Trans.js";
import ProfilePage from "./pages/ProfilePage/ProfilePage.js";
import Blog from "./pages/Blog/Blog.js";
import Account from "./pages/Account/Account.js";
import BlogDetails from "./pages/BlogDetails/BlogDetails.js";
// import keycloak from "./keycloak.js";
import ProtectedRoute from "./utils/protected.js";

function App() {
  
  // useEffect(() => {
  //   // console.log(keycloak)
  //   keycloak.init()
  //   // window.location.href = keycloak.createLoginUrl()
  //   // console.log(keycloak.createLoginUrl())
  // })
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Landing} />
          <Route path="/services" component={Services} />
          <Route path="/cards" component={Cards} />
          <Route path="/contact" component={Contact} />
          <Route path="/feedback" component={Success} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogdetails" component={BlogDetails} />

          <Route 
            path="/dashboard"
            component={Dashboard}
          />
          {/* <Route 
            path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          /> */}
          <Route
            path="/single"
            element={<ProtectedRoute><SingleRecharge /></ProtectedRoute>} 
          />
          <Route
            path="/roles" 
            element={<ProtectedRoute><Roles /></ProtectedRoute>} 
          />
          <Route
            path="/fund"
            element={<ProtectedRoute><Fund /></ProtectedRoute>}
          />
          <Route 
            path="/auto"
            element={<ProtectedRoute><Auto /></ProtectedRoute>}
          />
          <Route 
            path="/beneficiaries"
            element={<ProtectedRoute><Beneficiaries /></ProtectedRoute>}
          />
          <Route 
            path="/trans"
            element={<ProtectedRoute><Trans /></ProtectedRoute>}
          />
          <Route 
            path="/bulk"
            element={<ProtectedRoute><Bulk /></ProtectedRoute>}
          />
          <Route 
            path="/profilepage"
            element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
          />
          <Route 
            path="/account"
            element={<ProtectedRoute><Account /></ProtectedRoute>}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
