import { NEW_TASK } from "./types";
import { DISPLAY_TASKS } from "./types";
import axios from "axios";

export const createTask = (taskData) => (dispatch) => {
  console.log(taskData)
  /*axios.post('http://localhost:5000/tasks/add', taskData)
  .then(res => console.log(res.data))
  .catch(err => console.log(err.response, err.status, err.message))*/
  axios.post('http://localhost:5000/tasks/add', taskData)
            .then(res => dispatch({
              type: NEW_TASK,
              payload: taskData,
            }))
            .catch(err => console.log(err))
  
};

export const displayTasks = () => (dispatch) => {

  /*axios.get('http://localhost:5000/tasks')
            .then(res => dispatch({
              type: DISPLAY_TASKS,
              payload: res.data,
            }))
            .catch(err => console.log(err))*/
  dispatch({
    type: DISPLAY_TASKS,
    payload: "",
  });
};
