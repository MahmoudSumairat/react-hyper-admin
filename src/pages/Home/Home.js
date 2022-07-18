import React from "react";
import Checkbox from "../../components/shared/Checkbox/Checkbox";
import Form from "../../components/shared/form/Form";
import Radio from "../../components/shared/Radio/Radio";
import Select from "../../components/shared/Select/Select";
import TextField from "../../components/shared/TextField/TextField";
import styles from "./styles.module.scss";

const { home } = styles;

const Home = () => {
  const dummyItems = [
    {
      displayName: "test 1",
      id: 1,
    },
    {
      displayName: "test 2",
      id: 2,
    },
    {
      displayName: "test 3",
      id: 3,
    },
    {
      displayName: "test 4",
      id: 4,
    },
  ];

  return (
    <div className={home}>
      <Form
        formFields={[
          { component: "radio", props: { max: "20" }, width: "quarter" },
          {
            component: "checkbox",
            props: { max: "20", label: "isTrusted" },
            width: "quarter",
          },
          { component: "textInput", props: { max: "20" }, width: "half" },
          {
            component: "textarea",
            width: "threeQuarters",
          },
          { component: "numberInput", props: { max: "20" }, width: "quarter" },
        ]}
      />
    </div>
  );
};

export default Home;
