import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { googleCalendarApi } from "./services/calendar";
import consulenzaSlice from "./reducers/consulenze";
import uiReducer from "./reducers/uiSlice";

const rootReducer = combineReducers({
  consulenza: consulenzaSlice,
  ui: uiReducer,
  [googleCalendarApi.reducerPath]: googleCalendarApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(googleCalendarApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const dispatcher = store.dispatch;
