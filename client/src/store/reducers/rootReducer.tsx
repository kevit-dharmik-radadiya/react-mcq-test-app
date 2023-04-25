import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authReducer } from "./authReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};

const appReducer = combineReducers({
  authReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
