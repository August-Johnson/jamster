import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import API from "../../API/api";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";


class UserInfo extends Component {
    state = {
        username: localStorage.getItem("username"),
        // instruments: {
        //     instrument: "",
        //     skillLevel: ""
        // },
        instruments: '',
        skill: '',
        instrumentArr: []
    }

    InstrumentAdd = (evtKey, event)  => {
        // if (evtKey.target.title === "") {
        //     return;
        // }
        // else {
            console.log(evtKey);
            this.setState({instruments: evtKey });
            console.log(setTimeout(()=>(console.log("Instruments: " ,this.state.instruments), 10000)));
        // }
       
    }


    SkillAdd = (evtKey, event)  => {
        // if (evtKey.target.title === "") {
        //     return;
        // }
        // else {
            console.log(evtKey);
            this.setState({skill: evtKey });
            console.log(setTimeout(()=>(console.log("Skill: " ,this.state.skill), 10000)));
        // }
       
    }
    Add = (evtKey, event)  => {

        console.log("click");

        console.log(this.state.instruments)
        console.log(this.state.skill)

        this.setState({instrumentArr: [...this.state.instrumentArr, {
            instruments: this.state.instruments, 
            skill: this.state.skill
        }]})
        console.log(setTimeout(()=>(console.log("instrumentsArr: " + this.state.instrumentArr[0].instruments),50000)));
        // console.log(evtKey)
        // console.log(event)
        // let instSkill = {
        //     instrument: '',
        //     skill: ''
        // }
        // if (typeof evtKey == 'number') {
        //     console.log('number');
        //     instSkill.skill = evtKey;
            
        //     //this.setState({skillLevel: [...this.state.instruments.skillLevel, evtKey]});
        // }
        // else {
        //     //this.setState({instruments: [...this.state.instruments.instrument, evtKey]});
        //     instSkill.instrument = evtKey
        //     this.setState({instrument: evtKey})
        //     console.log(setTimeout(()=>(console.log("Skill level: " ,this.state.skillLevel), 10000)));
            
        // }
        // this.setState({})
    }

    componentDidMount() {
        console.log("Instruments: " ,this.state.instruments);
        const usernameData = {
            username: this.state.username
        }

        API.getMyInfo(usernameData)
            .then((userData) => {
                console.log("UserData: ", userData);
            })
            // then call a function for getting the instrument and skill level data using the user's id being returned from the first call
            // .then(() => API.)
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <h1 className="text-center mb-4">My Profile</h1>
                            <hr />
                            <br />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <img src="https://via.placeholder.com/300x300" alt="null" />
                            <br />
                            <Button variant="info" size="lg" className="mt-2 mr-1">Edit Profile</Button>
                            <DropdownButton className="mt-2 mr-1" style={{'width': '205px'}} id="dropdown-basic-button" title="Add Instrument" size="lg" onSelect={this.InstrumentAdd}>
                                <DropdownItem eventKey="Harp">Harp</DropdownItem>
                                <DropdownItem eventKey="Organ">Organ</DropdownItem>
                                <DropdownItem eventKey="Hydrolauphone">Hydrolauphone</DropdownItem>
                                <DropdownItem eventKey="Thoramin">Thoramin</DropdownItem>
                                <DropdownItem eventKey="Jaws Harp">Jaws Harp</DropdownItem>
                                <DropdownItem eventKey="Ocarina">Ocarina</DropdownItem>
                                <DropdownItem eventKey="Triangle">Triangle</DropdownItem>
                                </DropdownButton>
                            <DropdownButton variant="danger" className="mt-2 mr-1" style={{'width': '143px'}} id="dropdown-basic-button" title="Skill Level" size="lg" onSelect={this.SkillAdd}>
                                <DropdownItem eventKey="1">1</DropdownItem>
                                <DropdownItem eventKey="2">2</DropdownItem>
                                <DropdownItem eventKey="3">3</DropdownItem>
                                <DropdownItem eventKey="4">4</DropdownItem>
                                <DropdownItem eventKey="5">5</DropdownItem>
                                </DropdownButton>
                                <Button variant="info" size="lg" className="mt-2 mr-1" onClick={this.Add}>Submit</Button>
                        </Col>

                        

                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                            <Card>
                                <Card.Header><h2>My Info</h2></Card.Header>
                                <Card.Body>
                                    <Card.Title><h3>Username:</h3></Card.Title>
                                    <h5>{this.state.username}</h5>
                                    <hr />
                                    {/* <Card.Title><h3>Email:</h3></Card.Title>
                                    <Card.Text><h5>{this.state.email}</h5></Card.Text> */}
                                    <hr />
                                    <Card.Title><h3>Instruments:</h3></Card.Title>
                                    <ListGroup>
                                        {this.state.instrumentArr.map((instrument) => {
                                            if (instrument.skillLevel === 5) {
                                                return <ListGroup.Item variant="success"><h4>{instrument.instruments}</h4> <h5>Skill Level: {instrument.skill}</h5></ListGroup.Item>
                                            }
                                            else if (instrument.skillLevel === 1) {
                                                return <ListGroup.Item variant="danger"><h4>{instrument.instruments}</h4> <h5>Skill Level: {instrument.skill}</h5></ListGroup.Item>
                                            }
                                            else {
                                                return <ListGroup.Item variant="warning"><h4>{instrument.instruments}</h4> <h5>Skill Level: {instrument.skill}</h5></ListGroup.Item>
                                            }
                                        }
                                        )}
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                </Jumbotron>
            </Container>
        );
    }
}

export default UserInfo;