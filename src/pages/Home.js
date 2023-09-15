import React, { Component } from "react";

import funkoImage from "../images/KirbyFunko.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <img src={funkoImage} className="kirby-logo" alt="logo" />
        <p className="Secondary-teal boxy">Howdy! My name is</p>
        <h1 className="Primary-white boxy">Patrick Kirby</h1>
      </div>
    );
  }
}

export default Home;
