import {
  faHouse,
  faUsers,
  faList,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import EventCategoriesList from "../pages/EventCategories/EventCategoriesList/EventCategoriesList";
import CreateUpdateEventCategory from "../pages/EventCategories/CreateUpdateEventCategory/CreateUpdateEventCategory";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";

export const getRoutes = (isAuthenticated) => [
  {
    name: isAuthenticated ? "Home" : "Login",
    path: "/",
    icon: faHouse,
    component: isAuthenticated ? Home : Login,
    exact: true,
  },
  {
    name: "Users",
    path: "/users",
    icon: faUsers,
    component: Users,
  },
  {
    name: "Event Categories",
    path: "/event-categories",
    icon: faList,
    component: EventCategoriesList,
  },
  {
    name: "Add Event Category",
    path: "/add-event-category",
    component: CreateUpdateEventCategory,
    hideFromMenu: true,
  },
  {
    name: "Event Category Details",
    path: "/event-categories/:categoryId",
    component: CreateUpdateEventCategory,
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "event-categories",
  },
  // {
  //   name: "Event Sub Categories",
  //   path: "/event-sub-categories",
  //   icon: faListCheck,
  //   component: EventCategoriesList,
  // },
];

export default getRoutes;
