import React from "react";
import Navbar from "../components/Navbar";
import "../components/HeroCss.css";
import aboutImg from "../assets/hero4.jpg";

const Contact = () => {
  return (
    <div className="hero-contact">
      <Navbar />
      <img alt="HeroImg" className="hero-img" src={aboutImg}></img>
      <div className="hero-text-contact">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-fade">
        <h1 className="fade-hide">Lorem ipsum dolor</h1>
      </div>
    </div>
  );
};

export default Contact;
