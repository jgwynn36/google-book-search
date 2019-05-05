import React from "react";
import { Link } from "react-router-dom"; 

function Nav() {
  return (
    <nav>
      <h4>Google Books</h4>
      <Link to="/">Search</Link>
      <Link to="/saved">Saved</Link>
    </nav>
  );
}

export default Nav;
