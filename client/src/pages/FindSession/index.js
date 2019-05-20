import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SessionsCard from "../../components/SessionCard";
import API from "../../API/api";

class FindSession extends Component {
    state = {
        // hard coded some 'session' for development testing
        // jamSessions is an array of objects that represent each jam session.
        // Each one has a session id, an array of collaborators, a title and details (optional).
        // Each collaborator in the array is an object with the properties of the person's name, the instrument they play and their skill level.
        jamSessions: []
    }

    componentDidMount() {
        this.getJamSessions();
    }

    getJamSessions = () => {
        API.getJamSessions()
            .then((jamSessionsData) => {
                console.log(jamSessionsData.data);
                this.setState({
                    jamSessions: jamSessionsData.data
                });
            })
            .catch((err) => console.log(err));
    }

    // getUsername = (userId) => {
    //     const userIdData = {
    //         userId: userId
    //     }
    //     API.getUserName(userIdData)
    //         .then((userData) => {
    //             console.log(userData);
    //             console.log(userData.data.username);
    //             return userData.data.username
    //         })
    //         .catch((err) => console.log(err));
    // }

    // printSessionCards = () => {
    //     for (let i = 0; i < this.state.jamSessions.length; i++) {
    //         const username = () => this.getUsername(this.state.jamSessions[i].usr1)
    //         return <SessionsCard key={this.state.jamSessions[i].id} sessionId={this.state.jamSessions[i].id} sessionName={this.state.jamSessions[i].name} sessionDetails={this.state.jamSessions[i].description} sessionDate={this.state.jamSessions[i].scheduled_date} sessionTime={this.state.jamSessions[i].scheduled_time} createdBy={username} onClick={this.handleViewSession(this.state.jamSessions[i].id)} />
    //     }
    // }

    handleViewSession = (sessionId) => {
        console.log(sessionId);
    }

    render() {
        return (
            <Container>
                <Jumbotron className="jumboBg">
                    <Row>
                        <Col>

                            <div className="jumboText">
                                <h1 className="text-center">Find Session</h1>

                                <p className="jumboP text-center">See sessions created by other musicians!</p>
                            </div>

                        </Col>
                    </Row>
                </Jumbotron>

                {/* mapping through the jamSessions array from the state and dynamically create session cards for each one.
                    Passing the info from each jam session in as props to the SessionsCard component. */}
                {/* {this.state.jamSessions.map((session) =>
                    <SessionsCard sessionId={session.id} sessionName={session.name} sessionDetails={session.details} sessionDate={session.scheduled_date} sessionTime={session.scheduled_time} createdBy={session.usr1} onClick={this.handleViewSession} />
                )} */}
                {this.state.jamSessions.length ? (
                    this.state.jamSessions.map((session) =>
                        <SessionsCard key={session.id} sessionId={session.id} sessionName={session.name} sessionDetails={session.description} sessionDate={session.scheduled_date} sessionTime={session.scheduled_time} createdBy={session.id} onClick={this.handleViewSession(session.id)} />
                    )) : (
                        <h3 style={{ "textAlign": "center" }}>NO JAM SESSIONS!</h3>
                    )
                }
               
            </Container>
        );
    }

}

export default FindSession;