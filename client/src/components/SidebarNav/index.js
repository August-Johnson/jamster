import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class sidebarNav extends Component {

  state = {
    collapsed: true
  }

  handleLogOut = () => {
    localStorage.clear();
  }

  handleExpand = () => {
    document.getElementById("sidebarNav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  }

  handleCollapse = () => {
    document.getElementById("sidebarNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

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
            <Link to="/dashboard"><li>Dashboard</li></Link>
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