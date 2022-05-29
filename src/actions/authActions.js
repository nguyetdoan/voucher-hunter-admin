import {
  GET_USER,
  LOAD_USER,
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
  loadUserFailed(err) {
    return {
      type: NOT_LOADED_YET,
      payload: err,
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
