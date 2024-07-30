import { configureStore } from "@reduxjs/toolkit";
import showCheckProperties from "../Slices/showCheckProperties";
import showDashBoardAdmin from "../Slices/showDashBoardAdmin";
import editProperties from "../Slices/editProperties";

export const store = configureStore({
  reducer: {
    showProperties: showCheckProperties,
    showDashBoardAdmin: showDashBoardAdmin,
    editProperties: editProperties,
  },
});
