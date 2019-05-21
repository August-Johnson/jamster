import React, { Component } from "react";
import Dashboard from "../../pages/dashboard/index";
import "./style.css";


class DashboardNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  handleLogOut = () => {
    localStorage.clear();
  }

  render() {

    let buttonClass = ["inactive"];
    if (this.state.addClass) {
      buttonClass.push("active");
    }

    return (
      <div className="wrapper">
        <nav id="sidebar" className={buttonClass.join(' ')}>
          <div className="sidebar-header">
            <h3 className="logo-text">Jamster</h3>

          </div>

          <ul className="list-unstyled components">
            <p className="user-name">{localStorage.getItem("username")}</p>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/myProfile">My Profile</a>
            </li>
            <li>
              <a href="/findSession">Find Session</a>
            </li>
            <li>
              <a href="/createSession">Create Session</a>
            </li>
            <li>
              <a href="/" onClick={this.handleLogOut}>Logout</a>
            </li>
          </ul>
        </nav>

        <button type="button" id="sidebarCollapse" className="button" onClick={this.toggle.bind(this)}>
          <i className="fas fa-arrows-alt-h" />
        </button>

        <div className="container main">
          
            <div className="card">
              <div className="card-body main-content-card">
                <Dashboard/>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
}

export default DashboardNav;