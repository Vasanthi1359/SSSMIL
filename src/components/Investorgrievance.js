import React from 'react'

const Investorgrievance = () => {
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
                            <p className="mb-0">Investor Grievance</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

        <section id="policies" className="section policies">
            <div className="container">
                <div className="row gy-4">
                    <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                    </div>
                    <div
                        className="col-lg-12 order-2 order-lg-1 content"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >


                        <p className="policies-text">
                            <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                            <a
                                href="/pdf/Statement of Investor Complaint _31.12.2015.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', fontSize: '16px' }}
                            >
                               Statement of Investor Complaint 31.12.2015
                            </a>
                        </p>
                        <hr></hr>

                        <p className="policies-text">
                            <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                            <a
                                href="/pdf/Statement of Investor Complaint _31.03.2016.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', fontSize: '16px' }}
                            >
                             Statement of Investor Complaint 31.03.2016
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

export default Investorgrievance;
