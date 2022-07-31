import { LOOKUP, EVENT, CATEGORIES, SUB_CATEGORIES } from "../baseURLs";

const addEventSubCategoryRoute = (categoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}/${SUB_CATEGORIES}`;

const getEventSubCategoryRoute = (categoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}${SUB_CATEGORIES}`;

const getEventSubCategoryDetailsRoute = (categoryId, subCategoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}${SUB_CATEGORIES}/${subCategoryId}`;

const updateEventSubCategoryRoute = (categoryId, subCategoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}${SUB_CATEGORIES}/${subCategoryId}`;

const deleteEventSubCategoryRoute = (categoryId, subCategoryId) =>
  `${LOOKUP}${EVENT}${CATEGORIES}/${categoryId}${SUB_CATEGORIES}/${subCategoryId}`;

export {
  addEventSubCategoryRoute,
  getEventSubCategoryRoute,
  getEventSubCategoryDetailsRoute,
  updateEventSubCategoryRoute,
  deleteEventSubCategoryRoute,
};
