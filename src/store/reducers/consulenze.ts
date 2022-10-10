import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  provider: "gmail" as "gmail" | "manual",
};

const consulenzaSlice = createSlice({
  name: "consulenze",
  initialState,
  reducers: {
    changeProvider(state) {
      state.provider = state.provider === "gmail" ? "manual" : "gmail";
    },
  },
});

export const { changeProvider } = consulenzaSlice.actions;

export default consulenzaSlice.reducer;
