import http from "../../http/http";

import {
  addNewEventCategoryRoute,
  getEventCategoriesRoute,
  getEventCategoryDetailsRoute,
  updateEventCategoryRoute,
  deleteEventCategoryRoute,
} from "../routes/eventCategories";

const addEventCategory = (categoryData) => {
  return http.post(addNewEventCategoryRoute(), categoryData);
};

const getEventCategories = () => {
  return http.get(getEventCategoriesRoute());
};

const getEventCategoryDetails = (categoryId) => {
  return http.get(getEventCategoryDetailsRoute(categoryId));
};

const updateEventCategory = (categoryId, categoryData) => {
  return http.put(updateEventCategoryRoute(categoryId), categoryData);
};

const deleteEventCategory = (categoryId) => {
  return http.put(deleteEventCategoryRoute(categoryId));
};

const eventCategoriesEndpoints = {
  addEventCategory,
  getEventCategories,
  getEventCategoryDetails,
  updateEventCategory,
  deleteEventCategory,
};

export default eventCategoriesEndpoints;
