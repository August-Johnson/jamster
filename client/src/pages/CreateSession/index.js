import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CreateSession extends Component {
    // state = {
    //     numCollaborators: "",
    //     instrument: "",
    //     skillLevel: "",
    //     date: "",
    //     time: "",
    //     description: ""
    // }

    constructor(props) {
        super(props);
        this.state = {
                    sessionId: '1',
                    collborators: '3',
                    instrument: '',
                    skillLevel: '',
                    date: '',
                    time: '',
                    sessionDetails: 'what'
    };
    
        this.handleCollaborators = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Yes');
    };

    render() {
        return(
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                        <h1 className="text-center">Create Session</h1>
                        <p className="text-center">Create Your Own Jam Session Below!</p>  
                        </Col>    
                    </Row>
                </Jumbotron>

                    <Row>
                        <Col>
                            <Card>

                                <Form className="m-4">

                                    <Row>
                                        <Col>
                                            <Form.Group controlId="sessionForm.Name">
                                                <Form.Label>Session Name (Required)</Form.Label>
                                                <Form.Control as="textarea" rows="1" placeholder="Session Name"/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="sessionForm.Collaborators">
                                                <Form.Label>Number of Collaborators</Form.Label>
                                                <Form.Control as="select">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group controlId="sessionForm.Instrument">
                                        <Form.Label>Instrument</Form.Label>
                                        <Form.Control as="select">
                                        <option value="Bass">Bass</option>
                                        <option value="Drums">Drums</option>
                                        <option value="Guitar">Guitar</option>
                                        <option value="Keyboard">Keyboard</option>
                                        <option value="Vocals">Vocals</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="sessionForm.Skill">
                                        <Form.Label>Skill Level</Form.Label>
                                        <Form.Control as="select">
                                        <option value="1">1 (Low)</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5 (High)</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="sessionForm.Date">
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control type="date" placeholder=""/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="fosessionForm.Time">
                                                <Form.Label>Time</Form.Label>
                                                <Form.Control type="time" placeholder=""/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Form.Group controlId="sessionForm.Details">
                                        <Form.Label>Session Details</Form.Label>
                                        <Form.Control as="textarea" rows="3" placeholder="Add Any Additional Session Details"/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                                        Submit
                                    </Button>
                                    
                                </Form>

                            </Card>
                        </Col>
                    </Row>

              

            </Container>
        );
    }
}

export default CreateSession;