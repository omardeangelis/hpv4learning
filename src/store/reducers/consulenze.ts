import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calendar_v3 } from "googleapis";

export type SuccessPayload = {
  date: calendar_v3.Schema$Event["start"];
  hangoutLink: calendar_v3.Schema$Event["hangoutLink"];
};

export type UserAppointment =
  | {
      id: string;
      startDate: string;
      endDate: string;
    }[]
  | undefined;

type Props = {
  provider: "gmail" | "manual";
  successMessage: SuccessPayload | null;
  userAppointment: UserAppointment | undefined;
};

const initialState: Props = {
  provider: "gmail",
  successMessage: null,
  userAppointment: undefined,
};

const consulenzaSlice = createSlice({
  name: "consulenze",
  initialState,
  reducers: {
    changeProvider(state) {
      state.provider = state.provider === "gmail" ? "manual" : "gmail";
    },
    saveSuccessMessage(state, action: PayloadAction<SuccessPayload>) {
      state.successMessage = action.payload;
    },
    saveUserAppointment(state, action: PayloadAction<UserAppointment>) {
      state.userAppointment = action.payload;
    },
  },
});

export const { changeProvider, saveSuccessMessage, saveUserAppointment } =
  consulenzaSlice.actions;

export default consulenzaSlice.reducer;
