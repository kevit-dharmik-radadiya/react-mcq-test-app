import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authReducer from "./authSlice";
import { authValidateReducer } from "./authValidateReducer";
import { userReducer } from "./userReducer";
import { quizReducer } from "./quizReducer";
import {
  clearAuthTokenFromLocalStorage,
  clearUserIDFromLocalStorage,
} from "../../helpers/localStorageHelper";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const appReducer = combineReducers({
  auth: authReducer,
  authValidateReducer,
  userReducer,
  quizReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT_USER") {
    clearAuthTokenFromLocalStorage();
    clearUserIDFromLocalStorage();

    sessionStorage.removeItem("persist:allFilters");
    localStorage.clear();

    return appReducer(state, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
