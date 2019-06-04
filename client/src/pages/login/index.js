import React, { Component } from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import API from "../../API/api";
import { Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

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

  handleSubmit = () => {
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

        <div id="login-background">
          JAMSTER
        </div>

        <br />
        {/* <Row className="justify-content-md-center" style={{ "width": "100%", "marginBottom": "20px" }}> */}
        <Row className="login-form">
          <Col lg="4">
          <h2>Login to Your Profile!</h2>
          <br />
            <InputGroup size="lg">
              <FormControl id="username-login" type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} />
            </InputGroup>
            <br />
            <InputGroup size="lg">
              <FormControl id="password-login" type="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} />
            </InputGroup>
            <br />
            <Button className="p-2 mr-3 mb-4" type="submit" variant="outline-primary" onClick={this.handleSubmit}>Sign In</Button>
            <span style={{ "color": "#FFFFFF", "fontSize": "120%", "fontWeight": "550" }}>or</span>
            <Link to="/createAccount"><Button className="p-2 ml-3 mb-4" variant="outline-info">Create Account</Button></Link>
          </Col>
        </Row>

      </Container>


    );
  }
}
export default login;
