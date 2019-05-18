import React from "react";

function Dashboard() {
    return(
        <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <a href="/findSession">
                      <div className="card-body text-center">
                        <p className="text-center font-weight-bold">
                          Find Session{" "}
                        </p>
                        <i className="fas fa-id-card fa-5x" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <a href="/createsession">
                      <div className="card-body text-center">
                        <p className="text-center font-weight-bold">
                          Create New Session
                        </p>
                        <i className="fas fa-edit fa-5x" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Dashboard;