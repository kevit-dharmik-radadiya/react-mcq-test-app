import _ from 'lodash';

type ValidationStatus = { status: boolean; message: string };

/**
 * This is a TypeScript function that checks if a value is empty or not.
 * @param {any} val - The `val` parameter is of type `any`, which means it can accept any data type as
 * input. It is the value that needs to be checked for emptiness.
 * @returns A boolean value indicating whether the input `val` is empty or not. `true` is returned if
 * the input is `null`, `undefined`, an empty string, or a string containing only whitespace
 * characters. `false` is returned otherwise.
 */
export const isEmpty = (val: any): boolean => {
  let isValEmpty = true;
  if (!_.isNil(val) && _.trim(String(val)).length > 0) {
    isValEmpty = false;
  }
  return isValEmpty;
};

/**
 * This is a TypeScript function that validates whether an email address is in a valid format.
 * @param {string} email - The email parameter is a string that represents an email address that needs
 * to be validated.
 * @returns The function `isValidateEmail` takes in a string argument `email` and returns a regular
 * expression match result. The regular expression is used to validate if the email string is in a
 * valid email format. If the email is valid, the function returns an array of matches, otherwise it
 * returns null.
 */
const isValidateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/**
 * The function checks if a given string is a valid email address and returns an object with a status
 * and message.
 * @param {string} fieldName - a string representing the name of the email field being validated.
 * @param {string} val - val is a string parameter that represents the email address that needs to be
 * validated.
 * @returns The function `isEmail` returns an object with two properties: `status` and `message`. The
 * `status` property is a boolean value indicating whether the email address is valid or not. The
 * `message` property is a string that provides additional information about the validation status.
 */
export const isEmail = (fieldName: string, val: string): ValidationStatus => {
  if (isEmpty(val)) {
    return {
      status: false,
      message: `Please enter ${fieldName} address`,
    };
  } else if (!isValidateEmail(val)) {
    return { status: false, message: `Invalid ${fieldName} address.` };
  }
  return { status: true, message: '' };
};

/**
 * This is a TypeScript function that validates a password based on certain criteria and returns a
 * status and message.
 * @param {string} fieldName - a string representing the name of the password field being validated.
 * @param {string} password - The password string that needs to be validated.
 * @param {boolean} isShowValidation - A boolean value that determines whether or not to show
 * validation messages. If it is true, validation messages will be shown. If it is false, validation
 * messages will not be shown.
 * @param {string} [confirmPassword] - An optional parameter that represents the confirmed password
 * entered by the user. It is used to check if the password and confirm password fields match.
 * @returns An object with two properties: "status" and "message". The "status" property indicates
 * whether the password validation was successful or not, and the "message" property provides a message
 * explaining the result of the validation.
 */
export const passwordValidate = (
  fieldName: string,
  password: string,
  isShowValidation?: boolean,
  confirmPassword?: string
): ValidationStatus => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
  if (password === '' || password === undefined || password === null) {
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

  return { status: true, message: '' };
};

/**
 * This is a TypeScript function that validates a username input by checking if it is empty or contains
 * whitespace.
 * @param {string} fieldName - a string representing the name of the field being validated (in this
 * case, the username field)
 * @param {string} val - val is a string parameter that represents the value of the username input
 * field. It is used to validate the input and check if it is empty or contains any whitespace
 * characters.
 * @returns an object with two properties: `status` and `message`. The `status` property is a boolean
 * value indicating whether the validation was successful or not. The `message` property is a string
 * that provides additional information about the validation result.
 */

export const usernameValidate = (
  fieldName: string,
  val: string
): ValidationStatus => {
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
