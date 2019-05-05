import React from "react";
import heroImage from "../images/bookimage.jpeg";

const headerStyle = {
  backgroundImage: `url(${heroImage})`,
  maxWidth: "100vw",
  height: "calc(100vw * .43333)",
  backgroundSize: "cover",
  position: "relative"
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Google Books Search</h1>
      <p>Search for and Save Books of Interest</p>
      <blockquote>
        <p>
          "I know nothing with any certainty, but the sight of the stars makes
          m dream."
        </p>
        <footer>-- Vincent Van Gogh </footer>
      </blockquote>
    </header>
  );
}

export default Header;
