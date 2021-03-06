import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { appReducers } from "../reducers";

export const store = createStore(
  appReducers,
  {},
  applyMiddleware(thunk, logger)
);
