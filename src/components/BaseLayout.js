import React from "react";
import Navigation from "./Navigation";
import "../styles/App.css";
import Radium from "radium";

const BaseLayout = (props) => {
  let center = {
    textAlign: "center"
  };

  return (
    <div style={center}>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Radium(BaseLayout);
