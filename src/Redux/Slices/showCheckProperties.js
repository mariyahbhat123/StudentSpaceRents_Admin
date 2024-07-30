import { createSlice } from "@reduxjs/toolkit";
const showProperties = {
  showProperty: true,
};

const showCheckProperties = createSlice({
  name: "SHOW_PROPERTIES_ADMIN",
  initialState: showProperties,

  reducers: {
    showPropertiesAdmin: (state) => {
      state.showProperty = true;
    },
    dontShowPropertiesAdmin: (state) => {
      state.showProperty = false;
    },
  },
});

export const { showPropertiesAdmin, dontShowPropertiesAdmin } =
  showCheckProperties.actions;
export default showCheckProperties.reducer;
