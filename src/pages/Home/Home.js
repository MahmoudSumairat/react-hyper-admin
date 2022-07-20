import React from "react";
import Form from "../../components/shared/Form/Form";
import styles from "./styles.module.scss";
import Box from "../../components/shared/Box/Box.js";

const { home } = styles;

const Home = () => {
  return (
    <Box className={home}>
      <Form
        onSubmit={(data) => {
          console.log("this is the form data", data);
        }}
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
              label: "gender",
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
    </Box>
  );
};

export default Home;
