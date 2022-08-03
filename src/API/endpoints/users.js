//NOTE : all these endpoint are just to build the structure, it will be replaced with the actual endpoints

import http from "../../http/http";
import {
  addUserRoute,
  getUsersRoute,
  getUserDetailsRoute,
  updateUserRoute,
  deleteUserRoute,
} from "../routes/users";

const addUser = (userData) => {
  return http.post(addUserRoute(), userData);
};

const getUsers = () => {
  return http.get(getUsersRoute());
};

const getUserDetails = (userId) => {
  return http.get(getUserDetailsRoute(userId));
};

const updateUser = (userId, userData) => {
  return http.put(updateUserRoute(userId), userData);
};

const deleteUser = (userId) => {
  return http.delete(deleteUserRoute(), { id: userId });
};

const usersEndpoints = {
  getUsers,
  addUser,
  deleteUser,
  getUserDetails,
  updateUser,
};

export default usersEndpoints;
