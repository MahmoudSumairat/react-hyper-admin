import { LOOKUP, LOCATION, TYPES } from "../baseURLs";

const addLocationTypeRoute = () => `${LOOKUP}${LOCATION}${TYPES}`;

const getLocationTypeRoute = () => `${LOOKUP}${LOCATION}${TYPES}`;

const getLocationTypeDetailsRoute = (locationTypeId) =>
  `${LOOKUP}${LOCATION}${TYPES}/${locationTypeId}`;

const updateLocationTypeRoute = (locationTypeId) =>
  `${LOOKUP}${LOCATION}${TYPES}/${locationTypeId}`;

const deleteLocationTypeRoute = (locationTypeId) =>
  `${LOOKUP}${LOCATION}${TYPES}/${locationTypeId}`;

export {
  addLocationTypeRoute,
  getLocationTypeRoute,
  getLocationTypeDetailsRoute,
  updateLocationTypeRoute,
  deleteLocationTypeRoute,
};
