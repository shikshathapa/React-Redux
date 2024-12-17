import { combineReducers } from "redux";
import counterReducer from "./counterSlice";

// Root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
