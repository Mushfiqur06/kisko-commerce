import { setTokenToCookies } from "../utils/authentication";

export async function loginAction(name: string, pass: string) {
  try {
    const userName = "admin";
    const password = "admin";

    if (userName === name && password === pass) {
      const token = "fvffffgfgfffgfgftokenfffgfgffgfg";
      setTokenToCookies(token);
      return Promise.resolve();
    } else return Promise.reject("Your are not authorized");
  } catch (error) {
    return Promise.reject(error);
  }
}
