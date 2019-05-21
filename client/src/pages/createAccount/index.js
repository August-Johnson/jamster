import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Background from "./music_background.jpg";
import API from "../../API/api";
import { Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

class createAccount extends Component {
  state = {
    instrumentValue: "",
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
        <Hero backgroundImage={Background}></Hero>
        <Row className="justify-content-md-center" style={{ "width": "100%" }}>
          <Col lg="4">
            {/* Need to change text color to white probably */}
            <h2 style={{ 'color': 'white' }}>Welcome to Jamster to create an acount please enter the corresponding information below</h2>
            <br></br>
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


            <br></br>
            <Button className="mb-3" type="submit" variant="outline-primary" onClick={this.handleSubmit}>Submit</Button>

          </Col>
        </Row>

      </Container>


    );
  }
}
export default createAccount;
