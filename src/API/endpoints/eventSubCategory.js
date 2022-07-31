import http from "../../http/http";

import {
  addEventSubCategoryRoute,
  getEventSubCategoryDetailsRoute,
  getEventSubCategoryRoute,
  updateEventSubCategoryRoute,
  deleteEventSubCategoryRoute,
} from "../routes/eventSubCategory";

const addEventSubCategory = (categoryId, subCategoryData) => {
  return http.post(addEventSubCategoryRoute(categoryId), subCategoryData);
};

const getEventSubCategories = (categoryId) => {
  return http.get(getEventSubCategoryRoute(categoryId));
};

const getEventSubCategoryDetails = (categoryId, subCategoryId) => {
  return http.get(getEventSubCategoryDetailsRoute(categoryId, subCategoryId));
};

const updateEventSubCategory = (categoryId, subCategoryId, subCategoryData) => {
  return http.put(
    updateEventSubCategoryRoute(categoryId, subCategoryId),
    subCategoryData
  );
};

const deleteEventSubCategory = (categoryId, subCategoryId) => {
  return http.delete(deleteEventSubCategoryRoute(categoryId, subCategoryId));
};

const eventSubCategoryEndpoints = {
  addEventSubCategory,
  getEventSubCategories,
  getEventSubCategoryDetails,
  updateEventSubCategory,
  deleteEventSubCategory,
};

export default eventSubCategoryEndpoints;
