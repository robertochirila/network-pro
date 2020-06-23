import { NEW_TASK } from "../actions/types";

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
        task: action.payload,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}
