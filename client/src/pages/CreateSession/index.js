import React, { Component } from "react";
import API from "../../API/api";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SidebarNav from "../../components/SidebarNav";

import "./style.css";

class CreateSession extends Component {
    state = {
        sessionName: "",
        collaborators: 0,
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
        sessionDate: "",
        sessionTime: "",
        sessionDetails: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.sessionName ||
            !this.state.sessionDate ||
            !this.state.collaboratorsArr ||
            !this.state.sessionTime ||
            !this.state.collaboratorsArr[0]) {
            alert("Please Complete the Required Fields");
        } else if (this.state.collaborators === 0) {
            alert("Please Select at Least 1 Collaborator");
        } else {
            alert("Time to Jam!");

            const createSessionData = {
                name: this.state.sessionName,
                date: this.state.sessionDate,
                time: this.state.sessionTime,
                description: this.state.sessionDetails,
                usr1: parseInt(localStorage.getItem("userId")),
                inst1: parseInt(localStorage.getItem("instrumentId")),
                skillLevel1: parseInt(localStorage.getItem("skillLevel")),
                inst2: this.state.collaboratorsArr[0].instrument,
                skillLevel2: this.state.collaboratorsArr[0].skillLevel,
                inst3: this.state.collaboratorsArr[1].instrument || null,
                skillLevel3: this.state.collaboratorsArr[1].skillLevel || null,
                inst4: this.state.collaboratorsArr[2].instrument || null,
                skillLevel4: this.state.collaboratorsArr[2].skillLevel || null,
                inst5: this.state.collaboratorsArr[3].instrument || null,
                skillLevel5: this.state.collaboratorsArr[3].skillLevel || null
            }

            API.createNewSession(createSessionData)
                .then((sessionData) => {
                    this.setState({
                        sessionName: "",
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
                            }
                        ],
                        collaborators: "0",
                        sessionDate: "",
                        sessionTime: "",
                        sessionDetails: ""
                    });
                })
                .catch((err) => console.log(err));
        }

    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // Method for handling an array of collaborators and their info
    // Passing in the event and the 'id' as arguments. id = whatever index the collaborator is at.
    handleArrayChange = (event, id) => {
        const name = event.target.name;
        let value = event.target.value;
        // Making a copy of the state's array of collaborators.
        let copy = [...this.state.collaboratorsArr];

        // parseInt the instrumentId or skill level into a number value
        value = parseInt(value);

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
                <Row key={i}>
                    <Col>
                        <Form.Group controlId="sessionForm.Instrument">
                            <Form.Label>Instrument (Required)</Form.Label>
                            <Form.Control as="select" onChange={(event) => this.handleArrayChange(event, i)} name="instrument">
                                <option defaultValue="">Choose...</option>
                                <option value="1">Bass</option>
                                <option value="2">Drums</option>
                                <option value="3">Guitar</option>
                                <option value="4">Keyboard</option>
                                <option value="5">Vocals</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="sessionForm.Skill">
                            <Form.Label>Skill Level (Required)</Form.Label>
                            <Form.Control as="select" onChange={(event) => this.handleArrayChange(event, i)} name="skillLevel">
                                <option defaultValue="">Choose...</option>
                                <option value="1">1 (Beginner)</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5 (Advanced)</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row >
            );
        };
        return collaboratorForms;
    }

    render() {
        return (
            <SidebarNav currentPagePath={window.location.pathname}>
                <Container>
                    <Jumbotron className="jumboBg">
                        <Row>
                            <Col>

                                <div className="jumboText">
                                    <h1 className="text-center">Create Session</h1>

                                    <p className="jumboP text-center">Create Your Own Jam Session Below!</p>
                                </div>

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
                                                <Form.Control as="select" onChange={this.handleCollaborators} name="collaborators" value={this.state.collaborators}>
                                                    <option defaultValue="0">Choose...</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    {/* <option value="5">5</option> */}
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {this.createCollaboratorsForm()}

                                    <Row>
                                        <Col>
                                            <Form.Group controlId="sessionForm.Date">
                                                <Form.Label>Date (Required)</Form.Label>
                                                <Form.Control type="date" placeholder="" onChange={this.handleChange} name="sessionDate" value={this.state.sessionDate} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="sessionForm.Time">
                                                <Form.Label>Time (Required)</Form.Label>
                                                <Form.Control type="time" placeholder="" onChange={this.handleChange} name="sessionTime" value={this.state.sessionTime} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="sessionForm.Details">
                                                <Form.Label>Session Details (Optional)</Form.Label>
                                                <Form.Control as="textarea" rows="4" placeholder="Add Any Additional Session Details" onChange={this.handleChange} name="sessionDetails" value={this.state.sessionDetails} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Label>Your Session(s)</Form.Label>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Text>
                                                        <li>{this.state.sessionName}</li>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>


                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>

                                </Form>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </SidebarNav>
        );
    }
}

export default CreateSession;