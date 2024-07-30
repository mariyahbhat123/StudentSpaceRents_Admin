import React from "react";
import "../Styles/LandingPage.css";
import AdminLogin from "../Components/AdminLogin";
import SSR from "../Logo/SSRLOGO.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div
        className="containerr"
        //style={show ? { marginTop: "10%" } : { marginTop: "7%" }}
      >
        <div className="contain">
          <div className="contains">
            <div className="child1">
              <div className="">
                <div className="imageforSmall">
                  <img src={SSR} alt="" style={{ width: "30px" }} />
                </div>
                <AdminLogin />
              </div>
            </div>
            <div className="child2">
              <div className="cardChild2">
                <div className="LogoCard">
                  <img src={SSR} alt="Logo" style={{ width: "50px" }} />
                </div>
                <div className="SSR mt-2">
                  <h3>SSR..</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
