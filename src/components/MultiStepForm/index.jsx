import React, { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [stepDirection, setStepDirection] = useState("next");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStepDirection("next");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStepDirection("prev");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Submit to backend here
  };

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [step]);

  return (
    <div className="inner-banner__multiStep-form">
      <form
        onSubmit={handleSubmit}
        key={step} // key forces remount on step change
        data-aos={stepDirection === "next" ? "fade-left" : "fade-right"} // optional slide direction
        className="form-step-wrapper"
      >
        {/* Step 1 */}
        {step === 1 && (
          <div className="step-1">
            <div className="wedding-form-group">
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                className="form-control"
                value={formData.businessname}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <select className="form-select form-control">
                <option value="" disabled selected>
                  Business Type
                </option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div className="wedding-form-group">
              <select className="form-select form-control">
                <option value="" disabled selected>
                  Years in Business
                </option>
                <option value="twoYears">2 Years</option>
                <option value="fiveYears">5 Years</option>
                <option value="tenYears">10 Years</option>
              </select>
            </div>
            <div className="wedding-form-group">
              <label className="upload-box upload-box__logo">
                {formData.logo ? (
                  <div className="preview-box">
                    <img
                      src={URL.createObjectURL(formData.logo)}
                      alt="Uploaded Logo"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, logo: null })}
                    >
                      ❌
                    </button>
                  </div>
                ) : (
                  <>
                    <p>Business Logo Upload</p>
                    <FiUploadCloud size={30} />
                    <input
                      type="file"
                      name="logo"
                      accept="image/*"
                      onChange={(e) =>
                        setFormData({ ...formData, logo: e.target.files[0] })
                      }
                      hidden
                    />
                  </>
                )}
              </label>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="step-2">
            <div className="wedding-form-group">
              <input
                type="text"
                placeholder="Full Name"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <input
                type="text"
                placeholder="Business Email"
                className="form-control"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <input
                type="text"
                placeholder="Phone Number"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <select className="form-select form-control">
                <option value="" disabled selected>
                  Prefered Contact Method
                </option>
                <option value="contactMethod1">Contact Method 1</option>
                <option value="contactMethod2">Contact Method 2</option>
                <option value="contactMethod3">Contact Method 3</option>
              </select>
            </div>
            <div className="wedding-form-group">
              <input
                type="text"
                placeholder="Packages & Price"
                className="form-control"
                name="packagesAndpricing"
                value={formData.packagesAndpricing}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <select className="form-select form-control">
                <option value="" disabled selected>
                  Discount & Special Offers
                </option>
                <option value="offer1">Offer 1</option>
                <option value="offer2">Offer 2</option>
                <option value="offer3">Offer 3</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="step-3">
            <div className="wedding-form-group">
              <input
                type="text"
                placeholder="Business Address"
                className="form-control"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <select className="form-select form-control">
                <option value="" disabled selected>
                  Service Areas
                </option>
                <option value="serviceArea1">Service Areas 1</option>
                <option value="serviceArea2">Service Areas 2</option>
                <option value="serviceArea3">Service Areas 3</option>
              </select>
            </div>
            <div className="wedding-form-group">
              <input
                type="date"
                placeholder="Availability Calendar"
                className="form-control"
                name="availabilityCalendar"
                value={formData.availabilityCalendar}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <select className="form-select form-control">
                <option value="" disabled selected>
                  Service Categories
                </option>
                <option value="serviceCategory1">Service Category 1</option>
                <option value="serviceCategory2">Service Category 2</option>
                <option value="serviceCategory3">Service Category 3</option>
              </select>
            </div>
            <div className="wedding-form-group wedding-form-group-multiForm-radio">
              <label className="form-label">
                Do You Offer Destination Wedding Services?
              </label>
              <div className="wedding-checkboxes">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="destinationWeddingServices"
                    id="dwsYes"
                  />
                  <label className="form-check-label" htmlFor="dwsYes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="destinationWeddingServices"
                    id="dwsNo"
                  />
                  <label className="form-check-label" htmlFor="dwsNo">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="wedding-form-group">
              <label className="upload-box upload-box__portfolio">
                <p>Upload Portfolio Images</p>
                <FiUploadCloud size={30} />
                <input
                  type="file"
                  name="portfolio"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setFormData({
                      ...formData,
                      portfolio: [...(formData.portfolio || []), ...files],
                    });
                  }}
                  hidden
                />
              </label>
              {formData.portfolio && formData.portfolio.length > 0 && (
                <div className="preview-grid">
                  {formData.portfolio.map((img, idx) => (
                    <div className="preview-box" key={idx}>
                      <img
                        src={URL.createObjectURL(img)}
                        alt={`Portfolio ${idx}`}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            portfolio: prev.portfolio.filter(
                              (_, i) => i !== idx
                            ),
                          }))
                        }
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="step-buttons" style={{ marginTop: "1rem" }}>
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}

          {step < 3 ? (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
