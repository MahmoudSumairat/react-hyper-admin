import http from "../../http/http";

import {
  addLocationTypeRoute,
  getLocationTypeRoute,
  getLocationTypeDetailsRoute,
  updateLocationTypeRoute,
  deleteLocationTypeRoute,
} from "../routes/locationTypes";

const addLocationType = (locationTypeData) => {
  return http.post(addLocationTypeRoute, locationTypeData);
};

const getLocationTypes = () => {
  return http.get(getLocationTypeRoute());
};

const getLocationTypeDetails = (locationTypeId) => {
  return http.get(getLocationTypeDetailsRoute(locationTypeId));
};

const updateLocationType = (locationTypeId, locationTypeData) => {
  return http.put(updateLocationTypeRoute(locationTypeId), locationTypeData);
};

const deleteLocationType = (locationTypeId) => {
  return http.delete(deleteLocationTypeRoute(locationTypeId));
};

const locationTypesEndpoints = {
  addLocationType,
  getLocationTypes,
  getLocationTypeDetails,
  updateLocationType,
  deleteLocationType,
};

export default locationTypesEndpoints;
