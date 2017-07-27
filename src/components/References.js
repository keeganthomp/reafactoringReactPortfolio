import React from "react";

const References = () => {
  let header = {
    color: "white",
    fontSize: 100,
    fontFamily: "Poiret One"
  };

  let center = {
    textAlign: "center"
  };
  let light = {
    fontFamily: "Poiret One",
  }
  return (
    <div style={center}>
      <div style={header}>References</div>
      <p style={light}>Ref 1</p>
      <p style={light}>Ref 2</p>
      <p style={light}>Ref 3</p>
    </div>
  );
};

export default References;