import React from "react";
// import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import UserForm from "./components/users/UserForm";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from "./components/pages/Login";
import ListedSpaces from "./components/listedSpaces/listedspaces";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import NotFound from "./components/pages/NotFound";

import test from './components/shared/smol pages/ListSpace'

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          {/* <PrivateRoute component={Navbar} /> */}
          <Switch>
            <Route exact path="/" component={test} />

            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/user/:id" component={User} />
            <PrivateRoute exact path="/userForm/:id?" component={UserForm} />
            <PrivateRoute exact path="/listedspaces" component={ListedSpaces} />
            <Route exact path="/allspaces" component={ListedSpaces} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
