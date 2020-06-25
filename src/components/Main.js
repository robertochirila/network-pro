import React, { Component } from "react";
import AddTaskForm from "./AddTaskForm";
import Tasks from "./Tasks";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { Network } from "./Network";
import { Leaderboards } from "./Leaderboards";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }
  render() {
    const { step } = this.state;
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <AddTaskForm />
            <Tasks />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Profile />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <Statistics />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <Network />
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <Leaderboards />
          </React.Fragment>
        );
    }
  }
}

export default Main;
