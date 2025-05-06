import React from 'react'
import plantreeicon1 from "../../assets/images/plan-tree-icon-1.png";

const PlanThreeSec = () => {
  return (
    <section className="plan-three">
            <div className="container">
              <div className="row align-items-center flex-lg-row flex-column-reverse">
                <div className="col-lg-4">
                  <div
                    className="sec-head"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <h2>
                      Plan in Three <span className="fagon fw-500">Easy Steps</span>
                    </h2>
                    <button className="body-btn">Start Planing Now</button>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div
                    className="plan-three__boxes"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <div className="plan-three__box plan-three__box-1">
                      <div>
                        <h5>01</h5>
                        <p>
                          Tell us about your dream wedding (budget, style,
                          location).
                        </p>
                      </div>
    
                      <div className="plan-three__box-icon plan-three__box-icon-1">
                        <img src={plantreeicon1} alt="Plan Tree Icon" />
                      </div>
                    </div>
                    <div className="plan-three__box plan-three__box-2">
                      <div className="plan-three__box-icon plan-three__box-icon-2">
                        <img src={plantreeicon1} alt="Plan Tree Icon" />
                      </div>
                      <div>
                        <h5>02</h5>
                        <p>
                          Get matched with trusted vendors that fit your vision.
                        </p>
                      </div>
                    </div>
                    <div className="plan-three__box plan-three__box-3">
                      <div>
                        <h5>03</h5>
                        <p>Book directly and bring your dream wedding to life!</p>
                      </div>
                      <div className="plan-three__box-icon plan-three__box-icon-3">
                        <img src={plantreeicon1} alt="Plan Tree Icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default PlanThreeSec