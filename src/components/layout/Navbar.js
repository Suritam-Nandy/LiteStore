import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
const Navbar = () => {
  const firebase = useFirebase();
  const uid = firebase.auth().currentUser.uid;
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div>{uid}</div>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1 height="30px" alt="logo">
            LOGO
          </h1>
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="dropdownContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dropdownContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/userForm" className="btn btn-primary mr-3">
                Add User
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <h1 alt="admin" height="30">
                  user logo
                </h1>
                />
                <span className="ml-2 navbar-text">{uid}</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="!#">
                  Profile
                </a>
                <a
                  className="dropdown-item"
                  href="!#"
                  onClick={() => firebase.logout()}
                >
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="!#">
                  Ads
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
