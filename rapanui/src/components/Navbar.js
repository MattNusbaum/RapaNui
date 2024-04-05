import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import sidebar from "../images/sidebar.png";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        
      <div className="navCenter">
        
        <div className="logoDiv">
          {/* {" "}
          test */}
          <img src={logo} alt="logo" className="logoImage"></img>
        </div>

        <button
        type="button"
        className="sidebarMenu"
        onClick={this.handleToggle}>

          <div className>
            <img src={sidebar} alt="sidebar" className="sidebar"></img>
          </div>

        </button>

        <div className="nav">
          <ul
           className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Map">Map</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
        
      </nav>
    );
  }
}
