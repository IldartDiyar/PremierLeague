import classes from "./review.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import { Card } from "react-bootstrap";

export default function Cardos(props) {
  const createArray = (length) => [...Array(length)];
  function DrawStar({ stars }) {
    return (
      <div>
        {createArray(5).map((n, i) => (
          <FaStar key={i} color={(i<stars) ? "red" : "gray"} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <Card style={{ width: "18rem", height: "18rem" }}>
        <Card.Header as="h2">{props.name}</Card.Header>
        <Card.Body>
          <Card.Title>
            <DrawStar stars={props.stars} />
          </Card.Title>
          <Card.Text>{props.content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
