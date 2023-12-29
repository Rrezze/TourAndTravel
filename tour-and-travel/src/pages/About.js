import React from "react";
import Navbar from "../components/Navbar";
import "../components/HeroCss.css";
import aboutImg from "../assets/hero2.jpg";

const About = () => {
  return (
    <div className="hero-about">
      <Navbar />
      <img alt="HeroImg" className="hero-img" src={aboutImg}></img>
      <div className="hero-text-about">
        <h1>About</h1>
      </div>
      <div className="about-section2">
        <div className="about-fade">
          <h1 className="fade-hide">Lorem ipsum dolor</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
