import React from "react";
import UserInfo from "../../pages/myProfile/index"

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
            <a href="/myProfile">My Profile</a>
          </li>
          <li>
            <a href="/findSession">Find Session</a>
          </li>
          <li>
            <a href="/createSession">Create Session</a>
          </li>
          <li>
            <a href="/login">Logout</a>
          </li>
        </ul>
      </nav>

      <button type="button" id="sidebarCollapse" className="btn btn-dark">
        <i className="fas fa-arrows-alt-h" />
      </button>

      <div className="container main">
        <div className="card">
          <div className="card-body">
            <UserInfo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;