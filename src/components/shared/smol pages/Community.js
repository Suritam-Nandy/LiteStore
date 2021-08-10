import React from "react";

const Community = () => {
  return(
    <div>
        {/*  Head Section  */}
        <section id="head-c" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
            <div className="title-single-box" style={{textAlign: 'center'}}>
            <h1 className="title-single">LiteStore Community</h1>
            </div>
        </div>
        </section>{/* End head */}
        <section style={{margin: '0% 10%'}}>
        <div className="container">
            <div className="section-title news-single">
            <h2>Community</h2>
            <p style={{fontSize: '20px'}}>Having your very own brick and mortar store is a goal 
                that every business aspires to. With LiteStore, this dream
                is not restricted to big brands with deep pockets. Boosting
                local business is a sure way to make communities stronger.
            </p>
            <p style={{fontSize: '20px', paddingTop: '20px'}}>LiteStore is for everybody. A small business looking to test the waters in 
                offline retail. An entrepreneur looking to launch or demonstrate a product. 
                Anyone looking to bring their business ambitions to life, if only for a day.
            </p>
            <div className="section-title" style={{paddingTop: '40px'}}>
                <h2>Social Ventures</h2>
                <p style={{fontSize: '20px'}}>Solving societal problems isn’t always easy. If you know of a social venture that could use some 
                space for a while, let us know and we will make it happen, free of cost.
                </p>
            </div>
            <div className="section-title" style={{paddingTop: '40px'}}>
                <h2>Gift a Pop-up</h2>
                <p style={{fontSize: '20px'}}>
                Know somebody who might have something interesting to sell?  
                With LiteStore, you can gift your friends or loved ones the opportunity to launch their 
                own store for as short as a day, a week or a month! Let them bring their creativity to life. 
                </p>
            </div>
            <p style={{paddingTop: '20px'}}>For more details - contact us at <span style={{color: '#7e7ca6', fontWeight: 600}}>support@litestore.in</span></p>
            </div>
        </div>
        </section>
        {/* <section style="margin: 0% 20%;">
        <div class="container">
            <div class="section-title">
                <h2>Social Ventures</h2>
                <p style="font-size: 20px;">Solving societal problems isn’t always easy. If you know of a social venture that could use some 
                    space for a while, let us know and we will make it happen, free of cost.
                </p>
            </div>
        </div>
        </section> */}
        {/*  Table Section  */}
        <section id="clients" className="clients section-bg-black" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '20px'}}>
        <div className="container">
            <table>
            <tbody>
                <tr>
                <td className="top"><i className="fas fa-ambulance fa-2x" style={{color: '#7e7ca6'}} /></td>
                <td className="top">Blood Bank</td>
                </tr>
                <tr>
                <td><i className="fas fa-dog fa-2x" style={{color: '#7e7ca6'}} /></td>
                <td>Pet Adoption Drive</td>
                </tr>
                <tr>
                <td><i className="fas fa-store-alt fa-2x" style={{color: '#7e7ca6'}} /></td>
                <td>Thrift Store</td>
                </tr>
                <tr>
                <td><i className="fas fa-book fa-2x" style={{color: '#7e7ca6'}} /></td>
                <td>Book Donation Drive</td>
                </tr>
                <tr>
                <td><i className="fas fa-hands-helping fa-2x" style={{color: '#7e7ca6'}} /></td>
                <td>Outreach for Charities</td>
                </tr>
            </tbody>
            </table>
        </div>
        </section>
    </div>
  );
}

export default Community;