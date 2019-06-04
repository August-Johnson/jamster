import React, { Component } from "react";
import "./style.css";

class sidebarNav extends Component {

  handleLogOut = () => {
    localStorage.clear();
    // window.location.replace.href("/");
  }

  handleExpand = () => {
    document.getElementById("sidebarNav").style.width = "270px";
    document.getElementById("main").style.marginLeft = "270px";
  }

  handleCollapse = () => {
    document.getElementById("sidebarNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  render() {
    return (
      <div>
        <div id="sidebarNav">
          <button className="closebtn" onClick={this.handleCollapse}>Close x</button>
          <ul>
            <a href="/dashboard"><li>Dashboard</li></a>
            <a href="/myProfile"><li>My Profile</li></a>
            <a href="/findSession"><li>Find Sessions</li></a>
            <a href="/createSession"><li>Create Session</li></a>
            <a href="/" onClick={this.handleLogOut}><li>Logout</li></a>
          </ul>
        </div>

        <div id="main">
          <button className="openbtn" onClick={this.handleExpand}>Toggle Collapse</button>
        </div>

        {/* {this.props.children} */}

      </div>
    );
  }
}

export default sidebarNav;