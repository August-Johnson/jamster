import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD:client/src/App.js
import { CreateSession, FindSession, Dashboard, LandingPage } from "./pages";
=======
import LandingPage from "./pages";
import Dashboard from "./pages";
import CreateSession from "./pages";
import FindSession from "./pages";
import MainWrapper from "./";
>>>>>>> 3a03f0db50775205c41feb460e849d5abd99283f:src/App.js
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <h1>Jamster</h1>
        <Route exact path="/" component={LandingPage} />
        <MainWrapper>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/createSession" component={CreateSession} />
          <Route exact path="/findSession" component={FindSession} />
        </MainWrapper>
      </Switch>
    </Router>
  );
}

export default App;
