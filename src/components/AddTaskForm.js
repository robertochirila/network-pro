import React, { Component } from "react";

export class AddTaskForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form className="task-form">
          <label className="task-form-label">Add a task</label>
          <input
            className="task-form-input"
            type="text"
            placeholer="Add a task"
          ></input>
          <button className="task-form-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
