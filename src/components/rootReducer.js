import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

// Root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export default rootReducer;
