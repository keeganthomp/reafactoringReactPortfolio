import React from "react";

const About = () => {
  let header = {
    color: "white",
    fontSize: 100,
    fontFamily: "Poiret One"
  };

  let center = {
    textAlign: "center"
  };

  let circle = {
    borderRadius: "50%",
    width: 200,
    height: 200
  }

  let light = {
    fontFamily: "Poiret One",
  }

  return (
    <div style={center}>
      <div style={header}>The About Page</div>
      <div>
        <img style={circle}
          src="http://dl.hiapphere.com/data/icon/201511/HiAppHere_com_com.ludicside.mrsquare.png"
          alt=""
        />
        <p style={light}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
    </div>
  );
};

export default About;
