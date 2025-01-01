import { LoginInfo, LoginResult } from "../types/login";

export const login = (info: LoginInfo): LoginResult => {
  const { email, password } = info;
  if (email === "test@example.com" && password === "password") {
    return {id: 1, name: "sample太郎"};
  }
  throw new Error();
}