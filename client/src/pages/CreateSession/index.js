import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CreateSession extends Component {
    state = {
        // sessionId: 1,
        sessionName: "",
        collaborators: 0,
        // instrument1: "",
        // skillLevel1: "",
        // instrument2: "",
        // skillLevel2: "",
        // instrument3: "",
        // skillLevel3: "",
        // instrument4: "",
        // skillLevel4: "",
        // instrument5: "",
        // skillLevel5: "",
        // person1: {
        //     instrument: "",
        //     skillLevel: ""
        // },
        // person2: {
        //     instrument: "",
        //     skillLevel: ""
        // },
        // person3: {
        //     instrument: "",
        //     skillLevel: ""
        // },
        // person4: {
        //     instrument: "",
        //     skillLevel: ""
        // },
        // person5: {
        //     instrument: "",
        //     skillLevel: ""
        // },
        collaboratorsArr: [
            {
                instrument: "",
                skillLevel: ""
            },
            {
                instrument: "",
                skillLevel: ""
            },
            {
                instrument: "",
                skillLevel: ""
            },
            {
                instrument: "",
                skillLevel: ""
            },
            {
                instrument: "",
                skillLevel: ""
            }
        ],
        // instrument: "",
        // skillLevel: "",
        date: "",
        time: "",
        sessionDetails: ""
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.sessionName || !this.state.instrument || !this.state.skillLevel || !this.state.date || !this.state.time) {
            alert("Please Complete the Required Fields");
        } else if (this.state.collaborators === 0) {
            alert("Please Select at Least 1 Collaborator");
        } else {
            alert("Time to Jam!");
            this.setState({
                sessionName: "",
                collaborators: 0,
                instrument: "",
                skillLevel: "",
                date: "",
                time: "",
                sessionDetails: ""
            });
        }

    };

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log("Name: ", name);
        console.log("Value: ", value);
        this.setState({
            [name]: value
        });
    }

    // Methods for handling the changed state of each collaborator as individual objects.

    // handleInstrumentChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: {
    //             instrument: value,
    //             skillLevel: this.state[name].skillLevel
    //         }
    //     })
    // }

    // handleSkillLevelChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: {
    //             instrument: this.state[name].instrument,
    //             skillLevel: value
    //         }
    //     });
    // }

    // Method for handling an array of collaborators and their info
    // Passing in the event and the 'id' as arguments. id = whatever index the collaborator is at.
    handleArrayChange = (event, id) => {
        const name = event.target.name;
        let value = event.target.value;
        // Making a copy of the state's array of collaborators.
        let copy = [...this.state.collaboratorsArr];

        // If it's the skill level being changed, turn its value from a string into a number.
        if (name === "skillLevel") {
            value = parseInt(value);
        }

        // Setting the name equal to the changed value at the appropriate index location.
        copy[id][name] = value;

        // Setting the state's collaborators array equal to the newly updated copy array.
        this.setState({
            collaboratorsArr: copy
        });
    }

    handleCollaborators = (event) => {
        this.setState({
            collaborators: parseInt(event.target.value)
        });
    }

    createCollaboratorsForm = () => {
        let collaboratorForms = [];

        for (let i = 0; i < this.state.collaborators; i++) {
            collaboratorForms.push(
                <div>
                    <Row>
                        <Col>
                            <Form.Group controlId="sessionForm.Instrument">
                                <Form.Label>Instrument (Required)</Form.Label>
                                <Form.Control as="select" onChange={(event) => this.handleArrayChange(event, i)} name="instrument" value={this.state.instrument}>
                                    <option defaultValue="">Choose...</option>
                                    <option value="Bass">Bass</option>
                                    <option value="Drums">Drums</option>
                                    <option value="Guitar">Guitar</option>
                                    <option value="Keyboard">Keyboard</option>
                                    <option value="Vocals">Vocals</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="sessionForm.Skill">
                                <Form.Label>Skill Level (Required)</Form.Label>
                                <Form.Control as="select" onChange={(event) => this.handleArrayChange(event, i)} name="skillLevel" value={this.state.skillLevel}>
                                    <option defaultValue="">Choose...</option>
                                    <option value="1">1 (Low)</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 (High)</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row >
                </div >
            );
        };
        return collaboratorForms;
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <h1 className="text-center">Create Session</h1>
                            <p className="text-center">Create Your Own Jam Session Below!</p>
                        </Col>
                    </Row>
                </Jumbotron>

                <Row>
                    <Col>
                        <Card>

                            <Form className="m-4" onSubmit={this.handleFormSubmit}>

                                <Row>
                                    <Col>
                                        <Form.Group controlId="sessionForm.Name">
                                            <Form.Label>Session Name (Required)</Form.Label>
                                            <Form.Control as="textarea" rows="1" placeholder="Session Name" onChange={this.handleChange} name="sessionName" value={this.state.sessionName} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="sessionForm.Collaborators">
                                            <Form.Label>Number of Collaborators (Required)</Form.Label>
                                            <Form.Control as="select" onChange={this.handleCollaborators} name="collaborators">
                                                <option defaultValue="0">Choose...</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {this.createCollaboratorsForm()}

                                <Row>
                                    <Col>
                                        <Form.Group controlId="sessionForm.Date">
                                            <Form.Label>Date (Required)</Form.Label>
                                            <Form.Control type="date" placeholder="" onChange={this.handleChange} name="date" value={this.state.date} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="sessionForm.Time">
                                            <Form.Label>Time (Required)</Form.Label>
                                            <Form.Control type="time" placeholder="" onChange={this.handleChange} name="time" value={this.state.time} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="sessionForm.Details">
                                    <Form.Label>Session Details (Optional)</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Add Any Additional Session Details" onChange={this.handleChange} name="sessionDetails" value={this.state.sessionDetails} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                    </Button>

                            </Form>

                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CreateSession;