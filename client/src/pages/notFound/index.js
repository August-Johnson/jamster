import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

class NotFound extends Component {

    handleReturnToLogin = () => {
        localStorage.clear();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="notFound-message">404 Not Found</h1>
                        <br />
                        <br />
                        <div className="notFound-links">
                            <Link to="/dashboard" className="notFound-link">Back to Dashboard</Link>
                            <Link to="/" onClick={this.handleReturnToLogin} className="notFound-link">Back to Log in Page</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default NotFound;