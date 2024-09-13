import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        © <span>Copyright</span> <strong className="sitename">SSSMIL</strong> <span>All Rights Reserved</span>
      </p>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
      </div>
    </div>
  );
};

export default Footer;
