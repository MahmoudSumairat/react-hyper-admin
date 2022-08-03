import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from "../../../components/shared/Form/Form";
import { useEndpoints } from "../../../hooks";
import getFormFields from "./formFields";

const CreateUpdateUser = () => {
  const { getUserDetails, addUser, updateUser } = useEndpoints();
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchUserData();

    /* eslint-disable */
  }, []);

  const fetchUserData = async () => {
    if (userId) {
      const response = await getUserDetails(userId);
      setUserData(response);
      setEditMode(true);
    }
  };

  const onSubmit = async (data) => {
    if (editMode) {
      await updateUser(userId, data);
    } else {
      await addUser(data);
    }

    navigate("/users");
  };

  return (
    <Form
      formFields={getFormFields(editMode)}
      formTitle={editMode ? "view or update user" : "create new user"}
      editMode={editMode}
      onSubmit={onSubmit}
      formData={userData}
    />
  );
};

export default CreateUpdateUser;
