import logo from "../../assets/images/Group 190.png";
import darkBtn from "../../assets/images/dark-btn.png";
import MainBtn from "../Button/MainBtn";
import "./navbar.css";

import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
    };
  }
  darkLight() {
    this.setState({
      dark: !this.state.dark,
    });
    let body = document.body;
    if (!this.state.dark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }
  render() {
    return (
      <header className={this.state.dark ? "dark" : ""}>
        <div className="container">
          <nav className="nav">
            <a href="#home" className="logo">
              <div className="logo-img">
                <img src={logo} alt="" />
              </div>
              <p className="logo-text">Products</p>
            </a>
            <ul className="navbar">
              <li className="nav-link">
                <a href="#qualities">Product</a>{" "}
              </li>
              <li className="nav-link">
                <a href="#strategies">Customers</a>
              </li>
              <li className="nav-link">
                <a href="#prices">Pricing</a>
              </li>
              <li className="nav-link">
                <a href="#reviews">Resources</a>
              </li>
              <li className="nav-link">
                <a href="/">
                  <button className="btn">Sign In</button>
                </a>
              </li>
              <li className="nav-link">
                <a href="/">
                  <MainBtn>Sign Up</MainBtn>
                </a>
              </li>
              <li className="nav-link">
                <button id="darkBtn">
                  <div className="div">
                    <img src={darkBtn} alt="" />
                    <input
                      className="darkIn"
                      type="checkbox"
                      onChange={() => this.darkLight()}
                    />
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
