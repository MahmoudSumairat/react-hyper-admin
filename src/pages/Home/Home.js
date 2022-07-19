import React from "react";
import Form from "../../components/shared/Form/Form";
import styles from "./styles.module.scss";

const { home } = styles;

const Home = () => {
  return (
    <div className={home}>
      <Form
        formFields={[
          {
            component: "textInput",
            props: { name: "email", type: "email", value: "", label: "Email" },
            width: "full",
            validations: ["email"],
            validationParams: {
              minLengthParam: 8,
            },
          },
          {
            component: "textInput",
            props: {
              name: "password",
              type: "password",
              value: "",
              label: "Password",
            },
            width: "full",
            validations: ["minLength"],
            validationParams: {
              minLengthParam: 8,
            },
          },
          {
            component: "select",
            props: {
              name: "gender",
              value: "",
              items: [
                { displayName: "male", id: 1 },
                { displayName: "female", id: 2 },
              ],
            },
            width: "full",
            validations: ["required"],
          },
          {
            component: "dateInput",
            props: {
              name: "startDate",
              value: "",
            },
            width: "full",
            validations: ["greaterThanToday"],
          },
        ]}
      />
    </div>
  );
};

export default Home;
