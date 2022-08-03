import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from "../../../components/shared/Form/Form";
import { useEndpoints } from "../../../hooks";
import getFormFields from "./formFields";

const CreateUpdateEvent = () => {
  const {
    getLocations,
    getEventCategories,
    getEventSubCategories,
    getEventTypes,
    getEventDetails,
    updateEvent,
    addEvent,
  } = useEndpoints();
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [eventTypes, setEventTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [eventCategories, setEventCategories] = useState([]);
  const [eventSubCategories, setEventSubCategories] = useState([]);

  useEffect(() => {
    fetchLookups();
    fetchEventData();

    /* eslint-disable */
  }, []);

  const fetchEventData = async () => {
    if (eventId) {
      const response = await getEventDetails(eventId);
      setEventData(response);
      setEditMode(true);
    }
  };

  const onSubmit = async (data) => {
    if (editMode) {
      await updateEvent(eventData, data);
    } else {
      await addEvent(data);
    }

    navigate("/events", { replace: true });
  };

  const fetchLookups = async () => {
    const locationsRes = await getLocations();
    const eventTypesRes = await getEventTypes();
    const eventCategoriesRes = await getEventCategories();
    const eventSubCategoriesRes = await getEventSubCategories();
    setLocations(locationsRes);
    setEventCategories(eventCategoriesRes);
    setEventSubCategories(eventSubCategoriesRes);
    setEventTypes(eventTypesRes);
  };

  return (
    <Form
      onSubmit={onSubmit}
      formTitle={editMode ? "View or update event" : "create new event"}
      formFields={getFormFields({
        locations,
        eventCategories,
        eventSubCategories,
        eventTypes,
      })}
    />
  );
};

export default CreateUpdateEvent;
