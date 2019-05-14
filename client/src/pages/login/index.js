import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Background from "./music_background.jpg";
import { Link } from "react-router-dom";

import {Button, InputGroup, FormControl, Row, Col} from "react-bootstrap";

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
      <Link to="/dashboard"><Button className="mb-3" type="submit" variant="outline-primary">Submit</Button></Link>
      <Link to="/createAccount"><Button className="mb-3" type="submit" variant="outline-info">Create Account</Button></Link>
      </Col>
      </Row>
      
      </Container>
        
      
    );
  }
}
export default login;
