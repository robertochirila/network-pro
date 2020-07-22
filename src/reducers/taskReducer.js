import { NEW_TASK, DISPLAY_TASKS } from "../actions/types";

const initialState = {
  tasks: [],
  task: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DISPLAY_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
}
