import { createContext } from "react";

function isJSONString(str) {
  try {
    JSON.parse(str);
  } catch (err) {
    return false;
  }
  return true;
}

let user = localStorage.getItem("user");

if (isJSONString(user)) {
  user = JSON.parse(localStorage.getItem("user"));
} else {
  user = null;
}

export const AuthContext = createContext(user);
