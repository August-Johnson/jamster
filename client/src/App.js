import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MyProfile from "./pages/myProfile";
import CreateSession from "./pages/CreateSession";
import FindSession from "./pages/FindSession";
import Login from "./pages/login";
import createAccount from "./pages/createAccount";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/createAccount" component={createAccount} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/myProfile" component={MyProfile} />
            <Route exact path="/findSession" component={FindSession} />
            <Route exact path="/createSession" component={CreateSession} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
