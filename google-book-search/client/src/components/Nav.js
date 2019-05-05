import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Search</Link>
      <br></br>
      <Link to="/saved">Saved</Link>
    </nav>
  );
}

export default Nav;
