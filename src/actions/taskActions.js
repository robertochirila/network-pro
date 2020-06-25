import { NEW_TASK } from "./types";
import { DISPLAY_TASKS } from "./types";

export const createTask = (taskData) => (dispatch) => {
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
