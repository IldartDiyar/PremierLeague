import { FaStar } from "react-icons/fa";
import { Card } from "react-bootstrap";
import React from "react";
export default function Cardos(props) {
  const createArray = (length) => [...Array(length)];
  function DrawStar({ stars }) {
    return (
      <div>
        {createArray(5).map((n, i) => (
          <FaStar key={i} color={i < stars ? "red" : "gray"} />
        ))}
      </div>
    );
  }
  return (
    <div className="container">
      <Card style={{ width: "25rem" }}>
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
          <Card.Text>{props.content}</Card.Text>
          <DrawStar stars={props.stars} />
        </Card.Body>
      </Card>
    </div>
  );
}
