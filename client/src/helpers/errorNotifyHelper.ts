import { errorNotification } from './notifyHelper';

/**
 * The function displays error notifications based on the type of error received.
 * @param {any} e - any type, which means it can be any data type. It is the parameter passed to the
 * function that contains the error object.
 * @returns The function `displayErrors` returns a boolean value of `false` in two cases: when the
 * error message is "Previous same call cancellation", or when the error code is "ECONNABORTED". In all
 * other cases, the function throws the error and does not return anything.
 */
const displayErrors = (e: any) => {
  if (e?.code === 'ECONNABORTED') {
    errorNotification(
      'Request Timeout, Make sure you are connected to network.'
    );
  } else if (e.message === 'Previous same call cancellation') {
    return false;
  } else {
    errorNotification(
      e?.response?.data?.message ??
        'Something went wrong, please try again later'
    );
    throw e;
  }
  return false;
};

export default displayErrors;
