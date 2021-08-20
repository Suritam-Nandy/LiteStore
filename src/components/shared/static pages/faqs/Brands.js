import React from "react";

const Brands = () => {
  return (
    <section id="faq" className="faq bg-color" style={{ paddingTop: "100px" }}>
      <div className="container" data-aos="fade-up">
        <div className="faq-list" id="sec-5">
          <div className="section-title">
            <h2>
              Frequently Asked Questions
              <br />
              <span style={{ color: "#7e7ca6" }}>
                For Brands and Entrepreneurs
              </span>
            </h2>
          </div>
          <h2 style={{ paddingBottom: "10px", textAlign: "center" }}>
            How it works?
          </h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                Should the space be used for retail only?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Spaces at LiteStore can be used for multiple purposes in a way
                  that brings your idea to life unless the Landowner has an
                  objection or a specific permission ought to be obtained for
                  carrying out the project.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Example - Preparation or sale of any food &amp; alcoholic
                  beverage products requires a FSSAI license among other
                  permits. At the time of submitting ‘Usage Terms’ to the
                  Landlord, you will be required to list down your purposes of
                  using the space.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                What happens if my purpose of use of the space changes after I
                start using the space?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  By virtue of entering into a contract at the time of
                  confirmation, you are bound by the Usage Terms which documents
                  the purpose of use you had mentioned at that time. However,
                  execution of any new idea can be pursued with the prior
                  approval of the Landowner as per the Contractual Terms. We
                  will facilitate this process for you.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
              >
                What is the difference between Listed Spaces and Flagship
                Spaces?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Landowners can enter into a business relationship with
                  LiteStore through two ways.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Listing your space: Landowners can list their space on our
                  platform and we will connect you to brands &amp; retailers on
                  our LiteStore platform.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Flagship Spaces: LiteStore will exclusively manage the space
                  by licensing it out to multiple brands.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-6"
                className="collapsed"
              >
                Will you have to bring your own staff/equipment?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-6"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  It is up to you. LiteStore provides staffing as an add-on
                  service. Do check out the LiteStore Services section for more!
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-7"
                className="collapsed"
              >
                What expenses will a Brand have to incur, over and above the
                booking charge?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-7"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The booking charge is inclusive of all costs involved in
                  opening the store. Any operational costs incurred while the
                  store is open which are not covered in the Terms of
                  Use/License Agreement will be borne by the brand. The final
                  booking charge paid by the Brand will include taxes, as
                  applicable.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-10"
                className="collapsed"
              >
                What can I expect from the space that I see on LiteStore.in?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-10"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Our photography will ensure that you get an accurate idea of
                  the space on our site. Further, each of the listed spaces will
                  go through a round of due diligence from our side to ensure
                  that basic amenities such as electricity, water supply &amp;
                  maintenance will be provided. The details on the property page
                  will provide you with information specific to each booking.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-11"
                className="collapsed"
              >
                Who takes care of the fittings/furnishing/lighting?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-11"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Each store will be provided in a white label manner with basic
                  lighting and fittings. You can choose LiteStore Services for
                  anything additional.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-12"
                className="collapsed"
              >
                Can I make alterations to the space?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-12"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Spaces are booked "as seen". This means that you agree to book
                  the space in the condition that it is shown in the listing.
                  For most spaces landlords are happy for you to redecorate as
                  long as the space is returned to its original condition at the
                  end of your booking.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  If there is anything you are unsure about in regards to the
                  decoration, make sure you check with the landlord first or get
                  in touch with our team and we'll look into it for you.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-13"
                className="collapsed"
              >
                Can I share the space with any other brand/retailer?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-13"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Yes, LiteStore offers the option to book the space in
                  collaboration with other brands to improve the offering at
                  your store and build synergies with other businesses.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="faq-list" id="sec-6">
          <h2 style={{ paddingBottom: "10px", textAlign: "center" }}>
            Booking a Space
          </h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-14"
                className="collapsed"
              >
                How do I book my space on LiteStore.in?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-14"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Step 1:
                  <span style={{ color: "#7e7ca6" }}> Find a space</span> that
                  matches your budget, location and audience.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Step 2: Type in your preferred dates in the calendar feature
                  and make an enquiry by submitting your proposal to the
                  landlord.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  
                  Step 3: When the Landowner approves, you will receive a
                  confirmation and can make the payment to successfully complete
                  your booking.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-15"
                className="collapsed"
              >
                When can I access my space to set it up?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-15"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  You can access your space only from the commencement date of
                  your bookingl period and you must vacate the space on the last
                  day of the booking.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Example - if you book a space on LiteStore.in from
                  <span style={{ fontWeight: "bold" }}>
                    14th May to 20th May.
                  </span>
                  You will get access to the space only at
                  <span style={{ fontWeight: "bold" }}>
                    09:00 am on 14th May
                  </span>
                  to set it up and you must ensure that the space is returned in
                  the same state at
                  <span style={{ fontWeight: "bold" }}>
                    11:00 PM on 20th May.
                  </span>
                </p>
                <p style={{ paddingTop: "10px" }}>
                  We therefore, advise you to book your space a day in advance
                  to ensure that you set up your space comfortably.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-16"
                className="collapsed"
              >
                What is the minimum or the maximum period for booking?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-16"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Minimum period is for 01 day and the maximum period is for 03
                  months with an option to extend the booking.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  However, for Listed Spaces, the minimum booking period on
                  Listed Spaces will be decided by the Landowner. You can find
                  out the minimum booking period for a space by checking the
                  particular space listing.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-17"
                className="collapsed"
              >
                Can I visit a space before booking it?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-17"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Yes. Request a viewing of the store on the booking page and
                  our team will get in touch you. You could choose either a
                  virtual tour or a physical tour of the space.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-18"
                className="collapsed"
              >
                Why can I not see the name and the contact details of the
                Landowners?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-18"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  We respect the confidentiality of our brands/entrepreneurs and
                  our Landowners. Just like how we don’t share your details to
                  the Landowners prior to the booking being confirmed, we adopt
                  the same policy for the Landowners details as well.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-19"
                className="collapsed"
              >
                Can I book a store for a day?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-19"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Yes, you can book it for a day. However, note that the access
                  to the space and return of the space will be on the same day.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  Example - If you book a space on LiteStore on
                  <span style={{ fontWeight: "bold" }}>12th January.</span> You
                  will get access to the space only at
                  <span style={{ fontWeight: "bold" }}>
                    09:00 am on 12th January
                  </span>
                  and you must vacate the space by
                  <span style={{ fontWeight: "bold" }}>
                    11:00 pm on 12th January.
                  </span>
                </p>
                <p style={{ paddingTop: "10px" }}>
                  We therefore, advise you to book your space a day in advance
                  to ensure that you set up your space comfortably.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-20"
                className="collapsed"
              >
                How far in advance can I book?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-20"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  You can normally book 2 months in advance. However, please do
                  check the availability for such bookings on our site.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-29"
                className="collapsed"
              >
                How quickly can I set up my space?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-29"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Once you raise a request for a space, Landowners will approve
                  the idea within 36 hours and we will contact you to arrange
                  the viewing, if you require one. It can take up to 48-72
                  hours.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-22"
                className="collapsed"
              >
                How will the agreement be entered into? How will the booking get
                confirmed?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-22"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p style={{ textAlign: "center" }}>
                  (Step 1)
                  <br />
                  The Brand accepts the LiteStore Terms of Use/License Agreement
                  at the time of making a booking
                  <br />
                  ↓<br />
                  (Step 2)
                  <br />
                  Additionally, the Brand fills in information in the Usage
                  Terms <br />
                  (Terms which are unique to each booking such as duration,
                  nature of goods/services/ nature of use etc.) <br />
                  ↓<br />
                  (Step 3)
                  <br />
                  LiteStore will send the proposed Usage Terms to the Landowner
                  who must confirm within 24 hours <br />
                  ↓<br />
                  (Step 4)
                  <br />
                  Once confirmed, the Landowner and Brand are bound by the Terms
                  of Use/License Terms and the booking is complete with a quick
                  digital sign by both parties. The Brand will make the payment
                  on our website. <br />
                  ↓<br />
                  (Step 5)
                  <br />
                  Open your very own store! <br />
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-28"
                className="collapsed"
              >
                Can I extend my booking for a longer time?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-28"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Subject to availability, you can easily extend the booking on
                  our website through your dashboard. Click ‘extend booking’ and
                  extend your booking based on the information displayed by the
                  Landowner.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  However, if there is no availability because the space is
                  already booked for those days, you can always look at other
                  nearby spaces on our website!
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="faq-list" id="sec-7">
          <h2 style={{ paddingBottom: "10px", textAlign: "center" }}>
            Legal Questions
          </h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-30"
                className="collapsed"
              >
                Who am I entering into a contract with?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-30"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>For Listed Spaces:</span>
                  You will enter into an agreement with each Landowner at the
                  time you make a booking and the Usage Terms are agreed to by
                  the Landowner. The Landowner and the Brand will be bound by
                  the LiteStore Terms of Use/License Agreement along with the
                  Usage Terms of each booking.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    For Flagship Spaces:
                  </span>
                  You will enter into an agreement directly with LiteStore at
                  the time you agree to our Terms of Use/License Terms. Every
                  time you complete a booking and Usage Terms are agreed upon,
                  there is a concluded agreement between you and LiteStore.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-23"
                className="collapsed"
              >
                How safe is my booking with LiteStore?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-23"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  LiteStore ensures that booking and launching a store is a
                  seamless experience. If for any reason, you are unable to
                  launch your store due to any fault committed by the landowner
                  or LiteStore, your booking amount will be refunded in
                  accordance with the Refund Policy
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="faq-list" id="sec-8">
          <h2 style={{ paddingBottom: "10px", textAlign: "center" }}>
            Pricing and Payments
          </h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-24"
                className="collapsed"
              >
                How much does LiteStore charge?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-24"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Prices published are inclusive of Utilities, maintenance,
                  basic fixtures and LiteStore’s service fee (12%).
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-25"
                className="collapsed"
              >
                Why do I see different prices when I search for different dates?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-25"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  We adopt smart pricing technology. This means that the price
                  is adjusted to the demand that is expected during the period
                  you’ve enquired. If the dates clash with long weekends,
                  holidays - you could expect a higher amount in booking fees.
                  We also adopt staggered pricing. So it’s often cheaper to book
                  for longer periods and more expensive for shorter periods.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-26"
                className="collapsed"
              >
                Am I required to pay the entire amount at once?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-26"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The payout schedule as per our standard contract is that for
                  any bookings until 8 weeks, you will make a one-time payout
                  that will be credited to the account of the Landowner within
                  five business days.
                </p>
                <p style={{ paddingTop: "10px" }}>
                  If the booking is for a period of more than 8 weeks, the
                  payment can be made in tranches.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="far fa-question-circle icon-help" />
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-27"
                className="collapsed"
              >
                Where can I get my invoice for my booking?
                <i className="fas fa-chevron-down icon-show" />
                <i className="fas fa-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-27"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  You can download your invoices instantly from your dashboard
                  on our website.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Brands;
