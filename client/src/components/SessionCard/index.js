import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SessionCard(props) {
    return (
        <Card>
            <Card.Header as="h5">{props.sessionTitle}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.sessionDescription}
                </Card.Text>
                <Button variant="primary">View Session Details</Button>
            </Card.Body>
        </Card>
    );
}

export default SessionCard;