import { NEW_TASK } from "./types";
import { DISPLAY_TASKS } from "./types";
import axios from "axios";

export const createTask = (taskData) => (dispatch) => {
  console.log(taskData);
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  axios
    .post("http://localhost:5000/tasks/add", taskData, axiosConfig)
    .then((res) => console.log(res.data))
    .then((err) => console.log(err));
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
