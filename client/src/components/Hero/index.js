import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover' }}>
      {props.children}
    </div>
  );
}

export default Hero;
