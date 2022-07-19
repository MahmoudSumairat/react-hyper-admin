import React, { useState } from "react";
import styles from "./styles.module.scss";
import { formFieldWidth, formComponentsMap } from "./formLayout";
import formValidations from "../../../common/formValidations";

const { form, formActions } = styles;

const getFormFieldsValues = (formFields) => {
  const formFieldsValues = {};
  formFields.forEach((field) => {
    if (
      field.props &&
      field.props.name !== undefined &&
      (field.props.value !== undefined || field.props.checked)
    ) {
      formFieldsValues[field.props.name] =
        field.props.checked || field.props.value;
    } else {
      return console.error(
        'Error Building Common Form : Any form field should have "Name" and "Value" or "Checked" properties'
      );
    }
  });
  return formFieldsValues;
};

const initFormFieldErrors = (formFields) => {
  const formFieldErrors = {};

  formFields.forEach((field) => {
    if (
      field.props &&
      field.props.name !== undefined &&
      (field.props.value !== undefined || field.props.checked)
    ) {
      formFieldErrors[field.props.name] = {
        isValid: false,
        touched: false,
        message: "",
        dirty: false,
      };
    } else {
      return console.error(
        'Error Building Common Form : Any form field should have "Name" and "Value" or "Checked" properties'
      );
    }
  });

  return formFieldErrors;
};

const Form = ({ formFields, editMode }) => {
  const [formFieldsValue, setFormFieldsValue] = useState(
    getFormFieldsValues(formFields)
  );
  const [formFieldErrors, setFormFieldErrors] = useState(
    initFormFieldErrors(formFields)
  );

  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormFieldChange = ({ target }, field) => {
    const valuesClone = { ...formFieldsValue };
    const newFormFieldErrors = { ...formFieldErrors };

    valuesClone[field.props.name] = target.value;
    newFormFieldErrors[field.props.name] = {
      ...newFormFieldErrors[field.props.name],
      dirty: editMode
        ? target.value === valuesClone[field.props.name]
        : !!target.value,
    };
    setFormFieldsValue(valuesClone);
    setFormFieldErrors(newFormFieldErrors);

    if (field.validationParams && field.validationParams.compareWith) {
      const comparableField = formFields.find(
        (formField) => formField.props.name === field.props.name
      );
      comparableField.validationParams.comparedValue =
        formFieldsValue[comparableField.validationParams.compareWith];
    }
  };

  const handleFormFieldValidation = ({ target }, field) => {
    const newFormFieldErrors = { ...formFieldErrors };
    field.validations.every((validation) => {
      const { isValid, message } = formValidations[validation](
        target.value,
        field.props.name,
        field.validationParams
      );

      if (!isValid) {
        newFormFieldErrors[field.props.name] = {
          isValid,
          message,
          touched: true,
        };

        return false;
      }
      newFormFieldErrors[field.props.name] = {
        isValid: true,
        message: null,
        touched: true,
      };

      return true;
    });
    setFormFieldErrors(newFormFieldErrors);
    setIsFormValid(getIsFormValid(newFormFieldErrors));
  };

  const getIsFormValid = (newFormFieldErrors) => {
    const inputsIsValidArr = Object.entries(newFormFieldErrors).map(
      (field) => field[1].isValid || false
    );
    const inputsTouchedArr = Object.entries(newFormFieldErrors).map(
      (field) => field[1].touched || false
    );

    let isInputsValid = inputsIsValidArr.reduce(
      (previousValue, currentValue) => previousValue && currentValue,
      true
    );
    let isInputsTouched = inputsTouchedArr.reduce(
      (previousValue, currentValue) => previousValue && currentValue,
      true
    );

    if (editMode) {
      const inputsDirtyArray = Object.entries(newFormFieldErrors).map(
        (field) => field[1].dirty || false
      );

      let isInputsDirty = inputsDirtyArray.reduce(
        (previousValue, currentValue) => previousValue || currentValue,
        true
      );

      return isInputsTouched && isInputsValid && isInputsDirty;
    }

    return isInputsTouched && isInputsValid;
  };

  return (
    <div className={form}>
      {formFields.map((field, index) => {
        const formComponent = formComponentsMap[field.component];
        const valueProp =
          field.component === "checkbox"
            ? { checked: formFieldsValue[field.props.name] }
            : { value: formFieldsValue[field.props.name] };
        return (
          <formComponent.component
            key={index}
            {...formComponent.props}
            {...field.props}
            width={formFieldWidth[field.width || "full"]}
            onChange={(e) => handleFormFieldChange(e, field)}
            onBlur={(e) => handleFormFieldValidation(e, field)}
            error={formFieldErrors[field.props.name].message}
            {...valueProp}
          />
        );
      })}
      <div className={formActions}>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
