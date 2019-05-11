import React from "react";
import "./style.css";

import { a } from "react-router-dom";



// Depending on the current path, this component sets the "active" class on the appropriate navigation a item

function Navbar(props) {
  return (

    <ul className="navbar navbar-expand-lg navbar-light bg-light nav">
      <a href="/"><li className="nav-item brand">Home</li></a>
      <a href="/myProfile"><li className="nav-item">My Profile</li></a>
      <a href="/findSession"><li className="nav-item">Find Sessions</li></a>
    </ul>


  );
}

export default Navbar;
