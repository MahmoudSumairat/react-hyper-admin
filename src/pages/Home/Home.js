import React from "react";
import styles from "./styles.module.scss";
import Box from "../../components/shared/Box/Box";
import useModal from "../../hooks/useModal";
import CommonButton from "../../components/shared/Button/Button";

const { home } = styles;

const Home = () => {
  const { showModal } = useModal();

  return (
    <Box className={home}>
      {/* <Form
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
      /> */}
      <CommonButton
        onClick={() =>
          showModal({
            title: "This is a test modal",
            message: "when you click on this modal everything shows up",
            type: "confirmation",
          })
        }
        label="Show Modal"
      />
    </Box>
  );
};

export default Home;
