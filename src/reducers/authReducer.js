import {
  CLEAR_ERROR,
  GET_USER,
  LOAD_USER_FAIL,
  LOG_IN_FAILED,
  LOG_OUT,
  NOT_LOADED_YET,
  SET_LOADING,
} from "../actions/actionType";

const inititalState = {
  user: null,
  loading: true,
  error: null,
};

const authReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOG_IN_FAILED:
      localStorage.removeItem("token");
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case LOG_OUT:
    case NOT_LOADED_YET:
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        loading: false,
      };

    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default authReducer;
