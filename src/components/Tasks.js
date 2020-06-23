import React, { Component } from "react";
import { connect } from "react-redux";
import { displayTasks } from "../actions/taskActions";

class Tasks extends Component {
  componentDidMount() {
    this.props.displayTasks();
  }
  render() {
    const { tasks } = this.props;
    const renderTasks = tasks.map((task, index) => (
      <div key={index} className="card">
        <p className="card-paragraph">{task.taskName}</p>
        <p className="card-paragraph">{task.taskCategory}</p>
      </div>
    ));

    return <div>{renderTasks}</div>;
  }
}

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
});

export default connect(mapStateToProps, { displayTasks })(Tasks);
