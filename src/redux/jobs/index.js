import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import jobsManagment from "../reducers/jobs";
import favManagment from "../reducers/favorite";
import listJob from "../reducers/listJobs";
import listCompany from "../reducers/company";
import setLoading from "../reducers/loading";
import setError from "../reducers/error";

const persistConfig = {
  key: "root",
  storage,
  trasforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const rootReducer = combineReducers({
  jobs: jobsManagment,
  favorites: favManagment,
  list: listJob,
  company: listCompany,
  isLoading: setLoading,
  isError: setError,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const jobs = configureStore({
  //reducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(jobs);
