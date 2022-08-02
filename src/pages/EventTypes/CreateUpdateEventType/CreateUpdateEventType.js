import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from "../../../components/shared/Form/Form";
import { useEndpoints } from "../../../hooks";
import getFormFields from "./formFields";

const CreateUpdateEventType = () => {
  const { eventTypeId } = useParams();
  const { getEventTypeDetails, updateEventType, addEventType } = useEndpoints();
  const [eventTypeDetails, setEventTypeDetails] = useState({
    name: "",
    description: "",
  });
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEventTypeData();

    /* eslint-disable */
  }, []);

  const fetchEventTypeData = async () => {
    if (eventTypeId) {
      setEditMode(true);
      const response = await getEventTypeDetails(eventTypeId);
      setEventTypeDetails(response.data);
    }
  };

  const onSubmit = async (data) => {
    if (editMode) {
      await updateEventType(eventTypeId, data);
    } else {
      await addEventType(data);
    }

    navigate("/event-types", { replace: true });
  };

  return (
    <Form
      editMode={editMode}
      formTitle={
        editMode ? "view or update event type" : "create new event type"
      }
      formFields={getFormFields(eventTypeDetails)}
      onSubmit={onSubmit}
    />
  );
};

export default CreateUpdateEventType;
