import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Background from "./music_background.jpg";
import Wrapper from "../../components/Wrapper";

import {Button, InputGroup, Image, FormGroup, FormControl, Row, Col} from "react-bootstrap";

class login extends Component {
  state = {
    username: "",
    password: ""
  }

  onChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    }) 
  }


  render() {
    return (
      
      
      
      <Container>
      
      <Hero backgroundImage={Background}></Hero>
      <br></br>
      <Row className="justify-content-md-center"> 
        <Col lg="4">
      <InputGroup><FormControl placeholder="Username"aria-label="Username"aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange}/></InputGroup>
      <br></br>
      <InputGroup><FormControl placeholder="Password"aria-label="Password"aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange}/></InputGroup>

      <br></br>
      <Button className="mb-3" type="submit" variant="outline-primary">Submit</Button>
      <Button className="mb-3" type="submit" variant="outline-info"><a href="/createAccount">Create Account</a></Button>
      </Col>
      </Row>
      
      </Container>
        
      
    );
  }
}
export default login;
