import React, { Component } from "react";
import API from "../../API/api";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SessionCardWithJoin from "../../components/SessionCardWithJoin";
import SessionCardWithoutJoin from "../../components/SessionCardWithoutJoin";
import SidebarNav from "../../components/SidebarNav";

class FindSession extends Component {
    state = {
        jamSessions: []
    }

    componentDidMount() {
        this.getJamSessions();
    }

    getJamSessions = () => {
        API.getJamSessions()
            .then((jamSessionsData) => {
                this.setState({
                    jamSessions: jamSessionsData.data
                });
            })
            .catch((err) => console.log(err));
    }

    renderSessions = (sessionData) => {
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
        API.joinSession(userDataObj)
            .then((sessionData) => {
                alert("Session Joined!");
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <SidebarNav currentPagePath={window.location.pathname}>
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

                    {this.state.jamSessions.length ? (
                        this.state.jamSessions.map((session) => this.renderSessions(session)
                        )) : (
                            <h3 style={{ "textAlign": "center" }}>NO JAM SESSIONS!</h3>
                        )
                    }
                </Container>
            </SidebarNav>
        );
    }
}

export default FindSession;