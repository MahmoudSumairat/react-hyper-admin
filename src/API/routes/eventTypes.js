import { LOOKUP, EVENT, TYPES } from "../baseURLs";

const addEventTypeRoute = () => `${LOOKUP}${EVENT}${TYPES}`;

const getEventTypesRoute = () => `${LOOKUP}${EVENT}${TYPES}`;

const getEventTypeDetailsRoute = (eventTypeId) =>
  `${LOOKUP}${EVENT}${TYPES}/${eventTypeId}`;

const updateEventTypeRoute = (eventTypeId) =>
  `${LOOKUP}${EVENT}${TYPES}/${eventTypeId}`;

const deleteEventTypeRoute = (eventTypeId) =>
  `${LOOKUP}${EVENT}${TYPES}/${eventTypeId}`;

export {
  addEventTypeRoute,
  getEventTypesRoute,
  getEventTypeDetailsRoute,
  updateEventTypeRoute,
  deleteEventTypeRoute,
};
