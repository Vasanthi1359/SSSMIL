import React from "react";

const Kyc = () => {
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
                  <p className="mb-0">KYC Updates Forms</p>
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
        <section id="kyc" className="section kyc">
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
                className="col-lg-12 order-2 order-lg-1 content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/SEBICircular.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    SEBI Circular
                  </a>
                </p>

                <hr></hr>

                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/Sebi-Clarification.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    Sebi-Clarification
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/FormISR-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    Form ISR-1
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/FormISR-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    Form ISR-2
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/FormISR-3.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    Form ISR-3
                  </a>
                </p>
                <hr></hr>
                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/Form_No_SH-13.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    Form No SH-13
                  </a>
                </p>
                <hr></hr>
                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/Form_No_SH-14.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    Form No SH-14
                  </a>
                </p>

                <hr></hr>
                <p className="policies-text">
                  <i
                    className="fa-regular fa-file-pdf"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>{" "}
                  <a
                    href="/pdf/FORM_ISR-4.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontSize: "16px" }}
                  >
                    FORM ISR-4
                  </a>
                </p>

              </div>
            </div>
          </div>
        </section>
        {/* /About Us Section */}
      </main>
    </div>
  );
};

export default Kyc;
