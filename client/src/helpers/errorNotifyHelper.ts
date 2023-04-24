import { errorNotification } from "./notifyHelper";

export const displayErrors = (e: any) => {
  if (e?.code === "ECONNABORTED") {
    errorNotification(
      "Request Timeout, Make sure you are connected to network."
    );
  } else {
    if (e.message === "Previous same call cancellation") {
      return;
    } else {
      errorNotification(
        e?.response?.data?.message ??
          "Something went wrong, please try again later"
      );
      throw e;
    }
  }
};