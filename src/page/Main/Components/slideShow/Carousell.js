import React from "react";
import { Carousel, Row } from "react-bootstrap";
import styles from "./Carousell.module.css";

class Carousell extends React.Component {
  render() {
    return (
      <Row>
        <Carousel>
          <Carousel.Item style={{ height: "700px" }}>
            <img
              alt="Manchester City"
              src={require("./img/MC.jpg")}
              className="d-block w-100"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "700px" }}>
            <img
              alt="Cup"
              src={require("./img/Cup.jpg")}
              className="d-block w-100"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "700px" }}>
            <img
              alt="Champion"
              src={require("./img/champion.webp")}
              className="d-block w-100"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
    );
  }
}

export default Carousell;
