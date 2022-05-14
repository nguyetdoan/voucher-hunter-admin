import {
  TOGGLE_MENU,
  TOGGLE_MESSAGE,
  TOGGLE_NOTIFICATION,
  TOGGLE_PROFILE,
  CLOSE_POP_UP,
} from "../actions/actionType";

const intitalState = {
  isShowedMenu: window.innerWidth < 992 ? false : true,
  isShowedMessage: false,
  isShowedNotification: false,
  isShowedProfile: false,
};

const uiReducer = (state = intitalState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      const isShowedMenu =
        action.payload === undefined ? !state.isShowedMenu : action.payload;

      return {
        ...state,
        isShowedMenu,
      };

    case TOGGLE_MESSAGE:
      const isShowedMessage =
        action.payload === undefined ? !state.isShowedMessage : action.payload;

      return {
        ...state,
        isShowedMessage,
        isShowedNotification: false,
        isShowedProfile: false,
      };

    case TOGGLE_NOTIFICATION:
      const isShowedNotification =
        action.payload === undefined
          ? !state.isShowedNotification
          : action.payload;
      return {
        ...state,
        isShowedNotification,
        isShowedMessage: false,
        isShowedProfile: false,
      };

    case TOGGLE_PROFILE:
      const isShowedProfile =
        action.payload === undefined ? !state.isShowedProfile : action.payload;
      return {
        ...state,
        isShowedProfile,
        isShowedMessage: false,
        isShowedNotification: false,
      };

    case CLOSE_POP_UP:
      return {
        ...state,
        isShowedProfile: false,
        isShowedMessage: false,
        isShowedNotification: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
