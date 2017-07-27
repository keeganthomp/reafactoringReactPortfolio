import React from "react";
import Navigation from "./Navigation";
import Radium from 'radium';

const Portfolio = () => {
  let header = {
    color: "white",
    fontSize: 100,
    fontFamily: "Poiret One"
  };

  let center = {
    textAlign: "center"
  };



  return (
    <div style={center}>
      <Navigation />
      <div style={header}>The Portfolio</div>
      <div>
        <img className="projectImg" src="https://www.fillmurray.com/g/200/300" alt=""/>
        <img className="projectImg" src="https://www.fillmurray.com/g/200/300" alt=""/>
        <img className="projectImg" src="https://www.fillmurray.com/g/200/300" alt=""/>
        <img className="projectImg" src="https://www.fillmurray.com/g/200/300" alt=""/>
        <img className="projectImg" src="https://www.fillmurray.com/g/200/300" alt=""/>
        <img className="projectImg" src="https://www.fillmurray.com/g/200/300" alt=""/>
        </div>
    </div>
  );
};

export default Radium(Portfolio);
