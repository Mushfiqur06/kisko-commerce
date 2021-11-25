import Cookies from "js-cookie";
import { USER_LOGOUT } from "../../actions/auth-action-type";
import { store } from "../../store";
import { isStringAndLengthGtZero } from "../validation";
const jwtDecode = require("jwt-decode");

export const userInLoggedIn = () => {
  const token = Cookies.get("_t");
  return token && isStringAndLengthGtZero(token) && token.length;
};
export const getTokenFromCookies = () => {
  return Cookies.get("_t");
};

export const logout = () => {
  Cookies.remove("_t");
  store.dispatch({ type: USER_LOGOUT, payload: false });
  return true;
};
export const decodeToken = (token: string) => jwtDecode(token);
export const setTokenToCookies = (token: string) => {
  Cookies.set("_t", token, { expires: 7 });
};
