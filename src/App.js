import React from "react";
// import "./styles/App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
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

import routes from "./components/shared/routes";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          {/* <PrivateRoute component={Navbar} /> */}
          {/* <PrivateRoute component={Sidebar} /> */}

          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={routes} />
            {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}

            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/user/:id" component={User} />
            <PrivateRoute exact path="/userForm/:id?" component={UserForm} />
            <PrivateRoute exact path="/addspace/:id?" component={AddSpace} />

            <PrivateRoute exact path="/addspace" component={AddSpace} />

            <PrivateRoute exact path="/listedspaces" component={ListedSpaces} />
            <PrivateRoute exact path="/payments" component={Payments} />

            <Route exact path="/allspaces" component={AllSpaces} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/login" component={Login} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
