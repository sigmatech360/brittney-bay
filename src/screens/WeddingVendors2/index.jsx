import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

const vissionOfWeddingCheckboxes = [
  {
    labelId: "classicTraditional",
    title: "Classic / Traditional",
  },
  {
    labelId: "rusticID",
    title: "Rustic",
  },
  {
    labelId: "bohemianId",
    title: "Bohemian",
  },
  {
    labelId: "modernId",
    title: "Modern",
  },
  {
    labelId: "vintageId",
    title: "Vintage",
  },
  {
    labelId: "culturalReligious",
    title: "Cultural / Religious",
  },
  {
    labelId: "eclecticId",
    title: "Eclectic",
  },
  {
    labelId: "minimalistId",
    title: "Minimalist",
  },
  {
    labelId: "whimsicalId",
    title: "Whimsical",
  },
  {
    labelId: "elopementlId",
    title: "Elopement",
  },
  {
    labelId: "artDecolId",
    title: "Art Deco",
  },
  {
    labelId: "gardenOutdoorId",
    title: "Garden / Outdoor",
  },
  {
    labelId: "churchCeremonyId",
    title: "Church Ceremony",
  },
  {
    labelId: "industrialId",
    title: "Industrial",
  },
];

const WeddingVendors2 = () => {
  return (
    <DefaultLayout>
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-banner__content">
                {/* <h1>
                  Photographers & <span className="fagon">Videographers</span>
                </h1> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wedding-vendors__sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>
                  Need all <span className="fagon">Your Wedding</span> Vendors
                </h2>
                <p>
                  Fill out our detailed wedding questionnaire to find all the
                  perfect vendors that fit your style, vision, and budget.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className=" wedding-form-group">
                <label htmlFor="weddingDate" className="form-label">
                  Wedding Date If Booked
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="mm / dd / yyyy"
                  id="weddingDate"
                />
              </div>

              <div className=" wedding-form-group">
                <label htmlFor="alreadyBooked" className="form-label">
                  If You Already Have Your Venue Booked, Please Provide That
                  Here
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="alreadyBooked"
                />
              </div>

              <div className="wedding-form-group">
                <label className="form-label">Vision Of Wedding</label>
                <p className="wedding-form-group-p">Check all that apply</p>
                <div className="wedding-checkboxes">
                  {vissionOfWeddingCheckboxes.map((item, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="VisionOfWedding"
                        id={item.labelId}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.labelId}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="guestCount" className="form-label">
                  Guest Count
                </label>
                <select className="form-select form-control" id="guestCount">
                  <option value="" disabled selected>
                    Select An Option
                  </option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="wholeWeddingBudget" className="form-label">
                  Whole Wedding Budget
                </label>
                <select
                  className="form-select form-control"
                  id="wholeWeddingBudget"
                >
                  <option value="" disabled selected>
                    Select An Option
                  </option>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                  <option value="15000">15000</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="prioritizeYourVendors" className="form-label">
                  Prioritize Your Vendors
                </label>
                <select
                  className="form-select form-control"
                  id="prioritizeYourVendors"
                >
                  <option value="" disabled selected>
                    Select An Option
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label className="form-label">Venue</label>
                <div className="wedding-checkboxes">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="venue"
                      id="budgetVenue"
                    />
                    <label className="form-check-label" htmlFor="budgetVenue">
                      Budget
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="venue"
                      id="typeOfVenue"
                    />
                    <label className="form-check-label" htmlFor="typeOfVenue">
                      Types Of Venue
                    </label>
                  </div>
                </div>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="photography" className="form-label">
                  Photography
                </label>
                <select className="form-select form-control" id="photography">
                  <option value="" selected disabled>
                    Select An Option
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label className="form-label">DJ/Band Or Both?</label>
                <div className="wedding-checkboxes">
                  {[
                    {
                      labelId: "DJId",
                      title: "DJ",
                    },
                    {
                      labelId: "bandID",
                      title: "Band",
                    },
                    {
                      labelId: "bothID",
                      title: "Both",
                    },
                  ].map((item, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="djBandOrBoth"
                        id={item.labelId}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.labelId}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="florist" className="form-label">
                  Florist
                </label>
                <select className="form-select form-control" id="florist">
                  <option value="" selected disabled>
                    Select An Option
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="planner" className="form-label">
                  Planner
                </label>
                <select className="form-select form-control" id="planner">
                  <option value="" selected disabled>
                    Select An Option
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label className="form-label">Rentals</label>
                <div className="wedding-checkboxes">
                  {[
                    {
                      labelId: "yourNameInLights",
                      title: "Your Name In Lights",
                    },
                    {
                      labelId: "furnitureID",
                      title: "Furniture",
                    },
                    {
                      labelId: "danceFloorID",
                      title: "Dance Floor",
                    },
                    {
                      labelId: "moreExamplesID",
                      title: "More Examples....",
                    },
                  ].map((item, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rentals"
                        id={item.labelId}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.labelId}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wedding-form-group">
                <label className="form-label">Photo / Video Booth</label>
                <p className="wedding-form-group-p">Check all that apply</p>
                <div className="wedding-checkboxes">
                  {[
                    {
                      labelId: "photoBoothId",
                      title: "Photo Booth",
                    },
                    {
                      labelId: "videoGuestBoothId",
                      title: "Video Guest Booth (Guests Leave Video Messages)",
                    },
                  ].map((item, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="PhotoVideoBooth"
                        id={item.labelId}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.labelId}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wedding-form-group">
                <label className="form-label">
                  Desserts & Late Night Snacks
                </label>
                <p className="wedding-form-group-p">Check all that apply</p>
                <div className="wedding-checkboxes">
                  {[
                    {
                      labelId: "weddingCakeId",
                      title: "Wedding Cake",
                    },
                    {
                      labelId: "chocolateFountainId",
                      title: "Chocolate Fountain",
                    },
                    {
                      labelId: "gellatoId",
                      title: "Gellato",
                    },
                    {
                      labelId: "eloteId",
                      title: "Elote",
                    },
                    {
                      labelId: "coffeeCartId",
                      title: "Coffee Cart",
                    },
                    {
                      labelId: "cupcakesCookiesId",
                      title: "Cupcakes / Cookies",
                    },
                  ].map((item, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="dessertsAndLateNightSnacks"
                        id={item.labelId}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.labelId}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="dazzleUs" className="form-label">
                  Anything Else You Would Like Your Potential Vendors To Know
                  About Your Wedding?
                </label>
                <p className="wedding-form-group-p">Dazzle us</p>
                <textarea
                  className="form-control"
                  id="dazzleUs"
                  rows={5}
                ></textarea>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="makeupArtist" className="form-label">
                  Makeup Artist
                </label>
                <select className="form-select form-control" id="makeupArtist">
                  <option value="" selected disabled>
                    Select An Option
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="hairStylist" className="form-label">
                  Hair Stylist
                </label>
                <select className="form-select form-control" id="hairStylist">
                  <option value="" selected disabled>
                    Select An Option
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label htmlFor="cateringId" className="form-label">
                  Catering
                </label>
                <select className="form-select form-control" id="cateringId">
                  <option value="" disabled selected>
                    Select An Option
                  </option>
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                  <option value="Option3">Option 3</option>
                </select>
              </div>

              <div className="wedding-form-group">
                <label className="form-label">Stationary</label>
                <p className="wedding-form-group-p">Check all that apply</p>
                <div className="wedding-checkboxes">
                  {[
                    {
                      labelId: "saveTheDatesId",
                      title: "Save The Dates",
                    },
                    {
                      labelId: "rehearsalDinnerId",
                      title: "Rehearsal Dinner",
                    },
                    {
                      labelId: "welcomePartyId",
                      title: "Welcome Party",
                    },
                    {
                      labelId: "weddingInvitationsId",
                      title: "Wedding Invitations",
                    },
                    {
                      labelId: "signageForVenueId",
                      title: "Signage For Venue",
                    },
                  ].map((item, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="stationary"
                        id={item.labelId}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.labelId}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wedding-form-group">
                <label className="form-label">Additional Vendors</label>
                <div className="wedding-checkboxes">
                  {[
                    {
                      labelId: "liveArtistId",
                      title: "Live Artist",
                    },
                    {
                      labelId: "cigarsID",
                      title: "Cigars",
                    },
                  ].map((item, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="AditionalVendors"
                        id={item.labelId}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.labelId}
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" wedding-form-group">
                <label className="form-label">Name</label>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="wedding-form-group">
                      {/* <label className="form-label">Stationary</label> */}
                      <div className="wedding-checkboxes">
                        {[
                          {
                            labelId: "signUpForNewsAndUpdatesId",
                            title: "Sign Up For News And Updates",
                          },
                        ].map((item, index) => (
                          <div className="form-check" key={index}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="signUpForNewsAndUpdates"
                              id={item.labelId}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={item.labelId}
                            >
                              {item.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button className="form-submit__btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default WeddingVendors2;
