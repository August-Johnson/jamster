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

class createAccount extends Component {

  state = {
    instrumentId: "",
    skillLevel: 0,
    username: "",
    password: "",
    passwordConfirm: ""
  }

  onChange = (event) => {
    const { name, value } = event.target;

    if (value === " ") {
      return "";
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.instrumentId.trim() === "" || this.state.skillLevel === 0 || this.state.username.trim() === "" || this.state.password.trim() === "" || this.state.passwordConfirm.trim() === "") {
      document.getElementById("password-fail-message").style.display = "none";
      document.getElementById("existing-user-message").style.display = "none";
      document.getElementById("empty-field-message").style.display = "block";
    }

    // If the both password fields match, send an object to the backend to attempt create a user.
    else if (this.state.password === this.state.passwordConfirm) {

      // Object with all data needed for creating a user.
      const createUserData = {
        username: this.state.username,
        password: this.state.password,
        skillLevel: parseInt(this.state.skillLevel),
        instrumentId: parseInt(this.state.instrumentId)
      }

      API.createNewUser(createUserData)
        .then((dataResponse) => {
          console.log(dataResponse.data);
          // If a new user was successfully created
          if (dataResponse.data[1] === true) {
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("userId", dataResponse.data.id);
            localStorage.setItem("instrumentId", parseInt(this.state.instrumentId));
            localStorage.setItem("skillLevel", parseInt(this.state.skillLevel));
            window.location.replace("/dashboard");
          }
          else {
            document.getElementById("empty-field-message").style.display = "none";
            document.getElementById("password-fail-message").style.display = "none";
            document.getElementById("existing-user-message").style.display = "block";
          }
        })
        .catch((err) => console.log(err));
    }
    else {
      document.getElementById("empty-field-message").style.display = "none";
      document.getElementById("existing-user-message").style.display = "none";
      document.getElementById("password-fail-message").style.display = "block";
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="welcome-header">Welcome to Jamster!</h1>
            <p className="welcome-message">To create an account, enter your information below.</p>
          </Col>
        </Row>

        <br />

        <Row className="create-form">
          <Col xs="12" sm="9" md="6" lg="5" xl="5">
            <div id="empty-field-message">One or more fields are empty.</div>
            <br />
            <InputGroup>
              <FormControl as="select" placeholder="Instrument" aria-label="Instrument" aria-describedby="basic-addon1" name="instrumentId" value={this.state.instrumentId} onChange={this.onChange}>
                <option defaultValue="">Instrument</option>
                <option value="1">Bass</option>
                <option value="2">Drums</option>
                <option value="3">Guitar</option>
                <option value="4">Keyboard</option>
                <option value="5">Vocals</option>
              </FormControl>
            </InputGroup>

            <br />

            <InputGroup>
              <FormControl as="select" placeholder="Skill Level" aria-label="Skill Level" aria-describedby="basic-addon1" name="skillLevel" value={this.state.skillLevel} onChange={this.onChange}>
                <option defaultValue="">Skill Level</option>
                <option value="1">1 (Beginner)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Advanced)</option>
              </FormControl>
            </InputGroup>

            <br />

            <InputGroup>
              <FormControl type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} />
            </InputGroup>
            <div id="existing-user-message">Username already exists. Please choose a different username.</div>
            <br />

            <InputGroup>
              <FormControl type="password" placeholder="Create Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} />
            </InputGroup>

            <br />

            <InputGroup>
              <FormControl type="password" placeholder="Confirm Password" aria-label="Password Confirm" aria-describedby="basic-addon1" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onChange} />
            </InputGroup>

            <div id="password-fail-message">Passwords entered do not match. Please try again.</div>

            <br />
            <Button className="mb-3" type="submit" variant="outline-primary" onClick={this.handleSubmit}>Submit</Button>
            <Link to="/" className="login-page-return mb-3">Back to Login Page</Link>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default createAccount;
