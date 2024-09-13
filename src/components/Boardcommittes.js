import React from "react";

const Boardcommittes = () => {
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
                    Investors
                    <br />
                  </h2>
                  <p className="mb-0">Board Committee</p>
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
        <div className="container boardcommittee">
          <h2> Board Committees</h2>
          <ul>
            <div class="row">
              <div class="col-md-6">
                <li>
                  <strong style={{ fontSize: '18px' }}>Audit Committee:</strong>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <span>Mr. Suresh Pillutla - Independent Director</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Ms. Iram Anjum Beg
                      - Independent Director
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Ms. Sangita Parida
                      - Non-Executive Director
                    </li>
                  </ul>
                </li>
              </div>
              <div class="col-md-6">
                <li>
                  <strong  style={{ fontSize: '18px' }}>Nomination and Remuneration Committee:</strong>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i> Mr. Suresh Pillutla
                      - Independent Director
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Ms. Iram Anjum Beg
                      - Independent Director
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Ms. Sangita Parida
                      - Non-Executive Director
                    </li>
                  </ul>
                </li>
              </div>
            </div>
            <li>
              <strong  style={{ fontSize: '18px' }}>Stakeholders Relationship Committee:</strong>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Mr. Suresh Pillutla -
                  Independent Director
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Ms. Iram Anjum Beg -
                  Independent Director
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Mr. Rakesh Kolla -
                  Whole Time Director
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Boardcommittes;
