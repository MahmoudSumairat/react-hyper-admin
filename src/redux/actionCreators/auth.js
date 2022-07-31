import { LOGIN, LOGOUT } from "../actions/auth";

const loginAction = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export { loginAction, logoutAction };
