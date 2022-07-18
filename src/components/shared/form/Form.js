import React from "react";
import styles from "./styles.module.scss";
import { formFieldWidth, formComponentsMap } from "./formLayout";

const { form } = styles;

const Form = ({ formFields }) => {
  return (
    <div className={form}>
      {formFields.map((field, index) => {
        const formComponent = formComponentsMap[field.component];
        return (
          <formComponent.component
            key={index}
            {...formComponent.props}
            {...field.props}
            width={formFieldWidth[field.width || "full"]}
          />
        );
      })}
    </div>
  );
};

export default Form;
