import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProfile from "./pages/myProfile";
import CreateSession from "./pages/CreateSession";
import FindSession from "./pages/FindSession";
import login from "./pages/login";
import './App.css';

function App() {
  return (
    <div>
      <h1>Jamster</h1>
      <Router>
        <Switch>
          <Route exact path="/myProfile" component={MyProfile} />
          <Route exact path="/CreateSession" component={CreateSession} />
          <Route exact path="/FindSession" component={FindSession} />
          <Route exact path="/login" component={login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
