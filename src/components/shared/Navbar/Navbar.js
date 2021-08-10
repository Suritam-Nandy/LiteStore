import React from "react";


const Navbar = () => {
  return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          {/* <h1 class="logo"><a href="index.html" style="font-weight: 500;">LiteStore</a></h1> */}
          {/* Uncomment below if you prefer to use an image logo */}
          <a href className="logo"><img src="assets/logo.webp" alt="" className="img-fluid" /></a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto" href="community.html" style={{fontWeight: 'bold'}}>Community</a></li>
              <li><a className="nav-link scrollto" href="list-your-space.html">List a space</a></li>
              <li><a className="nav-link scrollto" href="find-a-space.html">Find a space</a></li>
              <li className="dropdown"><a className="nav-link scrollto" href="#"><span>FAQs</span> <i className="fas fa-chevron-down" /></a>
                <ul>
                  {/* <li><a class="nav-link scrollto" href="faqs/faqs-general.html" style="font-weight: bold;">All</a></li> */}
                  <li><a className="nav-link scrollto" style={{fontWeight: 'bold'}} href="faqs/faq-section.html">All</a></li>
                  <li><a className="nav-link scrollto" href="faqs/faqs-general.html">General</a></li>
                  <li className="dropdown"><a href="#"><span>For Landowners</span> <i className="fas fa-chevron-right" /></a>
                    <ul>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-landowners.html#sec-1">General</a></li>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-landowners.html#sec-2">How does it work</a></li>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-landowners.html#sec-3">Legal Questions</a></li>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-landowners.html#sec-4">Payments</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="#"><span>For Brands and Businesses</span> <i className="fas fa-chevron-right" /></a>
                    <ul>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-brands.html#sec-5">How it works</a></li>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-brands.html#sec-6">Booking a Space</a></li>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-brands.html#sec-7">Legal Questions</a></li>
                      <li><a className="nav-link scrollto" href="faqs/faqs-for-brands.html#sec-8">Payments and Pricing</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="faqs/faqs-litestore.html#lsservices">LiteStore Services</a></li>
                  <li><a className="nav-link scrollto" href="faqs/faqs-litestore.html#covid">Covid-19 Questions</a></li>
                  <li><a className="nav-link scrollto" href="faqs/faqs-litestore.html#designers">For Designers</a></li>
                  {/* <ul>
                        <li><a class="nav-link scrollto" href="#">General</a></li>
                        <li><a class="nav-link scrollto" href="#">Payments</a></li>
                        </ul>
                    </li> */}
                </ul>
              </li><li className="dropdown"><a className="nav-link scrollto" href="#"><span>Account</span> <i className="fas fa-chevron-down" /></a>
                <ul>
                  <li><a className="nav-link scrollto" data-bs-toggle="modal" data-bs-target="#loginmod" href="blank.html">Sign In</a></li>
                  <li><a className="nav-link scrollto" href="signup.html">Sign Up</a></li>
                </ul>
              </li><li><a className="nav-link scrollto phone-sty" href="tel:+91-6363294498"><i className="fas fa-phone-alt fa-4x" style={{padding: '10px 10px 10px 0px'}} />6363294498</a></li>
            </ul>
            <i className="fas fa-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>
    );
  }
export default Navbar;
