import { createContext, useState } from "react";
import Layout from "./Layout";
import { GoEarth } from "../utilis";


function Home() {

  return (

    <Layout>
      <>
        <section
          className="header1 cid-t9FjKvkbFR mbr-fullscreen"
          id="aheader1-2"
        >
          <div
            className="mbr-overlay"
            style={{ opacity: "0.4", backgroundColor: "rgb(31, 29, 26)" }}
          />
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h1 className="mbr-section-title mbr-fonts-style mb-0 align-center display-2">
                Sustainability is the future.
                </h1>
                <p className="mbr-text mbr-fonts-style align-center mt-3 mb-0 display-7">
                Join us on this incredible journey of discovery, redefining the planet as it once was.
                </p>
                <div className="mbr-section-btn align-center mt-3">
                  <a className="btn btn-success display-7" href="/add-waste">
                    Recycle now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section

          className="features5 cid-t9FkMMmfH8"
          id="afeatures5-4"
        >
          <div className="bg-img" />
          <div className="container">
            <div className="row"></div>
            <div className="row">
              <div className="col-12 cards-container">
                <div className="card">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <div className="card-title-container">
                        <h5 className="card-title mbr-fonts-style mb-0 display-5">
                          <strong>Why recycle?</strong>
                        </h5>
                      </div>
                      <p className="card-text mbr-fonts-style display-7">
                      Planet Earth has been susceptible to pollution due to the unrecycled waste that is being disposed of into the soil, water, and air. It deprives people of life in the future.
                      </p>
                      <div className="mbr-section-btn mt-3">
                        <a
                          className="btn btn-success display-7"
                          href="/add-waste"
                        >
                          Contribute
                          
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <div className="card-title-container">
                        <h5 className="card-title mbr-fonts-style mb-0 display-5">
                          <strong></strong>
                          <div>
                            <span
                              style={{
                                fontSize: "2rem",
                                backgroundColor: "transparent"
                              }}
                            >
                              <strong>Earn planet coins</strong>
                            </span>
                            <br />
                          </div>
                        </h5>
                      </div>
                      <p className="card-text mbr-fonts-style display-7">
                      After adding your recycled items, you can earn Planet Coins once your recycling is collected. Recycle more to earn x10 times.</p>                      <div className="mbr-section-btn mt-3">
                        <a
                          className="btn btn-success display-7"
                          href="/add-waste"
                        >
                          Use coins
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <div className="card-title-container">
                        <h5 className="card-title mbr-fonts-style mb-0 display-5">
                          <strong>What can I shop?
                          </strong>
                        </h5>
                      </div>
                      <p className="card-text mbr-fonts-style display-7">
                      Use your Planet Coins to redeem while purchasing eco-friendly products listed on our website, or save them to redeem cash.
                      </p>
                      <div className="mbr-section-btn mt-3">
                        <a
                          className="btn btn-success display-7"
                          href="/shop"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section

          className="features2 cid-t9Fl1qm4By"
          id="afeatures2-5"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 content-container">
                <div className="col-text">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <h4 className="card-title mbr-fonts-style display-2">
                        <strong>
                        Join the recycling revolution and be a planet superhero!♻️

                        </strong>
                      </h4>
                      <p className="mbr-text mbr-fonts-style display-7">
                        Start making a difference today by recycling your waste and reducing carbon footprint. Together, we can create a sustainable future for generations to come. The world awaits your action!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-img">
                  <div className="image-wrapper">
                    <img
                      src="https://sphotoss.s3.us-east-2.amazonaws.com/treeearth.jpeg"
                      alt="Mobirise Website Builder"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section

          className="video1 cid-t9Fl2TMQd3 mbr-parallax-background d-none"
          id="avideo1-6"
        >
          <div
            className="mbr-overlay"
            style={{ opacity: "0.5", backgroundColor: "rgb(186, 227, 200)" }}
          ></div>
          <div className="align-center container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-12 col-video">
                <div className="box">
                  <div
                    className="mbr-media show-modal align-center"
                    data-modal=".modalWindow"
                  >
                    <img
                      src="https://sphotoss.s3.us-east-2.amazonaws.com/refuse-reduce.gif"
                      alt="Mobirise"
                    />
                    <div className="icon-wrap">
                      <a className="text-primary" href="#">
                        <span
                          className="mbr-iconfont socicon mobi-mbri-play mobi-mbri"
                          style={{
                            color: "rgb(68, 175, 105)",
                            fontSize: 80,
                            fill: "rgb(68, 175, 105)"
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="modalWindow" style={{ display: "none" }}>
              <div className="modalWindow-container">
                <div className="modalWindow-video-container">
                  <div className="modalWindow-video">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder={0}
                      allowFullScreen={1}
                      data-src="https://www.youtube.com/watch?v=VA8PzkQa8d8"
                    />
                  </div>
                  <a
                    className="close"
                    role="button"
                    data-dismiss="modal"
                    data-bs-dismiss="modal"
                  >
                    <span
                      aria-hidden="true"
                      className="mbr-iconfont mobi-mbri-close mobi-mbri closeModal"
                    />
                    <span className="sr-only visually-hidden">Close</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="form2 cid-t9Fl7rTiaZ" id="aform2-8">
          <div className="bg-img" />
          <div className="container">
            <div className="mbr-section-head">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Make an Appointment</strong>
              </h3>
            </div>
            <div className="row justify-content-center">
              <div className="form-container">
                <div className="form-wrap">
                  <div className="mbr-form" data-form-type="formoid">
                    
                    <form
                      action="https://mobirise.eu/"
                      method="POST"
                      className="mbr-form form-with-styler mx-auto"
                      data-form-title="Form Name"
                    >
                      <input
                        type="hidden"
                        name="email"
                        data-form-email="true"
                        defaultValue="Wd0JQwvgKL+o5LEuoYKS+JOu5Wt1HMZG0ikhtetGVLhOOm2Ve1klG/nzZv/SLhuYOt7lDL9wzJHAf9xBrsDcQvkgEj0usJNGND40oeRKyVovKrSfV3e+qYHYH8SFX3vo.Tfqpwz47BbCrUsLQcIV0YNjNnybrx/qBInNla2jYqGr15nwGJNHhxuxiaZs/WMK0MIXGRygmecQrWg/YpJNpMiZUmvUPTRITt8vtR0Estd0u1KFj2TKmBLE8V/3ZdbhU"
                      />
                      <div className="row">
                        <div
                          hidden="hidden"
                          data-form-alert=""
                          className="alert alert-success col-12"
                        >
                          Thanks for filling out the form!
                        </div>
                        <div
                          hidden="hidden"
                          data-form-alert-danger=""
                          className="alert alert-danger col-12"
                        >
                          {" "}
                          Oops...! some problem!{" "}
                        </div>
                      </div>
                      <div className="dragArea row">
                        <div className="col-12 form-group mb-3" data-for="name">
                          <label
                            htmlFor="name-aform2-8"
                            className="form-control-label mbr-fonts-style display-7"
                          >
                            {" "}
                            Name{" "}
                          </label>
                          <input
                            type="text"
                            name="name"
                            data-form-field="name"
                            className="form-control display-7"
                            defaultValue=""
                            id="name-aform2-8"
                          />
                        </div>
                        <div
                          className="col-lg-12 col-md-12 col-sm-12 form-group"
                          data-for="text"
                        >
                          <label
                            htmlFor="text-aform2-8"
                            className="form-control-label mbr-fonts-style display-7"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            name="text"
                            data-form-field="text"
                            className="form-control display-7"
                            defaultValue=""
                            id="text-aform2-8"
                          />
                        </div>
                        <div data-for="email" className="col-12 form-group mb-3">
                          <label
                            htmlFor="email-aform2-8"
                            className="form-control-label mbr-fonts-style display-7"
                          >
                            {" "}
                            Email{" "}
                          </label>
                          <input
                            type="email"
                            name="email"
                            data-form-field="email"
                            className="form-control display-7"
                            defaultValue=""
                            id="email-aform2-8"
                          />
                        </div>
                        <div
                          data-for="details"
                          className="col-lg-12 col-md-12 col-sm-12 form-group mb-3"
                        >
                          <label
                            htmlFor="details-aform2-8"
                            className="form-control-label mbr-fonts-style display-7"
                          >
                            {" "}
                            Details{" "}
                          </label>
                          <textarea
                            name="details"
                            data-form-field="details"
                            className="form-control display-7"
                            id="details-aform2-8"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-auto mbr-section-btn align-center">
                          <button
                            type="submit"
                            className="w-100 w-100 w-100 btn btn-success display-7"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section

          className="people1 cid-t9FsBy8qBO"
          id="apeople1-h"
        >
          <div className="bg-img" />
          <div className="container">
            <div className="row">
              <div className="col-12 col-title">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-5">
                  <strong>They trust us</strong>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12 cards-container">
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/1.png" alt="Mobirise Website Builder" />
                </div>
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/2.png" alt="Mobirise Website Builder" />
                </div>
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/3.png" alt="Mobirise Website Builder" />
                </div>
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/4.png" alt="Mobirise Website Builder" />
                </div>
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/5.png" alt="Mobirise Website Builder" />
                </div>
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/6.png" alt="Mobirise Website Builder" />
                </div>
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/7.png" alt="Mobirise Website Builder" />
                </div>
                <div className="card">
                  <img src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/5.png" alt="Mobirise Website Builder" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section

          className="people2 cid-t9FlenThAj"
          id="apeople2-9"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-title">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Recycle for a better tomorrow</strong>
                </h3>
                <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 display-7">
                Benefits of recycling</h5>
              </div>
            </div>
            <div className="row card-row">
              <div className="col-12 cards-container">
                <div className="card">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <h5 className="card-title card-title-1 mbr-fonts-style display-4">
                        <strong>Environmental Benefits</strong>
                      </h5>
                      <p className="card-text mbr-fonts-style display-7">
                      Numerous environmental advantages of recycling contribute to the preservation of natural resources and the lowering of carbon footprints. We can cut down on the quantity of waste that is dumped in landfills and preserve precious resources by recycling materials like paper, plastic, glass, and metals.</p>
                      {/* <p className="card-name mbr-fonts-style display-5">
                        <strong>22 May</strong>
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <h5 className="card-title card-title-2 mbr-fonts-style display-4">
                        <strong>Economic Benefits</strong>
                      </h5>
                      <p className="card-text mbr-fonts-style display-7">
                      Recycling can provide significant economic benefits, such as job creation, cost savings, revenue generation, energy savings, and reduced environmental cleanup costs. It can help to boost local economies, reduce waste management costs, and create new employment opportunities.</p>
                      {/* <p className="card-name mbr-fonts-style display-5">
                        <strong>24 May</strong>
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <h5 className="card-title card-title-3 mbr-fonts-style display-4">
                        <strong>Social Benefits</strong>
                      </h5>
                      <p className="card-text mbr-fonts-style display-7">
                      By bringing individuals together to work towards a common objective, recycling fosters civic engagement and community involvement. Recycling also aids in litter reduction and enhances the aesthetics of neighbourhoods and public areas, fostering a sense of community pride.</p>                      {/* <p className="card-name mbr-fonts-style display-5">
                        <strong>10 June</strong>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section

          className="people3 cid-t9FlgEZcMf"
          id="apeople3-b"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 content-container">
                <div className="col-img">
                  <div className="image-wrapper">
                    <div className="iconfont-wrapper">
                      <span className="mbr-iconfont mobi-mbri-quote-left mobi-mbri" />
                    </div>
                    <img
                      src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/pexels-heitor-verdi-2169434-500x411.jpg"
                      alt="Mobirise Website Builder"
                    />
                  </div>
                </div>
                <div className="col-text">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <p className="mbr-text mbr-fonts-style display-5">
                      "We do not inherit the earth from our ancestors, 
                      we borrow it from our children."
                      </p>
                      <h4 className="card-title mbr-fonts-style display-4">
                        <strong>Native American Proverb</strong>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section

          className="people3 cid-t9Flha7BS6"
          id="apeople3-c"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 content-container">
                <div className="col-img">
                  <div className="image-wrapper">
                    <div className="iconfont-wrapper">
                      <span className="mbr-iconfont mobi-mbri-quote-left mobi-mbri" />
                    </div>
                    <img
                      src="https://mobirise.com/extensions/cookm5/healthy-food-recipes/assets/images/pexels-andrea-piacquadio-733872-500x522.jpg"
                      alt="Mobirise Website Builder"
                    />
                  </div>
                </div>
                <div className="col-text">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <p className="mbr-text mbr-fonts-style display-5">
                      "There is no such thing as 'away'. When we throw anything away, 
                      it must go somewhere."
                      </p>
                      <h4 className="card-title mbr-fonts-style display-4">
                        <strong>Annie Leonard</strong>
                      </h4>
                      <h5 className="card-subtitle mbr-fonts-style display-7">
                      American proponent
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section

          className="people3 cid-t9Flg6BZuQ"
          id="apeople3-a"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 content-container">
                <div className="col-img">
                  <div className="image-wrapper">
                    <div className="iconfont-wrapper">
                      <span className="mbr-iconfont mobi-mbri-quote-left mobi-mbri" />
                    </div>
                    <img src="https://sphotoss.s3.us-east-2.amazonaws.com/licensed-image.jpeg"
                      alt="Mobirise Website Builder"
                    />
                  </div>
                </div>
                <div className="col-text">
                  <div className="card-wrapper">
                    <div className="card-box">
                      <p className="mbr-text mbr-fonts-style display-5">
                      The greatest threat to our planet is the belief that someone else will save it."
                      </p>
                      <h4 className="card-title mbr-fonts-style display-4">
                        <strong>Robert Swan</strong>
                      </h4>
                      <h5 className="card-subtitle mbr-fonts-style display-7">
                      Author
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>

    </Layout>
  );
}

export default Home;