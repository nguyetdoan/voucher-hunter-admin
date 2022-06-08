import {
  CLEAR_ERROR,
  GET_USER,
  LOAD_USER,
  LOAD_USER_FAIL,
  LOG_IN,
  LOG_IN_FAILED,
  LOG_OUT,
  NOT_LOADED_YET,
  SET_LOADING,
} from "./actionType";

const authActions = {
  login(loginInfo) {
    return {
      type: LOG_IN,
      payload: loginInfo,
    };
  },
  loadUser() {
    return {
      type: LOAD_USER,
    };
  },
  getUser(user) {
    return {
      type: GET_USER,
      payload: user,
    };
  },
  loginFailed(err) {
    return {
      type: LOG_IN_FAILED,
      payload: err,
    };
  },
  notLoadedYet() {
    return {
      type: NOT_LOADED_YET,
    };
  },
  loadUserFailed(err) {
    return {
      type: LOAD_USER_FAIL,
      payload: err,
    };
  },
  clearError() {
    return {
      type: CLEAR_ERROR,
    };
  },
  setLoading() {
    return {
      type: SET_LOADING,
    };
  },
  logout() {
    return {
      type: LOG_OUT,
    };
  },
};

export default authActions;
