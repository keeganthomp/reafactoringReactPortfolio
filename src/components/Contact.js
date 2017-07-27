import React from "react";

const Contact = () => {
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
      <div style={header}>The Contact Page</div>
      <p style={light}>phone: (444)-888-1212</p>
      <p style={light}>email: tomsquare@gmail.com</p>
      <p style={light}>social: socialmedia.com/tomsquare</p>
    </div>
  );
};

export default Contact;
