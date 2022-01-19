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
            <Card style={{ width: "18rem" }} bg="dark" text="light">
              <Card.Header className="text-center">Liverpool</Card.Header>
              <Card.Img
                variant="top"
                className="imgs"
                src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRjYYL6HNd6tdsEFOdh2jashcKmEVGYt7kEGxbgqN1E0kYsXCJvP-nuV7GLz0Q7"
              />
              <Card.Body>
                <Card.Title className="text-center"></Card.Title>
                <Card.Text>
                  <Container >
                    <Row >
                      <Col className="text-center">Goal 16</Col>
                      <Col className="text-center">Pas 9</Col>
                    </Row>
                    <Row >
                      <Col className="text-center">Goal&pas 25</Col>
                      <Col className="text-center">Average 1.2</Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
