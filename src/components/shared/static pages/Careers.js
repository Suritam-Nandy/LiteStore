import React from "react";

const Careers = () => {
  return (
    <div>
      {/* ======= Intro Single ======= */}
      <section className="content-style">
        <div className="container">
          <div className="title-single-box">
            <h1 style={{paddingBottom: '20px'}}>Why work with us?</h1>
            <div className="news-single">
              <p className="color-text-a" style={{fontSize: '20px'}}>As India’s first online marketplace for short term retail spaces, we are working in exciting, uncharted territory. We believe in bringing people together - not only as a company, but in the workplace as well. We are a team of self-starters who lift each other up and bring ideas to life, together.
              </p>
              <p style={{fontSize: '20px'}}> We believe in creating a healthy company culture where people are excited to come into work everyday and make an impact. 
                If this sounds like something you would like to be a part of, please get in touch! We would love to speak to you. 
              </p>
              <p style={{fontSize: '20px'}}>Tell us what you are passionate about at: <span style={{color: '#7e7ca6'}}>support@litestore.in</span></p>
            </div>
          </div>
        </div>
      </section>{/* End Intro Single*/}
      {/*  Table Section  */}
      <section id="clients" className="clients section-bg-black" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '20px'}}>
        <div className="container">
          <table>
            <tbody>
              <tr>
                <td className="top"><i className="fas fa-paint-brush fa-2x" /></td>
                <td className="top">Graphic Designer - Bangalore</td>
              </tr>
              <tr>
                <td><i className="fas fa-hotel fa-2x" /></td>
                <td>Leasing Partner - Bangalore</td>
              </tr>
              <tr>
                <td><i className="fas fa-chart-line fa-2x" /></td>
                <td>Marketing and Advertising Consultants - Bangalore</td>
              </tr>
              <tr>
                <td><i className="fas fa-user-circle fa-2x" /></td>
                <td>Account Manager - Bangalore</td>
              </tr>
              <tr>
                <td><i className="fas fa-spray-can fa-2x" /></td>
                <td>Retail Design Strategist -  Bangalore</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Careers;