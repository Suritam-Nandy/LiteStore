import React from "react";

const Company = () => {
  return (
    <section className="content-style">
      <div className="container">
        <div className="title-single-box">
          <h1 style={{paddingBottom: '20px'}}>About Us</h1>
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
          <h3 style={{paddingTop: '20px'}}>Welcome to LiteStore.</h3>
        </div>
      </div>
    </section>
  );
}

export default Company;
