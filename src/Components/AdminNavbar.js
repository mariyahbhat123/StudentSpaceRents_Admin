import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import SSR from "../Logo/SSRLOGO.png";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function AdminNavbar() {
  const navigate = useNavigate();
  const logOut = () => localStorage.removeItem("adminAuthToken");
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        style={{
          position: "sticky",
          fontWeight: "bold",
          boxShadow: "none",
        }}
      >
        <Container style={{ display: "flex" }}>
          <div>
            <Navbar.Brand href="#home" className="d-flex">
              <div className="me-1">
                <img
                  src={SSR}
                  alt=""
                  style={{ width: "20px" }}
                  className="mb-1"
                />
              </div>
              <div>StudentSpaceRents</div>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-2 " style={{}}>
                {/* <Link
              to="/Home"
              className="mt-2 "
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </Link> */}
                <Link
                  className="d-flex"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to="/"
                  onClick={logOut}
                >
                  Logout
                </Link>
                {/* <NavDropdown
                title="Dropdown"
                id="collapsible-nav-dropdown"
                className="ml-2"
              >
                <Link to="/termsAndCondition">
                  <NavDropdown.Item href="#action/3.1">
                    Terms & Conditions
                  </NavDropdown.Item>
                </Link>
                <Link to="/howToUse">
                  {" "}
                  <NavDropdown.Item href="#action/3.2">
                    How To Use
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>{" "}
          </div>{" "}
        </Container>
      </Navbar>{" "}
    </div>
  );
}
