import http from "../../http/http";

import {
  addEventRoute,
  getEventsRoute,
  getEventDetailsRoute,
  updateEventRoute,
  deleteEventRoute,
} from "../routes/events";

const addEvent = async (eventData) => {
  return http.post(addEventRoute(), eventData);
};

const getEvents = () => {
  return http.get(getEventsRoute());
};

const getEventDetails = (eventId) => {
  return http.get(getEventDetailsRoute(eventId));
};

const updateEvent = (eventId, eventData) => {
  return http.put(updateEventRoute(eventId), eventData);
};

const deleteEvent = (eventId) => {
  return http.delete(deleteEventRoute(eventId));
};

const eventsEndpoints = {
  addEvent,
  getEvents,
  getEventDetails,
  updateEvent,
  deleteEvent,
};

export default eventsEndpoints;
