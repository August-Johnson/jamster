import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProfile from "./pages/myProfile";
<<<<<<< HEAD
import CreateSession from "./pages/CreateSession";
import FindSession from "./pages/FindSession";
import login from "./pages/login";
=======
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import CreateSession from "./pages/CreateSession";
import FindSession from "./pages/FindSession";
import login from "./pages/login";
import createAccount from "./pages/createAccount";
>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec
import './App.css';

function App() {
  return (
    <div>
<<<<<<< HEAD
      <h1>Jamster</h1>
      <Router>
        <Switch>
          <Route exact path="/myProfile" component={MyProfile} />
          <Route exact path="/CreateSession" component={CreateSession} />
          <Route exact path="/FindSession" component={FindSession} />
          <Route exact path="/login" component={login} />
=======
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
            <Route exact path="/createAccount" component={createAccount} />
          </Container>
 
>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec
        </Switch>
      </Router>
    </div>
  );
}

export default App;
