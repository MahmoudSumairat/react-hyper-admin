import React, { useEffect, useState } from "react";
import Form from "../../../components/shared/Form/Form";
import getFormFields from "./formFields";
import useEndpoints from "../../../hooks/useEndpoints";
import { useNavigate, useParams } from "react-router";

const CreateUpdateLocation = () => {
  const { getLocationTypes, getLocationDetails, updateLocation, addLocation } =
    useEndpoints();
  const { locationId } = useParams();
  const navigate = useNavigate();
  const [locationTypes, setLocationTypes] = useState([]);
  const [locationData, setLocationData] = useState({
    locationType: 0,
    active: false,
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchLocationTypes();
    fetchLocationDetails();
    /* eslint-disable */
  }, []);

  const fetchLocationTypes = async () => {
    const response = await getLocationTypes();
    setLocationTypes(response);
  };

  const fetchLocationDetails = async () => {
    if (locationId) {
      setEditMode(true);
      const response = await getLocationDetails(locationId);
      setLocationData(response);
    }
  };

  const onSubmit = async (data) => {
    if (editMode) {
      await updateLocation(locationId, data);
    } else {
      await addLocation(data);
    }

    navigate("/locations", { replace: true });
  };

  return (
    <Form
      onSubmit={onSubmit}
      editMode={editMode}
      formTitle={editMode ? "View or update location" : "Create new location"}
      formFields={getFormFields(locationData, { locationTypes })}
    ></Form>
  );
};

export default CreateUpdateLocation;
