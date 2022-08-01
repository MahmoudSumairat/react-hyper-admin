import authenticationEndpoints from "../API/endpoints/authentication";
import eventCategoriesEndpoints from "../API/endpoints/eventCategories";
import eventsEndpoints from "../API/endpoints/events";
import eventSubCategoryEndpoints from "../API/endpoints/eventSubCategory";
import eventTypesEndpoints from "../API/endpoints/eventTypes";
import locationsEndpoints from "../API/endpoints/locations";
import locationTypesEndpoints from "../API/endpoints/locationTypes";
import usersEndpoints from "../API/endpoints/users";
import validateEndpointParams from "../utils/validateEndpointParams";

const useEndpoints = () => {
  const endpoints = {
    ...authenticationEndpoints,
    ...eventCategoriesEndpoints,
    ...eventsEndpoints,
    ...eventSubCategoryEndpoints,
    ...eventTypesEndpoints,
    ...locationsEndpoints,
    ...locationTypesEndpoints,
    ...usersEndpoints,
  };

  Object.keys(endpoints).forEach((key) => {
    let originalEndpoint = endpoints[key];

    endpoints[key] = (...args) => {
      if (!originalEndpoint.length || validateEndpointParams(key, ...args)) {
        return originalEndpoint(...args);
      }
    };
  });

  return endpoints;
};

export default useEndpoints;
