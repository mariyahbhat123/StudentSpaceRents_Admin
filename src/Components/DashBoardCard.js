import { width } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";

export default function DashBoardCard(props) {
  const icon = props.icon;
  const length = props.length;
  const name = props.name;
  return (
    <div className="mt-3">
      <Card
        style={{ width: "16rem", padding: "10px", border: "1px solid #ff385c" }}
      >
        <Card.Body>
          <div>{icon}</div>
          <Card.Text style={{ fontSize: "30px" }}>{length}</Card.Text>
          <Card.Text
            style={{ fontSize: "16px", fontWeight: "bold", color: "grey" }}
          >
            {name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
