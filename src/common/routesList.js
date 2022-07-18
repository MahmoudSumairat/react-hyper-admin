import { faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
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
    icon: faUsers,
    component: Users,
  },
];

export default routes;
