import React from "react";
import Navbar from "../components/Navbar";
import "../components/HeroCss.css";
import aboutImg from "../assets/hero4.jpg";

const Service = () => {
  return (
    <div className="hero-service">
      <Navbar />
      <img alt="HeroImg" className="hero-img" src={aboutImg}></img>
      <div className="hero-text-service">
        <h1>Service</h1>
      </div>
      <div className="service-section2">
        <div className="service-fade">
          <h1 className="fade-hide">Lorem ipsum dolor</h1>
        </div>
      </div>
    </div>
  );
};

export default Service;
