import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.jpg";
import "../components/HeroCss.css";
import Destination from "../components/DestinationCss.css";
import swiss from "../assets/swiss.jpg";
import swiss2 from "../assets/swiss2.jpg";
import "../components/DestinationCss.css";
import italy from "../assets/italy.jpg";
import italy2 from "../assets/italy2.jpg";

const Home = () => {
  const textWithLineBreaks = (
    <>
      Embark on a journey where every destination is a chapter
      <br />
      waiting to be written and every adventure is a story waiting to be told.
      <br />
      Uncover the hidden gems of the world and let the wanderlust in you come
      alive.
    </>
  );
  return (
    <div className="hero">
      <Navbar />
      <img alt="HeroImg" className="hero-img" src={heroImg}></img>
      <div className="hero-text">
        <h1 className="text-home">Your journey starts here</h1>
        <p>{textWithLineBreaks}</p>
        <a href="/" className="show">
          Travel Plan
        </a>
      </div>
      {/* <div className="home-section2">
        <div className="home-fade">
          <h1 className="fade-hide">Lorem ipsum dolor</h1>
        </div>
      </div> */}
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tour to places you will want to visit</p>
        <div className="first-destination">
          <div className="destination-text">
            <h2>Lausanne, Switzerland</h2>
            <p>
              Rich in art and culture, with a youthful vibe and a gorgeous
              lakeside location, Lausanne may be a small city, but it has a lot
              to say for itself. From beaches and boat rides to vineyards and
              pop-up bars, these top things to do in will make any trip here a
              real treat.
            </p>
          </div>
          <div className="imageDestination">
            <img alt="img" className="img1" src={swiss}></img>
            <img alt="img" className="img2" src={swiss2}></img>
          </div>
        </div>
        <div className="first-destination">
          <div className="imageDestination2">
            <img alt="img" className="img1" src={italy}></img>
            <img alt="img" className="img2" src={italy2}></img>
          </div>
          <div className="destination-text">
            <h2>Lake Como, Italy</h2>
            <p>
              Lake Como or Lario, an harmonious mix of water and land, presents
              itself with its Ipsilon shape created by the branches that compose
              it: the basin of Colico, the Como branch and the Lecco branch.
            </p>
          </div>
        </div>
      </div>
      <div className="trips">
        
      </div>
    </div>
    // <>
    //
    //   <Hero
    //     cName="hero"
    //     heroImg={heroImg}
    //     title="Your journey starts here"
    //     text={textWithLineBreaks}
    //     buttonText="Travel Plan"
    //     url="/"
    //     btnClass="show"
    //   />
    // </>
  );
};

export default Home;
