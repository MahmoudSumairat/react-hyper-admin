import http from "../../http/http";
import {
  addLocationRoute,
  getLocationsRoute,
  getLocationDetailsRoute,
  updateLocationRoute,
  deleteLocationRoute,
} from "../routes/locations";

const addLocation = (locationData) => {
  return http.post(addLocationRoute());
};

const getLocations = () => {
  return http.get(getLocationsRoute());
};

const getLocationDetails = (locationId) => {
  return http.get(getLocationDetailsRoute(locationId));
};

const updateLocation = (locationId, locationData) => {
  return http.put(updateLocationRoute(locationId), locationData);
};

const deleteLocation = (locationId) => {
  return http.delete(deleteLocationRoute(locationId));
};

const locationsEndpoints = {
  addLocation,
  getLocations,
  getLocationDetails,
  updateLocation,
  deleteLocation,
};

export default locationsEndpoints;
