import React from 'react'

const Newspaper = () => {
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
                  <p className="mb-0">Newspaper</p>
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
                    href="/pdf/Post-Offer Advertisement_27.02.2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Post Offer Advertisement 27.02.2024
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_10.02.2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 10.02.2024
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Newspaper_ April-June_ Financial Results for the quarter ended_30.06.2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Newspaper April-June Financial Results for the quarter ended 30.06.2023
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_31.05.2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 31.05.2023
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_22.05.2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 22.05.2022
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication._31.05.2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication. 31.05.2022
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication._24.07.2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR)-Newspaper Publication. 24.07.2022
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_13.08.2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 13.08.2022
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_13.11.2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 13.11.2022
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_31.01.2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR)-Newspaper Publication 31.01.2023
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_08.02.2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR)-Newspaper Publication 08.02.2023
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Unaudited Financials_-Newspaper Publication_01.07.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Unaudited Financials Newspaper Publication 01.07.2021
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice of BM_Newspaper Publication_14.08.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice of BM Newspaper Publication 14.08.2021
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Unaudited Financials _Newspaper_15.08.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Unaudited Financials Newspaper 15.08.2021

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice _45th AGM _Newspaper Publication_08.09.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice 45th AGM Newspaper Publication 08.09.2021
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice of BM_Newspaper Publication_ 10.11.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice of BM Newspaper Publication 10.11.2021

                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Unaudited Financials _Newspaper_11.11.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Unaudited Financials Newspaper 11.11.2021
                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice of BM_Newspaper Publication_31-12-2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice of BM Newspaper Publication 31-12-2021

                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Unaudited Financials_-Newspaper Publication_31-12-2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Unaudited Financials Newspaper Publication 31-12-2021
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice_ Newspaper_28.07.20.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice Newspaper 28.07.20

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Financials_ Newspaper Publication_29.07.20.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Financials Newspaper Publication 29.07.20

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Financials_ Newspaper Publication_03.09.20.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Financials Newspaper Publication 03.09.20

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Financials_Newspaper Publication_07.11.20.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Financials Newspaper Publication 07.11.20

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice _Newspaper _09.11.2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice Newspaper 09.11.2020
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice _Newspaper_18.11.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice Newspaper 18.11.2021

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Notice _Newspaper_06.02.2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Notice Newspaper 06.02.2021

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_22.05.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 22.05.2019

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication._31.05.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication. 31.05.2019

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_20.07.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 20.07.2019

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_28.07.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 28.07.2019

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_06.08.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 06.08.2019

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_07.09.2017.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 07.09.2017

                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Financials -Newspaper Publication. 13.11.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Financials Newspaper Publication. 13.11.2019

                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_21.11.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 21.11.2019

                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_06.02.2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 06.02.2020

                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Financials -Newspaper Publication._14.02.2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Financials Newspaper Publication. 14.02.2020

                  </a>
                </p>
                <hr></hr>


                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_14.08.2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 14.08.2018
                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_04.11.2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 04.11.2018

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication-15.11.2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication-15.11.2018

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_06.02.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 06.02.2019

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Announcement under Regulation 30 (LODR)-Newspaper Publication_14.02.2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Announcement under Regulation 30 (LODR) Newspaper Publication 14.02.2019

                  </a>
                </p>
                <hr></hr>

                <p className="policies-text">
                  <i className="fa-regular fa-file-pdf" style={{ color: "red", fontSize: '20px' }}></i>{" "}
                  <a
                    href="/pdf/Newspaper Publication _04.11.2017.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '16px' }}
                  >
                    Newspaper Publication 04.11.2017

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

export default Newspaper;
