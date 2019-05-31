import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MyProfile from "./pages/myProfile";
import Container from "./components/Container";
import CreateSession from "./pages/CreateSession";
import FindSession from "./pages/FindSession";
import login from "./pages/login";
import createAccount from "./pages/createAccount";
import "./App.css";
// import notFound from "./components/notFound/index"
import Footer from "./components/Footer";
import DashboardNav from "./routedPages/dashboard";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <DashboardNav>
            <Route exact path="/createAccount" component={createAccount} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/myProfile" component={MyProfile} />
            <Route exact path="/findSession" component={FindSession} />
            <Route exact path="/createSession" component={CreateSession} />
            {/* <Route component={notFound} /> */}
          </DashboardNav>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
