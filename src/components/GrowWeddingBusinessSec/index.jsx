import React from "react";

import profileicon from "../../assets/images/profile-icon.png";
import matchedicon from "../../assets/images/matched-icon.png";
import bookingrequesticon from "../../assets/images/booking-request-icon.png";
import boosticon from "../../assets/images/boost-icon.png";
import { Link } from "react-router-dom";

const growWeddingBusinessIconData = [
  {
    id: 1,
    icon: profileicon,
    title: "Create Your Profile",
    description:
      "Showcase your business with a stunning profile featuring photos, videos, and a compelling description of your services.",
  },
  {
    id: 2,
    icon: matchedicon,
    title: "Get Matched with Ideal Clients",
    description:
      "Our intelligent vendor-matching system connects you with couples based on budget, style, and availability.",
  },
  {
    id: 3,
    icon: bookingrequesticon,
    title: "Receive Booking Requests",
    description:
      "Couples shortlist their favorite vendors and reach out directly to check availability and book your services.",
  },
  {
    id: 4,
    icon: boosticon,
    title: "Boost Your Visibility & Credibility",
    description:
      "Gain trust and credibility with client reviews, ratings, and an interactive digital booklet showcasing your work.",
  },
];

const GrowWeddingBusinessSec = () => {
  return (
    <section className="grow-wedding__business" id="homeHowItWork">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-5">
            <div className="grow-wedding__business-leftCol">
              <div className="sec-head">
                <h2 data-aos="fade-right" data-aos-delay="100">
                  Grow Your{" "}
                  <span className="fagon fw-500">Wedding Business</span> with
                  Direct Leads
                </h2>
                <p data-aos="fade-right" data-aos-delay="300">
                  Are you a wedding vendor looking to attract your ideal
                  clients? The Wedding Concierge helps you connect with engaged
                  couples actively searching for your talents and style. Once
                  you and a client are matched, you will receive all their
                  information to get booked!
                </p>
                <Link
                  to={"/wedding-business"}
                  className="body-btn"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Apply as a Vendor
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sec-head mb-4">
              <h2 data-aos="fade-left" data-aos-delay="200">
                How It <span className="fagon fw-500">Works for</span> Vendors
              </h2>
            </div>

            <div className="grow-wedding__business-boxes">
              {growWeddingBusinessIconData.map((item, index) => (
                <div
                  key={index}
                  className="grow-wedding__business-box"
                  data-aos="slide-left"
                  data-aos-delay={index * 200}
                >
                  <div className="grow-wedding__business-box-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="grow-wedding__business-box-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowWeddingBusinessSec;
