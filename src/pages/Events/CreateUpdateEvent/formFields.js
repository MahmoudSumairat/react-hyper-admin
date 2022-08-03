const getFormFields = ({
  locations,
  eventTypes,
  eventCategories,
  eventSubCategories,
}) => [
  {
    component: "toggle",
    props: { name: "active", value: false, label: "Active" },
    width: "full",
    validations: [],
  },
  {
    component: "textInput",
    props: { name: "name", type: "text", value: "", label: "Name" },
    width: "full",
    validations: ["required"],
  },
  {
    component: "textInput",
    props: {
      name: "description",
      type: "text",
      value: "",
      label: "Description",
      multiline: "true",
    },
    width: "full",
    validations: ["required"],
  },
  {
    component: "dateInput",
    props: {
      name: "startDate",
      value: "",
      label: "Start Date",
    },
    width: "half",
    validations: ["required"],
  },
  {
    component: "dateInput",
    props: {
      name: "endDate",
      value: "",
      label: "End Date",
    },
    width: "half",
    validations: ["required"],
  },
  {
    component: "select",
    props: {
      name: "location",
      value: "",
      label: "location",
      items: locations,
    },
    width: "half",
    validations: ["required"],
  },

  {
    component: "select",
    props: {
      name: "eventType",
      value: "",
      label: "event type",
      items: eventTypes,
    },
    width: "half",
    validations: ["required"],
  },
  {
    component: "select",
    props: {
      name: "eventCategory",
      value: "",
      label: "event category",
      items: eventCategories,
    },
    width: "half",
    validations: ["required"],
  },
  {
    component: "select",
    props: {
      name: "eventSubcategory",
      value: "",
      label: "event sub category",
      items: eventSubCategories,
    },
    width: "half",
    validations: ["required"],
  },
];

export default getFormFields;
