import React, { Component } from "react";
import { Container } from "react-bootstrap";

class UserInfo extends Component {
    state = {
        email: "",
        instrument: "",
        skillLevel: "",
        username: "Gus"
    }

    render() {
        return (
            <Container>
                <h1>Welcome to your page {this.state.username}</h1>
            </Container>
        );
    }


}

export default UserInfo;