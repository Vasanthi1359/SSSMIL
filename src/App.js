// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import AboutUs from './components/About-us';
import Services from './components/Services';
import Policies from './components/Policies';
import Codeofconduct from './components/Codeofconduct';
import Contact from './components/Contact';
import Boardcommittes from './components/Boardcommittes';
import Corporateanno from './components/Corporateanno';
import AnnualReport from './components/AnnualReport';
import Kyc from './components/Kyc';
import Newspaper from './components/Newspaper';
import Financialresults from './components/Financialresults';
import Investorgrievance from './components/Investorgrievance';
// import Main from './components/Main';
import Home from './components/Home'; // Assuming you have a Home component
import Footer from './components/Footer';
// import Contact from './components/Contact'; // Assuming you have a Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <header id="header">
          <Header />
        </header>
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<AboutUs />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/policies" element={<Policies />} /> 
            <Route path="/codeofconduct" element={<Codeofconduct />} />
            <Route path="/board" element={<Boardcommittes />} />
            <Route path="/corporateanno" element={<Corporateanno />} />
            <Route path="/annual" element={<AnnualReport />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/newspaper" element={<Newspaper />} />
            <Route path="/financialresults" element={<Financialresults />} /> 
            <Route path="/investorgrievance" element={<Investorgrievance />} />
           


            <Route path="/contact" element={<Contact />} />
            



          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
