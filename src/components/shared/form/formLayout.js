import Checkbox from "../Checkbox/Checkbox";
import CommonDatePicker from "../DatePicker/DatePicker";
import Radio from "../Radio/Radio";
import TextField from "../TextField/TextField";
import Select from "../Select/Select";
import styles from "./styles.module.scss";

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

export { formFieldWidth, formComponentsMap };
