import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    setIsDropdownOpen(false); // Close dropdown when toggling nav
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false); // Close dropdown when closing nav
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isNavOpen]);

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <NavLink to="/" className="logo d-flex align-items-center me-auto" aria-label="Home" onClick={closeNav}>
          <img src="/image/sssmillogo.webp" alt="Mentor Logo" />
        </NavLink>

        <nav id="navmenu" className={`navmenu ${isNavOpen ? 'navmenu-open' : ''}`}>
          <ul>
            <li><NavLink exact to="/" aria-label="Home" activeClassName="active" onClick={closeNav}>Home</NavLink></li>
            <li><NavLink to="/about" aria-label="About" activeClassName="active" onClick={closeNav}>About-Us</NavLink></li>
            <li><NavLink to="/services" aria-label="Services" activeClassName="active" onClick={closeNav}>Services</NavLink></li>
            <li className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`}>
              <NavLink
                to="#"
                aria-label="Dropdown"
                className="dropdown-toggle"
                activeClassName="active"
                onClick={handleDropdownToggle}
              >
                <span>Investors</span>
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/board" aria-label="Dropdown 1" className={isActiveRoute('/board') ? 'active' : ''} onClick={closeNav} >Board Committee</NavLink></li>
                <li><NavLink to="/codeofconduct" aria-label="Dropdown 2" className={isActiveRoute('/codeofconduct') ? 'active' : ''} onClick={closeNav}>Code Of Conduct</NavLink></li>
                <li><NavLink to="/policies" aria-label="Dropdown 3" className={isActiveRoute('/policies') ? 'active' : ''} onClick={closeNav}>Policies</NavLink></li>
                <li><NavLink to="/corporate-governance-report" aria-label="Dropdown 4" className={isActiveRoute('/corporate-governance-report') ? 'active' : ''} onClick={closeNav}>Corporate Governance Report</NavLink></li>
                <li><NavLink to="/shareholding-pattern" aria-label="Dropdown 5" className={isActiveRoute('/shareholding-pattern') ? 'active' : ''} onClick={closeNav}>Shareholding Pattern</NavLink></li>
                {/* <li><NavLink to="/risk-management" aria-label="Dropdown 6" className={isActiveRoute('/risk-management') ? 'active' : ''} onClick={closeNav}>Risk Management</NavLink></li> */}
                <li><NavLink to="/corporateanno" aria-label="Dropdown 7" className={isActiveRoute('/corporateanno') ? 'active' : ''} onClick={closeNav}>Corporate Announcements</NavLink></li>
                <li><NavLink to="/financialresults" aria-label="Dropdown 8" className={isActiveRoute('/financialresults') ? 'active' : ''} onClick={closeNav}>Financial Results</NavLink></li>
                <li><NavLink to="/investorgrievance" aria-label="Dropdown 9" className={isActiveRoute('/investorgrievance') ? 'active' : ''} onClick={closeNav}>Investor Grievance</NavLink></li>
                <li><NavLink to="/newspaper" aria-label="Dropdown 11" className={isActiveRoute('/newspaper') ? 'active' : ''} onClick={closeNav}>Newspaper Publication </NavLink></li>
                <li><NavLink to="/kyc" aria-label="Dropdown 10" className={isActiveRoute('/kyc') ? 'active' : ''} onClick={closeNav}>KYC Updates Forms</NavLink></li>

              </ul>
            </li>
            <li><NavLink to="/annual" aria-label="Annual" activeClassName="active" onClick={closeNav}>Annual Report</NavLink></li>
            <li><NavLink to="/contact" aria-label="Contact" className="btn-getstarted" activeClassName="active" onClick={closeNav}>Contact</NavLink></li>
          </ul>
        </nav>
        <button className="mobile-nav-toggle d-xl-none bi bi-list" aria-label="Toggle navigation" onClick={handleNavToggle}></button>
      </div>
    </header>
  );
};

export default Header;
