import { NEW_TASK } from "./types";
import { DISPLAY_TASKS } from "./types";

export const createTask = (taskData) => (dispatch) => {
  console.log("2. dispatch data to reducer");
  dispatch({
    type: NEW_TASK,
    payload: taskData,
  });
};

export const displayTasks = () => (dispatch) => {
  console.log("2. dispatch display action to reducer");
  dispatch({
    type: DISPLAY_TASKS,
    payload: "",
  });
};
