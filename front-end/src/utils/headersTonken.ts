import { getTokenFromCookies } from "./authentication";

export const headers = () => ({
  headers: {
    Authorization: "Bearer " + getTokenFromCookies(), //the token is a variable which holds the token
  },
});
