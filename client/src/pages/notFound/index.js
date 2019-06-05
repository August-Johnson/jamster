import React, { Component } from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import Row from "./node_modules/react-bootstrap/Row";
import Col from "./node_modules/react-bootstrap/Col";

class NotFound extends Component {

    handleReturnToLogin = () => {
        localStorage.clear();
    }
 
    render() {
        return (

            <Col>
                <Row>
                    <h1>404 Not Found</h1>
                    <br />
                    <Link to="/dashboard">Back to Dashboard</Link>
                    <Link to="/" onClick={this.handleReturnToLogin}>Back to Log in Page</Link>
                </Row>
            </Col >

        );
    }
}
export default NotFound;