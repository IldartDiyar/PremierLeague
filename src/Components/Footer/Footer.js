import React from "react";
import { Card } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="text-center mt-4 mb-4">
      <div className="footer-content">
        <Card.Footer className="text-muted">
          <p>made with ❤ Ildartov Diyar.</p>
        </Card.Footer>
      </div>
    </div>
  );
}
