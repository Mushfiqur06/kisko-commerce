import { getTokenFromCookies } from "../utils/authentication";
import axios from "axios";

const headers = () => ({
  headers: {
    Authorization: "Bearer " + getTokenFromCookies(), //the token is a variable which holds the token
  },
});

export async function getAllProductsAction(apiEndPoint: string) {
  try {
    const res = await axios.get(apiEndPoint, headers());
    if (res.status === 200) {
      return Promise.resolve({
        data: res.data,
      });
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
