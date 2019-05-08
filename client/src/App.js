import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProfile from "./pages/myProfile";
import FindSession from "./pages/FindSession";
import CreateSession from "./pages/CreateSession";
import './App.css';

function App() {
  return (
    <div>
      <h1>Jamster</h1>
      <Router>
        <Switch>
          {/* Landing page route */}
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/myProfile" component={MyProfile} />
          <Route exact path="/findSession" component={FindSession} />
          <Route exact path="/createSession" component={CreateSession} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
