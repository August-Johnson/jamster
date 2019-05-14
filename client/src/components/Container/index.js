import React from "react";
import Footer from "../Footer";

function Container(props) {
  return (
    <div style={{"background-color": "black"}}>
      {props.children}
    </div>
  );
}

export default Container;
