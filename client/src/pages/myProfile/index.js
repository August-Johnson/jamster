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
        instruments: [],
        skillLevel: "",
    }

    componentDidMount() {
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
                                    {/* <Card.Title><h3>Email:</h3></Card.Title>
                                    <Card.Text><h5>{this.state.email}</h5></Card.Text> */}
                                    <hr />
                                    <Card.Title><h3>Instruments:</h3></Card.Title>
                                    <ListGroup>
                                        {this.state.instruments.map((instrument) => {
                                            if (instrument.skillLevel === 5) {
                                                return <ListGroup.Item variant="success"><h4>{instrument.name}</h4> <h5>Skill Level: {instrument.skillLevel}</h5></ListGroup.Item>
                                            }
                                            else if (instrument.skillLevel === 1) {
                                                return <ListGroup.Item variant="danger"><h4>{instrument.name}</h4> <h5>Skill Level: {instrument.skillLevel}</h5></ListGroup.Item>
                                            }
                                            else {
                                                return <ListGroup.Item variant="warning"><h4>{instrument.name}</h4> <h5>Skill Level: {instrument.skillLevel}</h5></ListGroup.Item>
                                            }
                                        }
                                        )}
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