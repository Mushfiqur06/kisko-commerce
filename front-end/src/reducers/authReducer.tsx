import {
  AUTH_TOKEN_RESOLVED,
  USER_LOGOUT,
  AUTH_USER_DATE_FROM_TOKEN,
} from "./../actions/auth-action-type";

const INITIAL_STATE = {
  token: "",
  userDataFromToken: {},
};

export const auth = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH_TOKEN_RESOLVED:
      return {
        ...state,
        token: action.playload,
      };
    case AUTH_USER_DATE_FROM_TOKEN:
      return {
        ...state,
        userDataFromToken: action.payload,
      };
    case USER_LOGOUT:
      return {
        token: "",
        userDataFromToken: {},
      };

    default:
      return state;
  }
};
