import { NEW_TASK } from "./types";

export const createTask = (taskData) => (dispatch) => {
  console.log("2. dispatch data to reducer");
  console.log(taskData);
  dispatch({
    type: NEW_TASK,
    payload: taskData,
  });
};
