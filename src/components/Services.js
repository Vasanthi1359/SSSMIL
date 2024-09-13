import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h2 style={{ fontWeight: "bold" }}>
                    Services
                    <br />
                  </h2>
                  <p className="mb-0">
                    The Company is primarily focused in business of footwear,
                    leatherwear, leather articles, fashion wear, shoe
                    components, synthetic shoes and ladies heels and moulds, and
                    also deals in chemicals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">About Us<br /></li>
            </ol>
          </div>
        </nav> */}
        </div>
        {/* End Page Title */}

        {/* About Us Section */}
        <section id="services" className="section services">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* <img
                  src="assets/img/about-2.jpg"
                  className="img-fluid"
                  alt="About Us"
                /> */}
              </div>
              <div
                className="col-lg-6 order-2 order-lg-1 content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* <h3>Management Profile</h3>
                <p className="fst-italic">
                  Virat Leasing Limited is anchored by a team of experienced and
                  committed visionaries who are dedicated towards scaling the
                  Company to greater heights through innovation and excellence;
                  thereby creating value for all our stakeholders.
                </p>
                <h3>Board of Directors</h3>
                <ul className="custom-list">
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Mr. Rakesh Kolla - Whole Time Director</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Ms. Shanti Tunk - Non Executive Director</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Ms. Sangita Parida - Non Executive Director</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Mr. Suresh Pillutla - Independent Director</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Ms. Iram Anjum Beg - Independent Director</span>
                  </li>
                </ul>

                <h3>Management Team</h3>
                <ul className="custom-list">
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Ms Sowmya Nandhi - Chief Financial Officer</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>
                      CS Sandeep Garg - Company Secretary & Compliance Officer
                    </span>
                  </li>
                </ul>

                <h3>Committees</h3>
                <ul>
                  <li>
                    <strong>Audit Committee:</strong>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle"></i> Mr. Suresh
                        Pillutla - Independent Director
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Ms. Iram Anjum
                        Beg - Independent Director
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Ms. Sangita
                        Parida - Non-Executive Director
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Nomination and Remuneration Committee:</strong>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle"></i> Mr. Suresh
                        Pillutla - Independent Director
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Ms. Iram Anjum
                        Beg - Independent Director
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Ms. Sangita
                        Parida - Non-Executive Director
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Stakeholders Relationship Committee:</strong>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle"></i> Mr. Suresh
                        Pillutla - Independent Director
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Ms. Iram Anjum
                        Beg - Independent Director
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Mr. Rakesh Kolla
                        - Whole Time Director
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </section>
        {/* /About Us Section */}
      </main>
    </div>
  );
};

export default Services;
