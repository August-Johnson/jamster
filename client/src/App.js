import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import UserInfo from "./pages/userInfo/index";
import './App.css';

function App() {
  return (
    <div>
      <h1>Jamster</h1><br />

      <UserInfo />

    </div>
  );
}

export default App;
