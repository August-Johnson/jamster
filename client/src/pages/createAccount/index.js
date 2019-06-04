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
    instrumentValue: "",
    skillLevel: 0,
    username: "",
    password: "",
    passwordConfirm: ""
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {

    const createUserData = {
      username: this.state.username,
      password: this.state.password,
      skillLevel: parseInt(this.state.skillLevel),
      instrumentId: parseInt(this.state.instrumentValue)
    }

    API.createNewUser(createUserData)
      .then((dataResponse) => {
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("userId", dataResponse.data.id);
        localStorage.setItem("instrumentId", parseInt(this.state.instrumentValue));
        localStorage.setItem("skillLevel", parseInt(this.state.skillLevel));

        window.location.replace("/dashboard");
      })
      .catch((err) => console.log(err));
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
            <InputGroup><FormControl as="select" placeholder="Instrument" aria-label="Instrument" aria-describedby="basic-addon1" name="instrumentValue" value={this.state.instrumentValue} onChange={this.onChange}>
              <option defaultValue="">Instrument</option>
              <option value="1">Bass</option>
              <option value="2">Drums</option>
              <option value="3">Guitar</option>
              <option value="4">Keyboard</option>
              <option value="5">Vocals</option></FormControl></InputGroup>

            <br></br>
            <InputGroup><FormControl as="select" placeholder="Skill Level" aria-label="Skill Level" aria-describedby="basic-addon1" name="skillLevel" value={this.state.skillLevel} onChange={this.onChange}>
              <option defaultValue="">Skill Level</option>
              <option value="1">1 (Beginner)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 (Advanced)</option></FormControl></InputGroup>


            <br></br>
            <InputGroup><FormControl type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange} /></InputGroup>
            <br></br>
            <InputGroup><FormControl type="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange} /></InputGroup>
            <br></br>
            <InputGroup><FormControl type="password" placeholder="Confirm Password" aria-label="Password Confirm" aria-describedby="basic-addon1" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onChange} /></InputGroup>
            <br></br>

            <Button className="mb-3 mr-2" type="submit" variant="outline-primary" onClick={this.handleSubmit}>Submit</Button>

            <Link to="/"><Button className="mb-3 ml-2" variant="outline-primary">Back to Login Page</Button></Link>

          </Col>
        </Row>

      </Container>
    );
  }
}

export default createAccount;
