import React from "react";

function Container(props) {
  return (
    <div style={{"background-color": "black"}}>
      {props.children}
    </div>
  );
}

export default Container;
