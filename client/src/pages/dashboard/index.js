import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Dashboard() {
    return(
        // <Container>
        //       <div className="row">
        //         <div className="col-md-6">
        //           <div className="card">
        //             <a href="/myprofile">
        //               <div className="card-body text-center">
        //                 <p className="text-center font-weight-bold">
        //                   Find Session{" "}
        //                 </p>
        //                 <i className="fas fa-id-card fa-5x" />
        //               </div>
        //             </a>
        //           </div>
        //         </div>
        //         <div className="col-md-6">
        //           <div className="card">
        //             <a href="/createsession">
        //               <div className="card-body text-center">
        //                 <p className="text-center font-weight-bold">
        //                   Create New Session
        //                 </p>
        //                 <i className="fas fa-edit fa-5x" />
        //               </div>
        //             </a>
        //           </div>
        //         </div>
        //       </div>
        //     </Container>
            <Container>
              <Row>
                <Col>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>My Profile</Card.Title>
                      <Card.Text>
                        <a href="/myprofile"> <i className="fas fa-id-card fa-5x" /></a> 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Create Session</Card.Title>
                      <Card.Text>
                        <a href="/createsession"> <i className="fas fa-edit fa-5x" /></a> 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
    )
}

export default Dashboard;