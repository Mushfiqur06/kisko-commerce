import axios from "axios";
import { headers } from "../utils/headersTonken";

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
