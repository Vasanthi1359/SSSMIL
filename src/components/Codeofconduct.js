import React from 'react'

const Codeofconduct = () => {
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
                                    <p className="mb-0">Code of Conduct</p>
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
                <section id="policies" className="section policies">
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
                                    <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                                    <a
                                        href="/pdf/CodeofConductforDirectorsandSeniorManagement.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', fontSize: '16px' }}
                                    >
                                        Code of Conduct for the Board of Directors and the Senior
                                        Management
                                    </a>
                                </p>
                                <hr></hr>




                            </div>
                        </div>
                    </div>
                </section>
                {/* /About Us Section */}
            </main>
        </div>
    )
}

export default Codeofconduct;
