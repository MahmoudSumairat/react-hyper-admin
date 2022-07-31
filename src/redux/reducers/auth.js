import { LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  authToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        authToken: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        authToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
