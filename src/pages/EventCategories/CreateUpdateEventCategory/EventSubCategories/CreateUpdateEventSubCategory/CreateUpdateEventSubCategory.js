import React from "react";
import Form from "../../../../../components/shared/Form/Form";
import { useEndpoints } from "../../../../../hooks";
import getFormFields from "./formFields";

const CreateUpdateEventSubCategory = ({
  setShowSubCategoriesList,
  editMode,
  categoryId,
  subCategoryId,
  eventSubCategoryDetails,
}) => {
  const { addEventSubCategory, updateEventSubCategory } = useEndpoints();

  const onSubmit = async (data) => {
    if (editMode) {
      await updateEventSubCategory(categoryId, subCategoryId, data);
      setShowSubCategoriesList(true);
    } else {
      await addEventSubCategory(categoryId, data);
      setShowSubCategoriesList(true);
    }
  };

  const onCancel = () => {
    setShowSubCategoriesList(true);
  };

  return (
    <Form
      editMode={editMode}
      onSubmit={onSubmit}
      formTitle={
        editMode
          ? "View or edit event sub category"
          : "Create new event sub Category"
      }
      submitButton={{ text: "create" }}
      formFields={getFormFields(eventSubCategoryDetails)}
      secondaryButton={{
        text: "cancel",
        color: "textPrimary",
        onClick: onCancel,
      }}
    />
  );
};

export default CreateUpdateEventSubCategory;
