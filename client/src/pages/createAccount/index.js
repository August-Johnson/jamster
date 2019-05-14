import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Background from "./music_background.jpg";
import { Link } from "react-router-dom";


import {Button, InputGroup, FormControl, Row, Col} from "react-bootstrap";


class createAccount extends Component {
  state = {
    instrument: "",
    skillLevel: 0,
    username: "",
    password: "",
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
      <Row className="justify-content-md-center"> 
        <Col lg="4">
        {/* Need to change text color to white probably */}
      <h2 style={{'color':'white'}}>Welcome to Jamster to create an acount please enter the corresponding information below</h2>
      <br></br>
      <InputGroup controlId="createInstrunment"><FormControl as="select" placeholder="Instrument"aria-label="Instrument"aria-describedby="basic-addon1" name="instrument" value={this.state.instrument} onChange={this.onChange}>
      <option selected value="">Instrument</option>
      <option value="Bass">Bass</option>
      <option value="Drums">Drums</option>
      <option value="Guitar">Guitar</option>
      <option value="Keyboard">Keyboard</option>
      <option value="Vocals">Vocals</option></FormControl></InputGroup>
      
      <br></br>
      <InputGroup><FormControl as="select" placeholder="Skill Level"aria-label="Skill Level"aria-describedby="basic-addon1" name="skillLevel" value={this.state.skillLevel} onChange={this.onChange}>
      <option selected value="">Skill Level</option>
      <option value="1">1 (Low)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (High)</option></FormControl></InputGroup>


      <br></br>
      <InputGroup><FormControl placeholder="Username"aria-label="Username"aria-describedby="basic-addon1" name="username" value={this.state.username} onChange={this.onChange}/></InputGroup>
      <br></br>
      <InputGroup><FormControl placeholder="Password"aria-label="Password"aria-describedby="basic-addon1" name="password" value={this.state.password} onChange={this.onChange}/></InputGroup>
      <br></br>
      

      <br></br>
      <Button className="mb-3" type="submit" variant="outline-primary"><Link to="/login" >Submit</Link></Button>
      
      </Col>
      </Row>
      </Container>
        
      
    );
  }
}
export default createAccount;
