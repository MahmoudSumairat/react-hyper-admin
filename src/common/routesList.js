import { faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";

export const getRoutes = (isAuthenticated) => [
  {
    name: isAuthenticated ? "Home" : "Login",
    path: "/",
    icon: faHouse,
    component: isAuthenticated ? Home : Login,
  },
  {
    name: "Users",
    path: "/users",
    icon: faUsers,
    component: Users,
  },
];

export default getRoutes;
