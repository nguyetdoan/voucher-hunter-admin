import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "../reducer/authReducer";
import uiReducer from "../reducer/uiReducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
