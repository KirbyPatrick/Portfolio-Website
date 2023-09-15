import React from "react";
import "../App.css";
import "../styles/Nav.css";

function Nav() {
  //component logic here

  return (
    //JSX for nav component here
    <header className="">
      <div className="boxy nav-bar">
        <a>01. About</a>
        <a>02. Experience</a>
        <a>03. Work</a>
        <a>04. Contact</a>
        <button>Resume</button>
      </div>
    </header>
  );
}

export default Nav;
