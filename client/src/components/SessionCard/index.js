import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function SessionCard(props) {
    return (
        <Card>
            <Card.Header as="h4">{props.sessionTitle}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.collaborators.map((collaborator) =>
                            <Col xl="6">
                                <Card>
                                    <Card.Header>{collaborator.name}</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Instrument: {collaborator.instrument}</ListGroup.Item>
                                        <ListGroup.Item>Skill Level: {collaborator.skillLevel}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                    )}
                </Card.Text>
                <ListGroup>Session Details: {props.sessionDetails}</ListGroup>
            </Card.Body>
            <Card.Footer><Button variant="primary" size="lg">Join Session</Button></Card.Footer>
        </Card>
    );
}

export default SessionCard;