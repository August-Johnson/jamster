import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Background from "./music_background.jpg";
import API from "../../API/API";

import { Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

class createAccount extends Component {
  state = {
    instrument: "",
    skillLevel: 0,
    username: "",
    password: "",
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
      password: this.state.password
    }

    API.createNewUser(createUserData)
      .then((userData) => {
        console.log("create user ran first");
        if (userData.data.userCreated === false) {
          return alert("User already exists!");
        }
        console.log("userData: ", userData);

        const userInstrumentData = {
          username: this.state.username,
          instrument: this.state.instrument,
          skillLevel: this.state.skillLevel
        }

        API.createUserInstrument(userInstrumentData)
          .then((results) => {
            console.log("user instruments ran first");
            // localStorage.setItem("username", this.state.username);
            // window.location.replace("/dashboard");
          });

      })
      .catch((err) => console.log(err));
  }

  render() {
    return (

      <Container>
        <Hero backgroundImage={Background}></Hero>
        <Row className="justify-content-md-center">
          <Col lg="4">
            {/* Need to change text color to white probably */}
            <h2 style={{ 'color': 'white' }}>Welcome to Jamster to create an acount please enter the corresponding information below</h2>
            <br></br>
            <InputGroup><FormControl as="select" placeholder="Instrument" aria-label="Instrument" aria-describedby="basic-addon1" name="instrument" value={this.state.instrument} onChange={this.onChange}>
              <option defaultValue="">Instrument</option>
              <option value="Bass">Bass</option>
              <option value="Drums">Drums</option>
              <option value="Guitar">Guitar</option>
              <option value="Keyboard">Keyboard</option>
              <option value="Vocals">Vocals</option></FormControl></InputGroup>

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


            <br></br>
            <Button className="mb-3" type="submit" variant="outline-primary" onClick={this.handleSubmit}>Submit</Button>

          </Col>
        </Row>

      </Container>


    );
  }
}
export default createAccount;
