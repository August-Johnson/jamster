import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
<<<<<<< HEAD
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

                
=======
import SessionsCard from "../../components/SessionCard";

class FindSession extends Component {
    state = {
        jamSessions: [
            {
                sessionId: 1,
                collaborators: [
                    {
                        name: "Ken",
                        instrument: "Guitar",
                        skillLevel: 3
                    },
                    {
                        name: "Ben",
                        instrument: "Drums",
                        skillLevel: 4
                    },
                    {
                        name: "Charlie",
                        instrument: "Bass",
                        skillLevel: 2
                    }
                ],
                title: "Jam Session Title",
                details: "We love to rock and roll! None of that country shit."
            },
            {
                sessionId: 2,
                collaborators: [
                    {
                        name: "James",
                        instrument: "Piano",
                        skillLevel: 4
                    },
                    {
                        name: "George",
                        instrument: "Violin",
                        skillLevel: 5
                    },
                    {
                        name: "Claire",
                        instrument: "Cello",
                        skillLevel: 4
                    }
                ],
                title: "Jam Session Title 2",
                details: "Jam session focused around classical music. Looking for experienced players only and expect each member to put in the time."
            }
        ]
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                
                        {this.state.jamSessions.map((session) => 
                                <SessionsCard sessionTitle={session.title} sessionDetails={session.details} collaborators={session.collaborators} />  
                        )}
                    
                </Jumbotron>

>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec
            </Container>
        );
    }


<<<<<<< HEAD

=======
>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec
}

export default FindSession;