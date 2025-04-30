import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import MultiStepForm from "../../components/MultiStepForm";

import weddingbusinessbannerbg from "../../assets/images/wedding-business-banner-bg.png";

const WeddingBusiness = () => {
  return (
    <DefaultLayout>
      <section
        className="inner-banner"
        style={{ backgroundImage: `url(${weddingbusinessbannerbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="inner-banner__content">
                <h1>
                  Grow Your<span className="fagon"> Wedding Business </span>with
                  Direct Leads!
                </h1>
                <p>
                  Join our platform and connect with engaged couples looking for
                  your services. Register today and start booking more weddings!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default WeddingBusiness;
