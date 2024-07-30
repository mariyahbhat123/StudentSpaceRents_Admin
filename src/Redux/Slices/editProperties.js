import { createSlice } from "@reduxjs/toolkit";
const editProperty = {
  editProperty: false,
};

const editProperties = createSlice({
  name: "EDIT_PROPERTY",
  initialState: editProperty,

  reducers: {
    editPropertyOfAdmin: (state) => {
      state.editProperty = true;
    },
    dontEditPropertyAdmin: (state) => {
      state.editProperty = false;
    },
  },
});

export const { editPropertyOfAdmin, dontEditPropertyAdmin } =
  editProperties.actions;

export default editProperties.reducer;
