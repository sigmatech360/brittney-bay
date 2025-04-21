import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import TestimonialSec from "../../components/TestimonialSec";

import homeAboutImg from "../../assets/images/home-about-img.png";

import smartvendoricon from "../../assets/images/smart-vendor-icon.png";
import verifiedvendoricon from "../../assets/images/verified-vendor-icon.png";
import easybookingicon from "../../assets/images/easy-booking-icon.png";
import personalizedvendoricon from "../../assets/images/personalized-vendor-icon.png";

const whyChooseIconsData = [
  {
    id: 1,
    icon: smartvendoricon,
    text: "Smart vendor matchmaking",
  },
  {
    id: 2,
    icon: smartvendoricon,
    text: "Smart vendor matchmaking",
  },
  {
    id: 3,
    icon: smartvendoricon,
    text: "Smart vendor matchmaking",
  },
  {
    id: 4,
    icon: smartvendoricon,
    text: "Smart vendor matchmaking",
  },
];

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <DefaultLayout>
      <section className="main-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main-banner__content">
                <h1>
                  Your Dream <span className="fagon">Wedding</span>, Made{" "}
                  <span className="fagon">Simple</span>
                </h1>
                <p>
                  Finding the perfect vendors for your big day has never been
                  easier. Match with top-rated wedding professionals, plan
                  effortlessly, and book with confidence all in one place.
                </p>
                <div className="main-banner__buttons">
                  <button className="theme-btn theme-btn__transparent-bg">
                    Looking For a Vendor
                  </button>
                  <button className="theme-btn theme-btn__white-bg">
                    Plan My Whole Wedding
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stress-free__sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="sec-head">
                <h2>
                  A <span className="fagon">Stress-Free</span> Way to Plan Your{" "}
                  <span className="fagon">Wedding</span>
                </h2>
                <p>
                  Let us do the heavy lifting! We’ll match you with the best
                  vendors, so you can focus on the moments that matter.
                </p>
                <Link to="" className="theme-btn theme-btn__transparent-bg">
                  Find My Vendors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about__sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sec-head">
                <h2>
                  A little About <span className="fagon">Jeremy</span> +{" "}
                  <span className="fagon">Brittany</span>
                </h2>
                <p>
                  Brittany & Jeremy started Bay Productions in 2014. With over
                  500 weddings under their belt, they’ve worked with many of the
                  best vendors that Dallas has to offer! The Bays have 3 boys,
                  an RV to travel and are avid movie goers. Brittany was born
                  and raised in the dallas area, loves the lord and is obsessed
                  with organizing. Jeremy is from kansas, a marine and has never
                  missed a Joe Rogan podcast. they’re so excited for this next
                  adventure and for the day they can raise chickens in their
                  backyard.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-about__img ps-5 ms-5">
                <img
                  src={homeAboutImg}
                  className="img-fluid"
                  alt="Home About Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose__sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>
                  Why Choose The Wedding <span className="fagon fw-400">Concierge?</span>
                </h2>
              </div>
            </div>

            {whyChooseIconsData.map((item, index) => (
              <div className="col-lg-3" key={index}>
                <div className="why-choose__box">
                  <div className="why-choose__box-img">
                    <img src={item.icon} alt="" />
                  </div>
                  <h6>{item.text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSec />
    </DefaultLayout>
  );
};

export default Home;
