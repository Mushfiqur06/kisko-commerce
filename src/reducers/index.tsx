import { combineReducers } from "redux";
import { auth } from "./authReducer";

export const appReducers = combineReducers({
  auth,
});
