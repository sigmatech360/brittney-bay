import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import TestimonialSec from "../../components/TestimonialSec";

import bannerimg1 from "../../assets/images/banner-img-1.png";
import bannerimg2 from "../../assets/images/banner-img-2.png";
import homeAboutImg from "../../assets/images/home-about-img.png";

import smartvendoricon from "../../assets/images/smart-vendor-icon.png";
import verifiedvendoricon from "../../assets/images/verified-vendor-icon.png";
import easybookingicon from "../../assets/images/easy-booking-icon.png";
import personalizedvendoricon from "../../assets/images/personalized-vendor-icon.png";


import bannerBgVideo from "../../assets/images/brittney-banner-bg.mp4";

import Accordion from "react-bootstrap/Accordion";

import { Modal, Button, Form } from "react-bootstrap";

const whyChooseIconsData = [
  {
    id: 1,
    icon: smartvendoricon,
    text: "Vetted, top Dallas professionals",
  },
  {
    id: 2,
    icon: verifiedvendoricon,
    text: "Verified vendor reviews",
  },
  {
    id: 3,
    icon: easybookingicon,
    text: "Free matchmaking service",
  },
  // {
  //   id: 4,
  //   icon: personalizedvendoricon,
  //   text: "Personalized vendor recommendations",
  // },
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



import { Link, useNavigate } from "react-router-dom";
import PlanThreeSec from "../../components/PlanThreeSec";
import StressFreeSec from "../../components/StressFreeSec";
import GrowWeddingBusinessSec from "../../components/GrowWeddingBusinessSec";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form data here
    alert("Form submitted!");
    handleClose(); // Close modal
    navigate("/photographers");
  };

  return (
    <DefaultLayout>
      <section className="main-banner">
        <video autoPlay muted loop playsInline className="main-banner-video">
          <source src={bannerBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-banner__content">
                <div
                  className="banner-images"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img src={bannerimg1} className="img-fluid" alt="" />
                  <img src={bannerimg2} className="img-fluid" alt="" />
                </div>
                <h1 data-aos="fade-up" data-aos-delay="300">
                  {/* <span className="fagon mainBanner-topText"><span className="banner__rounded-borderText">Dallas</span> Exclusive</span> <br /> */}
                  Exclusive <span className="fagon">Matches. </span>,
                  Exceptional <span className="fagon">Weddings.</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="500">
                  Curated for couples who want a wedding that's effortless,
                  elegant, and entirely personalized. No endless searching- just
                  personalized vendor recommendations with the best of Dallas!
                  Tell us your style, budget, and vision and get paired with the
                  most trusted professionals in Dallas- vetted, experienced, and
                  ready to bring your dream day to life.
                </p>
                <div
                  className="main-banner__buttons"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <button
                    onClick={handleShow}
                    className="theme-btn theme-btn__transparent-bg"
                  >
                    Looking For a Vendor
                  </button>
                  <Link
                    to={"/wedding-vendors"}
                    className="theme-btn theme-btn__white-bg theme-fill-btn"
                  >
                    Plan My Whole Wedding
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PlanThreeSec /> */}
      {/* <StressFreeSec /> */}

      <section className="home-about__sec" id="homeAboutUs">
        <div className="container">
          <div className="row align-items-center flex-md-row flex-column-reverse">
            <div className="col-md-6">
              <div className="sec-head">
                <h2 data-aos="fade-right" data-aos-delay="200">
                  A little About <span className="fagon">Jeremy</span> +{" "}
                  <span className="fagon">Brittany</span>
                </h2>
                <p data-aos="fade-right" data-aos-delay="400">
                  Brittany & Jeremy started Bay Productions in 2014. With over
                  500 weddings under their belt, they’ve worked with many of the
                  best vendors that Dallas has to offer!
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-md-0 mb-4">
              <div
                className="home-about__img ps-xl-5 ms-xl-5"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
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

      <section className="why-choose__sec" id="homeWhyChooseUs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2 data-aos="zoom-in" data-aos-delay="100">
                  Why Choose The Wedding{" "}
                  <span className="fagon fw-400">Concierge?</span>
                </h2>
              </div>
            </div>

            {whyChooseIconsData.map((item, index) => (
              <div className="col-md-4 mb-lg-0 mb-3" key={index}>
                <div
                  className="why-choose__box"
                  data-aos="flip-left"
                  data-aos-delay={index * 300}
                >
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

      <GrowWeddingBusinessSec />

      <TestimonialSec id="homePageTestimonial" />

      <section className="faq-sec" id="homePageFaq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="faq-sec__leftCol">
                <div className="sec-head">
                  <p
                    className="sec-tag"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    For Couples
                  </p>
                  <h2 data-aos="fade-right" data-aos-delay="400">
                    Got <span className="fagon fw-500">Questions</span>? We’ve
                    Got <span className="fagon fw-500">Answers</span>!
                  </h2>
                </div>
                <div className="faqs-items">
                  <Accordion defaultActiveKey="0">
                    {faqsData1.map((item, index) => (
                      <Accordion.Item
                        eventKey={index.toString()}
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 200}
                      >
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
                <p
                  className="sec-tag"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  For Vendors
                </p>
                <h2 data-aos="fade-left" data-aos-delay="400">
                  Got <span className="fagon fw-500">Questions</span>? We’ve Got{" "}
                  <span className="fagon fw-500">Answers</span>!
                </h2>
              </div>
              <div className="faqs-items">
                <Accordion defaultActiveKey="0">
                  {faqsData2.map((item, index) => (
                    <Accordion.Item
                      eventKey={index.toString()}
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={index * 200}
                    >
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

      <Modal
        show={showModal}
        className="homeModalForm"
        onHide={handleClose}
        dialogClassName="container-modal"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Looking For a Vendor</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="sec-head">
                  <h2>
                    Find Your <span className="fagon">Perfect Wedding</span>{" "}
                    Vendors
                  </h2>
                  <p>What type of vendor are you looking for?</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <select className="form-select form-control">
                    <option value="" selected disabled>
                      Select Vendor Type
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Set Your Budget"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <select className="form-select form-control">
                    <option value="" selected disabled>
                      Select Additional Preferences*
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="mm / dd / yyyy"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <select className="form-select form-control">
                    <option value="" selected disabled>
                      Guest Count
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="wedding-form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Wedding Location"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="wedding-form-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message like if you already have your venue booked, please provide that here...….."
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button className="form-submit__btn">Find My Vendors</button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </DefaultLayout>
  );
};

export default Home;
