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
import Box from "../Box/Box";

const { form, formActions, formButton, formHeader, formTitleText } = styles;

const Form = ({
  formFields,
  editMode,
  submitButton = { text: "submit", color: "primary" },
  secondaryButton,
  onSubmit = () => {},
  formTitle = "create new item",
}) => {
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
    valuesClone[field.props.name] = target.value;
    setFormFieldsValue(valuesClone);
  };

  const handleFormFieldValidation = (
    { target },
    field,
    withErrorMessages = true
  ) => {
    const newFormFieldErrors = { ...formFieldErrors };
    field.validations.every((validation) => {
      const { isValid, message } = formValidations[validation](
        target.value,
        field.props.label,
        { withErrorMessage: withErrorMessages, ...field.validationParams }
      );

      if (!isValid) {
        newFormFieldErrors[field.props.name] = {
          isValid,
          message,
          touched: true,
          dirty: !!target.value,
        };

        return false;
      }
      newFormFieldErrors[field.props.name] = {
        isValid: true,
        message: null,
        touched: true,
        dirty: !!target.value,
      };

      return true;
    });
    setFormFieldErrors(newFormFieldErrors);
    setIsFormValid(getIsFormValid(newFormFieldErrors));
  };
  const handleFormFieldChange = ({ target }, field) => {
    updateFormFieldValues(target, field);
    handleComparableFieldChange(field);
    handleFormFieldValidation({ target }, field, false);
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

  console.log(editMode);

  return (
    <>
      <div className={formHeader}>
        <h5 className={formTitleText}>{formTitle}</h5>
      </div>
      <Box>
        <form className={form}>
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
                onBlur={(e) =>
                  !formFieldErrors[field.props.name].dirty
                    ? handleFormFieldValidation(e, field)
                    : null
                }
                error={formFieldErrors[field.props.name].message}
                {...valueProp}
              />
            );
          })}
          <div className={formActions}>
            {secondaryButton && (
              <CommonButton
                label={secondaryButton.text}
                color={secondaryButton.color}
                type="button"
                onClick={secondaryButton.onClick}
                className={formButton}
              />
            )}
            <CommonButton
              label={editMode ? "Save Changes" : submitButton.text}
              disabled={!isFormValid}
              color={submitButton.color || "primary"}
              onClick={() => onSubmit(formFieldsValue)}
              className={`${formButton} ${submitButton.className || ""}`}
              type="button"
            />
          </div>
        </form>
      </Box>
    </>
  );
};

export default Form;
