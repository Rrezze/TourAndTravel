import React from 'react'
import "./FooterCss.css";
import heroImg2 from "../assets/hero5.jpg";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
      <img alt="HeroImg" className="hero-img2" src={heroImg2}></img>
      <div className='footer-collection'>
            <div className='footer-text'>
                <h1>Travel&Tour</h1>
                <p>Choose your favorite destination</p>
            </div>
            <div className='footer-brands'>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>

                    <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>

                    <a href='/'>
                    <i className='fa-brands fa-youtube-square'></i>

                </a>
            </div>
            </div>
        </div>
        <div className='bottom'>
            
        </div>
    </div>
  )
}

export default Footer