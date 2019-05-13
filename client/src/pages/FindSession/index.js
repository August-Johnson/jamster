import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import SessionsCard from "../../components/SessionCard";

class FindSession extends Component {
    state = {
        // card coded some 'session' for development testing
        // jamSessions is an array of objects that represent each jam session.
        // Each one has a session id, an array of collaborators, a title and details (optional).
        // Each collaborator in the array is an object with the properties of the person's name, the instrument they play and their skill level.
        jamSessions: [
            {
                sessionId: 1,
                collaborators: [
                    {
                        name: "Ken",
                        instrument: "Guitar",
                        skillLevel: 3
                    },
                    {
                        name: "Ben",
                        instrument: "Drums",
                        skillLevel: 4
                    },
                    {
                        name: "Charlie",
                        instrument: "Bass",
                        skillLevel: 2
                    }
                ],
                title: "Jam Session Title",
                details: "We love to rock and roll! None of that country shit."
            },
            {
                sessionId: 2,
                collaborators: [
                    {
                        name: "James",
                        instrument: "Piano",
                        skillLevel: 4
                    },
                    {
                        name: "George",
                        instrument: "Violin",
                        skillLevel: 5
                    },
                    {
                        name: "Claire",
                        instrument: "Cello",
                        skillLevel: 4
                    }
                ],
                title: "Jam Session Title 2",
                details: "Jam session focused around classical music. Looking for experienced players only and expect each member to put in the time."
            }
        ]
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    {/* mapping through the jamSessions array from the state and dynamically create session cards for each one.
                    Passing the info from each jam session in as props to the SessionsCard component. */}
                    {this.state.jamSessions.map((session) =>
                        <SessionsCard sessionTitle={session.title} sessionDetails={session.details} collaborators={session.collaborators} />
                    )}

                </Jumbotron>
            </Container>
        );
    }

}

export default FindSession;