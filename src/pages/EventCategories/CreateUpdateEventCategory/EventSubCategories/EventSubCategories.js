import React, { useState } from "react";
import CreateUpdateEventSubCategory from "./CreateUpdateEventSubCategory/CreateUpdateEventSubCategory";
import EventSubCategoriesList from "./EventSubCategoriesList/EventSubCategoriesList";

const EventSubCategories = ({ categoryId }) => {
  const [showSubCategoriesList, setShowSubCategoriesList] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [eventSubCategoryDetails, setEventSubCategoryDetails] = useState({
    name: "",
    description: "",
    active: false,
  });
  const [subCategoryId, setSubCategoryId] = useState(null);

  return showSubCategoriesList ? (
    <EventSubCategoriesList
      categoryId={categoryId}
      setEditMode={setEditMode}
      setEventSubCategoryDetails={setEventSubCategoryDetails}
      setSubCategoryId={setSubCategoryId}
      setShowSubCategoriesList={setShowSubCategoriesList}
    />
  ) : (
    <CreateUpdateEventSubCategory
      eventSubCategoryDetails={eventSubCategoryDetails}
      subCategoryId={subCategoryId}
      setShowSubCategoriesList={setShowSubCategoriesList}
      editMode={editMode}
      categoryId={categoryId}
    />
  );
};

export default EventSubCategories;
