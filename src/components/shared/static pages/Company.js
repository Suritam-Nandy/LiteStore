import React from "react";

const Company = () => {
  return (
    <div>
      {/* ======= Intro Single ======= */}
      <section className="content-style" style={{paddingTop: '100px'}}>
        <div className="container">
          <div className="title-single-box">
            <h1 style={{paddingBottom: '20px', textAlign: 'center'}}>What we do</h1>
            <div className="news-single">
              <p className="color-text-a" style={{fontSize: '20px'}}>
                At LiteStore, our mission is to bring in the future of brick and mortar retail in India. This kind of retail is 
                flexible  and will unleash a brick &amp; mortar renaissance, which involves more stories and fewer plain stores.
                To that end, short term retail spaces are a disruptive retail experience which keeps the customer hooked and
                leaves them wanting more. LiteStore is proud to be the first  to bring this novel retail format to India.
              </p>
              <p style={{fontSize: '20px'}}>
                We aim to eliminate the transactional costs that come with leasing a retail space: hefty security deposits, 
                long term leases and complicated legal agreements. On the landowners side, we aim to increase the value of 
                every square foot by improving the discovery of their spaces and creating revenues during vacancies. 
                Our platform will allow many brands &amp; retailers to innovate ideas, test new markets, generate buzz &amp; increase brand awareness. 
              </p>
            </div>
          </div>
        </div>
      </section>{/* End Intro Single*/}
      {/* ======= Team Section ======= */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <h1 style={{paddingBottom: '20px', textAlign: 'center'}}>Who we are</h1>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/team/image2.webp" className="img-fluid" alt="" />
                  <div className="social">
                    <a ><i className="fab fa-twitter" /></a>
                    <a ><i className="fab fa-facebook" /></a>
                    <a ><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Puneet Dinesh <a ><i className="fab fa-linkedin" /></a></h4>
                  <span>Head of Operations</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/team/image3.webp" className="img-fluid" alt="" />
                  <div className="social">
                    <a ><i className="fab fa-twitter" /></a>
                    <a ><i className="fab fa-facebook" /></a>
                    <a ><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Pranav Agarwal <a ><i className="fab fa-linkedin" /></a></h4>
                  <span>Head of Product</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/team/image1.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a ><i className="fab fa-twitter" /></a>
                    <a ><i className="fab fa-facebook" /></a>
                    <a ><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Tarun Sundaram <a ><i className="fab fa-linkedin" /></a></h4>
                  <span>Head of Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Team Section */}
      {/*  Clients Section  */}
      <section id="clients" className="clients" style={{backgroundColor: '#fff'}}>
        <div className="container">
          <h1 style={{paddingBottom: '20px'}}>Press Release</h1 href="https://www.linkedin.com/feed/update/urn:li:activity:6828933053780520960/">
            <img src="assets/img/trusted-by/brigade-reap-logo-share.jpg" style={{width: '18%'}} alt="brigade-reap" />
          </a href="http://bwdisrupt.businessworld.in/article/Brigade-REAP-partners-with-Habitat-for-Humanity-adds-new-track-in-Cohort-10/03-08-2021-399174/">
            <img src="assets/img/trusted-by/bw.png" style={{width: '38%'}} alt="bwdisrupt" />
          <h3 className="content-style">Welcome to LiteStore.</h3>
        </div>
      </section>{/* End Clients Section */}
    </div>
  );
}

export default Company;