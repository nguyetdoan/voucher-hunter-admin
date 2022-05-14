import { combineReducers, createStore } from "redux";
import uiReducer from "../reducer/uiReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer);

export default store;
