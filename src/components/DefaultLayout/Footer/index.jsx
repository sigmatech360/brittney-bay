import React from "react";

import { Link } from "react-router-dom";

import footerLogo from "../../../assets/images/footer-logo.png";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { ImPinterest2 } from "react-icons/im";

const footerLinkSections = [
  {
    title: "For Couples",
    links: [
      { text: "Find a Wedding Vendor", link: "" },
      { text: "Plan My Whole Wedding", link: "" },
      { text: "Explore Vendor Categories", link: "" },
      { text: "Why Choose Us?", link: "" },
      { text: "Wedding Planning Tips & Blog", link: "" },
      { text: "Join as a Couple – It’s Free!", link: "" },
    ],
  },
  {
    title: "For Vendors",
    links: [
      { text: "Become a Vendor", link: "" },
      { text: "Vendor Packages & Pricing", link: "" },
      { text: "Showcase Your Expertise", link: "" },
      { text: "Vendor Success Stories", link: "" },
      { text: "Vendor Support Center", link: "" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { text: "Contact Us", link: "" },
      { text: "FAQs", link: "" },
      { text: "Privacy Policy", link: "" },
      { text: "Terms & Conditions", link: "" },
      { text: "Vendor Guidelines", link: "" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="main-footer__left">
                <div className="row">
                  {footerLinkSections.map((section, idx) => (
                    <div className="col-md-4" key={idx}>
                      <div className="footer-quick__links-div">
                        <h4 className="footer-quick__links-header">
                          {section.title}
                        </h4>
                        <div className="footer-quick__links-list">
                          {section.links.map((item, linkIdx) => (
                            <Link
                              key={linkIdx}
                              to={item.link}
                              className="footer-quick__link"
                            >
                              {item.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="main-footer__content">
                <Link to="/" className="main-footer__content-logo">
                  <img src={footerLogo} alt="Foter Logo" />
                </Link>
                <p>
                  Your one-stop platform for stress-free wedding planning. We
                  connect engaged couples with trusted wedding vendors through
                  personalized matchmaking and seamless booking.
                </p>
                <div className="footer-social-links">
                  <a href="javascript:;" className="footer-social-link facebook">
                    <RiFacebookCircleLine />
                  </a>
                  <a href="javascript:;" className="footer-social-link whatsapp">
                    <FaWhatsapp />
                  </a>
                  <a href="javascript:;" className="footer-social-link instagram">
                    <FaInstagram />
                  </a>
                  <a href="javascript:;" className="footer-social-link pinterest">
                    <ImPinterest2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-content">
                <div className="copyright-links">
                  <Link to={""} className="copyright-link">
                    Privacy
                  </Link>
                  <Link to={""} className="copyright-link">
                    Terms
                  </Link>
                  <Link to={""} className="copyright-link">
                    Do Not Sell / Share My Personal Information
                  </Link>
                </div>
                <p className="copyright-text">© 2025 The Wedding Concierge</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
