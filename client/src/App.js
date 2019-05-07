import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateSession, FindSession, Dashboard, LandingPage } from "./pages";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <h1>Jamster</h1>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/createSession" component={CreateSession} />
        <Route exact path="/findSession" component={FindSession} />
      </Switch>
    </Router>
  );
}

export default App;
