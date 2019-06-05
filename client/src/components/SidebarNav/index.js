import React, { Component } from "react";
import "./style.css";

class sidebarNav extends Component {

  state = {
    collapsed: true
  }

  handleLogOut = () => {
    localStorage.clear();
    // window.location.replace.href("/");
  }

  handleExpand = () => {
    document.getElementById("sidebarNav").style.width = "270px";
    document.getElementById("main").style.marginLeft = "270px";
    document.getElementById("openbtn").style.left = "295px"
  }

  handleCollapse = () => {
    document.getElementById("sidebarNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.left = "25px"
  }

  handleSidebarChange = () => {
    this.state.collapsed ? this.handleExpand() : this.handleCollapse();
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    return (
      <div>
        <div id="sidebarNav">
          {/* <button className="closebtn" onClick={this.handleSidebarChange}>Close x</button> */}
          <ul>
            <a href="/dashboard"><li>Dashboard</li></a>
            <a href="/myProfile"><li>My Profile</li></a>
            <a href="/findSession"><li>Find Sessions</li></a>
            <a href="/createSession"><li>Create Session</li></a>
            <a href="/" onClick={this.handleLogOut}><li>Logout</li></a>
          </ul>
        </div>

        <div id="main">
          <button id="openbtn" onClick={this.handleSidebarChange}>
            <div className="bar-icon"></div>
            <div className="bar-icon"></div>
            <div className="bar-icon"></div>
          </button>
        </div>

        {/* {this.props.children} */}

      </div>
    );
  }
}

export default sidebarNav;