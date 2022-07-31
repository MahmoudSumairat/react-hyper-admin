//NOTE : all these endpoint are just to build the structure, it will be replaced with the actual endpoints

import http from "../../common/http";
import {
  createUserRoute,
  deleteUserRoute,
  getUsersRoute,
  getUserDetailsRoute,
} from "../routes/users";

const getUsers = () => {
  return http
    .get(getUsersRoute())
    .then(() => {})
    .catch(() => {});
};

const createUser = (userData) => {
  return http
    .post(createUserRoute(), userData)
    .then(() => {})
    .catch(() => {});
};

const deleteUser = (userId) => {
  return http
    .delete(deleteUserRoute(), { id: userId })
    .then(() => {})
    .catch(() => {});
};

const getUserDetails = (userId) => {
  return http
    .get(getUserDetailsRoute(userId))
    .then(() => {})
    .catch(() => {});
};

export { getUsers, createUser, deleteUser, getUserDetails };
