import React from "react";

function Container(props) {
<<<<<<< HEAD
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
=======
  return (
    <div style={{"background-color": "black"}}>
      {props.children}
    </div>
  );
>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec
}

export default Container;
