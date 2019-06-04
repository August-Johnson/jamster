import React from "react";

function Container(props) {
  return (
    <div style={{"backgroundColor": "black", "position" : "relative", "height": "100%", "paddingBottom": "50px"}}>
      {props.children}
    </div>
  );
}

export default Container;
