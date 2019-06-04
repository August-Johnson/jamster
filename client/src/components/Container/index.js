import React from "react";

import "./style.css";

function Container(props) {
  return (
    <div className="content-container">
      {props.children}
    </div>
  );
}

export default Container;
