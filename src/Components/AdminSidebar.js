import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  dontShowPropertiesAdmin,
  showPropertiesAdmin,
} from "../Redux/Slices/showCheckProperties";
import {
  dontShowDashboardAdmin,
  showDashboardAdmin,
} from "../Redux/Slices/showDashBoardAdmin";

export default function AdminSidebar(props) {
  const adminName = localStorage.getItem("adminName");
  const dispatch = useDispatch();
  const showProperty = useSelector(
    (state) => state.showProperties.showProperty
  );

  const handlePropertyShow = () => {
    if (showProperty === true) {
      dispatch(dontShowPropertiesAdmin());
    } else {
      dispatch(showPropertiesAdmin());
      dispatch(dontShowDashboardAdmin());
    }
  };

  const showDashboard = useSelector(
    (state) => state.showDashBoardAdmin.showDashboard
  );

  console.log(showDashboard);
  const handleDashboard = () => {
    if (showDashboard === true) {
      dispatch(dontShowDashboardAdmin());
    } else {
      dispatch(showDashboardAdmin());
      dispatch(dontShowPropertiesAdmin());
    }
  };
  return (
    <div>
      <Sidebar style={{ height: props.height }}>
        <div
          className="d-flex mt-5 mb-5"
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar></Avatar>
          <h6 className="ms-4">{adminName ? adminName : "Admin Name"}</h6>
        </div>
        <hr />
        <Menu>
          <MenuItem onClick={() => handleDashboard()}> Dashboard</MenuItem>
          <MenuItem onClick={() => handlePropertyShow()}>
            {" "}
            Check Properties{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
