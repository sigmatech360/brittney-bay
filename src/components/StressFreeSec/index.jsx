import React from "react";
import { Link } from "react-router-dom";

const StressFreeSec = () => {
  return (
    <section className="stress-free__sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="sec-head">
              <h2 data-aos="fade-up" data-aos-delay="100">
                A <span className="fagon">Stress-Free</span> Way to Plan Your{" "}
                <span className="fagon">Wedding</span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="300">
                Let us do the heavy lifting! We’ll match you with the best
                vendors, so you can focus on the moments that matter.
              </p>
              <Link
                to=""
                className="theme-btn theme-btn__transparent-bg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Find My Vendors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StressFreeSec;
