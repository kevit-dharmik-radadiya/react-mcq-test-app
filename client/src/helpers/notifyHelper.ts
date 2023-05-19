import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * These are TypeScript functions that display toast notifications with different types (success,
 * error, warning) and styles.
 * @param {string} message - The message to be displayed in the notification.
 * @returns All three functions are returning `false`.
 */
export const successNotification = (message: string) => {
  toast(message, {
    type: 'success',
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
    className: 'toast-success',
    icon: false,
  });
  return false;
};

export const errorNotification = (message: string) => {
  toast(message, {
    type: 'error',
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    closeButton: false,
    className: 'toast-error',
    icon: false,
  });
  return false;
};

export const warningNotification = (message: string) => {
  toast(message, {
    type: 'warning',
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    closeButton: false,
    className: 'toast-warning',
    icon: false,
  });
  return false;
};
