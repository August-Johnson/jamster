import React from "react";
import CreateSession from "../../pages/CreateSession/index"

import "./style.css";

function DashboardNav() {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Jamster</h3>
          <i className="fas fa-car-crash fa-5x" />
        </div>

        <ul className="list-unstyled components">
          <p className="user-name">User Name</p>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Find Session</a>
          </li>
          <li>
            <a href="/">Create Session</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </nav>

      <button type="button" id="sidebarCollapse" className="btn btn-dark">
        <i className="fas fa-arrows-alt-h" />
      </button>

      <div className="container main">
        <div className="card">
          <div className="card-body">
            <CreateSession/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;