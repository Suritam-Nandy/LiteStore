import React from "react";

const Footer = () => {
  return(
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <p>
                <span style={{fontSize: '30px'}}>LiteStore</span>
                <br />#58, Domlur Layout,
                <br />Bangalore-71<br />
                <strong>Phone: <br /> </strong> +91 9483465923<br />
                <span>+91 6363294498</span> <br />
                <strong>Email:</strong> support@litestore.in<br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>How it works</h4>
              <ul>                            
                <li> <a href="list-your-space.html">List a Space</a></li>
                <li> <a href="find-a-space.html">Find a Space</a></li>
                <li> <a href="services.html">LiteStore Services</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>About</h4>
              <ul>
                <li> <a href="careers.html">Careers</a></li>
                <li> <a href="company.html">Company</a></li>
                <li> <a href="faqs/faq-section.html">FAQs</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Discover</h4>
              <ul>
                <li> <a href="blogs/list.html">Blog</a></li>
                <li> <a href="community.html">Community</a></li>
                <li> <a href="design.html">DesignHub</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Legal</h4>
              <ul>
                <li> <a href>Privacy Policy</a></li>
                <li> <a href>Terms of use</a></li>
                <li> <a href="dashboard/html/index.html">Dashboard</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex py-4" style={{backgroundColor: '#fff'}}>
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright 2021 <strong><span>LiteStore</span></strong>. All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0" style={{textAlign: "end"}}>
          <a href="blank.html" className="instagram"><i className="fab fa-instagram" /></a>
          <a href="https://www.linkedin.com/company/litestore/" className="linkedin"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;