import React from "react";
import "./style.css";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar(props) {
  return (
    
      <ul className="navbar navbar-expand-lg navbar-light bg-light text-center nav">
        <li id="title" className="nav-item brand col text-left">Clicky Game</li>
        <li id="score" className="nav-item col text-right">Score: {props.score}</li>
      </ul>
      
    
  );
}

export default Navbar;
