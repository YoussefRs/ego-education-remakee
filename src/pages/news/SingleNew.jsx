import React from "react";
import n1 from "../../assets/news/unitalo.webp";
import n3 from "../../assets/Team/fullwhitedaniele.webp";
import ContactWidget from "../../globals/Widgets/ContactWidget";
import ApplyWidget from "../../globals/Widgets/ApplyWidget";
import { useLocation } from "react-router-dom";

function SingleNew() {

  const location = useLocation();
  const slide = location.state;

  return (
    <>
      {/* <!-- News With Sidebar Start --> */}
      <div className="container-fluid single_news">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/* <!-- News Detail Start --> */}
              <div className="position-relative mb-3">
                <img
                  className="img-fluid w-100"
                  src={slide?.image}
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white pt-4 pb-2">
                  <div className="mb-3">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Education
                    </a>
                    <a className="text-body" href="">
                      {slide?.date}
                    </a>
                  </div>
                  <h1 className="mb-3 text-secondary text-uppercase fw-bold text-black">
                   {slide?.title}
                  </h1>
                  <p>
                    {slide?.p1}
                  </p>
                  <h3 className="text-uppercase font-weight-bold mb-3">
                    {slide?.sub}
                  </h3>
                  {/* <img className="img-fluid w-50 float-left mr-4 mb-2" src={n2} /> */}
                  <p>
                  {slide?.p2}
                  </p>

                  {/* <img className="img-fluid w-50 float-left mr-4 mb-2" src={slide?.subImage} /> */}
                  <p>
                  {slide?.p3}
                  </p>
                  <p>
                  {slide?.p4}
                  </p>
                </div>
                <div className="d-flex justify-content-between bg-white border p-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle mr-2"
                      src={n3}
                      width="25"
                      height="25"
                      alt=""
                    />
                    <span>A.Daniele Pallotta - General Director</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <span className="ml-3">
                      <i className="far fa-eye mr-2"></i>12345
                    </span>
                    <span className="ml-3">
                      <i className="far fa-comment mr-2"></i>123
                    </span>
                  </div> */}
                </div>
              </div>
              {/* <!-- News Detail End --> */}

              {/* <!-- Comment List Start --> */}
              {/* <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase fw-bold">
                    3 Comments
                  </h4>
                </div>
                <div className="bg-white border border-top-0 p-4">
                  <div className="media mb-4">
                    <img
                      src={n2}
                      alt="Image"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        <a className="text-secondary fw-bold" href="">
                          John Doe
                        </a>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed sed eirmod ipsum.
                      </p>
                      <button className="btn btn-sm btn-outline-secondary">
                        Reply
                      </button>
                    </div>
                  </div>
                  <div className="media">
                    <img
                      src={n1}
                      alt="Image"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        <a className="text-secondary fw-bold" href="">
                          John Doe
                        </a>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed sed eirmod ipsum.
                      </p>
                      <button className="btn btn-sm btn-outline-secondary">
                        Reply
                      </button>
                      <div className="media mt-4">
                        <img
                          src={n3}
                          alt="Image"
                          className="img-fluid mr-3 mt-1"
                          style={{ width: 45 }}
                        />
                        <div className="media-body">
                          <h6>
                            <a className="text-secondary fw-bold" href="">
                              John Doe
                            </a>{" "}
                            <small>
                              <i>01 Jan 2045</i>
                            </small>
                          </h6>
                          <p>
                            Diam amet duo labore stet elitr invidunt ea clita
                            ipsum voluptua, tempor labore accusam ipsum et no
                            at. Kasd diam tempor rebum magna dolores sed sed
                            eirmod ipsum.
                          </p>
                          <button className="btn btn-sm btn-outline-secondary">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- Comment List End --> */}

              {/* <!-- Comment Form Start --> */}
              {/* <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase fw-bold">
                    Leave a comment
                  </h4>
                </div>
                <div className="bg-white border border-top-0">
                  <form>
                    <div className="form-row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="name">Name *</label>
                          <input type="text" className="form-control" id="name" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="email">Email *</label>
                          <input type="email" className="form-control" id="email" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                      <label for="message">Message *</label>
                      <textarea
                        id="message"
                        cols="30"
                        rows="5"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="form-group mb-0">
                      <input
                        type="submit"
                        value="Leave a comment"
                        className="btn bg-black text-white font-weight-semi-bold py-2 px-3"
                      />
                    </div>
                  </form>
                </div>
              </div> */}
              {/* <!-- Comment Form End --> */}
            </div>

            <div className="col-xl-4">
              {/* <!-- Popular News Start --> */}
              <div className="mb-0">
                {/* <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Tranding News
                  </h4>
                </div> */}
                {/* <div className="bg-white border border-top-0 p-3">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img className="img-fluid" src={n3} alt="" />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase fw-bold text-black"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img className="img-fluid" src={n3} alt="" />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase fw-bold text-black"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img className="img-fluid" src={n3} alt="" />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase fw-bold text-black"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img className="img-fluid" src={n3} alt="" />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase fw-bold text-black"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <!-- Popular News End --> */}

              {/* <!-- Ads Start --> */}
              <div className="mb-4">
                <ContactWidget />
              </div>

              <ApplyWidget />
              {/* <!-- Ads End --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleNew;
