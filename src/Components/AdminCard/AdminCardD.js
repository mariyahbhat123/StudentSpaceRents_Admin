import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  dontEditPropertyAdmin,
  editPropertyOfAdmin,
} from "../../Redux/Slices/editProperties";
import { useNavigate } from "react-router-dom";
import "../../Styles/AdminCard.css";

export default function AdminCardD(props) {
  const [editedProperty, setEditedProperty] = useState({
    editedDistrict: "",
    editedPropertyType: "",
    editedAddress: "",
  });
  const img0 = props.img0;
  const img1 = props.img1;
  const img2 = props.img2;
  const img3 = props.img3;
  const id = props.id;
  const { district, address, propertyType, ownerName, ownerEmail } = props;

  const handleDeleteProperty = async (id) => {
    await fetch(`http://localhost:5000/api/deleteProperty/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((err) => console.log(err));
  };

  const editProperty = useSelector(
    (state) => state.editProperties.editProperty
  );

  const dispatch = useDispatch();
  const editPropertyAdmin = () => {
    if (editProperty === false) {
      dispatch(editPropertyOfAdmin());
    } else {
      dispatch(dontEditPropertyAdmin());
    }
  };

  const navigate = useNavigate();
  const handleEditProperty = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/editProperties/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          district:
            editedProperty.editedDistrict !== ""
              ? editedProperty.editedDistrict
              : district,
          propertyType:
            editedProperty.editedPropertyType !== ""
              ? editedProperty.editedPropertyType
              : propertyType,
          address:
            editedProperty.editedAddress !== ""
              ? editedProperty.editedAddress
              : address,
        }),
      }
    );
    const json = await response.json();
    if (!json) {
      console.log("error");
    } else if (json.success) {
      navigate("/Home");
      dispatch(dontEditPropertyAdmin());
    }
  };

  const handleChange = (e) => {
    setEditedProperty({ ...editedProperty, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-5 ">
      <Card style={{ width: "55rem", border: "1px solid #ff385c" }}>
        <div className="d-flex">
          <div style={{ width: "20rem", overflow: "hidden" }}>
            <Carousel fade className="w-100 " interval={null}>
              <Carousel.Item className="carousel-item">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${img0}`}
                  alt=""
                  style={{ height: "250px" }}
                />
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${img1}`}
                  alt=""
                  style={{ height: "250px" }}
                />
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${img2}`}
                  alt=""
                  style={{ height: "250px" }}
                />
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${img3}`}
                  alt=""
                  style={{ height: "250px" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div style={{ width: "50%" }}>
            {editProperty === false ? (
              <Card.Body className="">
                <Card.Text>
                  <div
                    className="d-flex p-1 mt-1 "
                    style={{ justifyContent: "center" }}
                  >
                    <div className="me-5 ">
                      <h6>District:</h6>
                      <p onClick={editPropertyAdmin}> {district}</p>

                      <h6>Property Type:</h6>
                      <p onClick={editPropertyAdmin}>{propertyType}</p>
                      <h6>Address:</h6>
                      <p onClick={editPropertyAdmin}> {address}</p>
                    </div>
                    <div>
                      <h6>Owner Name:</h6>
                      <p>{ownerName}</p>
                      <h6>Owner Email:</h6>
                      <p> {ownerEmail}</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Body className="">
                <Card.Text>
                  <div
                    className="d-flex p-1 mt-1 "
                    style={{ justifyContent: "center" }}
                  >
                    <div className="me-5 ">
                      <h6>District:</h6>
                      <input
                        className="inputField"
                        type="text"
                        name="editedDistrict"
                        placeholder={district}
                        onChange={handleChange}
                      />

                      <h6>Property Type:</h6>
                      <input
                        className="inputField"
                        type="text"
                        name="editedPropertyType"
                        placeholder={propertyType}
                        onChange={handleChange}
                      />
                      <h6>Address:</h6>
                      <input
                        className="inputField"
                        type="text"
                        name="editedAddress"
                        placeholder={address}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h6>Owner Name:</h6>
                      <p>{ownerName}</p>
                      <h6>Owner Email:</h6>
                      <p> {ownerEmail}</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            )}
          </div>
          <div className=" d-flex" style={{ alignItems: "center" }}>
            <div className="">
              <Button
                variant="none"
                style={{
                  width: "100px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#ff385c",
                  textDecoration: "underline",
                }}
                onClick={() => handleDeleteProperty(id)}
              >
                Delete
              </Button>
              <Button
                variant="none"
                style={{
                  width: "100px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#ff385c",
                  textDecoration: "underline",
                }}
                onClick={() => handleEditProperty(id)}
              >
                Add
              </Button>
            </div>
            {/* <div className="mt-5">
              <Button style={{ width: "100px" }}>Update</Button>
            </div> */}
          </div>
        </div>{" "}
      </Card>
    </div>
  );
}
