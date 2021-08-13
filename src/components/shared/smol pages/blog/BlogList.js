import React from "react";
import {Link} from 'react-router-dom'

const BlogList = () => {
    return(
        <div>
            {/* ======= Heading ======= */}
            <section className="head-section" style={{padding: '110px 0px 25px', backgroundColor: '#cdcbe76c'}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8" style={{color: '#444'}}>
                    <h1 className="title-single">Blogs</h1>
                    </div>
                    <div className="col-md-12 col-lg-4">
                    <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="blank.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Blogs
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </section>{/* End Heading*/}
            {/* Blog Catalogue */}
            <section id="blog-list">
                <div className="card">
                {/* <div class="card-header">
                #1
            </div> */}
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img src="../assets/img/blog/cheetos.webp" alt="image" className="img-fluid" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <h5 className="card-title">The Future of Retail: More Than Just Space  - I</h5>
                        <p className="card-text">Looking beyond sales: read about the Cheetos museum and the laboratory-like pop-up serving free vitamin supplements to junk food lovers.</p>
                        <Link to="blog-future-of-retail-1.html"><a href="blog-future-of-retail-1.html" className="btn">Read More</a></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card">
                {/* <div class="card-header">
                #2
            </div> */}
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img src="../assets/img/blog/blog-2.2.jpg" alt="image" className="img-fluid" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <h5 className="card-title">The Future of Retail: More Than Just Space  - II</h5>
                        <p className="card-text"> In this post, we write about how the theory of paradox of choice is deciding the look of the new age stores along with why stores far away from civilization makes for great stories.</p>
                        <a href="blog-future-of-retail-2.html" className="btn btn-primary">Read More</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>{/* End Blog Catalogue */}
        </div>
    );
}

export default BlogList;