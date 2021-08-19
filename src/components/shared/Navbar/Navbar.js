import React from "react";
import { Link } from "react-router-dom";

import { BsChevronDown, BsChevronRight, BsList } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <header id="header" className="fixed max-w-full w-full">
      <div className="container flex items-center justify-between xl:justify-around">
        {/* <h1 className="logo"><a href="index.html" style="font-weight: 500;">LiteStore</a></h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="/" className="logo">
          <img src="/logo.webp" alt="" className="w-full h-auto"></img>
        </a>

        <nav id="navbar" className="navbar font-raleway font-light">
          <ul>
            <Link to="/" className="dropdown-item">
              <li className="pl-6 mr-4"> Dashboard</li>
            </Link>

            <li className="pl-6 mr-4">
              <a
                className="nav-link scrollto py-2 px-3"
                href="community.html"
                style={{ "font-weight": "bold " }}
              >
                Community
              </a>
            </li>
            <li className="-ml-5 mr-6">
              <a
                className="nav-link scrollto py-2 px-3"
                href="list-your-space.html"
              >
                List a space
              </a>
            </li>
            <Link to="/allspaces" className="dropdown-item">
              <li className="-ml-5 mr-6">
                <a
                  className="nav-link scrollto py-2 px-3"
                  href="find-a-space.html"
                >
                  Find a space
                </a>
              </li>
            </Link>

            <li className="dropdown -ml-5 mr-6">
              <a className="nav-link scrollto py-2 px-3" href="/">
                <span>FAQs</span>
                <BsChevronDown className="ml-1" />
              </a>
              <ul>
                {/* <li><a className="nav-link scrollto" href="faqs/faqs-general.html" style="font-weight: bold;">All</a></li> */}
                <li>
                  <a
                    className="nav-link scrollto"
                    style={{ "font-weight": "bold" }}
                    href="faqs/faq-section.html"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scrollto"
                    href="faqs/faqs-general.html"
                  >
                    General
                  </a>
                </li>
                <li className="dropdown">
                  <a href="/">
                    <span>For Landowners</span>{" "}
                    <BsChevronRight className="ml-1" />
                  </a>
                  <ul>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-1"
                      >
                        General
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-2"
                      >
                        How does it work
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-3"
                      >
                        Legal Questions
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-4"
                      >
                        Payments
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/">
                    <span>For Brands and Businesses</span>{" "}
                    <BsChevronRight className="ml-1" />
                  </a>
                  <ul>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-5"
                      >
                        How it works
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-6"
                      >
                        Booking a Space
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-7"
                      >
                        Legal Questions
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-8"
                      >
                        Payments and Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#lsservices"
                  >
                    LiteStore Services
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#covid"
                  >
                    Covid-19 Questions
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#designers"
                  >
                    For Designers
                  </a>
                </li>
                {/* <ul>
                        <li><a className="nav-link scrollto" href="#">General</a></li>
                        <li><a className="nav-link scrollto" href="#">Payments</a></li>
                        </ul>
                    </li>  */}
              </ul>
            </li>
            <li className="dropdown -ml-5 mr-6">
              <a className="nav-link scrollto py-2 px-3" href="/">
                <span>Account</span> <BsChevronDown className="ml-1" />
              </a>

              <ul>
                <li className="">
                  <a
                    className="nav-link scrollto py-2 px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#loginmod"
                    href="blank.html"
                  >
                    Sign In
                  </a>
                </li>
                <li className="">
                  <a className="nav-link scrollto py-2 px-3" href="signup.html">
                    Sign Up
                  </a>
                </li>
              </ul>
            </li>
            <li className="-ml-5 mr-6">
              <a
                className="nav-link scrollto phone-sty py-2 px-4"
                href="tel:+91-6363294498"
              >
                <FaPhoneAlt className="mr-3" />
                6363294498
              </a>
            </li>
          </ul>
          <BsList className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
