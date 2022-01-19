import React from "react";
import data from "./data.json";

import "./bestplayer.css";
import { Card, Row, Container, Col } from "react-bootstrap";

export default function Bestplayer() {
  return (
    <div className="bg">
      <h1 className="text-center">Best Player</h1>
      <Container fluid="md">
        <Row>
          <Col className="d-flex justify-content-center">
            {data.map((data, index) => {
              return (
                <Card style={{ width: "18rem" }} bg="dark" text="light">
                  <Card.Header className="text-center">{data.club}</Card.Header>
                  <Card.Img variant="top" className="imgs" src={data.phtLink} />
                  <Card.Body>
                    <Card.Title className="text-center"></Card.Title>
                    <Card.Text>
                      <Container>
                        <Row>
                          <Col>Goal {data.Goal}</Col>
                          <Col>Pas {data.Pas}</Col>
                        </Row>
                        <Row>
                          <Col>Goal+pas {data.GoaPa}</Col>
                          <Col>Average {data.Ave}</Col>
                        </Row>
                      </Container>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
