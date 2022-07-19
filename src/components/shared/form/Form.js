import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  formFieldWidth,
  formComponentsMap,
  getFormFieldsValues,
  initFormFieldErrors,
  isInputsDirty,
  isInputsTouched,
  isInputsValid,
} from "./formHelpers";
import formValidations from "../../../common/formValidations";
import CommonButton from "../Button/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const { form, formActions } = styles;

const Form = ({ formFields, editMode, submitButtonText = "submit" }) => {
  const [formFieldsValue, setFormFieldsValue] = useState(
    getFormFieldsValues(formFields)
  );
  const [formFieldErrors, setFormFieldErrors] = useState(
    initFormFieldErrors(formFields)
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const handleComparableFieldChange = (field) => {
    if (field.validationParams && field.validationParams.compareWith) {
      const comparableField = formFields.find(
        (formField) => formField.props.name === field.props.name
      );
      comparableField.validationParams.comparedValue =
        formFieldsValue[comparableField.validationParams.compareWith];
    }
  };

  const updateFormFieldValues = (target, field) => {
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
  };

  const handleFormFieldChange = ({ target }, field) => {
    updateFormFieldValues(target, field);
    handleComparableFieldChange(field);
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
    let validInputs = isInputsValid(newFormFieldErrors);
    let touchedInputs = isInputsTouched(newFormFieldErrors);
    if (editMode) {
      let inputsDirty = isInputsDirty(newFormFieldErrors);
      return touchedInputs && validInputs && inputsDirty;
    }
    return touchedInputs && validInputs;
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
        <CommonButton
          icon={faUser}
          label={submitButtonText}
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
};

export default Form;
