import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProfile from "./pages/myProfile";
import './App.css';

function App() {
  return (
    <div>
      <h1>Jamster</h1>
      <Router>
        <Switch>
          <Route exact path="/myProfile" component={MyProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
