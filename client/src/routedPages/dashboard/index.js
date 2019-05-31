import React, { Component } from "react";
import Dashboard from "../../pages/dashboard/index";
import "./style.css";

class DashboardNav extends Component {

  // toggle = () => {
  //   this.setState({ addClass: !this.state.addClass });
  // }

  handleLogOut = () => {
    localStorage.clear();
    window.location.replace.href("/");
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

    // let buttonClass = ["inactive"];
    // if (this.state.addClass) {
    //   buttonClass.push("active");
    // }

    return (
      <div>
        <div id="sidebarNav">
          <button className="closebtn" onClick={this.handleCollapse}>Close x</button>
          <ul>
            <a href="/dashboard"><li>Dashboard</li></a>
            <a href="myProfile"><li>My Profile</li></a>
            <a href="findSession"><li>Find Sessions</li></a>
            <a href="createSession"><li>Create Session</li></a>
            <a href="" onClick={this.handleLogOut}><li>Logout</li></a>
          </ul>
        </div>

        <div id="main">
          <button className="openbtn" onClick={this.handleExpand}>Toggle Collapse</button>
        </div>

        {this.props.children}

      </div>

      // <div className="wrapper">
      //   <nav id="sidebar" className={buttonClass.join(' ')}>
      //     <div className="sidebar-header">
      //       <h3 className="logo-text">Jamster</h3>

      //     </div>

      //     <ul className="list-unstyled components">
      //       <p className="user-name">{localStorage.getItem("username")}</p>
      //       <li>
      //         <a href="/dashboard">Dashboard</a>
      //       </li>
      //       <li>
      //         <a href="/myProfile">My Profile</a>
      //       </li>
      //       <li>
      //         <a href="/findSession">Find Session</a>
      //       </li>
      //       <li>
      //         <a href="/createSession">Create Session</a>
      //       </li>
      //       <li>
      //         <a href="/" onClick={this.handleLogOut}>Logout</a>
      //       </li>
      //     </ul>
      //   </nav>

      //   <button type="button" id="sidebarCollapse" className="button" onClick={this.toggle.bind(this)}>
      //     <i className="fas fa-arrows-alt-h" />
      //   </button>

      //   <div className="container main">

      //     <div className="card">
      //       <div className="card-body main-content-card">
      //         <Dashboard />
      //       </div>
      //     </div>

      //   </div>
      // </div>
    );
  }
}

export default DashboardNav;