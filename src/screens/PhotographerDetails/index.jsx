import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import weddingvendordetailimg1 from "../../assets/images/wedding-vendor-detail-img1.png";
import weddingvendordetailimg2 from "../../assets/images/wedding-vendor-detail-img2.png";
import weddingvendordetailimg3 from "../../assets/images/wedding-vendor-detail-img3.png";
import weddingvendordetailimg4 from "../../assets/images/wedding-vendor-detail-img4.png";

import aboutvendorimg from "../../assets/images/about-vendor-img.jpg";

const PhotographerDetails = () => {
  return (
    <div className="WeddingVendorsDetails__page">
      <DefaultLayout>
        <section className="weddingVendors__details">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="weddingVendors-gallery">
                  <div
                    className="weddingVendors-gallery-div weddingVendors-gallery-div-1"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <img
                      src={weddingvendordetailimg1}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="weddingVendors-gallery-div weddingVendors-gallery-div-2">
                    <div className="weddingVendors-gallery-div-2-1">
                      <div data-aos="flip-right" data-aos-delay="200">
                        <img
                          src={weddingvendordetailimg2}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div data-aos="flip-left" data-aos-delay="100">
                        <img
                          src={weddingvendordetailimg3}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="weddingVendors-gallery-div-2-2"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <img
                        src={weddingvendordetailimg4}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="service-card__content"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <h3>Pretty Films</h3>
                  <div className="service-card__content-meta">
                    ⭐{" "}
                    <span className="service-card__content-meta-rating">
                      4.8
                    </span>{" "}
                    <span>(102)</span> <span>Washington DC, DC</span>
                  </div>
                  <p>
                    Unlock Your Free Ultimate Wedding Video Upgrade – Exclusive
                    for WEDDINGWIRE Couples! As a special gift for WeddingWire
                    couples, we're offering our Ultimate Wedding Upgrade –
                    that's $1200 worth of extra bonuses added to our video
                    packages, at no additional cost. No catch, just added value
                    for your...
                  </p>
                  <div className="features">
                    {[
                      "Drone Footage",
                      "Multi. Locations",
                      "Multi. Cameras",
                    ].map((feature, idx) => (
                      <span key={idx}>✓ {feature}</span>
                    ))}
                  </div>
                  <div className="actions">
                    <button className="service-card__content-btn">
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="about-vendor">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4">
                      <div
                        className="about-vendor__leftContent"
                        data-aos="fade-right"
                        data-aos-delay="100"
                      >
                        <h4>About this Vendor</h4>
                        <div className="about-vendor__leftContent-img-div">
                          <div className="about-vendor__leftContent-img">
                            <img src={aboutvendorimg} alt="" />
                          </div>
                          <div className="about-vendor__leftContent-details">
                            <h5>Alex Leon</h5>
                            <p>Owner</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                      <div
                        className="about-vendor__rightContent"
                        data-aos="fade-left"
                        data-aos-delay="100"
                      >
                        <p>
                          We offer: Photography 📷️ Videography 🎬️ DJs 🎧️Day
                          of Coordination👰Photo Booth💥
                        </p>
                        <p>
                          UNLIMITED TIME, Bundle Discounts, No Fees, Fully
                          Transparent Pricing
                        </p>
                        <p>Celebrate Like You Mean It!</p>
                        <p>
                          Weddings Unlimited is the ultimate wedding vendor that
                          offers UNLIMITED TIME professional services!
                        </p>
                        <p>
                          We specialize in providing premium Photography, DJs,
                          Videography, Photo Booths, & Photo Booth VW Buses, and
                          all kinds of great special effects.
                        </p>

                        <h4>Our Vision</h4>
                        <p className="fw-500">
                          At Weddings Unlimited, we aspire to provide completely
                          custom high-end services at a cost that allows you...
                        </p>
                        <button className="readMore">Read more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </div>
  );
};

export default PhotographerDetails;
