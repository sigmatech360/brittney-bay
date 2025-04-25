import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import TestimonialSec from "../../components/TestimonialSec";

import bannerimg1 from "../../assets/images/banner-img-1.png";
import bannerimg2 from "../../assets/images/banner-img-2.png";
import homeAboutImg from "../../assets/images/home-about-img.png";

import smartvendoricon from "../../assets/images/smart-vendor-icon.png";
import verifiedvendoricon from "../../assets/images/verified-vendor-icon.png";
import easybookingicon from "../../assets/images/easy-booking-icon.png";
import personalizedvendoricon from "../../assets/images/personalized-vendor-icon.png";

import profileicon from "../../assets/images/profile-icon.png";
import matchedicon from "../../assets/images/matched-icon.png";
import bookingrequesticon from "../../assets/images/booking-request-icon.png";
import boosticon from "../../assets/images/boost-icon.png";

import plantreeicon1 from "../../assets/images/plan-tree-icon-1.png";

import bannerBgVideo from "../../assets/images/brittney-banner-bg.mp4";

import Accordion from "react-bootstrap/Accordion";

const whyChooseIconsData = [
  {
    id: 1,
    icon: smartvendoricon,
    text: "Smart vendor matchmaking",
  },
  {
    id: 2,
    icon: verifiedvendoricon,
    text: "Verified vendor reviews",
  },
  {
    id: 3,
    icon: easybookingicon,
    text: "Easy booking system",
  },
  {
    id: 4,
    icon: personalizedvendoricon,
    text: "Personalized vendor recommendations",
  },
];

export const faqsData1 = [
  {
    id: 1,
    titla: "How does the vendor matching process work?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 2,
    titla: "Is it free to use The Wedding Concierge?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 3,
    titla: "Can I contact vendors before booking?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 4,
    titla: "What if I need help planning my entire wedding?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
];
export const faqsData2 = [
  {
    id: 1,
    titla: "How can I list my services on The Wedding Concierge?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 2,
    titla: "What are the benefits of joining The Wedding Concierge?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 3,
    titla: "What does the vendor subscription include?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 4,
    titla: "Can I customize my profile?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 5,
    titla: "How do I receive client leads?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
  {
    id: 5,
    titla: "Is there a commission on bookings?",
    description:
      "We make finding the perfect wedding vendors easy! Simply answer a few questions about your budget, style, and wedding needs. Our system uses this information to match you with verified vendors who align with your vision. You’ll receive a personalized shortlist of vendors to review and contact directly.",
  },
];

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

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <DefaultLayout>
      <section className="main-banner">
        <video autoPlay muted loop playsInline className="main-banner-video">
          <source src={bannerBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main-banner__content">
                <div className="banner-images">
                  <img src={bannerimg1} alt="" />
                  <img src={bannerimg2} alt="" />
                </div>
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

      <section className="plan-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="sec-head">
                <h2>
                  Plan in Three <span className="fagon fw-500">Easy Steps</span>
                </h2>
                <button className="body-btn">Start Planing Now</button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="plan-three__boxes">
                <div className="plan-three__box">
                  <h5>01</h5>
                  <p>
                    Tell us about your dream wedding (budget, style, location).
                  </p>

                  <div className="plan-three__box-icon plan-three__box-icon-1">
                    <img src={plantreeicon1} alt="Plan Tree Icon" />
                  </div>
                </div>
                <div className="plan-three__box">
                  <div className="plan-three__box-icon plan-three__box-icon-2">
                    <img src={plantreeicon1} alt="Plan Tree Icon" />
                  </div>
                  <h5>02</h5>
                  <p>Get matched with trusted vendors that fit your vision.</p>
                </div>
                <div className="plan-three__box">
                  <h5>03</h5>
                  <p>Book directly and bring your dream wedding to life!</p>
                  <div className="plan-three__box-icon plan-three__box-icon-3">
                    <img src={plantreeicon1} alt="Plan Tree Icon" />
                  </div>
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
                  Why Choose The Wedding{" "}
                  <span className="fagon fw-400">Concierge?</span>
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

      <section className="grow-wedding__business">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="grow-wedding__business-leftCol">
                <div className="sec-head">
                  <h2>
                    Grow Your{" "}
                    <span className="fagon fw-500">Wedding Business</span> with
                    Direct Leads
                  </h2>
                  <p>
                    Are you a wedding vendor looking to attract more clients?
                    The Wedding Concierge helps you connect with engaged couples
                    actively searching for your services. No more wasted
                    marketing spend our platform delivers high-quality leads
                    straight to you.
                  </p>
                  <button className="body-btn">Join as a Vendor</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-head">
                <h2>
                  How It <span className="fagon fw-500">Works for</span> Vendors
                </h2>
              </div>

              <div className="grow-wedding__business-boxes">
                {growWeddingBusinessIconData.map((item, index) => (
                  <div className="grow-wedding__business-box">
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

      <TestimonialSec />

      <section className="faq-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-sec__leftCol">
                <div className="sec-head">
                  <p className="sec-tag">For Couples</p>
                  <h2>
                    Got <span className="fagon fw-500">Questions</span>? We’ve
                    Got <span className="fagon fw-500">Answers</span>!
                  </h2>
                </div>
                <div className="faqs-items">
                  <Accordion defaultActiveKey="0">
                    {faqsData1.map((item, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{item.titla}</Accordion.Header>
                        <Accordion.Body>{item.description}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-head">
                <p className="sec-tag">For Vendors</p>
                <h2>
                  Got <span className="fagon fw-500">Questions</span>? We’ve Got{" "}
                  <span className="fagon fw-500">Answers</span>!
                </h2>
              </div>
              <div className="faqs-items">
                <Accordion defaultActiveKey="0">
                  {faqsData2.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>{item.titla}</Accordion.Header>
                      <Accordion.Body>{item.description}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
