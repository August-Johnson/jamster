import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserInfo from "./pages/userInfo/index";
import './App.css';

function App() {
  return (
    <div>
      <h1>Jamster</h1>
      <Router>
        <Switch>
          <Route exact path="/user" component={UserInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
