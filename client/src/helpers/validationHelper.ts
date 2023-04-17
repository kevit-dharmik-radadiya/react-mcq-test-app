import _ from "lodash";

/**
 * Checks if the value is an empty object, collection, map, or set.
 * @param val This parameter holds the value that needs to be Checked for Empty value.
 * @returns This method returns a Boolean value(Returns true if the given value is an Empty value, else false).
 */
export const isEmpty = (val: any): boolean => {
  let isValEmpty = true;
  if (!_.isNil(val) && _.trim(String(val)).length > 0) {
    isValEmpty = false;
  }
  return isValEmpty;
};

/**
 * Checks if entered user email is match Regex Expression or not.
 * @param email This parameter holds the email value that needs to be Checked for valid email.
 * @returns This method returns a Regex Expression Match Array(Returns null if the given value is not matched).
 */
const isValidateEmail = (email: any) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/**
 * Checks if entered user email is valid or not.
 * @param fieldName This parameter use in validation message.
 * @param val This parameter holds the email value that user entered.
 * @returns This method returns an Object with status and message properties.
 */
export const isEmail = (fieldName: string, val: string) => {
  if (isEmpty(val)) {
    return {
      status: false,
      message: `Please enter ${fieldName} address`,
    };
  } else if (!isValidateEmail(val)) {
    return { status: false, message: `Invalid ${fieldName} address.` };
  }
  return { status: true, message: "" };
};

/**
 * Checks if entered user password is valid or not and is also used to confirm the password.
 * @param fieldName This parameter use in validation message.
 * @param password This parameter holds the password value that user entered.
 * @param isShowValidation This parameter used if you want to show validation message
 * @param confirmPassword This parameter holds the confirm password value that user entered.
 * @returns
 */
export const passwordValidate = (
  fieldName: string,
  password: string = "",
  isShowValidation: boolean = false,
  confirmPassword: string = ""
) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
  if (password === "" || password === undefined || password === null) {
    return {
      status: false,
      message: `Please enter ${fieldName}`,
    };
  } else if (!passwordRegex.test(password) && isShowValidation) {
    return {
      status: false,
      message: `The ${fieldName} should contain at least 8 letters, one uppercase and one special character.`,
    };
  } else if (confirmPassword && password !== confirmPassword) {
    return {
      status: false,
      message: `Password and Confirm Password does not match.`,
    };
  }

  return { status: true, message: "" };
};

/**
 *
 * @param fieldName This parameter use in validation message.
 * @param val This parameter holds the username value that user entered.
 * @returns
 */
export const usernameValidate = (fieldName: string, val: string) => {
  const regex = /\s/g;
  if (isEmpty(val)) {
    return {
      status: false,
      message: `Please enter ${fieldName}`,
    };
  } else if (regex.test(val)) {
    return {
      status: false,
      message: `Please enter valid username`,
    };
  }
  return {
    status: true,
    message: ``,
  };
};
