import React, { Component } from "react";
import Container from "../../components/Container";
import { Row, Col } from "react-bootstrap";

class notFound extends Component {
    state = {}

    render() {
        return (

            <Col>
                <Row>
                    404 Not Found
                </Row>
            </Col>
        
        );
    }
}
export default notFound;