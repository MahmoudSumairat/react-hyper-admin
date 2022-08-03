import {
  faHouse,
  faUsers,
  faList,
  faCalendarCheck,
  faLocationDot,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import EventCategoriesList from "../pages/EventCategories/EventCategoriesList/EventCategoriesList";
import CreateUpdateEventCategory from "../pages/EventCategories/CreateUpdateEventCategory/CreateUpdateEventCategory";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";
import EventTypesList from "../pages/EventTypes/EventTypesList/EventTypesList";
import CreateUpdateEventType from "../pages/EventTypes/CreateUpdateEventType/CreateUpdateEventType";
import LocationsList from "../pages/Locations/LocationsList/LocationsList";
import CreateUpdateLocation from "../pages/Locations/CreateUpdateLocation/CreateUpdateLocation";
import LocationTypesList from "../pages/LocationTypes/LocationTypesList/LocationTypesList";
import CreateUpdateLocationType from "../pages/LocationTypes/CreateUpdateLocationTypes/CreateUpdateLocationsTypes";
import UsersList from "../pages/Users/UsersList/UsersList";
import CreateUpdateUser from "../pages/Users/CreateUpdateUser/CreateUpdateUser";

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
    component: UsersList,
  },
  {
    name: "Add User",
    path: "/users/add-user",
    hideFromMenu: true,
    component: CreateUpdateUser,
  },
  {
    name: "User Details",
    path: "/users/:userId",
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "users",
    component: CreateUpdateUser,
  },
  {
    name: "Event Categories",
    path: "/event-categories",
    icon: faList,
    component: EventCategoriesList,
  },
  {
    name: "Add Event Category",
    path: "event-categories/add-event-category",
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
  {
    name: "Event Types",
    path: "/event-types",
    icon: faCalendarCheck,
    component: EventTypesList,
  },
  {
    name: "Add Event Type",
    path: "event-types/add-event-type",
    hideFromMenu: true,
    component: CreateUpdateEventType,
  },
  {
    name: "Event Type Details",
    path: "/event-types/:eventTypeId",
    component: CreateUpdateEventType,
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "event-types",
  },
  {
    name: "Locations",
    path: "/locations",
    component: LocationsList,
    icon: faLocationDot,
  },
  {
    name: "Add Location",
    path: "locations/add-location",
    component: CreateUpdateLocation,
    hideFromMenu: true,
  },
  {
    name: "Location Details",
    path: "/locations/:locationId",
    component: CreateUpdateLocation,
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "locations",
  },
  {
    name: "Location Types",
    path: "/location-types",
    component: LocationTypesList,
    icon: faLocationArrow,
  },
  {
    name: "Add Location Type",
    path: "/location-types/add-location-type",
    component: CreateUpdateLocationType,
    hideFromMenu: true,
  },
  {
    name: "Location Type Details",
    path: "/location-types/:locationTypeId",
    component: CreateUpdateLocationType,
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "location-types",
  },
];

export default getRoutes;
