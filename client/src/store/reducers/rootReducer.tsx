import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authReducer from './authSlice';
import authValidateReducer from './authValidateSlice';
import userReducer from './userSlice';
import quizReducer from './quizSlice';
import modalReducer from './modalSlice';
import layoutReducer from './layoutSlice';
import {
  clearAuthTokenFromLocalStorage,
  clearUserIDFromLocalStorage,
} from '../../helpers/localStorageHelper';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const appReducer = combineReducers({
  auth: authReducer,
  authValidate: authValidateReducer,
  layout: layoutReducer,
  user: userReducer,
  quiz: quizReducer,
  modal: modalReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT_USER') {
    clearAuthTokenFromLocalStorage();
    clearUserIDFromLocalStorage();

    sessionStorage.removeItem('persist:allFilters');
    localStorage.clear();

    return appReducer(state, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

type RootState = ReturnType<typeof appReducer>;
export default persistedReducer;
