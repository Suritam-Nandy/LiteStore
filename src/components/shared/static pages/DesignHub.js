import React from "react";

const DesignHub = () => {
  return(
        <div>
        {/*  Head Section  */}
        <section id="head-d" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
            <div className="title-single-box" style={{textAlign: 'center'}}>
            <h1 className="title-single" style={{color: '#fff'}}><span style={{color: '#7e7ca6'}}>LiteStore</span> DesignHub 2021</h1>
            <span className="color-text-a" style={{color: 'rgb(224, 224, 224)'}}>Showcase your best interior designs and store concepts and get an opportunity to bring them to life</span>
            </div>
        </div>
        </section>{/* End head */}
        {/*  Features Section  */}
        <section id="features" style={{paddingBottom: '0px', backgroundColor: '#000', color: '#fff'}}>
        <div className="container">
            <p style={{padding: '0% 16%'}}>Join us in creating immersive retail experiences that help brands inspire, engage and connect with their customers in their temporary storefronts.
            It could be a retail store, an art gallery, a book store or a studio!
            </p>
            <h1 style={{paddingTop: '5%'}}>How it Works</h1>
            <div className="row">
            <div className="feature-box col-sm">
                <i className="icon fas fa-download fa-4x" />
                <h3 className="feature-title" />
                <p>Download one of the three<br /> empty store  canvases</p>
            </div>
            <div className="feature-box col-sm">
                <i className="icon fas fa-paint-brush fa-4x" />
                <h3 className="feature-title" />
                <p>Design your ideal store idea</p>
            </div>
            <div className="feature-box col-sm">
                <i className="icon fas fa-magic fa-4x" />
                <h3 className="feature-title" />
                <p>Send us your design and theme <br /> the LiteStore website</p>
            </div>
            <div className="feature-box col-sm">
                <i className="icon fas fa-star fa-4x" />
                <h3 className="feature-title" />
                <p>Connect with brands to design <br />and launch their stores</p>
            </div>
            </div>
        </div>
        </section>
        {/* ======= lightbox Section ======= */}
        <section id="portfolio" className="portfolio" style={{backgroundColor: '#000'}}>
        <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2 style={{paddingBottom: '40px', color: '#fff'}}>What would you do with this empty space?</h2>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/space-1.webp" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/space-1.webp" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Space 1">View</a> <br />
                            <a href="https://github.com/JustinClarke/liteStore/raw/master/assets/img/img/portfolio/space- 1.pdf" title="Download Image">Download</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/space-2.webp" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/space-2.webp" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Space 2">View</a> <br />
                            <a href="https://github.com/JustinClarke/liteStore/raw/master/assets/img/img/portfolio/space- 2.pdf" title="Download Image">Download</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/space-3.webp" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <div className="portfolio-links">
                            <a href="assets/img/img/portfolio/space-3.webp" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Space 3">View</a> <br />
                            <a href="https://github.com/JustinClarke/liteStore/raw/master/assets/img/img/portfolio/space- 3.pdf" title="Download Image">Download</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>{/* End Portfolio Section */}
        {/*  Upload Section  */}
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
            <h1 style={{textAlign: 'center', paddingBottom: '3%'}}>Upload Your Design</h1>
            {/* <form action="forms/contact.php" method="post" role="form" class="php1-email-form"> */}
            <form id="designUpload" method="post" role="form" className="php-email-form">                
            {/* <form data-netlify="true" method="POST" class="php-email-form" name="design"> */}
            <div className="row" style={{margin: '0% 10%'}}>
                <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group ">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group mt-3">
                <textarea className="form-control" name="description" rows={5} placeholder="Describe the concept (upto 100 words)" required defaultValue={""} />
                </div>
                <div className="form-group mt-3">
                {/* <input class="form-control form-control-lg" id="formFileLg" name="picture" type="file" /> */}
                <div className="text-center" style={{padding: '10px 0px'}}><button type="submit" onclick="SubForm()">Submit</button></div>
                </div>
            </div>
            </form>
        </div>
        </section>{/* End Upload Section */}
    </div>
    );
  }
  
  export default DesignHub;