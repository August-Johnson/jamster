import React from "react";


function Container(props) {
  return (
    <div style={{"backgroundColor": "black"}}>
      {props.children}
    </div>
  );
}

export default Container;
