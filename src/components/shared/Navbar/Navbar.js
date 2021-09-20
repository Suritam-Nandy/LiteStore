import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <h1 class="logo"><a style="font-weight: 500;">LiteStore</a></h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
        <Link to="/" className="logo">
          <img src="assets/img/logo.webp" alt="" className="img-fluid" />
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <Link to="/dashboard"
              className="nav-link scrollto"
              style={{ fontWeight: "bold" }}
            >
              <li>
                Dashboard
              </li>
            </Link>
            <Link to="/community"
              className="nav-link scrollto"
              style={{ fontWeight: "bold" }}>
              <li>
                Community
              </li>
            </Link>
            <Link to="/listaspace" className="nav-link scrollto">
              <li>
                List a space
              </li>
            </Link>
            <Link to="/allspaces" className="nav-link scrollto">
              <li>
                Find a space
              </li>
            </Link>

            <li className="dropdown">
              <a className="nav-link scrollto">
                <span>FAQs</span> <i className="fas fa-chevron-down" />
              </a>
              <ul>
                {/* <li><a class="nav-link scrollto" style="font-weight: bold;">All</a></li> */}
                <Link
                  to="/faqs"
                  className="nav-link scrollto"
                  style={{ fontWeight: "bold" }}
                >
                  <li>All</li>
                </Link>
                <li>
                  <Link to="/faqs/general" className="nav-link scrollto">
                    General
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/faqs">
                    <span>For Landowners</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/faqs/landowners/general"
                        className="nav-link scrollto"
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/how-it-works"
                        className="nav-link scrollto"
                      >
                        How does it work
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/legal-questions"
                        className="nav-link scrollto"
                      >
                        Legal Questions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/payments"
                        className="nav-link scrollto"
                      >
                        Payments
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/faqs">
                    <span>For Brands and Businesses</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/faqs/brands/how-it-works"
                        className="nav-link scrollto"
                      >
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/booking-a-space"
                        className="nav-link scrollto"
                      >
                        Booking a Space
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/legal-questions"
                        className="nav-link scrollto"
                      >
                        Legal Questions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/payments"
                        className="nav-link scrollto"
                      >
                        Payments and Pricing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                  >
                    LiteStore Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                  >
                    Covid-19 Questions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                  >
                    For Designers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="nav-link scrollto">
                <span>Account</span> <i className="fas fa-chevron-down" />
              </a>
              <ul>
                <li>
                  <Link
                    to=""
                    className="nav-link scrollto"
                    data-bs-toggle="modal"
                    data-bs-target="#loginmod"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link scrollto">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="nav-link scrollto phone-sty"
                href="tel:+91-6363294498"
              >
                <i
                  className="fas fa-phone-alt fa-4x"
                  style={{ padding: "10px 10px 10px 0px" }}
                />
                6363294498
              </a>
            </li>
          </ul>
          <i className="fas fa-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Navbar;
