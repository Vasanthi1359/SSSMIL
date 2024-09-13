import React from 'react';


const reports = [
    { year: '2021 - 2022', link: '/pdf/46_SSSMIL_Annual Report_2021-2022.pdf' },
    { year: '2020 - 2021', link: '/pdf/45_SSSMIL_Annual Report_2020-2021.pdf' },
    { year: '2019 - 2020', link: '/pdf/44_SSSMIL_Annual Report _2019-2020.pdf' },
    { year: '2018 - 2019', link: '/pdf/43_SSSMIL_Annual Report_2018-2019.pdf' },
    { year: '2017 - 2018', link: '/pdf/42_SSSMIL_Annual Report__2017-2018.pdf' },
    { year: '2016 - 2017', link: '/pdf/41-SSSMIL_Annual Report__2016-2017.pdf' },
    { year: '2015 - 2016', link: '/pdf/40_SSSMIL_Annual Report_2015-2016.pdf' },
    { year: '2014 - 2015', link: '/pdf/39_SSSMIL_Annual Report__2014-2015.pdf' },
    { year: '2013 - 2014', link: '/pdf/38_SSSMIL_Annual Report__2013-2014.pdf' },
    { year: '2012 - 2013', link: '/pdf/37_SSSMIL_Annual Report_2012-2013.pdf' },
    { year: '2011 - 2012', link: '/pdf/36_SSSMIL _Annual Report_2011-2012.pdf' },
    { year: '2010 - 2011', link: '/pdf/35_SSSMIL_Annual Report_2010-2011.pdf' },
    { year: '2009 - 2010', link: '/pdf/34_SSSMIL_Annual Report_2009-2010.pdf' },
    { year: '1998 - 1999', link: '/pdf/24_SSSMIL_Annual Report__1998-1999.pdf' },
    { year: '1997 - 1998', link: '/pdf/23-SSSMIL_Annual Report _1997-1998.pdf' },
    { year: '1996 - 1997', link: '/pdf/22-SSSMIL_Annual Report__1996-1997.pdf' },
   
  ];
  

const AnnualReport = () => {
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
                    Annual Report
                    <br />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}

        {/* Annual Reports Section */}
        <section id="annual" className="section annual">
          <div className="container">
            <div className="reports-container">
              {reports.map((report, index) => (
                <a href={report.link} className="report-link" key={index}>
                  <div className="report-item">
                    <i className="fa-regular fa-file-pdf pdf-icon" style={{ color: "red", fontSize: '20px' }}></i>
                    <span>{`Annual Report (${report.year})`}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* /Annual Reports Section */}
      </main>
    </div>
  )
}

export default AnnualReport;
