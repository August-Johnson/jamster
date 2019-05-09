import React, { Component } from "react";
//import { Container } from "react-bootstrap";

class CreateSession extends Component {
    state = {
        numCollaborators: "",
        instrument: "",
        skillLevel: "",
        description: ""
    }

    render() {
        return (
            <h1>Create Session</h1>
        );
    }


}

export default CreateSession;