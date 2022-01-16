import React from "react";
import "./bestplayer.css";
import { Card, Row, Container, Col } from "react-bootstrap";

export default function Bestplayer() {
  return (
    <div className="bg">
      <Container className="align">
        <Row>
          <div className="text-center">
            <h1>Best Player</h1>
          </div>
          <Col>
            <Card style={{ width: "18rem" }}>
            <Card.Header className="text-center">Liverpool</Card.Header>
              <Card.Img variant="top" src=""/>
              <Card.Body>
                <Card.Title>Mohamed Salah</Card.Title>
                <Card.Text>Goal+pas:25 Goal:16 pas:9 Average:1.25</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Header className="text-center">West Ham</Card.Header>
              <Card.Body>
                <Card.Title>Michail Gregory Antonio</Card.Title>
                <Card.Text>Goal+pas:25 Goal:16 pas:9 Average:1.25</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Header className="text-center">Wotfard</Card.Header>
              <Card.Body>
                <Card.Title>Bonaventure Dennis</Card.Title>
                <Card.Text>Goal+pas:25 Goal:16 pas:9 Average:1.25</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
