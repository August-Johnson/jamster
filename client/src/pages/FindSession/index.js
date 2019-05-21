import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SessionCardWithJoin from "../../components/SessionCardWithJoin";
import SessionCardWithoutJoin from "../../components/SessionCardWithoutJoin";
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
                console.log("All Jam Session Data: ", jamSessionsData.data);
                this.setState({
                    jamSessions: jamSessionsData.data
                });
            })
            .catch((err) => console.log(err));
    }

    renderSessions = (sessionData) => {
        console.log("Session Data: ", sessionData);
        if (sessionData.usr2 === null && localStorage.getItem("instrumentId") == sessionData.inst2 && localStorage.getItem("skillLevel") >= sessionData.skill_level2) {
            return <SessionCardWithJoin
                key={sessionData.id}
                sessionName={sessionData.name}
                sessionDetails={sessionData.description}
                sessionDate={sessionData.scheduled_date}
                sessionTime={sessionData.scheduled_time}
                onClick={() => this.joinJamSession(2, sessionData.id)}
            />
        }
        else if (sessionData.usr3 === null && localStorage.getItem("instrumentId") == sessionData.inst3 && localStorage.getItem("skillLevel") >= sessionData.skill_level3) {
            return <SessionCardWithJoin
                key={sessionData.id}
                sessionName={sessionData.name}
                sessionDetails={sessionData.description}
                sessionDate={sessionData.scheduled_date}
                sessionTime={sessionData.scheduled_time}
                onClick={() => this.joinJamSession(3, sessionData.id)}
            />
        }

        else if (sessionData.usr4 === null && localStorage.getItem("instrumentId") == sessionData.inst4 && localStorage.getItem("skillLevel") >= sessionData.skill_level4) {
            return <SessionCardWithJoin
                key={sessionData.id}
                sessionName={sessionData.name}
                sessionDetails={sessionData.description}
                sessionDate={sessionData.scheduled_date}
                sessionTime={sessionData.scheduled_time}
                onClick={() => this.joinJamSession(4, sessionData.id)}
            />
        }

        else if (sessionData.usr5 === null && localStorage.getItem("instrumentId") == sessionData.inst5 && localStorage.getItem("skillLevel") >= sessionData.skill_level5) {
            return <SessionCardWithJoin
                key={sessionData.id}
                sessionName={sessionData.name}
                sessionDetails={sessionData.description}
                sessionDate={sessionData.scheduled_date}
                sessionTime={sessionData.scheduled_time}
                onClick={() => this.joinJamSession(5, sessionData.id)}
            />
        }

        else {
            console.log("YOU don't qualify");
            return <SessionCardWithoutJoin
                key={sessionData.id}
                sessionName={sessionData.name}
                sessionDetails={sessionData.description}
                sessionDate={sessionData.scheduled_date}
                sessionTime={sessionData.scheduled_time}
            />
        }

    }

    joinJamSession = (positionId, sessionId) => {
        const userDataObj = {
            userPosition: positionId,
            userId: localStorage.getItem("userId"),
            sessionId: sessionId
        }
        console.log("Kicking off call!");
        API.joinSession(userDataObj)
            .then((sessionData) => console.log(sessionData))
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
    //         return <SessionsCard key={this.state.jamSessions[i].id} sessionId={this.state.jamSessions[i].id} sessionName={this.state.jamSessions[i].name} sessionDetails={this.state.jamSessions[i].description} sessionDate={this.state.jamSessions[i].scheduled_date} sessionTime={this.state.jamSessions[i].scheduled_time} createdBy={username} onClick={this.joinJamSession(this.state.jamSessions[i].id)} />
    //     }
    // }

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
                    <SessionsCard sessionId={session.id} sessionName={session.name} sessionDetails={session.details} sessionDate={session.scheduled_date} sessionTime={session.scheduled_time} createdBy={session.usr1} onClick={this.joinJamSession} />
                )} */}
                {this.state.jamSessions.length ? (
                    this.state.jamSessions.map((session) => this.renderSessions(session)
                    )) : (
                        <h3 style={{ "textAlign": "center" }}>NO JAM SESSIONS!</h3>
                    )
                }

            </Container>
        );
    }

}

export default FindSession;