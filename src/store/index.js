import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "../reducers/authReducer";
import productReducer from "../reducers/productReducer";
import uiReducer from "../reducers/uiReducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
