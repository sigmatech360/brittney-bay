import React from "react";
import TestimonialCard from "../TestimonialCard";
import sara_b from "../../assets/images/sara-b.png";
import david_l from "../../assets/images/david-l.png";
import david_m from "../../assets/images/david-m.png";
import jessica_m from "../../assets/images/jessica-m.png";
import jessica_r from "../../assets/images/jessica-r.png";
import sammantha_r from "../../assets/images/sammantha-r.png";

const TestimonialSec = (props) => {
  return (
    <section className="testimonial-sec" id={`${props.id}`}>
      <div className="container">
        <div className="row justify-content-between">
          <div
            className="col-xl-3 col-lg-4 col-md-6 testimonial-col-1 mb-lg-0 mb-4"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <TestimonialCard
              title={
                "Saved me from a scam call—Reverse Phone Lookup worked perfectly!"
              }
              ratingNumber="5/5"
              name="Sarah B"
              state="Florida"
              userImg={sara_b}
            />
          </div>
          <div
            className="col-xl-5 col-lg-4 col-md-6 testimonial-col-2 mb-lg-0 mb-4"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <TestimonialCard
              flexVariant="row"
              bgColor="lightGray"
              title={
                "I found my lost childhood friend in minutes! It was life-changing."
              }
              ratingNumber="5/5"
              name="Jessica R."
              state="Texas"
              userImg={jessica_r}
            />
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 testimonial-col-3 mb-lg-0 mb-4"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <TestimonialCard
              title={
                "Helped me verify a tenant’s background before renting. Super easy!"
              }
              ratingNumber="5/5"
              name="David M"
              state="California"
              userImg={david_m}
            />
          </div>

          <div className="col-md-12 testimonial-sec-head-col">
            <div
              className="sec-head"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <p className="sec-tag">Testimonials</p>
              <h2>
                Love <span className="fagon fw-500">Stories</span> & Business
                Success – Real{" "}
                <span className="fagon fw-500">Testimonials</span>
              </h2>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 testimonial-col-4 mb-lg-0 mb-4"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <TestimonialCard
              flexVariant="row"
              bgColor="lightGray"
              title={
                "Found my childhood best friend in minutes after searching for years!"
              }
              ratingNumber="5/5"
              name="Samantha R."
              state="New York"
              userImg={sammantha_r}
            />
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 testimonial-col-5 mb-lg-0 mb-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <TestimonialCard
              title={
                "Used public records to find my biological siblings. Life-changing!"
              }
              ratingNumber="5/5"
              name="Jessica M."
              state="California"
              userImg={jessica_m}
            />
          </div>
          <div
            className="col-lg-4 col-md-6 testimonial-col-6 mb-lg-0 mb-4"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <TestimonialCard
              flexVariant="row"
              bgColor="lightGray"
              title={
                "Ran a quick check turns out the ‘company’ was fake. Crisis avoided!"
              }
              ratingNumber="5/5"
              name="David L."
              state="Texas"
              userImg={david_l}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;
