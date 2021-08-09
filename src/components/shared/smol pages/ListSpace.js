import React from 'react';

const ListSpace = () => {
    return(
        <div>
            {/*  Heading  */}
            <section className="head-section" style={{paddingTop: '110px', backgroundColor: '#cdcbe76c'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 col-lg-8" style={{color: '#444'}}>
                        <h1 className="title-single">List your space</h1>
                        <h2 className="color-text-a" style={{fontSize: '25px'}}>List your space for free and connect with brands, hassle free!</h2>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                            <a href="blank.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                            List Your Space
                            </li>
                        </ol>
                        </nav>
                    </div>
                    </div>
                </div>
            </section>{/* End Heading*/}
            {/*  About Section  */}
            <section id="about-sec" className="about" style={{paddingBottom: '0px', backgroundColor: '#cdcbe76c'}}>
                <div className="container">
                    <div className="row content">
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <ul>
                        <li><i className="ri-check-double-line" /> Our streamlined e-contracts makes sure your listing is risk-free. </li>
                        <li><i className="ri-check-double-line" /> Fix your Price | Hours | Ground Rules</li>
                        <li><i className="ri-check-double-line" /> Approve brands looking to rent your space.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>{/* End About Section */}   
            {/*  Features Section  */}
            <section id="features" style={{paddingBottom: '0px'}}>
                <div className="container" style={{textAlign: 'center'}}>
                    <div className="row">
                    <div className="feature-boxes col-sm">
                        <i className="icon fas fa-desktop fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>List space on <br />LiteStore</h3>
                        <p>List your space and maximize your space’s potential through us.</p>
                    </div>
                    <div className="feature-boxes col-sm">
                        <i className="icon fas fa-handshake fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>Connect with <br />brands</h3>
                        <p>Increase your visibility <br />and match with the <br />best brands</p>
                    </div>
                    <div className="feature-boxes col-sm">
                        <i className="icon fas fa-chart-line fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>Improve <br />Traction</h3>
                        <p>Boost the value of your store with more eyes &amp; feet coming through each day. </p>
                    </div>
                    <div className="feature-boxes col-sm">
                        <i className="icon fas fa-coins fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>Earn more<br /> revenue</h3>
                        <p>Receive automatic payments online</p>
                    </div>
                    </div>
                </div>
            </section>
            {/*  Features Section  */}
            <section id="features" style={{backgroundColor: '#cdcbe76c'}}>
                <div className="container" style={{textAlign: 'center'}}>
                    <h1 style={{paddingTop: '20px'}}>LiteStore Services</h1>
                </div>
                <div className="container" style={{textAlign: 'center'}}>
                    <div className="row">
                    <div className="feature-box col-sm">
                        <i className="icon fas fa-file-contract fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>Contract<br /> management</h3>
                        <p>We ensure efficient <br />pricing and invoicing <br />management for a hassle <br />free experience.</p>
                    </div>
                    <div className="feature-box col-sm">
                        <i className="icon fas fa-chart-bar fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>Marketing <br />Analytics</h3>
                        <p>We provide a dashboard<br /> to manage opportunities<br /> and make data driven<br /> decisions for your portfolio</p>
                    </div>
                    <div className="feature-box col-sm">
                        <i className="icon fab fa-instagram fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>Instagrammable<br /> Marketing</h3>
                        <p>Allow our team to <br />curate your space to <br />make it look minimal, <br />chic and charming</p>
                    </div>
                    <div className="feature-box col-sm">
                        <i className="icon fas fa-search fa-4x" />
                        <h3 className="feature-title" style={{paddingBottom: '10px'}}>Due<br /> Diligence</h3>
                        <p>Our team will ensure <br />thorough due diligence <br />of the property and <br />provide pricing advice</p>
                    </div>
                    </div>
                </div>
            </section>
            {/*  Listing Section  */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="container" style={{textAlign: 'center'}}>
                        <h1>List your space at LiteStore</h1>
                    </div>
                    <div className="row mt-5" style={{margin: '0% 10%'}}>
                        <div className="col mt-5 mt-lg-0">
                            {/* <form action="forms/contact.php" method="post" role="form" class="php-email-form"> */}
                            <form id="ListForm" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group ">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="address" rows={5} placeholder="Address" required defaultValue={""} />
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-center" data-aos="zoom-in">
                                <div className="text-center" style={{padding: '30px 0px 10px'}}><button type="submit" onclick="SubForm()">Let's get started</button></div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>{/* End Listing Section */}
        </div>
    );
}

export default ListSpace;