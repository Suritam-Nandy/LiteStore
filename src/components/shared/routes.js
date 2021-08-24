import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from './tools/ScrollToTop';

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./static pages/Home";
import Community from "./static pages/Community";
import ListASpace from "./static pages/ListASpace";
import faqs from "./static pages/faqs/FaqsList";
import faqGeneral from "./static pages/faqs/FaqsGeneral";
import faqLandowners from "./static pages/faqs/Landowners";
import faqBrands from "./static pages/faqs/Brands";
import faqLitestore from "./static pages/faqs/Miscellaneous";
import Careers from "./static pages/Careers";
import Company from "./static pages/Company";
import DesignHub from "./static pages/DesignHub";
import Services from "./static pages/Services";
import Blog from "./static pages/blog/BlogList";
import BlogOne from "./static pages/blog/BlogOne";
import BlogTwo from "./static pages/blog/BlogTwo";
import allSpaces from "../pages/AllSpaces";
// import dashboard from "../pages/dashboard/Dashboard";

const routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <PrivateRoute component={Navbar} /> */}
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/listaspace" component={ListASpace} />
        <Route exact path="/faqs" component={faqs} />2
        <Route exact path="/faqs/general" component={faqGeneral} />
        <Route exact path="/faqs/landowners/general" component={faqLandowners} />
        <Route exact path="/faqs/brands/how-it-works" component={faqBrands} />
        <Route exact path="/faqs/litestore" component={faqLitestore} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/designhub" component={DesignHub} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/the-future-of-retail-1" component={BlogOne} />
        <Route exact path="/the-future-of-retail-2" component={BlogTwo} />
        <Route exact path="/allspaces" component={allSpaces} />
        {/* <Route exact path="/dashboard" component={dashboard} /> */}

        <Home />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default routes;