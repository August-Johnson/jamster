import React, { Component } from "react";
import CreateSession from "../../pages/CreateSession/index";
import "./style.css";
import styled, { keyframes } from "styled-components";
import FadeInRightBig from "@bit/formidablelabs.react-animations.fade-in-right-big";
const FadeInRightBigAnimation = keyframes`${FadeInRightBig}`;
const FadeInRightBigDiv = styled.div`
  animation: 1s ${FadeInRightBigAnimation};
`;

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

  render() {

    let buttonClass = ["inactive"];
    if (this.state.addClass) {
      buttonClass.push("active");
    }

    return (
      <div className="wrapper">
        <nav id="sidebar" className={buttonClass.join(' ')}>
          <div className="sidebar-header">
            <h3>Jamster</h3>

          </div>

          <ul className="list-unstyled components">
            <p className="user-name">User Name</p>
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
              <a href="/login">Logout</a>
            </li>
          </ul>
        </nav>

        <button type="button" id="sidebarCollapse" className="button" onClick={this.toggle.bind(this)}>
          <i className="fas fa-arrows-alt-h" />
        </button>

        <div className="container main">
          <FadeInRightBigDiv>
            <div className="card">
              <div className="card-body">
                <CreateSession/>
              </div>
            </div>
          </FadeInRightBigDiv>
        </div>
      </div>
    );
  }
}

export default DashboardNav;