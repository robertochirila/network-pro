import React, { Component } from "react";
import { createTask } from "../actions/taskActions";
import { connect } from "react-redux";
import axios from "axios";

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskCategory: "",
      counter: 0,
      step: 0,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { taskName, taskCategory, counter, step } = this.state;

    const newTask = {
      taskName: taskName,
      taskCategory: taskCategory,
    };

    this.props.createTask(newTask);

    this.setState({
      taskName: "",
      taskCategory: "",
      step: 0,
      counter: counter + 1,
    });
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleIncrement = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  render() {
    const { step } = this.state;
    switch (step) {
      case 0:
        return (
          <div className="task-form">
            <label className="task-form-label">Add a task</label>
            <input
              className="task-form-input"
              type="text"
              placeholer="Add a task"
              name="taskName"
              value={this.state.taskName}
              onChange={this.handleInputChange}
            ></input>
            <button className="task-form-button" onClick={this.handleIncrement}>
              Next
            </button>
            <h3>{this.state.counter} Tasks Added</h3>
          </div>
        );
      case 1:
        return (
          <div className="task-form">
            <label className="task-form-label">Select Category</label>
            <input
              className="task-form-input"
              type="text"
              placeholer="Add a task"
              name="taskCategory"
              value={this.state.taskCategory}
              onChange={this.handleInputChange}
            ></input>
            <button className="task-form-button" onClick={this.handleSubmit}>
              Submit
            </button>
            <h3>{this.state.counter} Tasks Added</h3>
          </div>
        );
    }
  }
}

export default connect(null, { createTask })(AddTaskForm);
