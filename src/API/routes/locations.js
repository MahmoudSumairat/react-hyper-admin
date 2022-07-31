import { LOCATIONS } from "../baseURLs";

const addLocationRoute = () => `${LOCATIONS}`;

const getLocationsRoute = () => `${LOCATIONS}`;

const getLocationDetailsRoute = (locationId) => `${LOCATIONS}/${locationId}`;

const updateLocationRoute = (locationId) => `${LOCATIONS}/${locationId}`;

const deleteLocationRoute = (locationId) => `${LOCATIONS}/${locationId}`;

export {
  addLocationRoute,
  getLocationsRoute,
  getLocationDetailsRoute,
  updateLocationRoute,
  deleteLocationRoute,
};
