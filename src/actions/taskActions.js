import { NEW_TASK } from "./types";
import { DISPLAY_TASKS } from "./types";
import axios from "axios";

export const createTask = (taskData) => (dispatch) => {
  console.log(taskData);

  fetch("http://localhost:5000/tasks/add", {
    method: "post",
    body: JSON.stringify(taskData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Fetch Post");
    });

  dispatch({
    type: NEW_TASK,
    payload: taskData,
  });
};

export const displayTasks = () => (dispatch) => {
  dispatch({
    type: DISPLAY_TASKS,
    payload: "",
  });
};
