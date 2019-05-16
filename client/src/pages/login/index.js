import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Background from "./music_background.jpg";
import { Link } from "react-router-dom";
import API from "../../API/API";

import { Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

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
      username: this.state.username,
    }

    // window.location.replace("/dashboard")


    API.userLogin(usernameData)
      .then((userData) => {
        console.log(userData);
        if (userData.data.password === this.state.password) {
          // storing the username in localstorage if the login info is valid
          localStorage.setItem("username", this.state.username);

          window.location.replace("/dashboard");
        }
        else {
          alert("Incorrect login info!")
        }
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
      <Container>

        <Hero backgroundImage={Background}></Hero>
        <br></br>
        <Row className="justify-content-md-center">
          <Col lg="4">
            <InputGroup><FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} /></InputGroup>
            <br></br>
            <InputGroup><FormControl placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} /></InputGroup>

            <br></br>
            <Button className="mb-3" type="submit" variant="outline-primary" onClick={this.handleSubmit}>Submit</Button>
            <Link to="/createAccount"><Button className="mb-3" type="submit" variant="outline-info">Create Account</Button></Link>
          </Col>
        </Row>

      </Container>


    );
  }
}
export default login;
