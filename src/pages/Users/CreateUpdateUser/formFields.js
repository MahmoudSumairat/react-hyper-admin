const getFormFields = (editMode) => {
  const formFields = [
    {
      component: "textInput",
      props: { name: "firstname", value: "", label: "First Name" },
      width: "half",
      validations: ["required"],
    },
    {
      component: "textInput",
      props: { name: "lastname", value: "", label: "Last Name" },
      width: "half",
      validations: ["required"],
    },
    {
      component: "email",
      props: {
        name: "email",
        value: "",
        label: "Email",
      },
      width: "full",
      validations: ["email"],
    },
    {
      component: "password",
      props: { name: "password", value: "", label: "password" },
      width: "half",
      validations: ["minLength"],
      validationParams: {
        minLengthParam: 8,
      },
      addModeOnly: true,
    },
    {
      component: "password",
      props: {
        name: "confirmPassword",
        value: "",
        label: "Confirm Password",
      },
      width: "half",
      validations: ["minLength", "compareValue"],
      validationParams: {
        minLengthParam: 8,
        compareWith: "password",
      },
      addModeOnly: true,
    },
  ];

  return editMode
    ? formFields.filter((field) => !field.addModeOnly)
    : formFields;
};

export default getFormFields;
