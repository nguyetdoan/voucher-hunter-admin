import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import { LOAD_USER, LOG_IN } from "../actions/actionType";
import authActions from "../actions/authActions";
import API from "../services/api";
import { setAuthToken } from "../utils/setAuthToken";

function* loginWork({ payload: userInfo }) {
  try {
    const token = yield call(API.login, userInfo);
    localStorage.token = token;
    yield put(authActions.loadUser());
  } catch (err) {
    yield put(authActions.loginFailed(err.response?.data?.msg || err.message));
    console.log(err.response?.data?.msg || err.message);
  }
}

function* loginWatch() {
  yield takeEvery(LOG_IN, loginWork);
}

function* loadUserWork() {
  try {
    const token = localStorage.token;
    setAuthToken(token);

    if (token) {
      const user = yield call(API.loadUser);
      yield put(authActions.setLoading());
      yield delay(500);
      yield put(authActions.getUser(user));
    } else {
      yield put(authActions.notLoadedYet());
    }
  } catch (err) {
    if (err.response?.data?.msg === "Token is not valid!") {
      yield put(authActions.notLoadedYet());
    } else {
      yield put(
        authActions.loadUserFailed(err.response?.data?.msg || err.message)
      );
    }
  }
}

function* loadUserWatch() {
  yield takeEvery(LOAD_USER, loadUserWork);
}

export default function* authSagas() {
  yield all([loadUserWatch(), loginWatch()]);
}
