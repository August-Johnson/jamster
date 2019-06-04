import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MyProfile from "./pages/myProfile";
import CreateSession from "./pages/CreateSession";
import FindSession from "./pages/FindSession";
import login from "./pages/login";
import createAccount from "./pages/createAccount";
import "./App.css";
import notFound from "./components/notFound/index"
import Footer from "./components/Footer";
import SidebarNav from "./components/SidebarNav";

function App() {
  return (
    <div className="App">
        <SidebarNav />
        <Router>
          <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/createAccount" component={createAccount} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/myProfile" component={MyProfile} />
            <Route exact path="/findSession" component={FindSession} />
            <Route exact path="/createSession" component={CreateSession} />
            <Route component={notFound} />
          </Switch>
        </Router>
        <Footer />
        {/* </SidebarNav> */}
    </div>
  );
}

export default App;
