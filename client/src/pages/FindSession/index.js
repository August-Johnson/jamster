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
                title: "Jam Session Title",
                description: "We love to rock and roll! None of that country shit."
            }
        ]
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        {this.state.jamSessions.map((session) => 
                            <Col xl="6" lg="6" md="12" sm="12" xs="12">
                                <SessionsCard sessionTitle={session.title} sessionDescription={session.description} />
                            </Col>
                        )}
                    </Row>
                </Jumbotron>

            </Container>
        );
    }


}

export default FindSession;