import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";

class UserInfo extends Component {
    state = {
        username: localStorage.getItem("username"),
        instrument: parseInt(localStorage.getItem("instrumentId")),
        skillLevel: parseInt(localStorage.getItem("skillLevel")),
        // instrumentArr: []
    }

    InstrumentAdd = (evtKey, event) => {
        // if (evtKey.target.title === "") {
        //     return;
        // }
        // else {
        console.log(evtKey);
        this.setState({ instruments: evtKey });
        // console.log(setTimeout(() => (console.log("Instruments: ", this.state.instruments), 10000)));
        // }

    }


    SkillAdd = (evtKey, event) => {
        // if (evtKey.target.title === "") {
        //     return;
        // }
        // else {
        console.log(evtKey);
        this.setState({ skill: evtKey });
        // console.log(setTimeout(() => (console.log("Skill: ", this.state.skill), 10000)));
        // }

    }
    Add = (evtKey, event) => {

        console.log("click");

        console.log(this.state.instruments)
        console.log(this.state.skill)

        this.setState({
            instrumentArr: [...this.state.instrumentArr, {
                instruments: this.state.instruments,
                skill: this.state.skill
            }]
        })
        // console.log(setTimeout(() => (console.log("instrumentsArr: " + this.state.instrumentArr[0].instruments), 50000)));
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

    renderInstrumentName = (instrumentId) => {
        switch (instrumentId) {
            case 1:
                return "Bass"
            case 2:
                return "Drums"
            case 3:
                return "Guitar"
            case 4:
                return "Keyboard"
            case 5:
                return "Vocals"
            default:
                return "Unknown Instrument!"
        }
    }

    render() {
        return (
            <Container>
                <Jumbotron className="jumboBg">
                    <Row>
                        <Col>
                            <div className="jumboText">
                                <h1 className="text-center mb-4">My Profile</h1>
                            </div>

                        </Col>
                    </Row>
                </Jumbotron>
                <Card>

                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <img src="https://via.placeholder.com/300x300" alt="null" />
                            <br />
                            <Button variant="info" size="lg" className="mt-2 mr-1">Edit Profile</Button>
                            <DropdownButton className="mt-2 mr-1" style={{ 'width': '187px' }} id="dropdown-basic-button" title="Add Instrument" size="lg">
                                <DropdownItem href="#/action-1">Harp</DropdownItem>
                                <DropdownItem href="#/action-2">Organ</DropdownItem>
                                <DropdownItem href="#/action-3">Hydrolauphone</DropdownItem>
                                <DropdownItem href="#/action-4">Thoramin</DropdownItem>
                                <DropdownItem href="#/action-5">Jaws Harp</DropdownItem>
                                <DropdownItem href="#/action-6">Ocarina</DropdownItem>
                            </DropdownButton>
                            <DropdownButton variant="danger" className="mt-2 mr-1" style={{ 'width': '143px' }} id="dropdown-basic-button" title="Skill Level" size="lg">
                                <DropdownItem href="#/action-1">1</DropdownItem>
                                <DropdownItem href="#/action-2">2</DropdownItem>
                                <DropdownItem href="#/action-3">3</DropdownItem>
                                <DropdownItem href="#/action-4">4</DropdownItem>
                                <DropdownItem href="#/action-6">5</DropdownItem>
                            </DropdownButton>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                            <Card>
                                <Card.Header><h2>My Info</h2></Card.Header>
                                <Card.Body>
                                    <Card.Title><h3>Username:</h3></Card.Title>
                                    <h5>{this.state.username}</h5>
                                    <hr />
                                    <hr />
                                    <Card.Title><h3>Instruments:</h3></Card.Title>
                                    <ListGroup>
                                        <ListGroup.Item variant="success">
                                            <h4>
                                                {this.renderInstrumentName(this.state.instrument)}
                                            </h4>
                                            <h5>Skill Level: {this.state.skillLevel}</h5></ListGroup.Item>
                                        {/* {this.state.instruments.map((instrument) => {
                                            if (this.state.skillLevel === 5) {
                                                return <ListGroup.Item variant="success"><h4>{}</h4> <h5>Skill Level: {this.state.skillLevel}</h5></ListGroup.Item>
                                            }
                                            else if (this.state.skillLevel === 1) {
                                                return <ListGroup.Item variant="danger"><h4>{instrument.name}</h4> <h5>Skill Level: {this.state.skillLevel}</h5></ListGroup.Item>
                                            }
                                            else {
                                                return <ListGroup.Item variant="warning"><h4>{instrument.name}</h4> <h5>Skill Level: {this.state.skillLevel}</h5></ListGroup.Item>
                                            }
                                        } */}
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Card>
            </Container>

        );
    }
}




export default UserInfo;