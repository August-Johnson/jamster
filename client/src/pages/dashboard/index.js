import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./style.css";

function Dashboard() {
    return(
            <Container>
              <Jumbotron className="jumboBg">
                    <Row>
                        <Col>
                            <div className="jumboText">
                            <h1 className="text-center">Welcome to Jamster!</h1>
                            <p className="jumboP text-center">Connect with musicians in your area.</p>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
              <Row>
                <Col>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>My Profile</Card.Title>
                      <Card.Text>
                        <a className="dashBtn" href="/myprofile"> <i className="fas fa-id-card fa-5x" /></a> 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Create Session</Card.Title>
                      <Card.Text>
                        <a className="dashBtn" href="/createsession"> <i className="fas fa-edit fa-5x" /></a> 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

    )
}

export default Dashboard;