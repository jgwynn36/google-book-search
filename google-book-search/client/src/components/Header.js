import React from "react";

function Header() {
  return (
    <div className="container-fluid">
      <header>
        <h1>(React) Google Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
        <blockquote>
          <p>
            "I know nothing with any certainty, but the sight of the stars
            makes m dream."
          </p>
          <footer>-- Vincent Van Gogh </footer>
        </blockquote>
      </header>
    </div>
  );
}

export default Header;
