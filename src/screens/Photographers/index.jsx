import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import { servicesData } from "../../data";

import { FaRegHeart } from "react-icons/fa";
import { PiListLight, PiSquaresFourThin } from "react-icons/pi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const Photographers = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);

  const currentData = servicesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <DefaultLayout>
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-banner__content">
                <h1>
                  Photographers & <span className="fagon">Videographers</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="photographers-list__sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-cards-top">
                <h4 className="service-cards-total">
                  {servicesData.length} results
                </h4>

                <div className="service-cards-top-filters">
                  <button className="services-cards-filter-btn active btn__list">
                    <PiListLight /> List
                  </button>
                  <button className="services-cards-filter-btn btn__image">
                    <PiSquaresFourThin /> Image
                  </button>
                </div>
              </div>
            </div>
          </div>
          {currentData.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="service-card__image">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      loop={true}
                      className="service-swiper"
                    >
                      {item.images.map((img, _index) => (
                        <SwiperSlide key={_index}>
                          <img
                            src={img}
                            alt={item.title}
                            className="service-image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <button className="favorite-btn">
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-card__content">
                    <h3>{item.title}</h3>
                    <div className="service-card__content-meta">
                      ⭐{" "}
                      <span className="service-card__content-meta-rating">
                        {item.rating}
                      </span>{" "}
                      <span>({item.reviews})</span> <span>{item.location}</span>
                    </div>
                    <p>{item.description}</p>
                    <div className="features">
                      {item.features.map((feature, idx) => (
                        <span key={idx}>✓ {feature}</span>
                      ))}
                    </div>
                    <div className="actions">
                      <button className="service-card__content-btn">
                        Hire Me
                      </button>
                      <span>${item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="services-cards__pagination">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={currentPage === idx + 1 ? "active" : ""}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="pagination-next-btn"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Photographers;
