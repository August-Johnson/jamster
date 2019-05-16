import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./routedPages/dashboard"
import MyProfile from "./routedPages/MyProfile";
import Container from "./components/Container";
import CreateSession from "./routedPages/CreateSession";
import FindSession from "./routedPages/FindSession";
import login from "./pages/login";
import createAccount from "./pages/createAccount";
import './App.css';
import Footer from "../src/components/Footer/index"
import notFound from "./pages/notFound/index"

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          {/* Landing page route */}
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Container>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={login} />
            <Route exact path="/myProfile" component={MyProfile} />
            <Route exact path="/findSession" component={FindSession} />
            <Route exact path="/createSession" component={CreateSession} />
            <Route exact path="/createAccount" component={createAccount} />
            <Route exact path="/*" component={notFound} />
            <Footer/>
          </Container>

        </Switch>
      </Router>
    </Container>
  );
}

export default App;
