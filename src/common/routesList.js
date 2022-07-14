import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: faHouse,
    component: Home,
  },
  {
    name: "Users",
    path: "/users",
    icon: faUser,
    component: Users,
  },
];

export default routes;
