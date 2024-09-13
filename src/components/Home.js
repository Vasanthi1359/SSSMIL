import React from "react";
import { Link } from "react-router-dom";

import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

AOS.init();

const Home = () => {
  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        <img src="/image/banner.webp" alt="" data-aos="fade-in" />
        <div className="overlay"></div> {/* Add this line for the overlay */}

        <div className="container">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Standard Shoe Sole And Mould (India) Ltd.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            “Walk with Confidence, Step with Quality”
          </p>
          {/* <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="courses.html" className="btn-get-started">
              Get Started
            </a>
          </div> */}
        </div>
      </section>

      <section>
        <div className="intro">
          <div className="container">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ color: "#78AC71" }} // Change the color here
            >
              Standard Shoe Sole And Mould (India) Ltd.
            </h2>

            <p className="">
              Standard Shoe Sole and Mould (India) Ltd. was originally
              incorporated with the Registrar of Companies, West Bengal on 19th
              day of July, 1973 as Chemcrown India (Private) Limited. Our
              Company made its public issue in the year 1991 and subsequently
              got its shares listed at BSE Limited in the same year.
              Subsequently, the name of our Company was changed to its present
              name “Standard Shoe Sole and Mould (India) Ltd” and a fresh
              Certificate of Incorporation reflecting the new name was issued by
              the Registrar of Companies, West Bengal on 14th Day of December,
              2001. The Company is primarily focused in business of footwear,
              leatherwear, leather articles, fashion wear, shoe components,
              synthetic shoes and ladies heels and moulds, and also deals in
              chemicals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
