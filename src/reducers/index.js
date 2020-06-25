import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import navReducer from "./navReducer";

export default combineReducers({
  task: taskReducer,
  nav: navReducer,
});
