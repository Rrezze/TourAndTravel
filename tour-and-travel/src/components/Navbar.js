import { Component } from "react";
import "./NavbarCss.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-items">
        <h1 className="navbar-logo">Travel&Tour</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
