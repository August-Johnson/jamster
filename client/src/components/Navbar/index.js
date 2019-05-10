import React from "react";
import "./style.css";
<<<<<<< HEAD



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar(props) {
  return (
    
      <ul className="navbar navbar-expand-lg navbar-light bg-light text-center nav">
        <li id="title" className="nav-item brand col text-left">Clicky Game</li>
        <li id="score" className="nav-item col text-right">Score: {props.score}</li>
      </ul>
      
    
=======
import { a } from "react-router-dom";



// Depending on the current path, this component sets the "active" class on the appropriate navigation a item

function Navbar(props) {
  return (

    <ul className="navbar navbar-expand-lg navbar-light bg-light text-center nav">
      <a href="/"><li className="nav-item brand">Home</li></a>
      <a href="/myProfile"><li className="nav-item">My Profile</li></a>
      <a href="/findSession"><li className="nav-item">Find Sessions</li></a>
    </ul>


>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec
  );
}

export default Navbar;
