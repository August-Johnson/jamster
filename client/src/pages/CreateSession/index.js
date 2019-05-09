import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class CreateSession extends Component {
    state = {
        numCollaborators: "",
        instrument: "",
        skillLevel: "",
        description: ""
    }
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
                                    <Form.Group controlId="sessionForm.Collaborators">
                                        <Form.Label>Number of Collaborators</Form.Label>
                                        <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="sessionForm.Instrument">
                                        <Form.Label>Instrument(s)</Form.Label>
                                        <Form.Control as="select" multiple>
                                        <option>Bass</option>
                                        <option>Guitar</option>
                                        <option>Vocals</option>
                                        <option>Drums</option>
                                        <option>Keyboard</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="sessionForm.Skill">
                                        <Form.Label>Skill</Form.Label>
                                        <Form.Control as="select" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        </Form.Control>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="sessionForm.Details">
                                        <Form.Label>Session Details</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
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