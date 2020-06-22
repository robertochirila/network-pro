import React, { Component } from "react";

export class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      counter: 0,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { taskName, counter } = this.state;
    this.setState({ taskName: "", counter: counter + 1 });
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <form className="task-form" onSubmit={this.handleSubmit}>
          <label className="task-form-label">Add a task</label>
          <input
            className="task-form-input"
            type="text"
            placeholer="Add a task"
            name="taskName"
            value={this.state.taskName}
            onChange={this.handleInputChange}
          ></input>
          <button className="task-form-button">Submit</button>
          <h3>{this.state.counter} Tasks Added</h3>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
