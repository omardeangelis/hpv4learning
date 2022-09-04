import { configureStore, combineReducers } from "@reduxjs/toolkit";
import consulenzaSlice from "./reducers/consulenze";

const rootReducer = combineReducers({
  consulenza: consulenzaSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
