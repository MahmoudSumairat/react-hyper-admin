import { EVENTS } from "../baseURLs";

const addEventRoute = () => `${EVENTS}`;

const getEventsRoute = () => `${EVENTS}`;

const getEventDetailsRoute = (eventId) => `${EVENTS}/${eventId}`;

const updateEventRoute = (eventId) => `${EVENTS}/${eventId}`;

const deleteEventRoute = (eventId) => `${EVENTS}/${eventId}`;

export {
  addEventRoute,
  getEventsRoute,
  getEventDetailsRoute,
  updateEventRoute,
  deleteEventRoute,
};
