import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <a href="/html/" className="nav-items">
          Profile
        </a>{" "}
        <a href="/css/" className="nav-items">
          Statistics
        </a>{" "}
        <a href="/js/" className="nav-items">
          Network
        </a>{" "}
        <a href="/python/" className="nav-items">
          Leaderboards
        </a>
      </nav>
    );
  }
}

export default Navigation;
