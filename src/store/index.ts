import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { googleCalendarApi } from "../services/calendar";
import consulenzaSlice from "./reducers/consulenze";
import uiReducer from "./reducers/uiSlice";
import { udemySlice } from "../services/udemy";

const rootReducer = combineReducers({
  consulenza: consulenzaSlice,
  ui: uiReducer,
  [googleCalendarApi.reducerPath]: googleCalendarApi.reducer,
  [udemySlice.reducerPath]: udemySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(googleCalendarApi.middleware, udemySlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const dispatcher = store.dispatch;
