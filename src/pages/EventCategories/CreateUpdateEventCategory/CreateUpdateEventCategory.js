import React, { useEffect, useState } from "react";
import Form from "../../../components/shared/Form/Form";
import getFormFields from "./formFields";
import { useEndpoints } from "../../../hooks";
import { useNavigate, useParams } from "react-router";
import Tabs from "../../../components/shared/Tabs/Tabs";
import EventSubCategories from "./EventSubCategories/EventSubCategories";

const CreateUpdateEventCategory = () => {
  const { addEventCategory, getEventCategoryDetails, updateEventCategory } =
    useEndpoints();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [eventCategoryDetails, setEventCategoryDetails] = useState({
    name: "",
    description: "",
    active: false,
  });

  useEffect(() => {
    if (categoryId) {
      getEventCategoryDetails(categoryId).then((response) => {
        setEventCategoryDetails(response.data);
        setEditMode(true);
      });
    }
    /* eslint-disable */
  }, []);

  const onSubmit = (data) => {
    if (editMode) {
      updateEventCategory(categoryId, data).then(onProcessSuccess);
    } else {
      addEventCategory(data).then(onProcessSuccess);
    }
  };

  const onProcessSuccess = () => {
    navigate("/event-categories", { replace: true });
  };

  return (
    <Tabs
      tabs={[
        {
          title: "Create Event Category",
          component: (
            <Form
              editMode={editMode}
              onSubmit={onSubmit}
              formTitle={
                editMode
                  ? "View or edit event category"
                  : "Create new event Category"
              }
              submitButton={{ text: "create" }}
              formFields={getFormFields(eventCategoryDetails)}
            />
          ),
        },
        {
          title: "Event Sub Categories",
          component: <EventSubCategories categoryId={categoryId} />,
        },
      ]}
    />
  );
};

export default CreateUpdateEventCategory;
