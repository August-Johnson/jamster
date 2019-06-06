import React, { Component } from "react";
import API from "../../API/api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import "./style.css";

class login extends Component {

  state = {
    username: "",
    password: ""
  }

  onChange = (event) => {
    const { name, value } = event.target;

    if (value === " ") {
      return "";
    }

    this.setState({
      [name]: value
    })
  }

  // Function for when the user submits their log in info.
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.username.trim() === "" && this.state.password.trim() === "") {
      document.getElementById("login-fail-message").style.display = "none";
      document.getElementById("empty-password-fail").style.display = "none";
      document.getElementById("empty-username-fail").style.display = "none";
      document.getElementById("all-empty-fail").style.display = "block";
    }
    else if (this.state.username === "") {
      document.getElementById("all-empty-fail").style.display = "none";
      document.getElementById("login-fail-message").style.display = "none";
      document.getElementById("empty-password-fail").style.display = "none";
      document.getElementById("empty-username-fail").style.display = "block";
    }
    else if (this.state.password === "") {
      document.getElementById("all-empty-fail").style.display = "none";
      document.getElementById("login-fail-message").style.display = "none";
      document.getElementById("empty-username-fail").style.display = "none";
      document.getElementById("empty-password-fail").style.display = "block";
    }
    else {

      // Creating an object with the usernameto send to the backend.
      const usernameData = {
        username: this.state.username,
        password: this.state.password
      }

      API.userLogin(usernameData)
        .then((userData) => {
          // If the login info was correct, store the relevent info in localstorage,
          // then bring the user to the dashboard.
          if (userData.data[1] === true) {
            localStorage.clear();
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("userId", parseInt(userData.data[0].id));
            localStorage.setItem("instrumentId", parseInt(userData.data[0].instrument));
            localStorage.setItem("skillLevel", parseInt(userData.data[0].skill_level));
            window.location.replace("/dashboard");
          }
          else {
            // If the password is incorrect, reveal the message showing that.
            document.getElementById("all-empty-fail").style.display = "none";
            document.getElementById("empty-username-fail").style.display = "none";
            document.getElementById("empty-password-fail").style.display = "none";
            document.getElementById("login-fail-message").style.display = "block";
          }
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div id="login-background">
              <h1>Welcome to Jamster</h1>
              <br />
              <ul>
                <li>Connect with other musicians</li>
                <li>Create a jam session</li>
                <li>Join other jam sessions</li>
              </ul>
            </div>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <h2 className="text-white login-message">Log in to get your jam on!</h2>
            <div id="all-empty-fail">Please enter a username and password.</div>
          </Col>
        </Row>

        <br />

        <Row className="login-form">
          <Col xs="10" sm="10" md="8" lg="8" xl="5">
            <InputGroup size="lg" required>
              <FormControl id="username-login" type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} />
            </InputGroup>
            <div id="empty-username-fail">Please enter a username.</div>
            <br />
            <InputGroup size="lg" required>
              <FormControl id="password-login" type="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} />
            </InputGroup>
            <div id="empty-password-fail">Please enter a password.</div>
            <div id="login-fail-message">Incorrect username or password.</div>
            <br />
            <Button className="p-2 mr-3 mb-4" type="submit" variant="outline-primary" onClick={this.handleSubmit}>Log In</Button>
            <span style={{ "color": "#FFFFFF", "fontSize": "120%", "fontWeight": "550" }}>or</span>
            <Link to="/createAccount"><Button className="p-2 ml-3 mb-4" variant="outline-info">Create Account</Button></Link>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default login;
