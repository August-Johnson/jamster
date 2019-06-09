import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

function SessionCardWithJoin(props) {
    return (
        <Card>
            <Row>

                <Col xl="12">
                    <Card.Title className="header" as="h2">{props.sessionName}</Card.Title>
                </Col>

                <Card.Body>
                    <Col xl="12">
                        <h4>Jam Session Date: {props.sessionDate} at {props.sessionTime}</h4>
                    </Col>
                    <br />
                    <h4>Current Session Members</h4>
                    <Col>

                    </Col>
                    {
                        props.sessionMembers.map((collaborator) => {
                            let collaboratorInstrument;
                            switch (parseInt(collaborator.instrument)) {
                                case 1:
                                    collaboratorInstrument = "Bass";
                                    break;

                                case 2:
                                    collaboratorInstrument = "Drums";
                                    break;
                                case 3:
                                    collaboratorInstrument = "Guitar";
                                    break;

                                case 4:
                                    collaboratorInstrument = "Keyboard";
                                    break;
                                case 5:
                                    collaboratorInstrument = "Vocals";
                                    break;
                                default:
                                    collaboratorInstrument = "";
                            }
                            return (
                                <Card>
                                    <Col key={collaborator.id}>
                                        <h5>Name: {collaborator.username}</h5>
                                        <h5>Instrument: {collaboratorInstrument}</h5>
                                        <h5>Skill Level: {collaborator.skill_level}</h5>
                                    </Col>
                                </Card>
                            )
                        }
                        )}

                    <hr />

                    <h4>Open Positions</h4>
                    {
                        props.sessionPositions.map((position) => {
                            let positionName;
                            switch (parseInt(position.instrument)) {
                                case 1:
                                    positionName = "Bass";
                                    break;

                                case 2:
                                    positionName = "Drums";
                                    break;
                                case 3:
                                    positionName = "Guitar";
                                    break;

                                case 4:
                                    positionName = "Keyboard";
                                    break;
                                case 5:
                                    positionName = "Vocals";
                                    break;
                                default:
                                    positionName = "";
                            }
                            return (
                                <Card>
                                    <Col>
                                        <h5>Instrument: {positionName}</h5>
                                        <h5>Skill Level: {position.skillLevel}</h5>
                                        {parseInt(localStorage.getItem("skillLevel")) >= position.skillLevel && parseInt(localStorage.getItem("instrumentId")) === position.instrument ? (
                                            <div>
                                                <h5 style={{ "fontWeight": "bold", "margin-top": "10px" }}>You qualify for this position</h5>
                                                <Button variant="primary" size="lg" onClick={props.onClick}>Join Session</Button>
                                            </div>
                                        ) : <h5 style={{ "fontWeight": "bold", "margin-top": "10px", "color": "#FF0000" }}>You don't qualify for this position</h5>}
                                    </Col>
                                </Card>
                            )
                        }
                        )}

                </Card.Body>
            </Row>
            <Row>
                <Col>
                    <h4>Session Details</h4>
                    <p>{props.sessionDetails}</p>
                </Col>
                {/* <Col>
                    <Button variant="primary" size="lg" onClick={props.onClick}>Join Session</Button>
                </Col> */}
            </Row>
        </Card>
    );
}

export default SessionCardWithJoin;