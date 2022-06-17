import axios from "axios";
import { headers } from "../utils/headersTonken";

export async function getCategories(apiEndPoint: string) {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}products/${apiEndPoint}`,
      headers()
    );
    return Promise.resolve({ data: res.data });
  } catch (error) {
    return Promise.reject(error);
  }
}
