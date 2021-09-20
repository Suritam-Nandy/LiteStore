import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <p>
                <span style={{ fontSize: "30px" }}>LiteStore</span>
                <br />
                #58, Domlur Layout,
                <br />
                Bangalore-71
                <br />
                <strong>
                  Phone: <br />
                </strong>
                +91 9483465923
                <br />
                <span>+91 6363294498</span> <br />
                <strong>Email:</strong> support@litestore.in
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>How it works</h4>
              <ul>
                <li>
                  <Link to="/listaspace">List a Space</Link>
                </li>
                <li>
                  <Link >Find a Space</Link>
                </li>
                <li>
                  <Link to="/services">LiteStore Services</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>About</h4>
              <ul>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/company">Company</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Discover</h4>
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/designhub">DesignHub</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Terms of use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container d-md-flex py-4"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright 2021
            <strong>
              <span>LiteStore</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div
          className="social-links text-center text-md-right pt-3 pt-md-0"
          style={{ textAlign: "end" }}
          className="instagram">
            <i className="fab fa-instagram" />
          </a
            href="https://www.linkedin.com/company/litestore/"
            className="linkedin"
          >
            <i className="fab fa-linkedin-in" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
