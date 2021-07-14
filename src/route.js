import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {NotFoundPage} from './components'
import {
  Login,
  Home,
} from "./containers";
import { Navbar, Footer } from "./commun";
const RouteComponent = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
      
      <Footer />
    </Router>
  
  );
};
export default RouteComponent;
