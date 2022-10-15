import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calendar_v3 } from "googleapis";

export type SuccessPayload = {
  date: calendar_v3.Schema$Event["start"];
  hangoutLink: calendar_v3.Schema$Event["hangoutLink"];
};

type Props = {
  provider: "gmail" | "manual";
  successMessage: SuccessPayload | null;
};

const initialState: Props = {
  provider: "gmail",
  successMessage: null,
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
  },
});

export const { changeProvider, saveSuccessMessage } = consulenzaSlice.actions;

export default consulenzaSlice.reducer;
