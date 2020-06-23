import { NEW_TASK, DISPLAY_TASKS } from "../actions/types";

const initialState = {
  tasks: [],
  task: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_TASK:
      console.log("3. update the state in the reducer");
      //console.log(state.tasks);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DISPLAY_TASKS:
      console.log("3. return the state tasks in the reducer");
      return {
        ...state,
        tasks: state.tasks,
      };
    default:
      return state;
  }
}
