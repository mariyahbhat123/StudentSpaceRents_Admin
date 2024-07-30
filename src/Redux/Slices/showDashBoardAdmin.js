import { createSlice } from "@reduxjs/toolkit";
const showDashBoard = {
  showDashboard: false,
};

const showDashBoardAdmin = createSlice({
  name: "SHOW_DASHBOARD_ADMIN",
  initialState: showDashBoard,

  reducers: {
    showDashboardAdmin: (state) => {
      state.showDashboard = true;
    },
    dontShowDashboardAdmin: (state) => {
      state.showDashboard = false;
    },
  },
});

export const { showDashboardAdmin, dontShowDashboardAdmin } =
  showDashBoardAdmin.actions;
export default showDashBoardAdmin.reducer;
