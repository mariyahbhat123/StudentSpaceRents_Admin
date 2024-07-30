import React, { useState, useEffect } from "react";
import AdminCardD from "../Components/AdminCard/AdminCardD";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Home.css";
import DashboardAdmin from "../Components/DashboardAdmin";
import { Link } from "react-router-dom";

export default function Home() {
  const [propertyData, setPropertyData] = useState([]);
  const showProperty = useSelector(
    (state) => state.showProperties.showProperty
  );
  const showDashboard = useSelector(
    (state) => state.showDashBoardAdmin.showDashboard
  );
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/propertyData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setPropertyData(response);
  };

  useEffect(() => {
    // const timerID = setInterval(() => );
    // return () => {
    //   clearInterval(timerID);
    // };
    loadData();
  }, [propertyData]);
  const adminAuth = localStorage.getItem("adminAuthToken");

  return (
    <div className="w-100">
      {adminAuth ? (
        <div
          className="d-flex"
          style={{ flexDirection: "row", height: "100vh" }}
        >
          <div className="">
            <AdminSidebar height="100vh" />
          </div>

          <div className="" style={{ width: "100%" }}>
            {" "}
            <div style={{ overflowY: "scroll", height: "100%" }}>
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  bottom: 0,
                  zIndex: "5",
                  backgroundColor: "#ff385c",
                }}
              >
                <AdminNavbar />
              </div>
              <div
                className="p-3"
                style={{
                  display: "flex",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  alignItems: "center",
                }}
              >
                {showProperty === true && showDashboard === false ? (
                  <h5>Check Property</h5>
                ) : (
                  <h5>Dashboard</h5>
                )}
              </div>
              {showProperty === true && showDashboard === false ? (
                <div className=" p-2  ">
                  {" "}
                  <Row xs={1} className="w-100">
                    {propertyData.map((item, idx) => {
                      return (
                        <>
                          <Col key={idx}>
                            <div
                              className="d-flex"
                              style={{ justifyContent: "center" }}
                            >
                              <AdminCardD
                                img0={item.img0}
                                img1={item.img1}
                                img2={item.img2}
                                img3={item.img3}
                                id={item._id}
                                district={item.district}
                                address={item.address}
                                propertyType={item.propertyType}
                                ownerName={item.ownerName}
                                ownerEmail={item.ownerEmail}
                              />
                            </div>{" "}
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </div>
              ) : (
                <DashboardAdmin />
              )}

              {/* {showProperty === false && showDashboard === true ? (
              <div>
                <DashboardAdmin />
              </div>
            ) : (
              ""
            )} */}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Please Login First</h3>
          <Link to="/">Go Back to Login Page</Link>
        </div>
      )}
    </div>
  );
}
