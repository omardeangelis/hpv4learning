import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const consulenzaSlice = createSlice({
  name: "consulenze",
  initialState,
  reducers: {},
});

export default consulenzaSlice.reducer;
