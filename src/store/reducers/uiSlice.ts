import { createSlice } from "@reduxjs/toolkit";
import { dispatcher } from "..";

const initialState = {
  isSidebarOpen: false,
  isProjectBannerOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeProjectBanner(state) {
      state.isProjectBannerOpen = false;
    },
  },
});

export const toggleSidebar = () => {
  dispatcher(uiSlice.actions.toggleSidebar());
};

export const { closeProjectBanner } = uiSlice.actions;
export default uiSlice.reducer;
