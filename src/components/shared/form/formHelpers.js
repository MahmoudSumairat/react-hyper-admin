import Checkbox from "../Checkbox/Checkbox";
import CommonDatePicker from "../DatePicker/DatePicker";
import Radio from "../Radio/Radio";
import TextField from "../TextField/TextField";
import Select from "../Select/Select";
import styles from "./styles.module.scss";
import Toggle from "../Toggle/Toggle";

const {
  fullWidth,
  halfWidth,
  oneThirdWidth,
  quarterWidth,
  threeQuartersWidth,
} = styles;

const formFieldWidth = {
  full: fullWidth,
  half: halfWidth,
  oneThird: oneThirdWidth,
  quarter: quarterWidth,
  threeQuarters: threeQuartersWidth,
};

const formComponentsMap = {
  textInput: {
    component: TextField,
  },
  password: {
    component: TextField,
    props: {
      type: "password",
    },
  },
  email: {
    component: TextField,
    props: {
      type: "email",
    },
  },
  select: {
    component: Select,
  },
  checkbox: {
    component: Checkbox,
  },
  radio: {
    component: Radio,
  },
  toggle: {
    component: Toggle,
  },
  textarea: {
    component: TextField,
    props: {
      multiline: "true",
    },
  },
  numberInput: {
    component: TextField,
    props: {
      type: "number",
    },
  },
  dateInput: {
    component: CommonDatePicker,
  },
};

const getFormFieldsValues = (formFields) => {
  const formFieldsValues = {};
  formFields.forEach((field) => {
    if (field.props.name) {
      formFieldsValues[field.props.name] =
        field.props.checked || field.props.value;
    } else {
      console.error("Any field should have a name property to build the form.");
    }
  });

  return formFieldsValues;
};

const initFormFieldErrors = (formFields, editMode) => {
  const formFieldErrors = {};

  formFields.forEach((field) => {
    if (field.props.name) {
      const hasValidation = editMode || !field.validations;
      formFieldErrors[field.props.name] = {
        isValid: hasValidation,
        touched: hasValidation,
        message: "",
        dirty: false,
      };
    } else {
      console.error("Any field should have a name property to build the form.");
    }
  });

  return formFieldErrors;
};

const isInputsValid = (newFormFieldErrors) => {
  const inputsIsValidArr = Object.entries(newFormFieldErrors).map(
    (field) => field[1].isValid || false
  );

  return inputsIsValidArr.reduce(
    (previousValue, currentValue) => previousValue && currentValue,
    true
  );
};

const isInputsTouched = (newFormFieldErrors) => {
  const inputsTouchedArr = Object.entries(newFormFieldErrors).map(
    (field) => field[1].touched || false
  );

  return inputsTouchedArr.reduce(
    (previousValue, currentValue) => previousValue && currentValue,
    true
  );
};

const isInputsDirty = (newFormFieldErrors) => {
  const inputsDirtyArray = Object.entries(newFormFieldErrors).map(
    (field) => field[1].dirty || false
  );

  return inputsDirtyArray.reduce(
    (previousValue, currentValue) => previousValue || currentValue,
    false
  );
};

export {
  formFieldWidth,
  formComponentsMap,
  getFormFieldsValues,
  initFormFieldErrors,
  isInputsValid,
  isInputsTouched,
  isInputsDirty,
};
