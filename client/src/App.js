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
import notFound from "./components/notFound/index"
import StickyFooter from 'react-sticky-footer';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/createAccount" component={createAccount} />
            <Route exact path="/dashboard" component={Dashboard} />          
            <Route exact path="/myProfile" component={MyProfile} />
            <Route exact path="/findSession" component={FindSession} />
            <Route exact path="/createSession" component={CreateSession} />        
            <Route component={notFound}/>
        </Switch>    
      </Router>
      <StickyFooter normalStyles={{backgroundColor:"#ffd96a", 'textAlign':"center", 'textColor':"white" }}>Jamster 2019&copy;</StickyFooter>
    </Container>
  );
}

export default App;
