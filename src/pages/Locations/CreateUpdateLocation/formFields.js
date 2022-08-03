const getFormFields = (data, { locationTypes }) => [
  {
    component: "toggle",
    props: { name: "active", value: data.active, label: "Active" },
    width: "full",
    validations: [],
  },
  {
    component: "select",
    props: {
      name: "eventType",
      value: data.locationType,
      label: "Event Type",
      items: locationTypes,
    },
    width: "full",
    validations: ["required"],
  },
];

export default getFormFields;
