import { SET_PAGE_NAME } from "../actions/header";

const setPageName = (payload) => ({
  type: SET_PAGE_NAME,
  payload,
});

export { setPageName };
