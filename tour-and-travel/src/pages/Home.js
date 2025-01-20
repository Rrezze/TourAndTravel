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
import tangier from "../assets/tangier.jpg";
import austria from "../assets/austria.jpg";
import france from "../assets/france.jpg";
import Footer from "../components/Footer";

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
      <div className="trips-section">
        <h1>Recent Trips</h1>
        <p>All about discovering unique destinations</p>
        <div className="trip-card">
          <div className="t-card">
            <div className="t-image">
              <img src={tangier} alt="img" />
            </div>
            <h4>Tangier</h4>
            <p>
              Located on the Strait of Gibraltar where Africa meets Europe,
              Tangier has long held strategic importance. Ruled through the
              centuries by waves of conquerors including Romans, Vandals,
              Byzantines, Arabs and Portuguese, the city is more than two and a
              half millennia old, making it one of North Africa's most ancient.
              The medina, kasbah, bazaars and souks are among the country's most
              vibrant, and the beaches are excellent. In the last century,
              Tangier became a hot spot for the international jet set.
            </p>
          </div>
          <div className="t-card">
            <div className="t-image">
              <img src={austria} alt="img" />
            </div>
            <h4>Innsbruck</h4>
            <p>
              Nestled amidst majestic peaks, this breathtaking city offers a
              unique combination of nature, history, and culture. You can stroll
              its streets full of Baroque and Gothic architecture in the Old
              Town, or discover one of the hip districts such as Mariahilf or
              St. Nikolaus where Innsbruck’s uni students like to meet for a
              drink. After, you can take a cable car from the city centre, and
              in just 20 minutes, reach the Seegrube at 2,000 m (6,562 ft). Here
              you can take in spectacular views of the Inn valley and the
              surrounding mountains.
            </p>
          </div>
          <div className="t-card">
            <div className="t-image">
              <img src={france} alt="img" />
            </div>
            <h4>Semur en Auxois</h4>
            <p>
              Semur-en-Auxois has a wealth of cobbled streets lined with ancient
              houses, shops and cafes and unusual features to explore and enjoy.
              The architecture is a mixture of half-timbered properties and more
              'recent' houses with characterful faded shutters and wrought iron
              balconies.Passing through the clock-gate at the top of the town
              you find a small open square with several restaurants and shops to
              explore, and the historic centre of Semur-en-Auxois is all easy to
              reach from here..
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
