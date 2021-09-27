import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <h1 class="logo"><a href="index.html" style="font-weight: 500;">LiteStore</a></h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
        <Link to="/">
          <a href className="logo">
            <img src="assets/img/logo.webp" alt="" className="img-fluid" />
          </a>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/community">
              <li className="nav-link scrollto hover:text-white  text-lsBack">
                Community
              </li>
            </Link>
            <Link to="/listaspace">
              <li>
                <a className="nav-link scrollto" href="list-your-space.html">
                  List a space
                </a>
              </li>
            </Link>
            <Link to="/allspaces">
              <li>
                <a className="nav-link scrollto" href="list-your-space.html">
                  Find a space
                </a>
              </li>
            </Link>

            <li className="dropdown">
              <a className="nav-link scrollto" href="#">
                <span>FAQs</span> <i className="fas fa-chevron-down" />
              </a>
              <ul>
                {/* <li><a class="nav-link scrollto" href="faqs/faqs-general.html" style="font-weight: bold;">All</a></li> */}
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
                  <Link to="/faqs" href="#">
                    <span>For Landowners</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/faqs/landowners/general"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-1"
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/how-it-works"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-2"
                      >
                        How does it work
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/legal-questions"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-3"
                      >
                        Legal Questions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/payments"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-4"
                      >
                        Payments
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/faqs" href="#">
                    <span>For Brands and Businesses</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/faqs/brands/how-it-works"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-5"
                      >
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/booking-a-space"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-6"
                      >
                        Booking a Space
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/legal-questions"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-7"
                      >
                        Legal Questions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/payments"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-8"
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
                    href="faqs/faqs-litestore.html#lsservices"
                  >
                    LiteStore Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#covid"
                  >
                    Covid-19 Questions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#designers"
                  >
                    For Designers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="nav-link scrollto" href="#">
                <span>Account</span> <i className="fas fa-chevron-down" />
              </a>
              <ul>
                <li>
                  <Link
                    to="/login"
                    // className="nav-link scrollto"
                    // data-bs-toggle="modal"
                    // data-bs-target="#loginmod"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/signup",
                      role: "LandOwner",
                    }}
                    className="nav-link scrollto"
                  >
                    Land Owner Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/signup",
                      role: "Brand",
                    }}
                    className="nav-link scrollto"
                  >
                    Brand Sign Up
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
