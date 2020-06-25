import React, { Component } from "react";

export class Navigation extends Component {
  handleNavigation = (event) => {
    let correspondingStep;
    if (event.target.id === "Profile") correspondingStep = 1;
    else if (event.target.id === "Statistics") correspondingStep = 2;
    else if (event.target.id === "Network") correspondingStep = 3;
    else if (event.target.id === "Leaderboards") correspondingStep = 4;
    console.log(correspondingStep);
  };
  render() {
    return (
      <nav className="nav">
        <a
          href="#"
          id="Profile"
          className="nav-items"
          onClick={this.handleNavigation}
        >
          Profile
        </a>{" "}
        <a
          href="#"
          id="Statistics"
          className="nav-items"
          onClick={this.handleNavigation}
        >
          Statistics
        </a>{" "}
        <a
          href="#"
          id="Network"
          className="nav-items"
          onClick={this.handleNavigation}
        >
          Network
        </a>{" "}
        <a
          href="#"
          id="Leaderboards"
          className="nav-items"
          onClick={this.handleNavigation}
        >
          Leaderboards
        </a>
      </nav>
    );
  }
}

export default Navigation;
