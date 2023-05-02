import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import {
  clearAuthTokenFromLocalStorage,
  clearUserIDFromLocalStorage,
} from "../../helpers/localStorageHelper";
import { AUTH_REDUX_CONSTANTS } from "../reduxConstants/authReduxConstants";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};

const appReducer = combineReducers({
  authReducer,
  userReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === AUTH_REDUX_CONSTANTS.LOGOUT_USER_ACTION) {
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
