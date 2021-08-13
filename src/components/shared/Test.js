import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Abc from "./smol pages/ListASpace";
import Community from "./smol pages/Community";

const Test = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <PrivateRoute component={Navbar} /> */}
      <Switch>
        <Route exact path="/" component={Abc} />
        <Route exact path="/community" component={Community} />

        <Abc />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Test;
