import React from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* <Helmet>
      <title>Home | LiteStore</title>
    </Helmet> */}
      {/*  Head Section  */}
      <section id="head" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <h1>LiteStore</h1>
          <h2 className="display-4" style={{ color: "aliceblue" }}>
            <strong>
              Rent your own retail space, instantly
              <br />1 day | 1 week | 1 month
              <br />
              Long term Bookings
            </strong>
          </h2>
          <a href="find-a-space.html" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      {/* End head */}
      {/*  Features Section  */}
      <section id="features" style={{ backgroundColor: "#fff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Booking retail space can’t get any easier</h1>
          <p>
            LiteStore is an online platform for listing and booking commercial
            retail spaces which can be rented on an ultra short term basis.
          </p>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <div className="feature-box col-sm">
              <i className="icon fas fa-store fa-4x" />
              <h3 className="feature-title">
                Find
                <br /> Space
              </h3>
              <p>Select a location from our curated list of venues</p>
            </div>
            <div className="col-sm arrow">
              <i className="icon fas fa-chevron-right fa-2x" />
            </div>
            <div className="feature-box col-sm">
              <i className="icon fas fa-tools fa-4x" />
              <h3 className="feature-title">Customize Your Store</h3>
              <p>
                Choose your store layout and select from our list of add-on
                services
              </p>
            </div>
            <div className="col-sm arrow">
              <i className="icon fas fa-chevron-right fa-2x" />
            </div>
            <div className="feature-box col-sm" style={{ padding: "5% 0% 3%" }}>
              <i className="icon fas fa-book-reader fa-4x" />
              <h3 className="feature-title">
                Book &amp;
                <br /> Pay
              </h3>
              <p>
                Enter into license agreements &amp; pay securely on our portal
              </p>
              {/* <p>Enter into simplified license agreements & pay securely on our portal</p> */}
            </div>
            <div className="col-sm arrow">
              <i className="icon fas fa-chevron-right fa-2x" />
            </div>
            <div className="feature-box col-sm">
              <i className="icon fas fa-rocket fa-4x" />
              <h3 className="feature-title">Launch Your Store </h3>
              <p>Bring your product, team, ideas and head over to your store</p>
            </div>
          </div>
        </div>
      </section>
      {/*  End Features Section  */}
      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
        
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
        </div> */}
      {/*  About Video Section
        <section id="about-video" className="about-video">
            <div className="container" data-aos="fade-up">
                <h1>Introducing LiteStore</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-8 col-sm-12">
                        <img src="assets/img/youtube.jpg" className="img-fluid" alt="" />
                        <a href="https://www.youtube.com/watch?v=ADTRU2B4D-Q" className="glightbox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
                    </div>
                </div>
            </div> 
        </section> End About Video Section */}
      {/*  Services Section  */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>
              India’s first online marketplace for short-term retail spaces.{" "}
            </h2>
          </div>
          <div className="row justify-content-md-center">
            <div
              className="col-lg-4 col-md-4 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth={0}
                      fill="#f5f5f5"
                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                    />
                  </svg>
                  <i className="fas fa-asterisk" />
                </div>
                <h4>
                  <a href="">Risk free booking</a>
                </h4>
                <p>
                  Streamlined contracts &amp; due diligence <br />
                  for a hassle free experience
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box iconbox-orange ">
                <div className="icon">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth={0}
                      fill="#f5f5f5"
                      d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                    />
                  </svg>
                  <i className="fas fa-rupee-sign" />
                </div>
                <h4>
                  <a href="">Unprecedented Prices</a>
                </h4>
                <p>
                  We eliminate expensive lease payments,
                  <br /> security deposits &amp; legal costs
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-yellow">
                <div className="icon">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth={0}
                      fill="#f5f5f5"
                      d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                    />
                  </svg>
                  <i className="fas fa-concierge-bell" />
                </div>
                <h4>
                  <a href="">LiteStore Services</a>
                </h4>
                <p>
                  We provide PoS systems, staffing &amp;
                  <br /> marketing analytics services
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div
              className="col-lg-4 col-md-4 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box iconbox-red">
                <div className="icon">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth={0}
                      fill="#f5f5f5"
                      d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                    />
                  </svg>
                  <i className="fas fa-bolt" />
                </div>
                <h4>
                  <a href="">
                    Build unique retail
                    <br /> experiences
                  </a>
                </h4>
                <p>Create buzz around your brand</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay={300}
              style={{ paddingLeft: "20px" }}
            >
              <div className="icon-box iconbox-teal">
                <div className="icon">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth={0}
                      fill="#f5f5f5"
                      d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                    />
                  </svg>
                  <i className="fas fa-bomb" />
                </div>
                <h4>
                  <a href="">Launch with a bang!</a>
                </h4>
                <p>
                  Test new markets, products, strategies
                  <br /> instantly at major commercial hubs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Sevices Section */}
      {/* Community Section */}
      <section id="community">
        <div className="container">
          <div className="section-title" style={{ textAlign: "center" }}>
            {/* <img src="assets/img/stock/colorrr.webp" style="width: 300px;"> */}
            <h2 style={{ color: "#000", textTransform: "capitalize" }}>
              <span style={{ fontWeight: "bold", color: "#7e7ca6" }}>
                LiteStore
              </span>{" "}
              Community
            </h2>
            <h3 style={{ color: "#000" }}>
              Driving growth for small businesses and entrepreneurs
            </h3>
            <Link
              to="/community"
              href="community.html"
              className="btn-get-started scrollto"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
      {/* Design Section */}
      {/* <section id="design" style="background-color: #19171a;">
        <div class="container">
            <div class="section-title" style="text-align: center;">
                <h2 style="color: #fff;">LiteStore Design Hub</h2>
                <h3 style="color: #fff;">Driving growth for small businesses and entrepreneurs</h3>
                <a href="community.html" class="btn-get-started scrollto">Get Started</a>
            </div>
        </div>
        </section> */}
      {/* Carousel Section */}
      {/* <div id="carousel">
        <div class="container" style="text-align: center;">
            <h1>Our boutique store front in Indiranagar, Bangalore!</h1>
            <p>Situated in the heart of Bangalore, Litestore-Indiranagar offers the perfect blend of a
                commercial location without the traffic and noise of bustling roads</p>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide car-padding about" style="background-color: #c0c0c0;" data-bs-ride="carousel">
    
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/img/post-single-2.webp" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/img/post-single-1.webp" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div> */}
      {/* End of Carousel Section */}
      {/*  Clients Section  */}
      <section
        id="clients"
        className="clients"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <h2>Trusted by</h2>
          <img
            src="assets/img/trusted-by/nuage.webp"
            style={{ width: "18%" }}
            alt="nuage"
          />
          <img
            src="assets/img/trusted-by/dropvault.webp"
            style={{ width: "28%" }}
            alt="dropvault"
          />
          <img
            src="assets/img/trusted-by/brahmaputra.webp"
            style={{ width: "23%" }}
            alt="brahmaputra fables"
          />
          <img
            src="assets/img/trusted-by/spring-diaries.webp"
            style={{ width: "23%" }}
            alt="spring diaries"
          />
        </div>
      </section>
      {/* End Clients Section */}
    </div>
  );
};

export default Home;
