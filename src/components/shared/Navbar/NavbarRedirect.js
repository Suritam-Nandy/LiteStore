import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import Home from "../static pages/Home";
import Community from "../static pages/Community";
import Careers from "../static pages/Careers";
import Company from "../static pages/Company";
import DesignHub from "../static pages/DesignHub";
import ListASpace from "../static pages/ListASpace";
import Services from "../static pages/Services";

const NavbarRedirect = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <PrivateRoute component={Navbar} /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/listaspace" component={ListASpace} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/community" component={Community} />

        <Home />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default NavbarRedirect;