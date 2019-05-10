import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Background from "./music_background.jpg";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import {Button, InputGroup, FormGroup, FormControl} from "react-bootstrap";

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
      <Wrapper>
      <Hero backgroundImage={Background}></Hero>
      <Container>
      <br></br>
      <InputGroup><FormControl placeholder="Username"aria-label="Username"aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange}/></InputGroup>
      <br></br>
      <InputGroup><FormControl placeholder="Password"aria-label="Password"aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange}/></InputGroup>

      <br></br>
      <Button type="submit" variant="outline-primary">Submit</Button>

      </Container>
        
      </Wrapper>
    );
  }
}
export default login;
