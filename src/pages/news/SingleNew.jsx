import React from "react";
import n2 from "../../assets/news/news-800x500-2.jpg";
import n1 from "../../assets/news/unitalo.webp";
import n3 from "../../assets/Team/fullwhitedaniele.webp";
import ContactWidget from "../../globals/Widgets/ContactWidget";
import ApplyWidget from "../../globals/Widgets/ApplyWidget";

function SingleNew() {
  return (
    <>
      {/* <!-- News With Sidebar Start --> */}
      <div class="container-fluid single_news">
        <div class="container">
          <div class="row">
            <div class="col-xl-8">
              {/* <!-- News Detail Start --> */}
              <div class="position-relative mb-3">
                <img
                  class="img-fluid w-100"
                  src={n1}
                  style={{ objectFit: "cover" }}
                />
                <div class="bg-white  p-4">
                  <div class="mb-3">
                    <a
                      class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Education
                    </a>
                    <a class="text-body" href="">
                      Feb 10, 2025
                    </a>
                  </div>
                  <h1 class="mb-3 text-secondary text-uppercase fw-bold text-black">
                    eGO Education and Italo-Brasileira Announce Strategic
                    Academic Partnership
                  </h1>
                  <p>
                    eGO Education is proud to announce the signing of a
                    strategic partnership with Italo-Brasileira, a distinguished
                    Centro Universitario based in São Paulo, Brazil. This
                    collaboration marks a significant milestone in expanding
                    international academic opportunities and reinforcing global
                    educational standards.
                  </p>
                  <h3 class="text-uppercase font-weight-bold mb-3">
                    Partnership Agreement Ceremony Emphasizing Academic
                    Excellence
                  </h3>
                  {/* <img class="img-fluid w-50 float-left mr-4 mb-2" src={n2} /> */}
                  <p>
                    The agreement was formalized during a signing ceremony
                    attended by eGO Education’s General Director, Rector, and
                    Country Manager for Brazil, alongside their counterparts
                    from Italo-Brasileira. The event highlighted the mutual
                    commitment of both institutions to academic excellence and
                    innovation in postgraduate education.
                  </p>

                  <img class="img-fluid w-50 float-left mr-4 mb-2" src={n1} />
                  <p>
                    eGO Education, known for its online master’s degree programs
                    that are recognized throughout the European Union and are
                    easily validated in Commonwealth countries, will leverage
                    this partnership to offer enhanced learning experiences and
                    broaden its global footprint. The collaboration with
                    Italo-Brasileira is expected to open new avenues for
                    cross-cultural academic exchange, research, and professional
                    development, benefiting students and professionals across
                    continents.
                  </p>
                  <p>
                    This exciting alliance underlines our commitment to
                    fostering accessible, high-quality education on a global
                    scale. We look forward to the many opportunities this
                    partnership will create for our academic communities in
                    Brazil, Europe, and beyond.
                  </p>
                </div>
                <div class="d-flex justify-content-between bg-white border p-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle mr-2"
                      src={n3}
                      width="25"
                      height="25"
                      alt=""
                    />
                    <span>A.Daniele Pallotta - General Director</span>
                  </div>
                  {/* <div class="d-flex align-items-center">
                    <span class="ml-3">
                      <i class="far fa-eye mr-2"></i>12345
                    </span>
                    <span class="ml-3">
                      <i class="far fa-comment mr-2"></i>123
                    </span>
                  </div> */}
                </div>
              </div>
              {/* <!-- News Detail End --> */}

              {/* <!-- Comment List Start --> */}
              {/* <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase fw-bold">
                    3 Comments
                  </h4>
                </div>
                <div class="bg-white border border-top-0 p-4">
                  <div class="media mb-4">
                    <img
                      src={n2}
                      alt="Image"
                      class="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div class="media-body">
                      <h6>
                        <a class="text-secondary fw-bold" href="">
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
                      <button class="btn btn-sm btn-outline-secondary">
                        Reply
                      </button>
                    </div>
                  </div>
                  <div class="media">
                    <img
                      src={n1}
                      alt="Image"
                      class="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div class="media-body">
                      <h6>
                        <a class="text-secondary fw-bold" href="">
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
                      <button class="btn btn-sm btn-outline-secondary">
                        Reply
                      </button>
                      <div class="media mt-4">
                        <img
                          src={n3}
                          alt="Image"
                          class="img-fluid mr-3 mt-1"
                          style={{ width: 45 }}
                        />
                        <div class="media-body">
                          <h6>
                            <a class="text-secondary fw-bold" href="">
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
                          <button class="btn btn-sm btn-outline-secondary">
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
              {/* <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase fw-bold">
                    Leave a comment
                  </h4>
                </div>
                <div class="bg-white border border-top-0">
                  <form>
                    <div class="form-row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="name">Name *</label>
                          <input type="text" class="form-control" id="name" />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="email">Email *</label>
                          <input type="email" class="form-control" id="email" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="website">Website</label>
                      <input type="url" class="form-control" id="website" />
                    </div>

                    <div class="form-group">
                      <label for="message">Message *</label>
                      <textarea
                        id="message"
                        cols="30"
                        rows="5"
                        class="form-control"
                      ></textarea>
                    </div>
                    <div class="form-group mb-0">
                      <input
                        type="submit"
                        value="Leave a comment"
                        class="btn bg-black text-white font-weight-semi-bold py-2 px-3"
                      />
                    </div>
                  </form>
                </div>
              </div> */}
              {/* <!-- Comment Form End --> */}
            </div>

            <div class="col-xl-4">
              {/* <!-- Popular News Start --> */}
              <div class="mb-0">
                {/* <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase font-weight-bold">
                    Tranding News
                  </h4>
                </div> */}
                {/* <div class="bg-white border border-top-0 p-3">
                  <div
                    class="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img class="img-fluid" src={n3} alt="" />
                    <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a
                          class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a class="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        class="h6 m-0 text-secondary text-uppercase fw-bold text-black"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img class="img-fluid" src={n3} alt="" />
                    <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a
                          class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a class="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        class="h6 m-0 text-secondary text-uppercase fw-bold text-black"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img class="img-fluid" src={n3} alt="" />
                    <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a
                          class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a class="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        class="h6 m-0 text-secondary text-uppercase fw-bold text-black"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <img class="img-fluid" src={n3} alt="" />
                    <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a
                          class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a class="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        class="h6 m-0 text-secondary text-uppercase fw-bold text-black"
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
