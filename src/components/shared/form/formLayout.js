import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import TextField from "../TextField/TextField";
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
  checkbox: {
    component: Checkbox,
  },
  radio: {
    component: Radio,
  },
  textarea: {
    component: TextField,
    props: {
      multiLine: true,
    },
  },
  numberInput: {
    component: TextField,
    props: {
      type: "number",
    },
  },
};

export { formFieldWidth, formComponentsMap };
