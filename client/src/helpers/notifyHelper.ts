import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successNotification = (message: string) => {
  toast(message, {
    type: "success",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
    className: "toast-success",
    bodyClassName: "toast-body",
    icon: false,
  });
  return false;
};

export const errorNotification = (message: string) => {
  toast(message, {
    type: "error",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    closeButton: false,
    className: "toast-error",
    bodyClassName: "toast-body",
    icon: false,
  });
  return false;
};

export const warningNotification = (message: string) => {
  toast(message, {
    type: "warning",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    closeButton: false,
    className: "toast-warning",
    bodyClassName: "toast-body",
    icon: false,
  });
  return false;
};
