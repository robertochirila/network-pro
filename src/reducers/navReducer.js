import { NAVIGATE } from "../actions/types";

const initialState = {
  step: 0,
};

export default function (state = initialState, action) {
  console.log("3. Navigation reducer");
  switch (action.type) {
    case NAVIGATE:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
}
