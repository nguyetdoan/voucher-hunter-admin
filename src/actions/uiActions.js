import {
  CLOSE_POP_UP,
  TOGGLE_MENU,
  TOGGLE_MESSAGE,
  TOGGLE_NOTIFICATION,
  TOGGLE_PROFILE,
} from "./actionType";

const uiActions = {
  toggleMenu(status) {
    return {
      type: TOGGLE_MENU,
      payload: status,
    };
  },
  toggleNotification(status) {
    return {
      type: TOGGLE_NOTIFICATION,
      payload: status,
    };
  },
  toggleMessage(status) {
    return {
      type: TOGGLE_MESSAGE,
      payload: status,
    };
  },
  toggleProfile(status) {
    return {
      type: TOGGLE_PROFILE,
      payload: status,
    };
  },
  closePopUp() {
    return {
      type: CLOSE_POP_UP,
    };
  },
};

export default uiActions;
