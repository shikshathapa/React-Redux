import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Configure store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
