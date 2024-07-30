import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/AdminLogin.css";

export default function AdminLogin() {
  const [adminCredentials, setAdminCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: adminCredentials.email,
          password: adminCredentials.password,
        }),
      });
      const json = await response.json();
      if (!json) {
        return console.log("error");
      } else if (json.success) {
        localStorage.setItem("adminAuthToken", json.adminAuthToken);
        const adminDetail = json.adminDetail;

        const name = adminDetail.name;
        const email = adminDetail.email;
        localStorage.setItem("adminName", name);
        navigate("/Home");
        // dispatch(adminIsLoggedIn());
        // dispatch(toggleOff());

        console.log(name);
      } else {
        // dispatch(adminIsNotLogged());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setAdminCredentials({
      ...adminCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="fullContainer max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="container">
        <h2 className="font-arial">Admin Login</h2>
        <Form onSubmit={handleAdminLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={onChange}
              value={adminCredentials.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={adminCredentials.password}
              onChange={onChange}
            />
          </Form.Group>

          <Button className="btns" variant="" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
