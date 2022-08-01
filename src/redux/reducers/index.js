import { combineReducers } from "redux";
import authReducer from "./auth";
import modalReducer from "./modal";
import headerReducer from "./header";

const allReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  header: headerReducer,
});

export default allReducers;
