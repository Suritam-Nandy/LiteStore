import React from "react";

const FaqsGeneral = () => {
  return (
    <div>
      {/*  Frequently Asked Questions Section  */}
      <section
        id="faq"
        className="faq bg-color"
        style={{ paddingTop: "100px" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>
              Frequently Asked Questions
              <br />
              <span style={{ color: "#7e7ca6" }}>General</span>
            </h2>
          </div>
          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i className="far fa-question-circle icon-help" />
                  data-bs-toggle="collapse"
                  className="collapse"
                  data-bs-target="#faq-list-8"
                >
                  What does LiteStore do?
                  <i className="fas fa-chevron-down icon-show" />
                  <i className="fas fa-chevron-up icon-close" />
                <div
                  id="faq-list-8"
                  className="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    LiteStore is India’s first online platform for listing,
                    booking commercial retail spaces on an ultra-short-term
                    basis.
                    <br />
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={100}>
                <i className="far fa-question-circle icon-help" />
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-9"
                  className="collapsed"
                >
                  How does LiteStore work?
                  <i className="fas fa-chevron-down icon-show" />
                  <i className="fas fa-chevron-up icon-close" />
                <div
                  id="faq-list-9"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Individuals/companies/entities (Brand) can book a space on
                    our platform. These spaces can either be listed directly by
                    Landowners or they could be premium stores operated by
                    LiteStore.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={200}>
                <i className="far fa-question-circle icon-help" />
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-1"
                  className="collapsed"
                >
                  Who can use stores listed on our platform?
                  <i className="fas fa-chevron-down icon-show" />
                  <i className="fas fa-chevron-up icon-close" />
                <div
                  id="faq-list-1"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    The possibilities for using temporary retail spaces are
                    endless.
                  </p>
                  <p>
                    If you want to test a new product or reach out to a
                    different market, create a buzz around your brand to
                    increase awareness or are a brand with a purely digital
                    presence but want to test the Brick &amp; Mortar model,
                    LiteStore can make it happen. We provide a low cost, hassle
                    free solution to bring all these possibilities to life.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={200}>
                <i className="far fa-question-circle icon-help" />
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  Does the ‘short term retail’ market model work?
                  <i className="fas fa-chevron-down icon-show" />
                  <i className="fas fa-chevron-up icon-close" />
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Touted to be the ‘future of retail’, temporary retail spaces
                    in the form of ‘pop up’ stores have been hugely successful
                    in Australia, France, Spain and USA. It has also been
                    trusted by top brands such as Louis Vuitton, OnePlus &amp;
                    Adidas.
                  </p>
                  <p>
                    With India’s thriving retail market and surge in startups
                    and small businesses, small and big brands alike are
                    competing to get customers’ attention. In this market,
                    short-term retail with its low investment, hassle-free and
                    creative model is poised to be the game-changer in marketing
                    and retail.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* End Frequently Asked Questions Section */}
    </div>
  );
};

export default FaqsGeneral;
