import React from "react";
import { NavLink } from "react-router-dom";
import Radium from "radium";

const Navbar = function() {
  let styles = {
    navLinks: {
      fontFamily: "Poiret One",
      margin: 10,
      textDecoration: "none",
      color: "white",
      textTransform: "uppercase",
      ":hover": {
        color: "blue"
      }
    }
  };

  return (
    <nav>
      <NavLink style={styles.navLinks} to="/">
        Home
      </NavLink>
      <NavLink style={styles.navLinks} to="/About">
        About
      </NavLink>
      <NavLink style={styles.navLinks} to="/Contact">
        Contact
      </NavLink>
      <NavLink style={styles.navLinks} to="/Portfolio">
        Portfolio
      </NavLink>
      <NavLink style={styles.navLinks} to="/References">
        References
      </NavLink>
    </nav>
  );
};
export default Radium(Navbar);
