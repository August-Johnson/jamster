import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

class UserInfo extends Component {
    state = {
        email: "someones-email@gmail.com",
        instrument: "Guitar",
        skillLevel: 3,
        username: "Gus"
    }

    render() {
        return (
            <Container>


                <Jumbotron>
                    <Row>
                        <Col>
                            <h1 className="text-center mb-4">My Profile</h1>
                            <hr />
                            <br />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h2>Info:</h2>
                            <br />
                        </Col>

                        <Col xl={5} lg={5} md={6} sm={12} xs={12}>
                            <img src="https://via.placeholder.com/300x300" alt="null" />
                        </Col>

                        <Col xl={7} lg={7} md={6} sm={12} xs={12}>
                            <h3>Username: {this.state.username} </h3>
                            <h3>Email: {this.state.email} </h3>
                            <h3>instrument: {this.state.instrument} </h3>
                            <h3>Skill Level: {this.state.skillLevel} </h3>
                        </Col>
                    </Row>
                </Jumbotron>

            </Container>
        );
    }


}

export default UserInfo;