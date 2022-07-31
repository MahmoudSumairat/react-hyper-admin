import { USERS } from "../baseURLs";

const addUserRoute = () => `${USERS}`;

const getUsersRoute = () => `${USERS}`;

const getUserDetailsRoute = (userId) => `${USERS}/${userId}`;

const updateUserRoute = (userId) => `${USERS}/${userId}`;

const deleteUserRoute = (userId) => `${USERS}/${userId}`;

export {
  addUserRoute,
  getUsersRoute,
  getUserDetailsRoute,
  updateUserRoute,
  deleteUserRoute,
};
