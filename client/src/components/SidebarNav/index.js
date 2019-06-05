import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class sidebarNav extends Component {

  // State that holds a boolean value representing whether or not the side navbar is collapsed. Default/starts off as true.
  state = {
    collapsed: true
  }

  // Calls the function that checks the current page on every component mount.
  componentDidMount() {
    this.handleCurrentPageCheck();
  }

  // Function that checks which pahe the user is currently on and adds a class to the <a> element to give it special styling.
  handleCurrentPageCheck = () => {

    // variable currentPage is equal to the pathURL being passed as an argument.
    const currentPage = this.props.currentPagePath;

    // currentLink is referencing the specific <a> element that is the current pages URL path.
    let currentLink;

    // switch case for each URL and its relating <a> element in the side navbar.
    switch (currentPage) {
      case "/myProfile":
        currentLink = document.getElementsByTagName("a")[1];
        currentLink.classList.add("current-page");
        break;

      case "/findSession":
        currentLink = document.getElementsByTagName("a")[2];
        currentLink.classList.add("current-page");
        break;

      case "/createSession":
        currentLink = document.getElementsByTagName("a")[3];
        currentLink.classList.add("current-page");
        break;

      default:
        currentLink = document.getElementsByTagName("a")[0];
        currentLink.classList.add("current-page");
        break;
    }
  }

  // Function that handles the logout, clears local storage of any user info.
  handleLogOut = () => {
    localStorage.clear();
  }

  // Function that handles expanding the navbar.
  handleExpand = () => {
    document.getElementById("sidebarNav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  }

  // Function that collapses the navbar.
  handleCollapse = () => {
    document.getElementById("sidebarNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  // Function that checks if the navbar needs to be expanded or collapsed, depending on the state. Switches the state of collapsed to the opposite of what is was at.
  handleSidebarChange = () => {
    document.getElementById("openbtn").classList.toggle("sidebar-close-icon");
    this.state.collapsed ? this.handleExpand() : this.handleCollapse();
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {

    return (
      <div>
        <div id="sidebarNav">
          <ul>
            <Link to="/dashboard" id="dashboardLink"><li>Dashboard</li></Link>
            <Link to="/myProfile"><li>My Profile</li></Link>
            <Link to="/findSession"><li>Find Sessions</li></Link>
            <Link to="/createSession"><li>Create Session</li></Link>
            <Link to="/" onClick={this.handleLogOut}><li>Logout</li></Link>
          </ul>
        </div>

        <div id="main">
          <button id="openbtn" onClick={this.handleSidebarChange}>
            <div className="bar-icon1"></div>
            <div className="bar-icon2"></div>
            <div className="bar-icon3"></div>
          </button>
        </div>

        {this.props.children}

      </div>
    );
  }
}

export default sidebarNav;