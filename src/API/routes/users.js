import { USERS } from "../baseURLs";

const getUsersRoute = () => `${USERS}`;
const createUserRoute = () => `${USERS}/create-user`;
const deleteUserRoute = () => `${USERS}/delete-user`;
const getUserDetailsRoute = (userId) => `${USERS}/${userId}`;

export { getUsersRoute, createUserRoute, deleteUserRoute, getUserDetailsRoute };
