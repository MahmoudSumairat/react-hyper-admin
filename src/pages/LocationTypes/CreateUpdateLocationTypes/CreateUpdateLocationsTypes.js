import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from "../../../components/shared/Form/Form";
import { useEndpoints } from "../../../hooks";
import getFormFields from "./formFields";

const CreateUpdateLocationType = () => {
  const { getLocationTypeDetails, updateLocationType, addLocationType } =
    useEndpoints();
  const { locationTypeId } = useParams();
  const navigate = useNavigate();
  const [locationTypeData, setLocationTypeData] = useState({
    name: "",
    description: "",
    active: false,
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchLocationTypeDetails();

    /* eslint-disable */
  }, []);

  const fetchLocationTypeDetails = async () => {
    if (locationTypeId) {
      setEditMode(true);
      const response = await getLocationTypeDetails(locationTypeData);
      setLocationTypeData(response);
    }
  };

  const onSubmit = (data) => {
    if (editMode) {
      updateLocationType(locationTypeId, data);
    } else {
      addLocationType(data);
    }

    navigate("/location-types");
  };

  return (
    <Form
      formTitle={
        editMode ? "view or update location type" : "create new location type"
      }
      editMode={editMode}
      onSubmit={onSubmit}
      formFields={getFormFields(locationTypeData)}
    />
  );
};

export default CreateUpdateLocationType;
