import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class FindSession extends Component {
    state = {
        name: "",
        instrument: "",
        skillLevel: "",
    }
    render() {
        return(
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                        <h1 className="text-center">Find Session</h1>
                        <p className="text-center">Looking for jam session? Try your luck below!</p>

                        </Col>    
                    </Row>
                </Jumbotron>

                    <Row>
                        <Col>
                            <Card>

                                <Form className="m-4">
                                    <Button className="mb-4" variant="primary" type="submit">
                                        Find Session
                                    </Button>

                                    <Form.Group controlId="sessionForm.Details">
                                        <Form.Label>Session Details</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>

                                </Form>

                            </Card>
                        </Col>
                    </Row>

                
            </Container>
        );
    }

    render() {
        return (
            <h1>Find Session</h1>
        );
    }


}

export default FindSession;