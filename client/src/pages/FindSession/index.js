import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            }
        ]
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        {this.state.jamSessions.map((session) => 
                            <Col>
                                <SessionsCard sessionTitle={session.title} sessionDetails={session.details} collaborators={session.collaborators} />
                            </Col>
                        )}
                    </Row>
                </Jumbotron>

            </Container>
        );
    }


}

export default FindSession;