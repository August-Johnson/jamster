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

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  // Function for when the user submits their log in info
  handleSubmit = () => {
    
    // Creating an object with the usernameto send to the backend
    const usernameData = {
      username: this.state.username
    }

    API.userLogin(usernameData)
      .then((userData) => {
        if (userData.data[1] !== null && userData.data[1] === this.state.password) {
          // storing the username in localstorage if the login info is valid
          localStorage.setItem("username", this.state.username);
          localStorage.setItem("userId", parseInt(userData.data[0].id));
          localStorage.setItem("instrumentId", parseInt(userData.data[0].instrument_id));
          localStorage.setItem("skillLevel", parseInt(userData.data[0].skill_level));
          window.location.replace("/dashboard");
        }
        else {
          alert("Incorrect login info!");
        }
      })
      .catch((err) => console.log(err));
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
            <h2 className="text-white login-message">Log in to get your Jam on!</h2>
          </Col>
        </Row>

        <br />

        <Row className="login-form">
          <Col xs="10" sm="10" md="8" lg="8" xl="5">
            <InputGroup size="lg">
              <FormControl id="username-login" type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} />
            </InputGroup>
            <br />
            <InputGroup size="lg">
              <FormControl id="password-login" type="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} />
            </InputGroup>
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
