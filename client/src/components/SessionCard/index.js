import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import "./style.css";

function SessionCard(props) {
    return (
        <Card>
            <Row>
                <Col xl="12" className="mb-3">
                    <Card.Header as="h2">{props.sessionTitle}</Card.Header>
                </Col>
                <Col xl="12">
                    <h3 style={{ "text-align": "center" }}>Collaborators / Band Members</h3>
                </Col>
                {props.collaborators.map((collaberator) =>
                    <Col xl="6">
                        <Card>
                            <Card.Header as="h4">
                                {collaberator.name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <span style={{ "font-weight": "500", "font-size": "125%" }}>Instrument: </span>
                                            <span style={{ "font-weight": "450", "font-size": "115%" }}>{collaberator.instrument}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <span style={{ "font-weight": "500", "font-size": "125%" }}>Skill Level: </span>
                                            <span style={{ "font-weight": "450", "font-size": "115%" }}>{collaberator.skillLevel}</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
            <Row>
                <Col xl="12">
                    <h4>Session Details</h4>
                        <p>{props.sessionDetails}</p>
                </Col>
                <Col>
                    <Button variant="primary" size="lg">View Session</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default SessionCard;