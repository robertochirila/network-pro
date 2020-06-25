import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate } from "../actions/navActions";

class Navigation extends Component {
  handleNavigation = (event) => {
    let correspondingStep;
    if (event.target.id === "Tasks") correspondingStep = 1;
    else if (event.target.id === "Statistics") correspondingStep = 2;
    else if (event.target.id === "Network") correspondingStep = 3;
    else if (event.target.id === "Leaderboards") correspondingStep = 4;
    else if (event.target.id === "Home") correspondingStep = 0;
    this.props.navigate(correspondingStep);
  };
  render() {
    return (
      <nav className="nav">
        <a
          href="#"
          id="Home"
          className="nav-items"
          onClick={this.handleNavigation}
        >
          Home
        </a>
        <a
          href="#"
          id="Tasks"
          className="nav-items"
          onClick={this.handleNavigation}
        >
          Tasks
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

export default connect(null, { navigate })(Navigation);
