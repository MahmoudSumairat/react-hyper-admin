import { EVENT, CATEGORIES, LOOKUP } from "../baseURLs";

const addNewEventCategoryRoute = () => `${LOOKUP}${EVENT}${CATEGORIES}`;

const getEventCategoriesRoute = () => `${LOOKUP}${EVENT}${CATEGORIES}`;

const getEventCategoryDetailsRoute = (categoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}`;

const updateEventCategoryRoute = (categoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}`;

const deleteEventCategoryRoute = (categoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}`;

export {
  addNewEventCategoryRoute,
  getEventCategoriesRoute,
  getEventCategoryDetailsRoute,
  updateEventCategoryRoute,
  deleteEventCategoryRoute,
};
