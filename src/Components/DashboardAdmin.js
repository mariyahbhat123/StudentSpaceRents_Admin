import React, { useEffect, useState } from "react";
import DashBoardCard from "./DashBoardCard";
import PersonIcon from "@mui/icons-material/Person";
import Person4Icon from "@mui/icons-material/Person4";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function DashboardAdmin() {
  const [tenant, setTenant] = useState([]);
  const [owner, setOwner] = useState([]);
  const [property, setPorperty] = useState([]);

  console.log(tenant.length);

  const tenantLength = tenant.length;
  const ownerLength = owner.length;
  const usersLength = tenantLength + ownerLength;
  const propertyLength = property.length;

  const handleTenantNumber = async () => {
    const response = await fetch("http://localhost:5000/api/usersLength", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data) {
      console.log("data not available");
    } else {
      setTenant(data.userData);
    }
  };

  const handleOwnersNumber = async () => {
    const response = await fetch("http://localhost:5000/api/ownersLength", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data) {
      console.log("data not available");
    } else {
      setOwner(data.ownerData);
    }
  };

  const handlePropertyNumber = async () => {
    const response = await fetch("http://localhost:5000/api/propertyData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data) {
      console.log("data not available");
    } else {
      setPorperty(data);
    }
  };

  useEffect(() => {
    handleTenantNumber();
    handleOwnersNumber();
    handlePropertyNumber();
  }, []);

  return (
    <div>
      <div
        className="d-flex mt-4"
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <div className="">
          <DashBoardCard
            icon={
              <PeopleAltIcon style={{ fontSize: "60px", color: "#ff385c" }} />
            }
            length={usersLength}
            name="Total Users"
          />
        </div>
        <div className="ms-4">
          <DashBoardCard
            icon={<PersonIcon style={{ fontSize: "60px", color: "#ff385c" }} />}
            length={tenantLength}
            name="Total Tenants"
          />
        </div>
        <div className="ms-4">
          <DashBoardCard
            icon={
              <Person4Icon style={{ fontSize: "60px", color: "#ff385c" }} />
            }
            length={ownerLength}
            name="Total Owners"
          />{" "}
        </div>
        <div className="ms-4">
          <DashBoardCard
            icon={
              <HomeWorkIcon style={{ fontSize: "60px", color: "#ff385c" }} />
            }
            length={propertyLength}
            name="Total Properties"
          />{" "}
        </div>
      </div>
    </div>
  );
}
