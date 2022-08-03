const getFormFields = (data) => [
  {
    component: "toggle",
    props: { name: "active", value: data.active, label: "Active" },
    width: "full",
    validations: [],
  },
  {
    component: "textInput",
    props: { name: "name", type: "text", value: data.name, label: "Name" },
    width: "full",
    validations: ["required"],
  },
  {
    component: "textInput",
    props: {
      name: "description",
      type: "text",
      value: data.description,
      label: "Description",
      multiline: "true",
    },
    width: "full",
    validations: ["required"],
  },
];

export default getFormFields;
