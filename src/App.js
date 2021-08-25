import React from "react";
// import "./styles/App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "./components/shared/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar";

import Users from "./components/users/Users";
import User from "./components/users/User";
import UserForm from "./components/users/UserForm";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from "./components/pages/Login";
import Signup from "./components/auth/SignUp";

// import ListedSpaces from "./components/listedSpaces/listedspaces";  <-- all places -->  #works fine
import Dashboard from "./components/pages/dashboard/Dashboard";
import AddSpace from "./components/pages/dashboard/AddSpace";
import ListedSpaces from "./components/pages/dashboard/ListedSpaces";
import Payments from "./components/pages/dashboard/Payments";
import AllSpaces from "./components/pages/AllSpaces";
import PrivateRoute from "./components/routes/PrivateRoute";
import NotFound from "./components/pages/NotFound";
import ScrollToTop from "./components/shared/tools/ScrollToTop";

import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import Home from "./components/shared/static pages/Home";
import Community from "./components/shared/static pages/Community";
import ListASpace from "./components/shared/static pages/ListASpace";
import faqs from "./components/shared/static pages/faqs/FaqsList";
import faqGeneral from "./components/shared/static pages/faqs/FaqsGeneral";
import faqLandowners from "./components/shared/static pages/faqs/Landowners";
import faqBrands from "./components/shared/static pages/faqs/Brands";
import faqLitestore from "./components/shared/static pages/faqs/Miscellaneous";
import Careers from "./components/shared/static pages/Careers";
import Company from "./components/shared/static pages/Company";
import DesignHub from "./components/shared/static pages/DesignHub";
import Services from "./components/shared/static pages/Services";
import Blog from "./components/shared/static pages/blog/BlogList";
import BlogOne from "./components/shared/static pages/blog/BlogOne";
import BlogTwo from "./components/shared/static pages/blog/BlogTwo";
// import allSpaces from "../pages/AllSpaces";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <Navbar />
          {/* <PrivateRoute component={Navbar} /> */}
          <ScrollToTop />
          {/* <PrivateRoute component={Sidebar} /> */}

          {/* <Navbar /> */}
          <Switch>
            {/* <Route exact path="/" component={routes} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/listaspace" component={ListASpace} />
            <Route exact path="/faqs" component={faqs} />2
            <Route exact path="/faqs/general" component={faqGeneral} />
            <Route
              exact
              path="/faqs/landowners/general"
              component={faqLandowners}
            />
            <Route
              exact
              path="/faqs/brands/how-it-works"
              component={faqBrands}
            />
            <Route exact path="/faqs/litestore" component={faqLitestore} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/company" component={Company} />
            <Route exact path="/designhub" component={DesignHub} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/the-future-of-retail-1" component={BlogOne} />
            <Route exact path="/the-future-of-retail-2" component={BlogTwo} />
            <Route exact path="/allspaces" component={AllSpaces} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/user/:id" component={User} />
            <PrivateRoute exact path="/userForm/:id?" component={UserForm} />
            <PrivateRoute exact path="/addspace/:id?" component={AddSpace} />
            <PrivateRoute exact path="/addspace" component={AddSpace} />
            <PrivateRoute exact path="/listedspaces" component={ListedSpaces} />
            <PrivateRoute exact path="/payments" component={Payments} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
        <Footer />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
