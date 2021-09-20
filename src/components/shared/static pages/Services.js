import React from "react";

const Services = () => {
  return(
    <div>
        {/*  Head Section  */}
        <section id="services_fas" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
            <div className="title-single-box" style={{textAlign: 'center'}}>
            <h1>LiteStore Services</h1>
            <h3>Opening a store just got easy</h3>
            <h4 style={{margin: '0% 20%', fontSize: '20px'}}>Let us do the heavy lifting of ensuring that your empty store looks chic, minimal &amp; presentable</h4>
            </div>
        </div>
        </section>
        {/* End head */}
        {/* ======= Tabs Section ======= */}
        <section id="tabs" className="tabs" style={{textAlign: 'left'}}>
        <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row d-flex">
            <li className="nav-item col-3"> className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-1">
                <i className="icon fas fa-store fa-4x" />
                <h3 className="feature-title">Store design</h3>
            </li>
            <li className="nav-item col-3"> className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                <i className="icon fas fa-tools fa-4x" />
                <h3 className="feature-title">Tech Services</h3>
            </li>
            <li className="nav-item col-3"> className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <i className="icon fas fa-book-reader fa-4x" />
                <h3 className="feature-title">Signage</h3>
            </li>
            <li className="nav-item col-3"> className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                <i className="icon fas fa-rocket fa-4x" />
                <h3 className="feature-title">Soft furnishing</h3>
            </li>
            </ul>
            <div className="tab-content" style={{margin: '5% 10% 3%'}}>
            <div className="tab-pane" id="tab-1">
                <h3>
                Everything from the layout of your store to the lighting and colours which bring your brand to life.
                </h3>
            </div>
            <div className="tab-pane" id="tab-2">
                <h3>
                Wifi, Point of Sale systems,speakers, tablets &amp; security cameras to ensure a seamless customer experience.
                </h3>
            </div>
            <div className="tab-pane" id="tab-3">
                <h3>
                Digital and Physical signage
                </h3>
            </div>
            <div className="tab-pane" id="tab-4">
                <h3>
                Racks, shelves, chairs, mirrors and billing counters - Select from a design led collection of furniture to fit out your store.
                </h3>
            </div>
            </div>
        </div>
        </section>{/* End Tabs Section */}
    </div>  
  );
}

export default Services;