import http from "../../http/http";

import {
  addEventTypeRoute,
  getEventTypesRoute,
  getEventTypeDetailsRoute,
  updateEventTypeRoute,
  deleteEventTypeRoute,
} from "../routes/eventTypes";

const addEventType = (eventTypeData) => {
  return http.post(addEventTypeRoute(), eventTypeData);
};

const getEventTypes = () => {
  return http.get(getEventTypesRoute());
};

const getEventTypeDetails = (eventTypeId) => {
  return http.get(getEventTypeDetailsRoute(eventTypeId));
};

const updateEventType = (eventTypeId, eventTypeData) => {
  return http.put(updateEventTypeRoute(eventTypeId), eventTypeData);
};

const deleteEventType = (eventTypeId) => {
  return http.delete(deleteEventTypeRoute(eventTypeId));
};

const eventTypesEndpoints = {
  addEventType,
  getEventTypes,
  getEventTypeDetails,
  updateEventType,
  deleteEventType,
};

export default eventTypesEndpoints;
