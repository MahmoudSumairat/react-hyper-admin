import { SET_PAGE_NAME } from "../actions/header";

const initialState = {
  pageName: null,
};

const headerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE_NAME:
      return {
        ...state,
        pageName: payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
