import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProfile from "./pages/myProfile";


import Container from "./components/Container";
import Navbar from "./components/Navbar";
import CreateSession from "./pages/CreateSession";
import FindSession from "./pages/FindSession";
import login from "./pages/login";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Jamster</h1>
      <Router>
        <Switch>

          {/* Landing page route */}
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Container>
            <Route exact path="/login" component={login} />
            <Route exact path="/myProfile" component={MyProfile} />
            <Route exact path="/findSession" component={FindSession} />
            <Route exact path="/createSession" component={CreateSession} />
          </Container>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
