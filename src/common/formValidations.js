const formValidations = {
  required: (value, name) => {
    return { isValid: !!value, message: `${name} is required` };
  },
  email: (value, name) => {
    if (!value) {
      return { isValid: false, message: `${name} is required` };
    }
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return {
      isValid: emailRegex.test(value),
      message: `You have entered an invalid email, please try again`,
    };
  },
  compareValue: (value, name, validationParams) => {
    const { comparedValue } = validationParams;
    if (!value) {
      return { isValid: false, message: `${name} is required` };
    }
    if (value.length !== comparedValue.length) {
      return { isValid: false, message: "Passwords don't match" };
    }
    return {
      isValid: value === comparedValue,
      message: "Passwords don't match",
    };
  },
  minLength: (value, name, validationParams) => {
    const { minLengthParam } = validationParams;

    if (!value) {
      return { isValid: false, message: `${name} is required` };
    }
    return {
      isValid: value.length >= minLengthParam,
      message: `${name} should be more than or equal ${minLengthParam} characters`,
    };
  },
  maxLength: (value, name, validationParams) => {
    const { maxLengthParam } = validationParams;
    if (!value) {
      return { isValid: false, message: `${name} is required` };
    }
    return {
      isValid: value.length <= maxLengthParam,
      message: `${name} should be less than or equal ${maxLengthParam} characters`,
    };
  },
  greaterThanToday: (value, name) => {
    if (!value) {
      return { isValid: false, message: `${name} is required` };
    }
    return {
      isValid: new Date(value).getTime() > new Date().getTime(),
      message: `${name} should be greater than or equal today`,
    };
  },
};

export default formValidations;
