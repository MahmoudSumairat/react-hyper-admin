import React from "react";
import Logo from "../../components/Logo/Logo";
import Box from "../../components/shared/Box/Box";
import Form from "../../components/shared/Form/Form";
import styles from "./styles.module.scss";
const { loginPage, loginWelcome, loginDescription, loginBox } = styles;

const Login = ({ setAuthToken }) => {
  const loginFormFields = [
    {
      component: "email",
      props: {
        name: "email",
        label: "Email",
        value: "",
      },
      validations: ["email"],
    },
    {
      component: "password",
      props: {
        name: "password",
        label: "Password",
        value: "",
      },
      validations: ["minLength"],
      validationParams: {
        minLengthParam: 8,
      },
    },
  ];

  const handleFormSubmit = (data) => {
    //Do auth stuff
    setAuthToken(JSON.stringify(data));
  };

  return (
    <div className={loginPage}>
      <Logo />
      <Box className={loginBox}>
        <h5 className={loginWelcome}>Welcome Back!</h5>
        <h6 className={loginDescription}>Login using email and password</h6>
        <Form
          onSubmit={handleFormSubmit}
          formFields={loginFormFields}
          submitButton={{ text: "Login", color: "primary" }}
        />
      </Box>
    </div>
  );
};

export default Login;
