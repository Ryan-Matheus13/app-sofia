import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authStore/slice";
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { commonSlice } from "./commonStore/slice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfigCommon = {
  key: 'common',
  storage: storageSession,
};

const persistedCommonReducer = persistReducer(persistConfigCommon, commonSlice.reducer)

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    common: persistedCommonReducer,
  },
});

export const persistor = persistStore(store)